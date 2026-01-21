/**
 * IndexedDB store for uploaded content
 * Stores lesson files (metadata.json, content.md, practice.json, assessment.json, images)
 */

interface UploadedFile {
  path: string; // e.g., "grade-11/math/quarter-1/topic-custom/content.md"
  content: string | ArrayBuffer;
  type: 'text' | 'binary';
}

interface UploadedLesson {
  id: string; // e.g., "grade-11-math-q1-custom"
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  displayName: string;
  uploadedAt: string;
  files: UploadedFile[];
}

class UploadedContentStore {
  private dbName = 'EducationAppUploadedContent';
  private version = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object store for lessons
        if (!db.objectStoreNames.contains('lessons')) {
          db.createObjectStore('lessons', { keyPath: 'id' });
        }
      };
    });
  }

  async saveLesson(lesson: UploadedLesson): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readwrite');
      const store = transaction.objectStore('lessons');
      const request = store.put(lesson);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getLesson(id: string): Promise<UploadedLesson | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.get(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getAllLessons(): Promise<UploadedLesson[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readonly');
      const store = transaction.objectStore('lessons');
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async deleteLesson(id: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['lessons'], 'readwrite');
      const store = transaction.objectStore('lessons');
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getFile(lessonId: string, filePath: string): Promise<UploadedFile | null> {
    const lesson = await this.getLesson(lessonId);
    if (!lesson) return null;

    return lesson.files.find(f => f.path === filePath) || null;
  }
}

export const uploadedContentStore = new UploadedContentStore();
export type { UploadedLesson, UploadedFile };
