interface LessonWithGradeAndTopic {
  grade: number;
  topicName: string;
}

export const COLLEGE_REVIEW_TOPIC_PREFIX = 'topic-college-review-week-';
export const COLLEGE_REVIEW_GRADE_FILTER_KEY = 'college-review';

export function isCollegeReviewTopic(topicName: string): boolean {
  return topicName.startsWith(COLLEGE_REVIEW_TOPIC_PREFIX);
}

export function isCollegeReviewLesson(lesson: Pick<LessonWithGradeAndTopic, 'topicName'>): boolean {
  return isCollegeReviewTopic(lesson.topicName);
}

export function getLessonGradeDisplay(lesson: LessonWithGradeAndTopic): string {
  if (isCollegeReviewLesson(lesson)) {
    return 'College Review';
  }

  return `Grade ${lesson.grade}`;
}

export function getLessonGradeFilterKey(lesson: LessonWithGradeAndTopic): string {
  if (isCollegeReviewLesson(lesson)) {
    return COLLEGE_REVIEW_GRADE_FILTER_KEY;
  }

  return `grade-${lesson.grade}`;
}

export function isLessonGradeAppropriateForChild(
  lesson: LessonWithGradeAndTopic,
  childGrade: number,
): boolean {
  if (isCollegeReviewLesson(lesson)) {
    return false;
  }

  return lesson.grade === childGrade;
}

export function isLessonAccessibleToChild(
  lesson: LessonWithGradeAndTopic,
  childGrade: number,
  isAssignedToChild: boolean,
): boolean {
  return isAssignedToChild || isLessonGradeAppropriateForChild(lesson, childGrade);
}
