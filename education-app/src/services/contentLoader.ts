import type { TopicMetadata } from '../types';
import { buildLessonKey } from '../utils/lessonKey';
import { uploadedContentStore } from './uploadedContentStore';

interface ResolvedContent {
  content: string;
  objectUrls: string[];
}

const MARKDOWN_IMAGE_REGEX = /(!\[[^\]]*]\()([^)]+)(\))/g;
const HTML_IMAGE_SRC_REGEX = /(<img[^>]*\ssrc=["'])([^"']+)(["'][^>]*>)/gi;

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
    default:
      return 'application/octet-stream';
  }
}

/**
 * Content loader service for fetching lesson metadata and content
 * Files are stored in public/content/ directory or uploaded to IndexedDB
 */

export class ContentLoader {
  static revokeObjectUrls(objectUrls: string[]): void {
    objectUrls.forEach((url) => URL.revokeObjectURL(url));
  }

  private static async resolveUploadedContentAssets(
    lessonId: string,
    content: string,
  ): Promise<ResolvedContent> {
    const uploadedLesson = await uploadedContentStore.getLesson(lessonId);
    if (!uploadedLesson) {
      return { content, objectUrls: [] };
    }

    const assetPaths = new Set<string>();

    content.replace(MARKDOWN_IMAGE_REGEX, (_, __, rawPath) => {
      const token = getAssetPathToken(rawPath);
      if (token && !isExternalOrRootPath(token)) {
        assetPaths.add(token);
      }
      return '';
    });

    content.replace(HTML_IMAGE_SRC_REGEX, (_, __, rawPath) => {
      if (rawPath && !isExternalOrRootPath(rawPath)) {
        assetPaths.add(rawPath);
      }
      return '';
    });

    if (assetPaths.size === 0) {
      return { content, objectUrls: [] };
    }

    const pathToUrl = new Map<string, string>();
    const objectUrls: string[] = [];

    for (const relativePath of assetPaths) {
      let decodedPath = relativePath;
      try {
        decodedPath = decodeURIComponent(relativePath);
      } catch {
        decodedPath = relativePath;
      }
      const uploadedFile =
        (await uploadedContentStore.getFile(lessonId, relativePath)) ||
        (decodedPath !== relativePath
          ? await uploadedContentStore.getFile(lessonId, decodedPath)
          : null);

      if (!uploadedFile) {
        continue;
      }

      const mimeType = getMimeTypeFromPath(uploadedFile.path);
      const blob = uploadedFile.type === 'binary'
        ? new Blob([uploadedFile.content as ArrayBuffer], { type: mimeType })
        : new Blob([uploadedFile.content as string], { type: mimeType });

      const objectUrl = URL.createObjectURL(blob);
      objectUrls.push(objectUrl);
      pathToUrl.set(relativePath, objectUrl);
      pathToUrl.set(decodedPath, objectUrl);
    }

    let updatedContent = content;

    updatedContent = updatedContent.replace(MARKDOWN_IMAGE_REGEX, (full, prefix, rawPath, suffix) => {
      const token = getAssetPathToken(rawPath);
      const resolvedUrl = pathToUrl.get(token);
      if (!resolvedUrl) {
        return full;
      }

      return `${prefix}${replacePathToken(rawPath, resolvedUrl)}${suffix}`;
    });

    updatedContent = updatedContent.replace(HTML_IMAGE_SRC_REGEX, (full, prefix, rawPath, suffix) => {
      const resolvedUrl = pathToUrl.get(rawPath);
      if (!resolvedUrl) {
        return full;
      }

      return `${prefix}${resolvedUrl}${suffix}`;
    });

    return {
      content: updatedContent,
      objectUrls,
    };
  }

  /**
   * Load metadata for a specific topic
   * Checks uploaded content first, then falls back to public folder
   */
  static async loadMetadata(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string,
  ): Promise<TopicMetadata> {
    const lessonId = buildLessonKey({ grade, subject, quarter, topicName });
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'metadata.json');

    if (uploadedFile && uploadedFile.type === 'text') {
      return JSON.parse(uploadedFile.content as string);
    }

    const path = `/content/grade-${grade}/${subject}/quarter-${quarter}/${topicName}/metadata.json`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load metadata: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading metadata:', error);
      throw error;
    }
  }

  /**
   * Load markdown content for a specific topic
   * Checks uploaded content first, then falls back to public folder
   */
  static async loadContent(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string,
  ): Promise<string> {
    const lessonId = buildLessonKey({ grade, subject, quarter, topicName });
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'content.md');

    if (uploadedFile && uploadedFile.type === 'text') {
      return uploadedFile.content as string;
    }

    const path = `/content/grade-${grade}/${subject}/quarter-${quarter}/${topicName}/content.md`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load content: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading content:', error);
      throw error;
    }
  }

  /**
   * Load both metadata and content for a topic
   */
  static async loadLesson(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string,
  ): Promise<{ metadata: TopicMetadata; content: string; assetObjectUrls: string[] }> {
    const lessonId = buildLessonKey({ grade, subject, quarter, topicName });

    const [metadata, content] = await Promise.all([
      this.loadMetadata(grade, subject, quarter, topicName),
      this.loadContent(grade, subject, quarter, topicName),
    ]);

    const { content: resolvedContent, objectUrls } = await this.resolveUploadedContentAssets(
      lessonId,
      content,
    );

    return {
      metadata,
      content: resolvedContent,
      assetObjectUrls: objectUrls,
    };
  }

  /**
   * Load practice exam for a specific topic
   * Checks uploaded content first, then falls back to public folder
   */
  static async loadPracticeExam(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string,
  ): Promise<any> {
    const lessonId = buildLessonKey({ grade, subject, quarter, topicName });
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'practice.json');

    if (uploadedFile && uploadedFile.type === 'text') {
      return JSON.parse(uploadedFile.content as string);
    }

    const path = `/content/grade-${grade}/${subject}/quarter-${quarter}/${topicName}/practice.json`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load practice exam: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading practice exam:', error);
      throw error;
    }
  }

  /**
   * Load assessment exam for a specific topic
   * Checks uploaded content first, then falls back to public folder
   */
  static async loadAssessmentExam(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string,
  ): Promise<any> {
    const lessonId = buildLessonKey({ grade, subject, quarter, topicName });
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'assessment.json');

    if (uploadedFile && uploadedFile.type === 'text') {
      return JSON.parse(uploadedFile.content as string);
    }

    const path = `/content/grade-${grade}/${subject}/quarter-${quarter}/${topicName}/assessment.json`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load assessment exam: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading assessment exam:', error);
      throw error;
    }
  }

  /**
   * Get all available lessons (built-in + uploaded)
   */
  static async getAvailableLessons(): Promise<Array<{
    grade: number;
    subject: string;
    quarter: number;
    topicName: string;
    displayName: string;
  }>> {
    const builtInLessons = [
      {
        grade: 11,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-functions',
        displayName: 'Introduction to Functions',
      },
      {
        grade: 11,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-quadratic-equations',
        displayName: 'Quadratic Equations',
      },
      {
        grade: 11,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-trigonometry-intro',
        displayName: 'Trigonometry Introduction',
      },
      {
        grade: 11,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-motion-kinematics',
        displayName: 'Motion & Kinematics',
      },
      {
        grade: 11,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-genetics-heredity',
        displayName: 'Genetics & Heredity',
      },
      {
        grade: 11,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-argumentative-essays',
        displayName: 'Argumentative Essays',
      },
      {
        grade: 11,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-literary-analysis',
        displayName: 'Literary Analysis',
      },
      {
        grade: 8,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-algebra-intro',
        displayName: 'Algebra Introduction',
      },
      {
        grade: 8,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-linear-equations',
        displayName: 'Linear Equations',
      },
      {
        grade: 8,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-matter-atoms',
        displayName: 'Matter & Atoms',
      },
      {
        grade: 8,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-persuasive-essays',
        displayName: 'Persuasive Essays',
      },
      {
        grade: 5,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-fractions-intro',
        displayName: 'Introduction to Fractions',
      },
      {
        grade: 5,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-fractions-decimals',
        displayName: 'Fractions & Decimals',
      },
      {
        grade: 5,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-basic-geometry',
        displayName: 'Basic Geometry',
      },
      {
        grade: 5,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-plants-photosynthesis',
        displayName: 'Plants & Photosynthesis',
      },
      {
        grade: 5,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-energy-forces',
        displayName: 'Energy & Forces',
      },
      {
        grade: 5,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-story-elements',
        displayName: 'Story Elements',
      },
      {
        grade: 5,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-parts-of-speech',
        displayName: 'Parts of Speech',
      },
    ];

    const uploadedLessons = await uploadedContentStore.getAllLessons();
    const uploadedList = uploadedLessons.map((lesson) => ({
      grade: lesson.grade,
      subject: lesson.subject,
      quarter: lesson.quarter,
      topicName: lesson.topicName,
      displayName: lesson.displayName,
    }));

    return [...builtInLessons, ...uploadedList];
  }
}
