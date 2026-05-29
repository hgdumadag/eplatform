import type { LessonExamData, TopicMetadata } from '../types';
import { buildLessonKey } from '../utils/lessonKey';
import { uploadedContentStore } from './uploadedContentStore';

type RawExamQuestion = {
  id?: string | number;
  type?: string;
  question?: string;
  options?: string[];
  correctAnswer?: string | number;
  answer?: string | number;
  acceptableAnswers?: string[];
  explanation?: string;
  points?: number;
};

type RawLessonExamData = {
  examId?: string;
  examType?: string;
  title?: string;
  description?: string;
  instructions?: string;
  passingScore?: number;
  timeLimit?: number;
  estimatedTime?: number;
  totalQuestions?: number;
  totalPoints?: number;
  questions?: RawExamQuestion[];
};

function normalizeQuestionType(questionType: unknown): LessonExamData['questions'][number]['type'] {
  if (questionType === 'fill-in-blank') {
    return 'fill-in';
  }

  if (
    questionType === 'multiple-choice' ||
    questionType === 'true-false' ||
    questionType === 'fill-in' ||
    questionType === 'short-answer'
  ) {
    return questionType;
  }

  throw new Error(`Unsupported question type "${String(questionType)}".`);
}

function normalizeCorrectAnswer(question: RawExamQuestion, questionId: string): string | number {
  if (question.correctAnswer !== undefined) {
    return question.correctAnswer;
  }

  if (question.answer !== undefined) {
    return question.answer;
  }

  if (Array.isArray(question.acceptableAnswers) && question.acceptableAnswers.length > 0) {
    return question.acceptableAnswers.join(' or ');
  }

  throw new Error(`Question "${questionId}" is missing a correct answer.`);
}

function normalizeExamData(
  examData: unknown,
  lessonKey: string,
  examType: LessonExamData['examType'],
): LessonExamData {
  if (!examData || typeof examData !== 'object') {
    throw new Error('Exam data must be a JSON object.');
  }

  const rawExam = examData as RawLessonExamData;
  if (!Array.isArray(rawExam.questions)) {
    throw new Error('Exam data must include a questions array.');
  }

  const questions = rawExam.questions.map((question, index) => {
    if (!question || typeof question !== 'object' || Array.isArray(question)) {
      throw new Error(`Question ${index + 1} is malformed.`);
    }

    const questionId = String(question.id ?? `q${index + 1}`);
    const questionText = typeof question.question === 'string' ? question.question : '';
    if (!questionText) {
      throw new Error(`Question "${questionId}" is missing a question prompt.`);
    }

    const points = typeof question.points === 'number' ? question.points : NaN;
    if (Number.isNaN(points)) {
      throw new Error(`Question "${questionId}" is missing points.`);
    }

    return {
      id: questionId,
      type: normalizeQuestionType(question.type),
      question: questionText,
      options: question.options,
      correctAnswer: normalizeCorrectAnswer(question, questionId),
      explanation: question.explanation,
      points,
    };
  });

  return {
    examId: `${lessonKey}-${examType}`,
    examType,
    title: typeof rawExam.title === 'string' && rawExam.title.trim() ? rawExam.title : `${lessonKey} ${examType} exam`,
    description:
      typeof rawExam.description === 'string'
        ? rawExam.description
        : typeof rawExam.instructions === 'string'
          ? rawExam.instructions
          : '',
    passingScore: typeof rawExam.passingScore === 'number' ? rawExam.passingScore : 0,
    timeLimit:
      typeof rawExam.timeLimit === 'number'
        ? rawExam.timeLimit
        : typeof rawExam.estimatedTime === 'number'
          ? rawExam.estimatedTime
          : undefined,
    questions,
  };
}

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
      return normalizeExamData(JSON.parse(uploadedFile.content as string), lessonId, 'practice');
    }

    const path = `/content/grade-${grade}/${subject}/quarter-${quarter}/${topicName}/practice.json`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load practice exam: ${response.statusText}`);
      }
      return normalizeExamData(await response.json(), lessonId, 'practice');
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
      return normalizeExamData(JSON.parse(uploadedFile.content as string), lessonId, 'assessment');
    }

    const path = `/content/grade-${grade}/${subject}/quarter-${quarter}/${topicName}/assessment.json`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load assessment exam: ${response.statusText}`);
      }
      return normalizeExamData(await response.json(), lessonId, 'assessment');
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
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-oblique-triangles',
        displayName: 'Oblique Triangles',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-law-of-sines',
        displayName: 'Law of Sines',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-ambiguous-ssa-case',
        displayName: 'Ambiguous SSA Case',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-law-of-cosines-for-sides',
        displayName: 'Law of Cosines for Sides',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-law-of-cosines-for-angles',
        displayName: 'Law of Cosines for Angles',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-bearings-and-oblique-triangles',
        displayName: 'Bearings and Oblique Triangles',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-coordinate-position',
        displayName: 'Geometry - Lesson 1: Coordinate Position',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-translations-with-coordinates',
        displayName: 'Geometry - Lesson 2: Translations with Coordinates',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-reflections-and-rotations-with-coordinates',
        displayName: 'Geometry - Lesson 3: Reflections and Rotations with Coordinates',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-quarter-navigation-transformation-task',
        displayName: 'Geometry - Lesson 4: Quarter Navigation and Transformation Task',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-circle-equation-basics',
        displayName: 'Geometry - Lesson 1: Circle Equation Basics',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-graphing-from-center-radius-form',
        displayName: 'Geometry - Lesson 2: Graphing from Center-Radius Form',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-general-form-of-a-circle',
        displayName: 'Geometry - Lesson 3: General Form of a Circle',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-completing-the-square-circle-equations',
        displayName: 'Geometry - Lesson 4: Completing the Square',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-center-radius-to-general-form',
        displayName: 'Geometry - Lesson 5: Center-Radius to General Form',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-finding-equations-from-center-and-radius',
        displayName: 'Geometry - Lesson 6: Finding Equations from Center and Radius',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-equation-from-diameter-endpoints',
        displayName: 'Geometry - Lesson 7: Equation from Diameter Endpoints',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-equation-from-conditions',
        displayName: 'Geometry - Lesson 8: Equation from Conditions',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometric-figures-on-coordinate-plane',
        displayName: 'Geometry - Lesson 9: Geometric Figures on the Coordinate Plane',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-quarter-circle-graphing-task',
        displayName: 'Geometry - Lesson 10: Quarter Circle Graphing Task',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-circle-angle-vocabulary',
        displayName: 'Geometry - Lesson 1: Circle Angle Vocabulary',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-central-and-inscribed-angles',
        displayName: 'Geometry - Lesson 2: Central and Inscribed Angles',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-angles-from-intersecting-chords',
        displayName: 'Geometry - Lesson 3: Angles from Intersecting Chords',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-external-secant-and-tangent-angles',
        displayName: 'Geometry - Lesson 4: External Secant and Tangent Angles',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-chord-length-relationships',
        displayName: 'Geometry - Lesson 5: Chord Length Relationships',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-secant-and-tangent-lengths',
        displayName: 'Geometry - Lesson 6: Secant and Tangent Lengths',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-sectors-of-a-circle',
        displayName: 'Geometry - Lesson 7: Sectors of a Circle',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-segments-of-a-circle',
        displayName: 'Geometry - Lesson 8: Segments of a Circle',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-shaded-region-problems',
        displayName: 'Geometry - Lesson 9: Shaded Region Problems',
      },
      {
        grade: 10,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-quarter-circle-geometry-task',
        displayName: 'Geometry - Lesson 10: Quarter Circle Geometry Task',
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
        topicName: 'topic-college-review-week-1-ratios-percents',
        displayName: 'College Review Week 1: Ratios, Fractions, and Percents',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-2-percent-change-mixtures',
        displayName: 'College Review Week 2: Percent Change, Discounts, and Mixtures',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-3-algebra-modeling',
        displayName: 'College Review Week 3: Algebra Translation and Modeling',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-4-rates-work-motion',
        displayName: 'College Review Week 4: Rates, Work, and Motion',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-5-geometry-foundations',
        displayName: 'College Review Week 5: Geometry Foundations',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-6-circles-similarity-coordinate',
        displayName: 'College Review Week 6: Circles, Similarity, and Coordinate Geometry',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-7-functions-radicals-logs',
        displayName: 'College Review Week 7: Functions, Radicals, and Logarithms',
      },
      {
        grade: 12,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-college-review-week-8-mixed-review-simulation',
        displayName: 'College Review Week 8: Mixed Review and Simulation',
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
        grade: 9,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-geometry-lesson-1',
        displayName: 'Geometry - Lesson 1',
      },
      {
        grade: 9,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-geometry-lesson-2',
        displayName: 'Geometry - Lesson 2',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 1,
        topicName: 'topic-geometry-lesson-1',
        displayName: 'Geometry - Lesson 1',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-1',
        displayName: 'Geometry - Lesson 1',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-2',
        displayName: 'Geometry - Lesson 2',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-3',
        displayName: 'Geometry - Lesson 3',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-4',
        displayName: 'Geometry - Lesson 4',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-5',
        displayName: 'Geometry - Lesson 5',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-6',
        displayName: 'Geometry - Lesson 6',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-7',
        displayName: 'Geometry - Lesson 7',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-8',
        displayName: 'Geometry - Lesson 8',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-9',
        displayName: 'Geometry - Lesson 9',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 3,
        topicName: 'topic-geometry-lesson-10',
        displayName: 'Geometry - Lesson 10',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-1',
        displayName: 'Geometry - Lesson 1',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-2',
        displayName: 'Geometry - Lesson 2',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-3',
        displayName: 'Geometry - Lesson 3',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-4',
        displayName: 'Geometry - Lesson 4',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-5',
        displayName: 'Geometry - Lesson 5',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-6',
        displayName: 'Geometry - Lesson 6',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-7',
        displayName: 'Geometry - Lesson 7',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-8',
        displayName: 'Geometry - Lesson 8',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-9',
        displayName: 'Geometry - Lesson 9',
      },
      {
        grade: 6,
        subject: 'math',
        quarter: 4,
        topicName: 'topic-geometry-lesson-10',
        displayName: 'Geometry - Lesson 10',
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
        topicName: 'topic-properties-classification-materials',
        displayName: 'Properties & Classification of Materials',
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
