import type { TopicMetadata } from '../types';

/**
 * Content loader service for fetching lesson metadata and content
 * Files are stored in public/content/ directory
 */

export class ContentLoader {
  /**
   * Load metadata for a specific topic
   */
  static async loadMetadata(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string
  ): Promise<TopicMetadata> {
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
   */
  static async loadContent(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string
  ): Promise<string> {
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
   */
  static async loadPracticeExam(
    grade: number,
    subject: string,
    quarter: number,
    topicName: string
  ): Promise<any> {
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
   * For Phase 1: Hardcoded list of available lessons
   * In future phases, this will scan the content directory
   */
  static async getAvailableLessons(): Promise<Array<{
    grade: number;
    subject: string;
    quarter: number;
    topicName: string;
    displayName: string;
  }>> {
    // Hardcoded for Phase 1 - all 4 lessons
    return [
      {
        grade: 3,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-addition',
        displayName: 'Simple Addition Basics',
      },
      {
        grade: 5,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-fractions-intro',
        displayName: 'Introduction to Fractions',
      },
      {
        grade: 8,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-algebra-intro',
        displayName: 'Introduction to Algebra',
      },
      {
        grade: 11,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-trigonometry-intro',
        displayName: 'Introduction to Trigonometry',
      },
    ];
  }
}
