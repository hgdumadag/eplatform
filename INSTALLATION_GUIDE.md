# Educational Platform - Installation Guide

## Table of Contents
- [System Requirements](#system-requirements)
- [Method 1: Transfer via USB/External Drive](#method-1-transfer-via-usbexternal-drive)
- [Method 2: Transfer via Git Repository](#method-2-transfer-via-git-repository)
- [Method 3: Transfer via Cloud Storage](#method-3-transfer-via-cloud-storage)
- [Initial Setup on New Computer](#initial-setup-on-new-computer)
- [Preserving User Data](#preserving-user-data)
- [Troubleshooting](#troubleshooting)

---

## System Requirements

### Both Windows and Mac

**Required Software:**
1. **Node.js** (v18 or higher recommended)
   - Includes npm (Node Package Manager)
   - Download: https://nodejs.org/

2. **Code Editor** (Optional but recommended)
   - Visual Studio Code: https://code.visualstudio.com/
   - Or any text editor of your choice

**Minimum Hardware:**
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: At least 500MB free space for the application and dependencies
- **Display**: 1280x720 minimum resolution

**Operating Systems:**
- **Windows**: Windows 10 or higher
- **Mac**: macOS 10.15 (Catalina) or higher

---

## Method 1: Transfer via USB/External Drive

**Best for:** Computers without internet or transferring to multiple machines locally.

### Step 1: Prepare Files on Source Computer

#### Windows:
1. Open File Explorer
2. Navigate to `D:\programs\e_platform`
3. Right-click on the `e_platform` folder
4. Select **"Copy"**
5. Plug in your USB drive
6. Open the USB drive
7. Right-click and select **"Paste"**
8. Wait for the copy to complete (may take 5-15 minutes depending on size)

#### Mac:
1. Open Finder
2. Navigate to the folder containing `e_platform`
3. Right-click (or Control+click) on the `e_platform` folder
4. Select **"Copy"**
5. Plug in your USB drive (should appear in Finder sidebar)
6. Open the USB drive
7. Right-click and select **"Paste Item"** or press `Cmd + V`
8. Wait for the copy to complete

### Step 2: Transfer to New Computer

1. **Plug in the USB drive** to the new computer
2. **Copy the folder** from USB to a local directory:
   - **Windows**: Copy to `C:\Users\[YourUsername]\Documents\e_platform`
   - **Mac**: Copy to `/Users/[YourUsername]/Documents/e_platform`

### Step 3: Clean Up (Important!)

Before running on the new computer, you need to **delete the `node_modules` folder** as it contains system-specific compiled binaries:

#### Windows:
1. Navigate to the copied folder: `e_platform\education-app`
2. Find the `node_modules` folder
3. Right-click and select **"Delete"**
4. Confirm deletion (this may take a while as it contains thousands of files)

#### Mac:
1. Navigate to the copied folder: `e_platform/education-app`
2. Find the `node_modules` folder
3. Right-click and select **"Move to Trash"**
4. Empty trash

**Alternative (Command Line - Faster):**

**Windows (PowerShell):**
```powershell
cd C:\Users\[YourUsername]\Documents\e_platform\education-app
Remove-Item -Recurse -Force node_modules
```

**Mac (Terminal):**
```bash
cd /Users/[YourUsername]/Documents/e_platform/education-app
rm -rf node_modules
```

---

## Method 2: Transfer via Git Repository

**Best for:** Version control, easy updates, and transferring to multiple computers over time.

### Step 1: Create Git Repository (Source Computer)

#### Initialize Git (if not already done):

**Windows (PowerShell or Git Bash):**
```powershell
cd D:\programs\e_platform
git init
git add .
git commit -m "Initial commit of education platform"
```

**Mac (Terminal):**
```bash
cd /path/to/e_platform
git init
git add .
git commit -m "Initial commit of education platform"
```

#### Push to GitHub/GitLab (Recommended):

1. **Create a repository** on GitHub:
   - Go to https://github.com
   - Click **"New repository"**
   - Name it `education-platform` (or your choice)
   - Choose **Private** if you want to keep it private
   - Click **"Create repository"**

2. **Push your code**:
```bash
git remote add origin https://github.com/[YourUsername]/education-platform.git
git branch -M main
git push -u origin main
```

### Step 2: Clone on New Computer

**Windows (PowerShell or Git Bash):**
```powershell
cd C:\Users\[YourUsername]\Documents
git clone https://github.com/[YourUsername]/education-platform.git e_platform
```

**Mac (Terminal):**
```bash
cd /Users/[YourUsername]/Documents
git clone https://github.com/[YourUsername]/education-platform.git e_platform
```

**Note:** Git automatically excludes `node_modules` via `.gitignore`, so you don't need to delete it.

---

## Method 3: Transfer via Cloud Storage

**Best for:** Easy sharing between your own devices with internet access.

### Supported Cloud Services:
- Google Drive
- Dropbox
- OneDrive
- iCloud Drive (Mac)

### Steps:

1. **Upload to Cloud**:
   - Compress the `e_platform` folder into a ZIP file first (right-click → "Compress" or "Send to → Compressed folder")
   - Upload the ZIP file to your cloud storage
   - Share link or access from the new computer

2. **Download on New Computer**:
   - Download the ZIP file from cloud storage
   - Extract the ZIP file to your desired location
   - **Delete `node_modules` folder** as described in Method 1, Step 3

---

## Initial Setup on New Computer

### Step 1: Install Node.js

#### Windows:
1. Download Node.js from https://nodejs.org/
2. Run the installer (`.msi` file)
3. Follow the installation wizard:
   - Accept license agreement
   - Use default installation path
   - **Important**: Check the box "Automatically install the necessary tools"
4. Restart your computer after installation

**Verify Installation (PowerShell):**
```powershell
node --version
npm --version
```

You should see version numbers like:
```
v20.x.x
10.x.x
```

#### Mac:
1. Download Node.js from https://nodejs.org/
2. Run the installer (`.pkg` file)
3. Follow the installation wizard
4. Enter your password when prompted

**Verify Installation (Terminal):**
```bash
node --version
npm --version
```

**Alternative - Using Homebrew (Mac):**
```bash
# Install Homebrew first (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

### Step 2: Install Dependencies

Navigate to the application folder and install dependencies:

#### Windows (PowerShell):
```powershell
cd C:\Users\[YourUsername]\Documents\e_platform\education-app
npm install
```

#### Mac (Terminal):
```bash
cd /Users/[YourUsername]/Documents/e_platform/education-app
npm install
```

**This will take 3-10 minutes** depending on your internet speed. You'll see progress as npm downloads all required packages.

### Step 3: Run the Application

#### Windows (PowerShell):
```powershell
npm run dev
```

#### Mac (Terminal):
```bash
npm run dev
```

**Expected Output:**
```
VITE v7.x.x  ready in 608 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 4: Access the Application

1. Open your web browser
2. Navigate to: **http://localhost:5173/**
3. You should see the login screen

---

## Preserving User Data

The application stores user data in the browser's localStorage. To preserve data when moving to a new computer:

### Export Data (Old Computer)

1. Open the application in your browser
2. **Login as a parent** (George or Teresa)
3. Navigate to **Parent Dashboard**
4. Click **"📥 Export Progress"**
5. Save the JSON file (e.g., `education-progress-2026-01-20.json`)

### Import Data (New Computer)

1. Open the application on the new computer
2. **Login as a parent**
3. Navigate to **Parent Dashboard**
4. Click **"📤 Import Progress"**
5. Select the JSON file you exported
6. You should see "Progress imported successfully!"

### User Authentication Data

**Note:** User accounts and passwords are also stored in localStorage. After transferring:

- **First time on new computer**: You'll need to set the parent password again
- **Children's accounts**: Will work immediately (no password required)

**To preserve login data:**

1. On the **old computer**, open browser DevTools (F12)
2. Go to **Application** → **Local Storage** → `http://localhost:5173`
3. Find keys: `education-app-users`, `education-app-children`, `education-app-assignments`
4. Copy their values (right-click → Copy)
5. On the **new computer**, after first login, open DevTools
6. Go to **Application** → **Local Storage** → `http://localhost:5173`
7. Paste the values into the corresponding keys

---

## Troubleshooting

### Issue 1: "node is not recognized" (Windows)

**Solution:**
1. Restart PowerShell/Command Prompt
2. If still not working, add Node.js to PATH:
   - Search for "Environment Variables" in Windows
   - Click "Edit the system environment variables"
   - Click "Environment Variables"
   - Under "System variables", find and select "Path"
   - Click "Edit"
   - Click "New"
   - Add: `C:\Program Files\nodejs\`
   - Click OK and restart

### Issue 2: "npm install" fails with permission errors (Mac)

**Solution:**
```bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

Or install Node.js via Homebrew instead.

### Issue 3: Port 5173 already in use

**Solution:**

The app will automatically try the next available port (5174, 5175, etc.). Check the terminal output for the actual port number.

Alternatively, kill the process using the port:

**Windows (PowerShell):**
```powershell
# Find the process
netstat -ano | findstr :5173

# Kill it (replace PID with actual process ID)
taskkill /PID [PID] /F
```

**Mac (Terminal):**
```bash
# Find and kill the process
lsof -ti:5173 | xargs kill -9
```

### Issue 4: Application shows blank screen

**Possible causes and solutions:**

1. **Build errors**: Check the terminal for error messages
2. **Browser cache**: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. **Missing files**: Re-run `npm install`
4. **Wrong directory**: Make sure you're in `education-app` folder, not the parent folder

### Issue 5: Modules not found errors

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # Mac/Linux
Remove-Item -Recurse -Force node_modules, package-lock.json  # Windows

# Reinstall
npm install
```

### Issue 6: Slow npm install on Windows

**Solution:**
1. Disable Windows Defender real-time scanning temporarily
2. Or add exclusion for `node_modules` folder
3. Use `npm ci` instead of `npm install` (faster but requires exact package-lock.json)

### Issue 7: TypeScript errors

**Solution:**
```bash
# Rebuild TypeScript
npm run build
```

---

## File Structure Reference

```
e_platform/
├── education-app/              # Main application folder
│   ├── node_modules/          # Dependencies (don't transfer, reinstall)
│   ├── public/                # Static assets
│   ├── src/                   # Source code
│   │   ├── components/        # React components
│   │   ├── services/          # Business logic
│   │   ├── stores/            # State management (Zustand)
│   │   ├── types/             # TypeScript types
│   │   └── utils/             # Utility functions
│   ├── package.json           # Dependencies list
│   ├── package-lock.json      # Exact dependency versions
│   ├── vite.config.ts         # Vite configuration
│   └── tsconfig.json          # TypeScript configuration
├── content/                   # Educational content (lessons, exams)
├── CONTENT_CREATION_GUIDE.md  # Content creation documentation
└── INSTALLATION_GUIDE.md      # This file
```

---

## Quick Reference Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Stop Server
- Press `Ctrl + C` in the terminal

---

## Test Credentials

After installation, you can test the application with these credentials:

**Children (username only, no password):**
- `yanthy` - Grade 11
- `mateo` - Grade 8
- `geordan` - Grade 5

**Parents (username + password):**
- Username: `george` or `teresa`
- Password: Set on first login (shared between both parents)

---

## Additional Notes

### Updating the Application

If you make changes on one computer and want to sync to another:

**Using Git:**
```bash
# On source computer (with changes)
git add .
git commit -m "Description of changes"
git push

# On destination computer
git pull
npm install  # Only if package.json changed
```

**Using Manual Transfer:**
- Re-copy the folder following Method 1
- Don't forget to delete `node_modules` and run `npm install`

### Running on Different Ports

To specify a custom port:

**Edit `vite.config.ts`:**
```typescript
export default defineConfig({
  server: {
    port: 3000,  // Your custom port
  },
  // ... rest of config
});
```

### Security Considerations

**Important:** This application uses browser localStorage for data storage. It's designed for:
- Home/local use
- Trusted environments
- Educational purposes

**Not recommended for:**
- Production/public deployment without backend
- Sensitive data storage
- Multi-user environments without proper authentication

---

## Support

If you encounter issues not covered in this guide:

1. Check the terminal/console for error messages
2. Ensure Node.js version is 18 or higher: `node --version`
3. Try deleting `node_modules` and running `npm install` again
4. Check browser console for JavaScript errors (F12 → Console tab)

---

## Summary Checklist

- [ ] Install Node.js on new computer
- [ ] Transfer application folder (USB/Git/Cloud)
- [ ] Delete `node_modules` folder (if transferred via USB/Cloud)
- [ ] Run `npm install` in `education-app` folder
- [ ] Run `npm run dev` to start server
- [ ] Access at http://localhost:5173
- [ ] Test login with credentials
- [ ] Import progress data (optional)

---

**Last Updated:** January 2026
**Application Version:** 1.0.0
**Node.js Version Required:** 18+
