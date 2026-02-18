export interface LessonKeyParts {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
}

const CANONICAL_KEY_REGEX = /^grade-(\d+)-([a-z0-9-]+)-q(\d+)-(.+)$/i;
const LEGACY_KEY_REGEX = /^(\d+)-([a-z0-9-]+)-(\d+)-(.+)$/i;

export function buildLessonKey(parts: LessonKeyParts): string {
  return `grade-${parts.grade}-${parts.subject.toLowerCase()}-q${parts.quarter}-${parts.topicName}`;
}

export function parseLessonKey(key: string): LessonKeyParts | null {
  const canonicalMatch = key.match(CANONICAL_KEY_REGEX);
  if (canonicalMatch) {
    return {
      grade: Number(canonicalMatch[1]),
      subject: canonicalMatch[2].toLowerCase(),
      quarter: Number(canonicalMatch[3]),
      topicName: canonicalMatch[4],
    };
  }

  const legacyMatch = key.match(LEGACY_KEY_REGEX);
  if (legacyMatch) {
    return {
      grade: Number(legacyMatch[1]),
      subject: legacyMatch[2].toLowerCase(),
      quarter: Number(legacyMatch[3]),
      topicName: legacyMatch[4],
    };
  }

  return null;
}

export function normalizeLessonKey(key: string): string {
  const parsed = parseLessonKey(key);
  if (!parsed) {
    return key;
  }

  return buildLessonKey(parsed);
}

export function tryTopicPrefixedVariant(key: string): string | null {
  const parsed = parseLessonKey(key);
  if (!parsed || parsed.topicName.startsWith('topic-')) {
    return null;
  }

  return buildLessonKey({
    ...parsed,
    topicName: `topic-${parsed.topicName}`,
  });
}
