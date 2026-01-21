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

const SYNC_FILE_NAME = 'education-data-sync.json';
const SYNC_INTERVAL = 60000; // 1 minute
const FOLDER_HANDLE_KEY = 'cloudSyncFolderHandle';

class CloudSyncService {
  private folderHandle: FileSystemDirectoryHandle | null = null;
  private syncInterval: NodeJS.Timeout | null = null;
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
    this.loadFolderHandle();
  }

  // Subscribe to sync status changes
  subscribe(callback: (status: SyncStatus) => void) {
    this.listeners.push(callback);
    callback(this.currentStatus);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentStatus));
  }

  private updateStatus(updates: Partial<SyncStatus>) {
    this.currentStatus = { ...this.currentStatus, ...updates };
    this.notifyListeners();
  }

  // Get or create a unique device ID
  private getOrCreateDeviceId(): string {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
  }

  // Check if File System Access API is supported
  isSupported(): boolean {
    return 'showDirectoryPicker' in window;
  }

  // Load saved folder handle from IndexedDB
  private async loadFolderHandle() {
    try {
      const db = await this.openDB();
      const tx = db.transaction('handles', 'readonly');
      const store = tx.objectStore('handles');
      const handle = await this.promisifyRequest(store.get(FOLDER_HANDLE_KEY));

      if (handle) {
        this.folderHandle = handle;

        // Verify we still have permission
        const permission = await handle.queryPermission({ mode: 'readwrite' });
        if (permission === 'granted') {
          this.updateStatus({ isSetup: true });
        } else {
          // Try to request permission again
          const newPermission = await handle.requestPermission({ mode: 'readwrite' });
          if (newPermission === 'granted') {
            this.updateStatus({ isSetup: true });
          } else {
            this.folderHandle = null;
            this.updateStatus({ isSetup: false, error: 'Permission denied' });
          }
        }
      }
    } catch (error) {
      console.error('Failed to load folder handle:', error);
    }
  }

  // Save folder handle to IndexedDB
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

  // Open IndexedDB for storing folder handles
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

  // Convert IDBRequest to Promise
  private promisifyRequest<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Setup cloud sync by selecting a folder
  async setupCloudSync(): Promise<boolean> {
    if (!this.isSupported()) {
      this.updateStatus({
        error: 'File System Access API not supported in this browser. Please use Chrome or Edge.'
      });
      return false;
    }

    try {
      // Request folder access
      const handle = await (window as any).showDirectoryPicker({
        mode: 'readwrite',
        startIn: 'documents',
      });

      this.folderHandle = handle;
      await this.saveFolderHandle(handle);

      this.updateStatus({
        isSetup: true,
        error: null
      });

      // Do initial sync
      await this.syncToCloud();

      // Start auto-sync
      this.startAutoSync();

      return true;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        // User cancelled
        this.updateStatus({ error: null });
      } else {
        this.updateStatus({
          error: `Failed to setup cloud sync: ${error.message}`
        });
      }
      return false;
    }
  }

  // Gather all data from localStorage
  private gatherData(): SyncData {
    return {
      users: JSON.parse(localStorage.getItem('education-app-users') || '{"state":{}}'),
      children: JSON.parse(localStorage.getItem('education-app-children') || '{"state":{}}'),
      progress: JSON.parse(localStorage.getItem('education-app-progress') || '{"state":{}}'),
      assignments: JSON.parse(localStorage.getItem('education-app-assignments') || '{"state":{}}'),
      lastSyncTime: new Date().toISOString(),
      deviceId: this.deviceId,
    };
  }

  // Apply data to localStorage
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

  // Sync data to cloud folder
  async syncToCloud(): Promise<boolean> {
    if (!this.folderHandle) {
      this.updateStatus({ error: 'Cloud sync not setup' });
      return false;
    }

    this.updateStatus({ isSyncing: true, error: null });

    try {
      // Check permission
      const permission = await this.folderHandle.queryPermission({ mode: 'readwrite' });
      if (permission !== 'granted') {
        const newPermission = await this.folderHandle.requestPermission({ mode: 'readwrite' });
        if (newPermission !== 'granted') {
          throw new Error('Permission denied');
        }
      }

      // Gather data
      const data = this.gatherData();

      // Create or get file
      const fileHandle = await this.folderHandle.getFileHandle(SYNC_FILE_NAME, { create: true });

      // Write data
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(data, null, 2));
      await writable.close();

      this.updateStatus({
        isSyncing: false,
        lastSync: new Date().toISOString(),
        error: null
      });

      return true;
    } catch (error: any) {
      this.updateStatus({
        isSyncing: false,
        error: `Sync failed: ${error.message}`
      });
      return false;
    }
  }

  // Load data from cloud folder
  async syncFromCloud(): Promise<boolean> {
    if (!this.folderHandle) {
      this.updateStatus({ error: 'Cloud sync not setup' });
      return false;
    }

    this.updateStatus({ isSyncing: true, error: null });

    try {
      // Check permission
      const permission = await this.folderHandle.queryPermission({ mode: 'readwrite' });
      if (permission !== 'granted') {
        const newPermission = await this.folderHandle.requestPermission({ mode: 'readwrite' });
        if (newPermission !== 'granted') {
          throw new Error('Permission denied');
        }
      }

      // Get file
      const fileHandle = await this.folderHandle.getFileHandle(SYNC_FILE_NAME);
      const file = await fileHandle.getFile();
      const text = await file.text();
      const data: SyncData = JSON.parse(text);

      // Check if cloud data is newer
      const cloudTime = new Date(data.lastSyncTime).getTime();
      const localLastSync = this.currentStatus.lastSync
        ? new Date(this.currentStatus.lastSync).getTime()
        : 0;

      if (cloudTime > localLastSync || data.deviceId !== this.deviceId) {
        // Cloud data is newer or from different device, apply it
        this.applyData(data);

        this.updateStatus({
          isSyncing: false,
          lastSync: data.lastSyncTime,
          error: null
        });

        // Reload the page to reflect changes
        window.location.reload();
        return true;
      } else {
        // Local data is newer or same, just update status
        this.updateStatus({
          isSyncing: false,
          error: null
        });
        return true;
      }
    } catch (error: any) {
      if (error.name === 'NotFoundError') {
        // File doesn't exist yet, sync to cloud instead
        return await this.syncToCloud();
      }

      this.updateStatus({
        isSyncing: false,
        error: `Sync failed: ${error.message}`
      });
      return false;
    }
  }

  // Bi-directional sync: check cloud, merge if needed
  async sync(): Promise<boolean> {
    // First, try to load from cloud
    const loaded = await this.syncFromCloud();

    // If loading was successful but didn't trigger reload, sync to cloud
    if (loaded && !this.currentStatus.error) {
      return await this.syncToCloud();
    }

    return loaded;
  }

  // Start automatic sync
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

  // Stop automatic sync
  stopAutoSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }

  // Disconnect cloud sync
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

    this.updateStatus({
      isSetup: false,
      lastSync: null,
      error: null
    });
  }

  // Get current status
  getStatus(): SyncStatus {
    return this.currentStatus;
  }

  // Check if setup
  isSetup(): boolean {
    return this.currentStatus.isSetup;
  }
}

// Export singleton instance
export const cloudSyncService = new CloudSyncService();
