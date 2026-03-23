import type { InteractiveSpec } from '../types';
import { isSupportedInteractiveWidget } from '../components/rich-content/interactiveDefinitions';
import {
  extractInteractiveFences,
  extractRelativeHtmlAssetRefs,
  parseInteractiveEmbedConfig,
  resolveLessonRelativePath,
} from './richContentService';
import type { UploadedFile } from './uploadedContentStore';

interface ValidationContext {
  fileMap: Map<string, UploadedFile>;
  parsedSpecCache: Map<string, InteractiveSpec>;
}

function getTextFile(fileMap: Map<string, UploadedFile>, path: string): string | null {
  const file = fileMap.get(path);
  if (!file || file.type !== 'text') {
    return null;
  }

  return file.content as string;
}

function ensureInteractiveSpecShape(spec: InteractiveSpec, path: string): void {
  if (!spec.id || typeof spec.id !== 'string') {
    throw new Error(`Interactive spec "${path}" must include an "id".`);
  }

  if (!spec.version || typeof spec.version !== 'string') {
    throw new Error(`Interactive spec "${path}" must include a "version".`);
  }

  if (spec.runtime !== 'native' && spec.runtime !== 'sandbox-local') {
    throw new Error(`Interactive spec "${path}" has an unsupported runtime "${String(spec.runtime)}".`);
  }

  if (!isSupportedInteractiveWidget(spec.widget)) {
    throw new Error(`Interactive spec "${path}" uses unsupported widget "${String(spec.widget)}".`);
  }

  if (!spec.title || typeof spec.title !== 'string') {
    throw new Error(`Interactive spec "${path}" must include a "title".`);
  }

  if (!spec.fallback || typeof spec.fallback.markdown !== 'string' || !spec.fallback.markdown.trim()) {
    throw new Error(`Interactive spec "${path}" must include fallback.markdown.`);
  }

  if (!spec.props || typeof spec.props !== 'object' || Array.isArray(spec.props)) {
    throw new Error(`Interactive spec "${path}" must include a props object.`);
  }

  if (spec.runtime === 'sandbox-local') {
    const htmlPath = (spec.props as Record<string, unknown>).htmlPath;
    if (spec.widget !== 'sandbox-host') {
      throw new Error(`Sandbox interactive spec "${path}" must use widget "sandbox-host".`);
    }

    if (typeof htmlPath !== 'string' || !htmlPath.trim()) {
      throw new Error(`Sandbox interactive spec "${path}" must include props.htmlPath.`);
    }
  }
}

function validateMiniAppAssets(specPath: string, spec: InteractiveSpec, context: ValidationContext): void {
  if (spec.runtime !== 'sandbox-local') {
    return;
  }

  const htmlPath = resolveLessonRelativePath(String((spec.props as Record<string, unknown>).htmlPath), specPath);
  const html = getTextFile(context.fileMap, htmlPath);

  if (!html) {
    throw new Error(`Interactive spec "${specPath}" references missing mini-app HTML "${htmlPath}".`);
  }

  const assetRefs = extractRelativeHtmlAssetRefs(html);

  assetRefs.forEach((assetRef) => {
    const resolvedAsset = resolveLessonRelativePath(assetRef, htmlPath);
    if (!context.fileMap.has(resolvedAsset)) {
      throw new Error(`Mini-app "${htmlPath}" references missing asset "${resolvedAsset}".`);
    }
  });
}

function getInteractiveSpec(path: string, context: ValidationContext): InteractiveSpec {
  const cached = context.parsedSpecCache.get(path);
  if (cached) {
    return cached;
  }

  const content = getTextFile(context.fileMap, path);
  if (!content) {
    throw new Error(`Interactive spec file not found: ${path}`);
  }

  let spec: InteractiveSpec;
  try {
    spec = JSON.parse(content) as InteractiveSpec;
  } catch (error) {
    throw new Error(`Failed to parse interactive spec "${path}": ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  ensureInteractiveSpecShape(spec, path);
  validateMiniAppAssets(path, spec, context);
  context.parsedSpecCache.set(path, spec);
  return spec;
}

function validateInteractiveEmbedsInMarkdown(
  markdown: string,
  sourcePath: string,
  context: ValidationContext,
): void {
  const fences = extractInteractiveFences(markdown);

  fences.forEach((fence) => {
    let config;
    try {
      config = parseInteractiveEmbedConfig(fence.jsonText);
    } catch (error) {
      throw new Error(
        `Invalid interactive shortcode in "${sourcePath}" near character ${fence.index}: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`,
      );
    }

    const resolvedSpecPath = resolveLessonRelativePath(config.spec, sourcePath);
    getInteractiveSpec(resolvedSpecPath, context);
  });
}

function validateInteractiveEmbedsInExamJson(
  filePath: string,
  content: string,
  context: ValidationContext,
): void {
  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to parse "${filePath}": ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  const visit = (value: unknown): void => {
    if (typeof value === 'string') {
      validateInteractiveEmbedsInMarkdown(value, filePath, context);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }

    if (value && typeof value === 'object') {
      Object.values(value).forEach(visit);
    }
  };

  visit(parsed);
}

export function validateUploadedLessonContent(files: UploadedFile[]): void {
  const fileMap = new Map(files.map((file) => [file.path, file]));
  const context: ValidationContext = {
    fileMap,
    parsedSpecCache: new Map<string, InteractiveSpec>(),
  };

  const content = getTextFile(fileMap, 'content.md');
  if (content) {
    validateInteractiveEmbedsInMarkdown(content, 'content.md', context);
  }

  const practice = getTextFile(fileMap, 'practice.json');
  if (practice) {
    validateInteractiveEmbedsInExamJson('practice.json', practice, context);
  }

  const assessment = getTextFile(fileMap, 'assessment.json');
  if (assessment) {
    validateInteractiveEmbedsInExamJson('assessment.json', assessment, context);
  }
}
