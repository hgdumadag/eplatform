import { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { uploadedContentStore } from '../services/uploadedContentStore';
import type { UploadedLesson, UploadedFile } from '../services/uploadedContentStore';
import './ContentUpload.css';

export function ContentUpload() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [uploadedLessons, setUploadedLessons] = useState<UploadedLesson[]>([]);

  const loadUploadedLessons = async () => {
    const lessons = await uploadedContentStore.getAllLessons();
    setUploadedLessons(lessons);
  };

  useEffect(() => {
    loadUploadedLessons();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.zip')) {
      setMessage({ type: 'error', text: 'Please upload a ZIP file' });
      return;
    }

    setUploading(true);
    setMessage(null);

    try {
      const zip = await JSZip.loadAsync(file);

      // Expected structure: grade-X/subject/quarter-Y/topic-name/
      // Find the lesson folder structure
      const files = Object.keys(zip.files);

      // Extract lesson path (should be grade-X/subject/quarter-Y/topic-name/)
      const lessonPathMatch = files.find(f => f.includes('metadata.json'));
      if (!lessonPathMatch) {
        throw new Error('No metadata.json found. Please ensure the ZIP contains a valid lesson structure.');
      }

      const lessonPath = lessonPathMatch.substring(0, lessonPathMatch.lastIndexOf('/'));
      const pathParts = lessonPath.split('/');

      if (pathParts.length !== 4) {
        throw new Error(`Invalid folder structure. Expected: grade-X/subject/quarter-Y/topic-name/\nFound: ${lessonPath}`);
      }

      const [gradePart, subject, quarterPart, topicName] = pathParts;

      // Parse grade and quarter
      const gradeMatch = gradePart.match(/grade-(\d+)/);
      const quarterMatch = quarterPart.match(/quarter-(\d+)/);

      if (!gradeMatch || !quarterMatch) {
        throw new Error(`Invalid grade or quarter format. Grade: ${gradePart}, Quarter: ${quarterPart}`);
      }

      const grade = parseInt(gradeMatch[1]);
      const quarter = parseInt(quarterMatch[1]);

      // Load and validate metadata
      const metadataFile = zip.files[`${lessonPath}/metadata.json`];
      if (!metadataFile) {
        throw new Error('metadata.json not found in lesson folder');
      }

      const metadataContent = await metadataFile.async('text');
      const metadata = JSON.parse(metadataContent);

      // Validate required files
      const requiredFiles = ['metadata.json', 'content.md', 'practice.json'];
      const missingFiles = requiredFiles.filter(f => !zip.files[`${lessonPath}/${f}`]);

      if (missingFiles.length > 0) {
        throw new Error(`Missing required files: ${missingFiles.join(', ')}`);
      }

      // Extract all files
      const uploadedFiles: UploadedFile[] = [];

      for (const filePath of files) {
        if (filePath.startsWith(lessonPath) && !filePath.endsWith('/')) {
          const file = zip.files[filePath];
          const relativePath = filePath.substring(lessonPath.length + 1); // Remove lesson path prefix

          // Determine if binary or text
          const isBinary = /\.(png|jpg|jpeg|gif|mp4|webm|pdf)$/i.test(relativePath);

          const content = isBinary
            ? await file.async('arraybuffer')
            : await file.async('text');

          uploadedFiles.push({
            path: relativePath,
            content,
            type: isBinary ? 'binary' : 'text',
          });
        }
      }

      // Create lesson object
      const lessonId = `${gradePart}-${subject}-q${quarter}-${topicName}`;
      const lesson: UploadedLesson = {
        id: lessonId,
        grade,
        subject,
        quarter,
        topicName,
        displayName: metadata.topicName || topicName,
        uploadedAt: new Date().toISOString(),
        files: uploadedFiles,
      };

      // Save to IndexedDB
      await uploadedContentStore.saveLesson(lesson);

      setMessage({
        type: 'success',
        text: `Successfully uploaded: ${metadata.topicName} (Grade ${grade}, ${subject}, Q${quarter})`
      });

      await loadUploadedLessons();

    } catch (error) {
      console.error('Upload error:', error);
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to upload content'
      });
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset input
    }
  };

  const handleDelete = async (id: string, displayName: string) => {
    if (!window.confirm(`Are you sure you want to delete "${displayName}"?`)) {
      return;
    }

    try {
      await uploadedContentStore.deleteLesson(id);
      setMessage({ type: 'success', text: `Deleted: ${displayName}` });
      await loadUploadedLessons();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete lesson' });
    }
  };

  return (
    <div className="content-upload">
      <div className="upload-section">
        <h2>📤 Upload New Content</h2>
        <p className="upload-instructions">
          Upload a ZIP file containing a lesson following the platform structure:
        </p>
        <div className="structure-example">
          <code>
            grade-X/subject/quarter-Y/topic-name/<br />
            ├── metadata.json (required)<br />
            ├── content.md (required)<br />
            ├── practice.json (required)<br />
            ├── assessment.json (optional)<br />
            └── images/ (optional)
          </code>
        </div>

        <div className="upload-controls">
          <label className="upload-button">
            {uploading ? 'Uploading...' : '📁 Choose ZIP File'}
            <input
              type="file"
              accept=".zip"
              onChange={handleFileUpload}
              disabled={uploading}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        {message && (
          <div className={`upload-message ${message.type}`}>
            {message.type === 'success' ? '✓ ' : '✗ '}
            {message.text}
          </div>
        )}
      </div>

      <div className="uploaded-lessons-section">
        <h2>📚 Uploaded Content ({uploadedLessons.length})</h2>

        {uploadedLessons.length === 0 ? (
          <p className="no-uploads">No uploaded content yet. Upload a ZIP file to get started.</p>
        ) : (
          <div className="uploaded-lessons-list">
            {uploadedLessons.map((lesson) => (
              <div key={lesson.id} className="uploaded-lesson-card">
                <div className="lesson-info">
                  <h3>{lesson.displayName}</h3>
                  <div className="lesson-meta">
                    <span className="badge">Grade {lesson.grade}</span>
                    <span className="badge">{lesson.subject}</span>
                    <span className="badge">Quarter {lesson.quarter}</span>
                  </div>
                  <div className="lesson-details">
                    <span>📁 {lesson.files.length} files</span>
                    <span>📅 {new Date(lesson.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(lesson.id, lesson.displayName)}
                  className="delete-button"
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
