import { isSupabaseConfigured, requireSupabase } from '../lib/supabase';

interface UploadedFile {
  path: string;
  content: string | ArrayBuffer;
  type: 'text' | 'binary';
}

interface UploadedLesson {
  id: string;
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  displayName: string;
  uploadedAt: string;
  files: UploadedFile[];
}

type SupabaseLessonCatalogRow = {
  id: string;
  lesson_key: string;
  grade: number;
  subject: string;
  quarter: number;
  topic_name: string;
  display_name: string;
  created_at: string;
  updated_at: string;
};

type SupabaseLessonFileRow = {
  lesson_id: string;
  file_type: 'content' | 'metadata' | 'practice' | 'assessment' | 'asset';
  path: string;
  mime_type: string | null;
};

function getMimeType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'json':
      return 'application/json';
    case 'md':
      return 'text/markdown';
    case 'txt':
      return 'text/plain';
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

function getFileType(path: string): SupabaseLessonFileRow['file_type'] {
  if (path === 'content.md') {
    return 'content';
  }
  if (path === 'metadata.json') {
    return 'metadata';
  }
  if (path === 'practice.json') {
    return 'practice';
  }
  if (path === 'assessment.json') {
    return 'assessment';
  }
  return 'asset';
}

function isTextFile(fileType: SupabaseLessonFileRow['file_type'], mimeType: string | null): boolean {
  if (fileType !== 'asset') {
    return true;
  }
  if (!mimeType) {
    return false;
  }
  return mimeType.startsWith('text/') || mimeType.includes('json') || mimeType.includes('xml');
}

class UploadedContentStore {
  private dbName = 'EducationAppUploadedContent';
  private version = 1;
  private db: IDBDatabase | null = null;
  private storageBucket = 'lesson-assets';

  private getStoragePath(lessonKey: string, filePath: string): string {
    return `lessons/${lessonKey}/${filePath}`;
  }

  private async initLocal(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('lessons')) {
          db.createObjectStore('lessons', { keyPath: 'id' });
        }
      };
    });
  }

  private async saveLessonLocal(lesson: UploadedLesson): Promise<void> {
    if (!this.db) {
      await this.initLocal();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readwrite');
      const store = transaction.objectStore('lessons');
      const request = store.put(lesson);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  private async getLessonLocal(id: string): Promise<UploadedLesson | null> {
    if (!this.db) {
      await this.initLocal();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.get(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  private async getAllLessonsLocal(): Promise<UploadedLesson[]> {
    if (!this.db) {
      await this.initLocal();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  private async deleteLessonLocal(id: string): Promise<void> {
    if (!this.db) {
      await this.initLocal();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readwrite');
      const store = transaction.objectStore('lessons');
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  private async getFileLocal(lessonId: string, filePath: string): Promise<UploadedFile | null> {
    const lesson = await this.getLessonLocal(lessonId);
    if (!lesson) {
      return null;
    }
    return lesson.files.find((file) => file.path === filePath) || null;
  }

  private async getSupabaseLessonByKey(lessonKey: string): Promise<SupabaseLessonCatalogRow | null> {
    const supabase = requireSupabase();
    const { data, error } = await supabase
      .from('lesson_catalog')
      .select('id, lesson_key, grade, subject, quarter, topic_name, display_name, created_at, updated_at')
      .eq('lesson_key', lessonKey)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return data;
  }

  private async saveLessonSupabase(lesson: UploadedLesson): Promise<void> {
    const supabase = requireSupabase();

    const metadataFile = lesson.files.find((file) => file.path === 'metadata.json' && file.type === 'text');
    let metadata: Record<string, unknown> = {};
    if (metadataFile) {
      try {
        metadata = JSON.parse(metadataFile.content as string);
      } catch {
        metadata = {};
      }
    }

    const catalogResult = await supabase
      .from('lesson_catalog')
      .upsert(
        {
          lesson_key: lesson.id,
          grade: lesson.grade,
          subject: lesson.subject,
          quarter: lesson.quarter,
          topic_name: lesson.topicName,
          display_name: lesson.displayName,
          metadata,
          source: 'uploaded',
        },
        { onConflict: 'lesson_key' },
      )
      .select('id, lesson_key, grade, subject, quarter, topic_name, display_name, created_at, updated_at')
      .single();

    const catalog = catalogResult.data;
    if (catalogResult.error || !catalog) {
      throw new Error('Failed to save lesson metadata to Supabase');
    }

    const existingFilesResult = await supabase
      .from('lesson_files')
      .select('path')
      .eq('lesson_id', catalog.id);

    const existingPaths = (existingFilesResult.data || []).map((row) =>
      this.getStoragePath(lesson.id, row.path),
    );
    if (existingPaths.length > 0) {
      await supabase.storage.from(this.storageBucket).remove(existingPaths);
    }

    await supabase.from('lesson_files').delete().eq('lesson_id', catalog.id);

    const fileRecords: Array<{
      lesson_id: string;
      file_type: SupabaseLessonFileRow['file_type'];
      path: string;
      mime_type: string;
    }> = [];

    for (const file of lesson.files) {
      const storagePath = this.getStoragePath(lesson.id, file.path);
      const mimeType = getMimeType(file.path);
      const payload = file.type === 'binary'
        ? new Blob([file.content as ArrayBuffer], { type: mimeType })
        : new Blob([file.content as string], { type: mimeType });

      const uploadResult = await supabase.storage
        .from(this.storageBucket)
        .upload(storagePath, payload, { upsert: true, contentType: mimeType });

      if (uploadResult.error) {
        throw new Error(`Failed to upload ${file.path}: ${uploadResult.error.message}`);
      }

      fileRecords.push({
        lesson_id: catalog.id,
        file_type: getFileType(file.path),
        path: file.path,
        mime_type: mimeType,
      });
    }

    if (fileRecords.length > 0) {
      const insertResult = await supabase.from('lesson_files').insert(fileRecords);
      if (insertResult.error) {
        throw new Error(`Failed to save lesson file records: ${insertResult.error.message}`);
      }
    }
  }

  private async getAllLessonsSupabase(): Promise<UploadedLesson[]> {
    const supabase = requireSupabase();
    const { data, error } = await supabase
      .from('lesson_catalog')
      .select('id, lesson_key, grade, subject, quarter, topic_name, display_name, created_at, updated_at')
      .eq('source', 'uploaded')
      .order('updated_at', { ascending: false });

    if (error || !data) {
      return [];
    }

    const lessonIds = data.map((row) => row.id);
    const fileResult = lessonIds.length > 0
      ? await supabase
          .from('lesson_files')
          .select('lesson_id, file_type, path, mime_type')
          .in('lesson_id', lessonIds)
      : { data: [] as SupabaseLessonFileRow[] };

    const filesByLesson: Record<string, UploadedFile[]> = {};
    (fileResult.data || []).forEach((fileRow) => {
      if (!filesByLesson[fileRow.lesson_id]) {
        filesByLesson[fileRow.lesson_id] = [];
      }

      filesByLesson[fileRow.lesson_id].push({
        path: fileRow.path,
        content: '',
        type: isTextFile(fileRow.file_type, fileRow.mime_type) ? 'text' : 'binary',
      });
    });

    return data.map((row) => ({
      id: row.lesson_key,
      grade: row.grade,
      subject: row.subject,
      quarter: row.quarter,
      topicName: row.topic_name,
      displayName: row.display_name,
      uploadedAt: row.updated_at || row.created_at,
      files: filesByLesson[row.id] || [],
    }));
  }

  private async getFileSupabase(lessonId: string, filePath: string): Promise<UploadedFile | null> {
    const catalog = await this.getSupabaseLessonByKey(lessonId);
    if (!catalog) {
      return null;
    }

    const supabase = requireSupabase();
    const fileResult = await supabase
      .from('lesson_files')
      .select('lesson_id, file_type, path, mime_type')
      .eq('lesson_id', catalog.id)
      .eq('path', filePath)
      .maybeSingle();

    if (fileResult.error || !fileResult.data) {
      return null;
    }

    const storagePath = this.getStoragePath(lessonId, filePath);
    const downloadResult = await supabase.storage.from(this.storageBucket).download(storagePath);
    if (downloadResult.error || !downloadResult.data) {
      return null;
    }

    const shouldReadAsText = isTextFile(fileResult.data.file_type, fileResult.data.mime_type);
    if (shouldReadAsText) {
      return {
        path: filePath,
        content: await downloadResult.data.text(),
        type: 'text',
      };
    }

    return {
      path: filePath,
      content: await downloadResult.data.arrayBuffer(),
      type: 'binary',
    };
  }

  private async getLessonSupabase(lessonKey: string): Promise<UploadedLesson | null> {
    const catalog = await this.getSupabaseLessonByKey(lessonKey);
    if (!catalog) {
      return null;
    }

    const supabase = requireSupabase();
    const filesResult = await supabase
      .from('lesson_files')
      .select('lesson_id, file_type, path, mime_type')
      .eq('lesson_id', catalog.id);

    if (filesResult.error || !filesResult.data) {
      return {
        id: catalog.lesson_key,
        grade: catalog.grade,
        subject: catalog.subject,
        quarter: catalog.quarter,
        topicName: catalog.topic_name,
        displayName: catalog.display_name,
        uploadedAt: catalog.updated_at || catalog.created_at,
        files: [],
      };
    }

    const files = await Promise.all(
      filesResult.data.map(async (row) => this.getFileSupabase(lessonKey, row.path)),
    );

    return {
      id: catalog.lesson_key,
      grade: catalog.grade,
      subject: catalog.subject,
      quarter: catalog.quarter,
      topicName: catalog.topic_name,
      displayName: catalog.display_name,
      uploadedAt: catalog.updated_at || catalog.created_at,
      files: files.filter((file): file is UploadedFile => Boolean(file)),
    };
  }

  private async deleteLessonSupabase(lessonKey: string): Promise<void> {
    const catalog = await this.getSupabaseLessonByKey(lessonKey);
    if (!catalog) {
      return;
    }

    const supabase = requireSupabase();
    const filesResult = await supabase
      .from('lesson_files')
      .select('path')
      .eq('lesson_id', catalog.id);

    const storagePaths = (filesResult.data || []).map((row) =>
      this.getStoragePath(lessonKey, row.path),
    );

    if (storagePaths.length > 0) {
      await supabase.storage.from(this.storageBucket).remove(storagePaths);
    }

    await supabase.from('lesson_catalog').delete().eq('id', catalog.id);
  }

  async saveLesson(lesson: UploadedLesson): Promise<void> {
    if (!isSupabaseConfigured) {
      await this.saveLessonLocal(lesson);
      return;
    }
    await this.saveLessonSupabase(lesson);
  }

  async getLesson(id: string): Promise<UploadedLesson | null> {
    if (!isSupabaseConfigured) {
      return this.getLessonLocal(id);
    }
    return this.getLessonSupabase(id);
  }

  async getAllLessons(): Promise<UploadedLesson[]> {
    if (!isSupabaseConfigured) {
      return this.getAllLessonsLocal();
    }
    return this.getAllLessonsSupabase();
  }

  async deleteLesson(id: string): Promise<void> {
    if (!isSupabaseConfigured) {
      await this.deleteLessonLocal(id);
      return;
    }
    await this.deleteLessonSupabase(id);
  }

  async getFile(lessonId: string, filePath: string): Promise<UploadedFile | null> {
    if (!isSupabaseConfigured) {
      return this.getFileLocal(lessonId, filePath);
    }
    return this.getFileSupabase(lessonId, filePath);
  }
}

export const uploadedContentStore = new UploadedContentStore();
export type { UploadedLesson, UploadedFile };
