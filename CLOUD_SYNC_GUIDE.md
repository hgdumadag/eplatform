# Cloud Sync Guide

## Overview

The Educational Platform now includes automatic cloud synchronization! This feature allows you to:
- ✅ Sync your data across multiple devices
- ✅ Automatic backups to your cloud storage
- ✅ Works with OneDrive, Dropbox, Google Drive, or any cloud-synced folder
- ✅ No external accounts or services needed

---

## How It Works

The app uses the **File System Access API** to save all your data to a single JSON file in a folder of your choice. When you select a cloud-synced folder (like your OneDrive folder), the file automatically syncs across all your devices.

**What gets synced:**
- User accounts and authentication
- All student progress and exam results
- Topic assignments
- All settings and preferences

**Sync file:** `education-data-sync.json`

---

## Browser Requirements

**Supported Browsers:**
- ✅ Google Chrome (version 86+)
- ✅ Microsoft Edge (version 86+)
- ✅ Opera (version 72+)

**Not Supported:**
- ❌ Safari (File System Access API not available)
- ❌ Firefox (File System Access API not available)

**Recommendation:** Use Microsoft Edge or Google Chrome for the best experience.

---

## Setup Instructions

### Step 1: Access Parent Dashboard

1. Open the application at http://localhost:5173 (or your port)
2. Login as a **parent** (George or Teresa)
3. Navigate to **Parent Dashboard**

### Step 2: Select Your Cloud Folder

1. Look for the **"☁️ Cloud Sync"** section at the top of the dashboard
2. Click the **"📂 Select Cloud Folder"** button
3. A folder picker will appear

### Step 3: Choose Your OneDrive Folder

**For OneDrive Users:**

1. In the folder picker, navigate to your OneDrive folder:
   - **Windows**: Usually `C:\Users\[YourUsername]\OneDrive`
   - **Mac**: Usually `/Users/[YourUsername]/OneDrive`

2. You can either:
   - Select the root OneDrive folder, OR
   - Create a subfolder like `OneDrive\EducationApp` and select that

3. Click **"Select Folder"**

4. When prompted for permission, click **"View files"** then **"Allow"**

**For Dropbox Users:**

1. Navigate to your Dropbox folder:
   - **Windows**: Usually `C:\Users\[YourUsername]\Dropbox`
   - **Mac**: Usually `/Users/[YourUsername]/Dropbox`

2. Select the folder and grant permission

**For Google Drive Users:**

1. Navigate to your Google Drive folder:
   - **Windows**: Usually `G:\My Drive` or `C:\Users\[YourUsername]\Google Drive`
   - **Mac**: Usually `/Users/[YourUsername]/Google Drive`

2. Select the folder and grant permission

### Step 4: Verify Setup

After selecting a folder, you should see:
- ✅ **"✓ Connected"** badge
- Last sync time
- **"🔄 Sync Now"** and **"🔌 Disconnect"** buttons

---

## Using Cloud Sync

### Automatic Syncing

Once setup, the app automatically:
- ✅ Syncs every **60 seconds** in the background
- ✅ Syncs when you make important changes (assignments, etc.)
- ✅ Loads the latest data when you open the app

**You don't need to do anything!** Just use the app normally.

### Manual Sync

You can also manually sync at any time:

1. Go to Parent Dashboard
2. Click **"🔄 Sync Now"**
3. Wait for "Sync completed!" message

### Checking Sync Status

The sync status shows:
- **Last synced:** Timestamp of the last successful sync
- **⟳ Syncing...** When a sync is in progress
- **Error messages** if something goes wrong

---

## Setting Up on Multiple Devices

### Device 1 (Already Setup):

1. Setup cloud sync as described above
2. The app creates `education-data-sync.json` in your cloud folder
3. This file syncs to the cloud automatically

### Device 2 (New Device):

1. Install the app following the [Installation Guide](INSTALLATION_GUIDE.md)
2. Start the app and login as a parent
3. Go to Parent Dashboard
4. Click **"📂 Select Cloud Folder"**
5. Select the **same cloud folder** you used on Device 1
6. The app will automatically detect the existing sync file
7. Your data will be loaded and synced!

**Important:** All devices must select the **exact same folder** for sync to work properly.

---

## How Sync Resolves Conflicts

The sync uses a **"last write wins"** strategy:

- When you open the app, it checks if the cloud file is newer than your local data
- If cloud is newer, it loads that data and refreshes the page
- If local is newer, it uploads to the cloud
- Changes from the **most recent** device always take priority

**This means:**
- ✅ Works great if you use one device at a time
- ⚠️ If you use two devices simultaneously, the last one to sync will overwrite changes

**Best Practice:** Make sure to sync before making changes on a different device.

---

## Troubleshooting

### Issue: "Cloud sync requires Chrome or Edge browser"

**Solution:** The File System Access API is not available in your browser. Switch to Chrome or Edge.

### Issue: Permission denied when trying to sync

**Cause:** Browser permissions expire after a period of inactivity.

**Solution:**
1. Click **"🔄 Sync Now"**
2. When prompted, click **"Allow"** again
3. Sync should resume normally

### Issue: "Sync failed: NotFoundError"

**Cause:** The sync file was deleted or the folder was moved.

**Solution:**
1. Click **"🔌 Disconnect"**
2. Re-setup cloud sync by selecting the folder again
3. This will create a new sync file

### Issue: Changes not appearing on other device

**Possible causes:**
1. Cloud hasn't finished syncing the file yet
2. Other device hasn't loaded the new data yet

**Solution:**
1. Wait 1-2 minutes for cloud to sync (OneDrive, Dropbox, etc.)
2. On the other device, open Parent Dashboard
3. Click **"🔄 Sync Now"**
4. The page will refresh with the new data

### Issue: Data lost after sync

**Cause:** Conflicting changes on two devices (last write wins).

**Solution:**
1. If you have a recent export (Export Progress button), import it
2. Going forward, use one device at a time
3. Always click "Sync Now" before switching devices

### Issue: Sync is slow

**Cause:** Large progress data or slow cloud sync service.

**Solution:**
- This is normal - the file size grows as students complete more lessons
- Cloud services (OneDrive, Dropbox) can take a minute to sync
- The app syncs quickly, but the cloud service needs time to upload/download

---

## Security & Privacy

### Where is your data stored?

- **Locally:** In your browser's localStorage
- **Cloud:** In the folder you selected (OneDrive, Dropbox, etc.)
- **Not sent anywhere else:** Your data never leaves your control

### Who can access the sync file?

- Only people with access to your cloud folder
- If your OneDrive is private, only you can access it
- If you share the folder, others can access the sync file

### Is the data encrypted?

- No, the sync file is plain JSON
- Anyone with access to the file can read it
- For home/family use, this is typically fine
- Don't share the folder with untrusted people

### Can I backup the sync file?

Yes! You can:
1. Navigate to your cloud folder
2. Copy `education-data-sync.json` to a backup location
3. This is a complete backup of all your data

To restore from backup:
1. Place the backup file in your cloud sync folder
2. Rename it to `education-data-sync.json`
3. Click "Sync Now" in the app

---

## Advanced Usage

### Checking the Sync File

You can open `education-data-sync.json` in any text editor to see your data:

```json
{
  "users": { ... },
  "children": { ... },
  "progress": { ... },
  "assignments": { ... },
  "lastSyncTime": "2026-01-20T15:30:00.000Z",
  "deviceId": "device-1737..."
}
```

**Don't manually edit this file** unless you know what you're doing!

### Using a Subfolder

You can organize your sync file in a subfolder:

1. Create a folder: `OneDrive\EducationApp`
2. Select that folder when setting up sync
3. The sync file will be: `OneDrive\EducationApp\education-data-sync.json`

### Multiple Families (Advanced)

If you want to keep data separate for multiple families:

1. Create separate folders: `OneDrive\Family1`, `OneDrive\Family2`
2. On each computer, select the appropriate family folder
3. Each family will have its own sync file
4. Data won't mix between families

---

## Comparison with Export/Import

| Feature | Cloud Sync | Export/Import |
|---------|-----------|---------------|
| Automatic | ✅ Yes | ❌ Manual |
| Multi-device | ✅ Yes | ❌ Manual transfer |
| Real-time | ✅ Every minute | ❌ When you remember |
| Easy setup | ✅ One-time | ❌ Every time |
| Requires | Chrome/Edge | Any browser |
| Best for | Regular multi-device use | One-time backups |

**Recommendation:** Use both!
- Enable cloud sync for automatic syncing
- Still use Export occasionally for backups

---

## Disabling Cloud Sync

To stop using cloud sync:

1. Go to Parent Dashboard
2. In the Cloud Sync section, click **"🔌 Disconnect"**
3. Confirm the disconnection
4. Cloud sync will stop (local data remains)

**Note:** The sync file in your cloud folder will remain. You can delete it manually if desired.

---

## FAQ

### Q: Do I need to keep the app open for sync to work?

**A:** No! The cloud service (OneDrive/Dropbox) handles syncing the file even when the app is closed. When you open the app, it checks for the latest version.

### Q: Can I use this without a cloud service?

**A:** You can select any local folder, but it won't sync across devices. For multi-device sync, you need a cloud-synced folder.

### Q: What happens if I lose internet connection?

**A:** The app continues working normally with local data. When internet returns, your cloud service will sync the file. Next time you click "Sync Now," it will load the latest.

### Q: Can I share my sync file with family members?

**A:** Yes, but be careful:
- If multiple people edit simultaneously, last write wins
- Better to have one "admin" parent manage the data
- Or use separate folders for separate families

### Q: Is this as good as a real backend server?

**A:** For home use with 2-3 devices, yes! For schools or many simultaneous users, a proper backend would be better.

### Q: Can I use this with iCloud?

**A:** Yes, if you use Chrome/Edge on Mac and select your iCloud Drive folder. However, iCloud sync can be slower than OneDrive or Dropbox.

---

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Try disconnecting and reconnecting cloud sync
3. Make sure you're using Chrome or Edge browser
4. Check browser console (F12) for error messages

---

## Quick Setup Checklist

- [ ] Using Chrome or Edge browser
- [ ] Logged in as parent
- [ ] Opened Parent Dashboard
- [ ] Clicked "Select Cloud Folder"
- [ ] Selected OneDrive/Dropbox/Google Drive folder
- [ ] Granted permission when prompted
- [ ] Saw "✓ Connected" badge
- [ ] Tested with "Sync Now" button
- [ ] Verified sync file exists in cloud folder

**Setup complete!** Your data will now sync automatically every minute.

---

**Last Updated:** January 2026
**Feature Version:** 1.0.0
**Browser Requirement:** Chrome 86+ or Edge 86+
