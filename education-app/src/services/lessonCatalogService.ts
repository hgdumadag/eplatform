import { isSupabaseConfigured, requireSupabase } from '../lib/supabase';
import { normalizeLessonKey } from '../utils/lessonKey';

type LessonSource = 'builtin' | 'uploaded';

interface ParsedLessonKey {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
}

const lessonIdCache = new Map<string, string>();
const lessonKeyCache = new Map<string, string>();

function parseLessonKey(lessonKey: string): ParsedLessonKey | null {
  const normalized = normalizeLessonKey(lessonKey);
  const match = normalized.match(/^grade-(\d+)-([a-z0-9-]+)-q([1-4])-(.+)$/i);
  if (!match) {
    return null;
  }

  return {
    grade: Number(match[1]),
    subject: match[2],
    quarter: Number(match[3]),
    topicName: match[4],
  };
}

function toDisplayName(topicName: string): string {
  return topicName
    .replace(/^topic-/, '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function clearLessonCatalogCache(): void {
  lessonIdCache.clear();
  lessonKeyCache.clear();
}

export async function getLessonIdByKey(lessonKey: string): Promise<string | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const canonicalLessonKey = normalizeLessonKey(lessonKey);
  const cached = lessonIdCache.get(canonicalLessonKey);
  if (cached) {
    return cached;
  }

  const supabase = requireSupabase();
  const { data, error } = await supabase
    .from('lesson_catalog')
    .select('id, lesson_key')
    .eq('lesson_key', canonicalLessonKey)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  lessonIdCache.set(canonicalLessonKey, data.id);
  lessonKeyCache.set(data.id, data.lesson_key);
  return data.id;
}

export async function ensureLessonIdByKey(
  lessonKey: string,
  options?: {
    displayName?: string;
    metadata?: Record<string, unknown>;
    source?: LessonSource;
  },
): Promise<string | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const canonicalLessonKey = normalizeLessonKey(lessonKey);
  const existing = await getLessonIdByKey(canonicalLessonKey);
  if (existing) {
    return existing;
  }

  const parsed = parseLessonKey(canonicalLessonKey);
  if (!parsed) {
    return null;
  }

  const supabase = requireSupabase();
  const { data, error } = await supabase
    .from('lesson_catalog')
    .upsert(
      {
        lesson_key: canonicalLessonKey,
        grade: parsed.grade,
        subject: parsed.subject,
        quarter: parsed.quarter,
        topic_name: parsed.topicName,
        display_name: options?.displayName || toDisplayName(parsed.topicName),
        metadata: options?.metadata || {},
        source: options?.source || 'builtin',
      },
      { onConflict: 'lesson_key' },
    )
    .select('id, lesson_key')
    .single();

  if (error || !data) {
    return null;
  }

  lessonIdCache.set(data.lesson_key, data.id);
  lessonKeyCache.set(data.id, data.lesson_key);
  return data.id;
}

export async function getLessonIdsByKeys(
  lessonKeys: string[],
): Promise<Record<string, string>> {
  if (!isSupabaseConfigured || lessonKeys.length === 0) {
    return {};
  }

  const canonicalKeys = Array.from(new Set(lessonKeys.map((key) => normalizeLessonKey(key))));
  const missingKeys = canonicalKeys.filter((key) => !lessonIdCache.has(key));

  if (missingKeys.length > 0) {
    const supabase = requireSupabase();
    const { data, error } = await supabase
      .from('lesson_catalog')
      .select('id, lesson_key')
      .in('lesson_key', missingKeys);

    if (!error && data) {
      data.forEach((row) => {
        lessonIdCache.set(row.lesson_key, row.id);
        lessonKeyCache.set(row.id, row.lesson_key);
      });
    }
  }

  const result: Record<string, string> = {};
  canonicalKeys.forEach((key) => {
    const id = lessonIdCache.get(key);
    if (id) {
      result[key] = id;
    }
  });

  return result;
}

export async function getLessonKeysByIds(lessonIds: string[]): Promise<Record<string, string>> {
  if (!isSupabaseConfigured || lessonIds.length === 0) {
    return {};
  }

  const uniqueIds = Array.from(new Set(lessonIds));
  const missingIds = uniqueIds.filter((id) => !lessonKeyCache.has(id));

  if (missingIds.length > 0) {
    const supabase = requireSupabase();
    const { data, error } = await supabase
      .from('lesson_catalog')
      .select('id, lesson_key')
      .in('id', missingIds);

    if (!error && data) {
      data.forEach((row) => {
        lessonIdCache.set(row.lesson_key, row.id);
        lessonKeyCache.set(row.id, row.lesson_key);
      });
    }
  }

  const result: Record<string, string> = {};
  uniqueIds.forEach((id) => {
    const key = lessonKeyCache.get(id);
    if (key) {
      result[id] = key;
    }
  });

  return result;
}
