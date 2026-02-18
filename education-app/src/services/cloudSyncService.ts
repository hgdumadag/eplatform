// Cloud Sync Service - Syncs data to a cloud folder (OneDrive, Dropbox, Google Drive, etc.)
// Uses File System Access API

interface SyncData {
  users: any;
  children: any;
  progress: any;
  assignments: any;
  lastSyncTime: string;
  deviceId: string;
}

interface SyncStatus {
  isSetup: boolean;
  lastSync: string | null;
  isSyncing: boolean;
  error: string | null;
}

interface PermissionCapableHandle {
  queryPermission?: (descriptor: { mode: 'read' | 'readwrite' }) => Promise<PermissionState>;
  requestPermission?: (descriptor: { mode: 'read' | 'readwrite' }) => Promise<PermissionState>;
}

const SYNC_FILE_NAME = 'education-data-sync.json';
const SYNC_INTERVAL = 60000; // 1 minute
const FOLDER_HANDLE_KEY = 'cloudSyncFolderHandle';
const LOCAL_LAST_SYNC_KEY = 'education-app-last-sync-time';

class CloudSyncService {
  private folderHandle: FileSystemDirectoryHandle | null = null;
  private syncInterval: ReturnType<typeof setInterval> | null = null;
  private deviceId: string;
  private listeners: Array<(status: SyncStatus) => void> = [];
  private currentStatus: SyncStatus = {
    isSetup: false,
    lastSync: null,
    isSyncing: false,
    error: null,
  };

  constructor() {
    this.deviceId = this.getOrCreateDeviceId();
    this.currentStatus.lastSync = this.getLocalLastSync();
    this.loadFolderHandle();
  }

  subscribe(callback: (status: SyncStatus) => void) {
    this.listeners.push(callback);
    callback(this.currentStatus);
    return () => {
      this.listeners = this.listeners.filter((listener) => listener !== callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.currentStatus));
  }

  private updateStatus(updates: Partial<SyncStatus>) {
    this.currentStatus = { ...this.currentStatus, ...updates };
    this.notifyListeners();
  }

  private getOrCreateDeviceId(): string {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = `device-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
  }

  private getLocalLastSync(): string | null {
    return localStorage.getItem(LOCAL_LAST_SYNC_KEY);
  }

  private setLocalLastSync(isoTimestamp: string) {
    localStorage.setItem(LOCAL_LAST_SYNC_KEY, isoTimestamp);
  }

  private clearLocalLastSync() {
    localStorage.removeItem(LOCAL_LAST_SYNC_KEY);
  }

  private async ensureReadWritePermission(handle: FileSystemDirectoryHandle): Promise<boolean> {
    const permissionHandle = handle as FileSystemDirectoryHandle & PermissionCapableHandle;

    if (!permissionHandle.queryPermission || !permissionHandle.requestPermission) {
      return true;
    }

    const permission = await permissionHandle.queryPermission({ mode: 'readwrite' });
    if (permission === 'granted') {
      return true;
    }

    const requestedPermission = await permissionHandle.requestPermission({ mode: 'readwrite' });
    return requestedPermission === 'granted';
  }

  isSupported(): boolean {
    return 'showDirectoryPicker' in window;
  }

  private async loadFolderHandle() {
    try {
      const db = await this.openDB();
      const tx = db.transaction('handles', 'readonly');
      const store = tx.objectStore('handles');
      const handle = await this.promisifyRequest(store.get(FOLDER_HANDLE_KEY));

      if (!handle) {
        return;
      }

      this.folderHandle = handle;

      const hasPermission = await this.ensureReadWritePermission(handle);
      if (!hasPermission) {
        this.folderHandle = null;
        this.updateStatus({ isSetup: false, error: 'Permission denied' });
        return;
      }

      this.updateStatus({ isSetup: true, error: null });
      this.startAutoSync();
    } catch (error) {
      console.error('Failed to load folder handle:', error);
    }
  }

  private async saveFolderHandle(handle: FileSystemDirectoryHandle) {
    try {
      const db = await this.openDB();
      const tx = db.transaction('handles', 'readwrite');
      const store = tx.objectStore('handles');
      await this.promisifyRequest(store.put(handle, FOLDER_HANDLE_KEY));
    } catch (error) {
      console.error('Failed to save folder handle:', error);
    }
  }

  private openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('CloudSyncDB', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('handles')) {
          db.createObjectStore('handles');
        }
      };
    });
  }

  private promisifyRequest<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async setupCloudSync(): Promise<boolean> {
    if (!this.isSupported()) {
      this.updateStatus({
        error: 'File System Access API not supported in this browser. Please use Chrome or Edge.',
      });
      return false;
    }

    try {
      const handle = await (window as any).showDirectoryPicker({
        mode: 'readwrite',
        startIn: 'documents',
      });

      const hasPermission = await this.ensureReadWritePermission(handle);
      if (!hasPermission) {
        this.updateStatus({
          isSetup: false,
          error: 'Permission denied',
        });
        return false;
      }

      this.folderHandle = handle;
      await this.saveFolderHandle(handle);

      this.updateStatus({
        isSetup: true,
        error: null,
      });

      await this.syncToCloud();
      this.startAutoSync();

      return true;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        this.updateStatus({ error: null });
      } else {
        this.updateStatus({
          error: `Failed to setup cloud sync: ${error.message}`,
        });
      }
      return false;
    }
  }

  private gatherData(syncTime: string): SyncData {
    return {
      users: JSON.parse(localStorage.getItem('education-app-users') || '{"state":{}}'),
      children: JSON.parse(localStorage.getItem('education-app-children') || '{"state":{}}'),
      progress: JSON.parse(localStorage.getItem('education-app-progress') || '{"state":{}}'),
      assignments: JSON.parse(localStorage.getItem('education-app-assignments') || '{"state":{}}'),
      lastSyncTime: syncTime,
      deviceId: this.deviceId,
    };
  }

  private applyData(data: SyncData) {
    if (data.users) {
      localStorage.setItem('education-app-users', JSON.stringify(data.users));
    }
    if (data.children) {
      localStorage.setItem('education-app-children', JSON.stringify(data.children));
    }
    if (data.progress) {
      localStorage.setItem('education-app-progress', JSON.stringify(data.progress));
    }
    if (data.assignments) {
      localStorage.setItem('education-app-assignments', JSON.stringify(data.assignments));
    }
  }

  async syncToCloud(): Promise<boolean> {
    if (!this.folderHandle) {
      this.updateStatus({ error: 'Cloud sync not setup' });
      return false;
    }

    this.updateStatus({ isSyncing: true, error: null });

    try {
      const hasPermission = await this.ensureReadWritePermission(this.folderHandle);
      if (!hasPermission) {
        throw new Error('Permission denied');
      }

      const syncTime = new Date().toISOString();
      const data = this.gatherData(syncTime);
      const fileHandle = await this.folderHandle.getFileHandle(SYNC_FILE_NAME, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(data, null, 2));
      await writable.close();

      this.setLocalLastSync(syncTime);

      this.updateStatus({
        isSyncing: false,
        lastSync: syncTime,
        error: null,
      });

      return true;
    } catch (error: any) {
      this.updateStatus({
        isSyncing: false,
        error: `Sync failed: ${error.message}`,
      });
      return false;
    }
  }

  async syncFromCloud(): Promise<boolean> {
    if (!this.folderHandle) {
      this.updateStatus({ error: 'Cloud sync not setup' });
      return false;
    }

    this.updateStatus({ isSyncing: true, error: null });

    try {
      const hasPermission = await this.ensureReadWritePermission(this.folderHandle);
      if (!hasPermission) {
        throw new Error('Permission denied');
      }

      const fileHandle = await this.folderHandle.getFileHandle(SYNC_FILE_NAME);
      const file = await fileHandle.getFile();
      const text = await file.text();
      const data: SyncData = JSON.parse(text);

      const cloudTime = new Date(data.lastSyncTime).getTime();
      const localLastSync = this.getLocalLastSync();
      const localTime = localLastSync ? new Date(localLastSync).getTime() : 0;

      if (cloudTime > localTime) {
        this.applyData(data);
        this.setLocalLastSync(data.lastSyncTime);

        this.updateStatus({
          isSyncing: false,
          lastSync: data.lastSyncTime,
          error: null,
        });

        window.location.reload();
        return true;
      }

      this.updateStatus({
        isSyncing: false,
        lastSync: localLastSync,
        error: null,
      });
      return true;
    } catch (error: any) {
      if (error.name === 'NotFoundError') {
        return this.syncToCloud();
      }

      this.updateStatus({
        isSyncing: false,
        error: `Sync failed: ${error.message}`,
      });
      return false;
    }
  }

  async sync(): Promise<boolean> {
    const loaded = await this.syncFromCloud();

    if (loaded && !this.currentStatus.error) {
      return this.syncToCloud();
    }

    return loaded;
  }

  startAutoSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }

    this.syncInterval = setInterval(() => {
      if (this.folderHandle && !this.currentStatus.isSyncing) {
        this.sync();
      }
    }, SYNC_INTERVAL);
  }

  stopAutoSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }

  async disconnect() {
    this.stopAutoSync();
    this.folderHandle = null;

    try {
      const db = await this.openDB();
      const tx = db.transaction('handles', 'readwrite');
      const store = tx.objectStore('handles');
      await this.promisifyRequest(store.delete(FOLDER_HANDLE_KEY));
    } catch (error) {
      console.error('Failed to remove folder handle:', error);
    }

    this.clearLocalLastSync();

    this.updateStatus({
      isSetup: false,
      lastSync: null,
      error: null,
    });
  }

  getStatus(): SyncStatus {
    return this.currentStatus;
  }

  isSetup(): boolean {
    return this.currentStatus.isSetup;
  }
}

export const cloudSyncService = new CloudSyncService();
