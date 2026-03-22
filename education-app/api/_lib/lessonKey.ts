interface LessonKeyParts {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
}

export function buildLessonKey(parts: LessonKeyParts): string {
  return `grade-${parts.grade}-${parts.subject.toLowerCase()}-q${parts.quarter}-${parts.topicName}`;
}
