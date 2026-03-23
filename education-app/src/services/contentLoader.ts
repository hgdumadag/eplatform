import type { LessonExamData, TopicMetadata } from '../types';
import { buildLessonKey } from '../utils/lessonKey';
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
  ): Promise<{ metadata: TopicMetadata; content: string }> {
    const [metadata, content] = await Promise.all([
      this.loadMetadata(grade, subject, quarter, topicName),
      this.loadContent(grade, subject, quarter, topicName),
    ]);

    return {
      metadata,
      content,
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
  ): Promise<LessonExamData> {
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
  ): Promise<LessonExamData> {
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
        grade: 12,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-evaluating-algebraic-expressions',
        displayName: 'Evaluating Algebraic Expressions',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-linear-quadratic-equations',
        displayName: 'Linear and Quadratic Equations',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-logarithmic-equations',
        displayName: 'Logarithmic Equations',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 2,
        topicName: 'topic-coordinate-geometry',
        displayName: 'Coordinate Geometry',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 2,
        topicName: 'topic-functions-and-graphing',
        displayName: 'Functions and Graphing',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 2,
        topicName: 'topic-inequalities',
        displayName: 'Inequalities',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-operations-and-integers',
        displayName: 'Operations and Integers',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-percentages-ratios-statistics',
        displayName: 'Percentages, Ratios, and Statistics',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-sequences-and-series',
        displayName: 'Sequences and Series',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-plane-solid-geometry',
        displayName: 'Plane and Solid Geometry',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-trigonometric-identities',
        displayName: 'Trigonometric Identities',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-atomic-structure-periodic-table',
        displayName: 'Atomic Structure and the Periodic Table',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-chemical-reactions-stoichiometry',
        displayName: 'Chemical Reactions and Stoichiometry',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 1,
        topicName: 'topic-matter-solutions-mixtures',
        displayName: 'Matter, Solutions, and Mixtures',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 2,
        topicName: 'topic-cellular-biology',
        displayName: 'Cellular Biology',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 2,
        topicName: 'topic-genetics-and-evolution',
        displayName: 'Genetics and Evolution',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 2,
        topicName: 'topic-organisms-and-ecosystems',
        displayName: 'Organisms and Ecosystems',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 3,
        topicName: 'topic-energy-waves-optics',
        displayName: 'Energy, Waves, and Optics',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 3,
        topicName: 'topic-mechanics-forces-motion',
        displayName: 'Mechanics: Forces and Motion',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 4,
        topicName: 'topic-geology-rock-cycle',
        displayName: 'Geology and the Rock Cycle',
      },
      {
        grade: 12,
        subject: 'science',
        quarter: 4,
        topicName: 'topic-meteorology-astronomy',
        displayName: 'Meteorology and Astronomy',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-narrative-and-fiction',
        displayName: 'Narrative and Fiction Analysis',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 1,
        topicName: 'topic-poetry-and-folklore',
        displayName: 'Poetry and Folklore',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 2,
        topicName: 'topic-historical-biographical-texts',
        displayName: 'Historical and Biographical Texts',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 2,
        topicName: 'topic-scientific-environmental-articles',
        displayName: 'Scientific and Environmental Articles',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 3,
        topicName: 'topic-political-sociological-texts',
        displayName: 'Political and Sociological Texts',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 3,
        topicName: 'topic-textual-evidence-and-inference',
        displayName: 'Textual Evidence and Inference',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 4,
        topicName: 'topic-visual-graphic-literacy',
        displayName: 'Visual and Graphic Literacy',
      },
      {
        grade: 12,
        subject: 'english',
        quarter: 4,
        topicName: 'topic-vocabulary-in-context',
        displayName: 'Vocabulary in Context',
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
