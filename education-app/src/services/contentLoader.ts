import type { TopicMetadata } from '../types';
import { uploadedContentStore } from './uploadedContentStore';

/**
 * Content loader service for fetching lesson metadata and content
 * Files are stored in public/content/ directory or uploaded to IndexedDB
 */

export class ContentLoader {
  /**
   * Load metadata for a specific topic
   * Checks uploaded content first, then falls back to public folder
   */
  static async loadMetadata(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string
  ): Promise<TopicMetadata> {
    // Try uploaded content first
    const lessonId = `grade-${grade}-${subject}-q${quarter}-${topicName}`;
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'metadata.json');

    if (uploadedFile && uploadedFile.type === 'text') {
      return JSON.parse(uploadedFile.content as string);
    }

    // Fall back to public folder
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
    topicName: string
  ): Promise<string> {
    // Try uploaded content first
    const lessonId = `grade-${grade}-${subject}-q${quarter}-${topicName}`;
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'content.md');

    if (uploadedFile && uploadedFile.type === 'text') {
      return uploadedFile.content as string;
    }

    // Fall back to public folder
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
    topicName: string
  ): Promise<{ metadata: TopicMetadata; content: string }> {
    const [metadata, content] = await Promise.all([
      this.loadMetadata(grade, subject, quarter, topicName),
      this.loadContent(grade, subject, quarter, topicName),
    ]);

    return { metadata, content };
  }

  /**
   * Load practice exam for a specific topic
   * Checks uploaded content first, then falls back to public folder
   */
  static async loadPracticeExam(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string
  ): Promise<any> {
    // Try uploaded content first
    const lessonId = `grade-${grade}-${subject}-q${quarter}-${topicName}`;
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'practice.json');

    if (uploadedFile && uploadedFile.type === 'text') {
      return JSON.parse(uploadedFile.content as string);
    }

    // Fall back to public folder
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
    topicName: string
  ): Promise<any> {
    // Try uploaded content first
    const lessonId = `grade-${grade}-${subject}-q${quarter}-${topicName}`;
    const uploadedFile = await uploadedContentStore.getFile(lessonId, 'assessment.json');

    if (uploadedFile && uploadedFile.type === 'text') {
      return JSON.parse(uploadedFile.content as string);
    }

    // Fall back to public folder
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
    // Built-in lessons
    const builtInLessons = [
      // Grade 11 - Math
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
      // Grade 11 - Science
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
      // Grade 11 - English
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
      // Grade 8 - Math
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
      // Grade 8 - Science
      {
        grade: 8,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-matter-atoms',
        displayName: 'Matter & Atoms',
      },
      // Grade 8 - English
      {
        grade: 8,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-persuasive-essays',
        displayName: 'Persuasive Essays',
      },
      // Grade 5 - Math
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
      // Grade 5 - Science
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
      // Grade 5 - English
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

    // Get uploaded lessons
    const uploadedLessons = await uploadedContentStore.getAllLessons();
    const uploadedList = uploadedLessons.map(lesson => ({
      grade: lesson.grade,
      subject: lesson.subject,
      quarter: lesson.quarter,
      topicName: lesson.topicName,
      displayName: lesson.displayName,
    }));

    // Combine both lists
    return [...builtInLessons, ...uploadedList];
  }
}
