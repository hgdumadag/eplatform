import type {
  InteractiveEmbedConfig,
  InteractiveMode,
  InteractiveSpec,
} from '../types';
import { parseLessonKey } from '../utils/lessonKey';
import { uploadedContentStore } from './uploadedContentStore';

export interface ResolvedRichContent {
  content: string;
  objectUrls: string[];
}

export interface ResolvedLessonAsset {
  url: string;
  objectUrls: string[];
  resolvedPath: string;
}

export interface LoadedInteractiveSpec {
  spec: InteractiveSpec;
  resolvedPath: string;
}

export interface LoadedMiniAppSource {
  src?: string;
  srcDoc?: string;
  objectUrls: string[];
  resolvedPath: string;
}

export interface ExtractedInteractiveFence {
  jsonText: string;
  index: number;
}

type LessonSource = 'builtin' | 'uploaded';

const MARKDOWN_IMAGE_REGEX = /(!\[[^\]]*]\()([^)]+)(\))/g;
const HTML_ASSET_REGEX = /(<(?:img|source|video|audio|script|iframe|link)[^>]*\s(?:src|href)=["'])([^"']+)(["'][^>]*>)/gi;
const HTML_ASSET_REFERENCE_REGEX = /<(?:img|source|video|audio|script|iframe|link)\b[^>]*(?:src|href)=["']([^"']+)["']/gi;
const INTERACTIVE_FENCE_REGEX = /```interactive\s*([\s\S]*?)```/g;

const lessonSourceCache = new Map<string, Promise<LessonSource>>();

function isExternalOrRootPath(path: string): boolean {
  return (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('/') ||
    path.startsWith('#')
  );
}

function splitPathSuffix(path: string): { pathPart: string; suffix: string } {
  const match = path.match(/^([^?#]*)([?#].*)?$/);
  return {
    pathPart: match?.[1] || path,
    suffix: match?.[2] || '',
  };
}

function normalizeRelativePath(path: string): string {
  const parts = path.split('/');
  const normalized: string[] = [];

  parts.forEach((part) => {
    if (!part || part === '.') {
      return;
    }

    if (part === '..') {
      normalized.pop();
      return;
    }

    normalized.push(part);
  });

  return normalized.join('/');
}

function getBaseDirectory(basePath = 'content.md'): string {
  const sanitized = basePath.replace(/\\/g, '/');
  const lastSlash = sanitized.lastIndexOf('/');
  if (lastSlash === -1) {
    return '';
  }
  return sanitized.slice(0, lastSlash + 1);
}

function encodePathSegments(path: string): string {
  return path
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function getAssetPathToken(rawValue: string): string {
  const trimmed = rawValue.trim().replace(/^<|>$/g, '');
  const token = trimmed.split(/\s+/)[0] || '';
  return token.replace(/^['"]|['"]$/g, '');
}

function replacePathToken(rawValue: string, replacement: string): string {
  const token = getAssetPathToken(rawValue);
  return rawValue.replace(token, replacement);
}

function getMimeTypeFromPath(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();

  switch (ext) {
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'gif':
      return 'image/gif';
    case 'webp':
      return 'image/webp';
    case 'svg':
      return 'image/svg+xml';
    case 'pdf':
      return 'application/pdf';
    case 'mp4':
      return 'video/mp4';
    case 'webm':
      return 'video/webm';
    case 'css':
      return 'text/css';
    case 'js':
      return 'text/javascript';
    case 'json':
      return 'application/json';
    case 'html':
      return 'text/html';
    default:
      return 'application/octet-stream';
  }
}

function buildBuiltinAssetUrl(lessonKey: string, resolvedPath: string): string {
  const lesson = parseLessonKey(lessonKey);
  if (!lesson) {
    return resolvedPath;
  }

  const { pathPart, suffix } = splitPathSuffix(resolvedPath);
  const encodedPath = encodePathSegments(pathPart);

  return `/content/grade-${lesson.grade}/${lesson.subject}/quarter-${lesson.quarter}/${lesson.topicName}/${encodedPath}${suffix}`;
}

async function getLessonSource(lessonKey: string): Promise<LessonSource> {
  const cached = lessonSourceCache.get(lessonKey);
  if (cached) {
    return cached;
  }

  const sourcePromise: Promise<LessonSource> = uploadedContentStore
    .getFile(lessonKey, 'metadata.json')
    .then((file): LessonSource => (file ? 'uploaded' : 'builtin'))
    .catch((): LessonSource => 'builtin');

  lessonSourceCache.set(lessonKey, sourcePromise);
  return sourcePromise;
}

async function loadUploadedTextFile(lessonKey: string, resolvedPath: string): Promise<string | null> {
  const file = await uploadedContentStore.getFile(lessonKey, resolvedPath);
  if (!file || file.type !== 'text') {
    return null;
  }

  return file.content as string;
}

function createUploadedObjectUrl(path: string, content: string | ArrayBuffer): string {
  const mimeType = getMimeTypeFromPath(path);
  const blob = typeof content === 'string'
    ? new Blob([content], { type: mimeType })
    : new Blob([content], { type: mimeType });

  return URL.createObjectURL(blob);
}

export function revokeObjectUrls(objectUrls: string[]): void {
  objectUrls.forEach((url) => URL.revokeObjectURL(url));
}

export function resolveLessonRelativePath(path: string, basePath = 'content.md'): string {
  if (isExternalOrRootPath(path)) {
    return path;
  }

  const { pathPart, suffix } = splitPathSuffix(path);
  const normalized = normalizeRelativePath(`${getBaseDirectory(basePath)}${pathPart}`);
  return `${normalized}${suffix}`;
}

export function extractInteractiveFences(markdown: string): ExtractedInteractiveFence[] {
  const matches: ExtractedInteractiveFence[] = [];
  let match = INTERACTIVE_FENCE_REGEX.exec(markdown);

  while (match) {
    matches.push({
      jsonText: match[1].trim(),
      index: match.index,
    });
    match = INTERACTIVE_FENCE_REGEX.exec(markdown);
  }

  INTERACTIVE_FENCE_REGEX.lastIndex = 0;
  return matches;
}

export function parseInteractiveEmbedConfig(jsonText: string): InteractiveEmbedConfig {
  const parsed = JSON.parse(jsonText) as InteractiveEmbedConfig;

  if (!parsed || typeof parsed !== 'object' || typeof parsed.spec !== 'string' || !parsed.spec.trim()) {
    throw new Error('Interactive embeds must include a non-empty "spec" path.');
  }

  if (
    parsed.mode !== undefined &&
    parsed.mode !== 'auto' &&
    parsed.mode !== 'interactive' &&
    parsed.mode !== 'readonly' &&
    parsed.mode !== 'fallback'
  ) {
    throw new Error('Interactive embed "mode" must be one of auto, interactive, readonly, or fallback.');
  }

  if (parsed.height !== undefined && (typeof parsed.height !== 'number' || Number.isNaN(parsed.height))) {
    throw new Error('Interactive embed "height" must be a number when provided.');
  }

  if (parsed.title !== undefined && typeof parsed.title !== 'string') {
    throw new Error('Interactive embed "title" must be a string when provided.');
  }

  return parsed;
}

export function resolveInteractionMode(
  globalMode: InteractiveMode,
  embedMode: InteractiveEmbedConfig['mode'],
): InteractiveMode {
  if (globalMode === 'fallback') {
    return 'fallback';
  }

  if (globalMode === 'readonly') {
    return embedMode === 'fallback' ? 'fallback' : 'readonly';
  }

  if (!embedMode || embedMode === 'auto') {
    return 'interactive';
  }

  return embedMode;
}

export async function resolveLessonAssetUrl(
  lessonKey: string,
  assetPath: string,
  basePath = 'content.md',
): Promise<ResolvedLessonAsset> {
  if (isExternalOrRootPath(assetPath)) {
    return {
      url: assetPath,
      objectUrls: [],
      resolvedPath: assetPath,
    };
  }

  const resolvedPath = resolveLessonRelativePath(assetPath, basePath);
  const source = await getLessonSource(lessonKey);

  if (source === 'uploaded') {
    const file = await uploadedContentStore.getFile(lessonKey, resolvedPath);
    if (file) {
      const objectUrl = createUploadedObjectUrl(resolvedPath, file.content);
      return {
        url: objectUrl,
        objectUrls: [objectUrl],
        resolvedPath,
      };
    }
  }

  return {
    url: buildBuiltinAssetUrl(lessonKey, resolvedPath),
    objectUrls: [],
    resolvedPath,
  };
}

export async function resolveRichContentText(
  lessonKey: string,
  content: string,
  basePath = 'content.md',
): Promise<ResolvedRichContent> {
  const assetPaths = new Set<string>();

  content.replace(MARKDOWN_IMAGE_REGEX, (_, __, rawPath) => {
    const token = getAssetPathToken(rawPath);
    if (token && !isExternalOrRootPath(token)) {
      assetPaths.add(token);
    }
    return '';
  });

  content.replace(HTML_ASSET_REGEX, (_, __, rawPath) => {
    const token = getAssetPathToken(rawPath);
    if (token && !isExternalOrRootPath(token)) {
      assetPaths.add(token);
    }
    return '';
  });

  if (assetPaths.size === 0) {
    return { content, objectUrls: [] };
  }

  const objectUrls: string[] = [];
  const pathMap = new Map<string, string>();

  for (const path of assetPaths) {
    const resolved = await resolveLessonAssetUrl(lessonKey, path, basePath);
    pathMap.set(path, resolved.url);
    objectUrls.push(...resolved.objectUrls);
  }

  let updatedContent = content;

  updatedContent = updatedContent.replace(MARKDOWN_IMAGE_REGEX, (full, prefix, rawPath, suffix) => {
    const token = getAssetPathToken(rawPath);
    const resolvedUrl = pathMap.get(token);
    if (!resolvedUrl) {
      return full;
    }

    return `${prefix}${replacePathToken(rawPath, resolvedUrl)}${suffix}`;
  });

  updatedContent = updatedContent.replace(HTML_ASSET_REGEX, (full, prefix, rawPath, suffix) => {
    const token = getAssetPathToken(rawPath);
    const resolvedUrl = pathMap.get(token);
    if (!resolvedUrl) {
      return full;
    }

    return `${prefix}${replacePathToken(rawPath, resolvedUrl)}${suffix}`;
  });

  return {
    content: updatedContent,
    objectUrls,
  };
}

export async function loadLessonTextFile(
  lessonKey: string,
  filePath: string,
  basePath = 'content.md',
): Promise<{ content: string; resolvedPath: string }> {
  const resolvedPath = resolveLessonRelativePath(filePath, basePath);
  const source = await getLessonSource(lessonKey);

  if (source === 'uploaded') {
    const uploadedContent = await loadUploadedTextFile(lessonKey, resolvedPath);
    if (uploadedContent !== null) {
      return {
        content: uploadedContent,
        resolvedPath,
      };
    }
  }

  const response = await fetch(buildBuiltinAssetUrl(lessonKey, resolvedPath));
  if (!response.ok) {
    throw new Error(`Failed to load file: ${resolvedPath}`);
  }

  return {
    content: await response.text(),
    resolvedPath,
  };
}

export async function loadInteractiveSpecFile(
  lessonKey: string,
  specPath: string,
  basePath = 'content.md',
): Promise<LoadedInteractiveSpec> {
  const { content, resolvedPath } = await loadLessonTextFile(lessonKey, specPath, basePath);
  const spec = JSON.parse(content) as InteractiveSpec;

  return {
    spec,
    resolvedPath,
  };
}

export function extractRelativeHtmlAssetRefs(html: string): string[] {
  const assetPaths = new Set<string>();
  let match = HTML_ASSET_REFERENCE_REGEX.exec(html);

  while (match) {
    const token = getAssetPathToken(match[1]);
    if (token && !isExternalOrRootPath(token)) {
      assetPaths.add(token);
    }

    match = HTML_ASSET_REFERENCE_REGEX.exec(html);
  }

  HTML_ASSET_REFERENCE_REGEX.lastIndex = 0;
  return Array.from(assetPaths);
}

export async function loadMiniAppSource(
  lessonKey: string,
  htmlPath: string,
  basePath: string,
): Promise<LoadedMiniAppSource> {
  const resolvedPath = resolveLessonRelativePath(htmlPath, basePath);
  const source = await getLessonSource(lessonKey);

  if (source === 'uploaded') {
    const htmlFile = await uploadedContentStore.getFile(lessonKey, resolvedPath);
    if (!htmlFile || htmlFile.type !== 'text') {
      throw new Error(`Mini-app HTML file not found: ${resolvedPath}`);
    }

    const html = htmlFile.content as string;
    const assetRefs = extractRelativeHtmlAssetRefs(html);
    const objectUrls: string[] = [];
    const assetMap = new Map<string, string>();

    for (const ref of assetRefs) {
      const resolvedAsset = await resolveLessonAssetUrl(lessonKey, ref, resolvedPath);
      assetMap.set(ref, resolvedAsset.url);
      objectUrls.push(...resolvedAsset.objectUrls);
    }

    const srcDoc = html.replace(HTML_ASSET_REGEX, (full, prefix, rawPath, suffix) => {
      const token = getAssetPathToken(rawPath);
      const resolvedUrl = assetMap.get(token);
      if (!resolvedUrl) {
        return full;
      }

      return `${prefix}${replacePathToken(rawPath, resolvedUrl)}${suffix}`;
    });

    return {
      srcDoc,
      objectUrls,
      resolvedPath,
    };
  }

  return {
    src: buildBuiltinAssetUrl(lessonKey, resolvedPath),
    objectUrls: [],
    resolvedPath,
  };
}
