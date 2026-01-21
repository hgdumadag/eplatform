import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChildStore } from '../stores/childStore';
import { useProgressStore } from '../stores/progressStore';
import { useUserStore } from '../stores/userStore';
import { useAssignmentStore } from '../stores/assignmentStore';
import { ContentLoader } from '../services/contentLoader';
import { cloudSyncService } from '../services/cloudSyncService';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './ParentDashboard.css';

interface LessonSummary {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  displayName: string;
}

export function ParentDashboard() {
  const navigate = useNavigate();
  const { children } = useChildStore();
  const { children: progressData, exportProgress, importProgress } = useProgressStore();
  const { currentUser } = useUserStore();
  const { assignTopic, unassignTopic, getAssignments, isAssigned } = useAssignmentStore();
  const [lessons, setLessons] = useState<LessonSummary[]>([]);
  const [importMessage, setImportMessage] = useState('');
  const [expandedChild, setExpandedChild] = useState<string | null>(null);
  const [assignmentFilters, setAssignmentFilters] = useState({ grade: 'all', subject: 'all' });
  const [selectedChildId, setSelectedChildId] = useState<string>('child-1'); // Default to Yanthy
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [cloudSyncStatus, setCloudSyncStatus] = useState(cloudSyncService.getStatus());

  useEffect(() => {
    // Load available lessons
    ContentLoader.getAvailableLessons().then(setLessons);

    // Subscribe to cloud sync status changes
    const unsubscribe = cloudSyncService.subscribe(setCloudSyncStatus);

    // Try to sync from cloud on mount if setup
    if (cloudSyncService.isSetup()) {
      cloudSyncService.syncFromCloud();
    }

    return () => {
      unsubscribe();
    };
  }, []);

  // Update selected subject when child changes
  useEffect(() => {
    const selectedChild = children.find(c => c.id === selectedChildId);
    if (selectedChild && lessons.length > 0) {
      // Get relevant lessons for this child
      const relevantLessons = lessons.filter((lesson) => {
        const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
        const isGradeAppropriate = lesson.grade === selectedChild.grade;
        const isAssignedToChild = isAssigned(selectedChild.id, lessonId);
        return isGradeAppropriate || isAssignedToChild;
      });

      // Get unique subjects and sort alphabetically
      const subjects = Array.from(new Set(relevantLessons.map(l => l.subject))).sort();

      // Set default to first subject alphabetically
      if (subjects.length > 0 && (!selectedSubject || !subjects.includes(selectedSubject))) {
        setSelectedSubject(subjects[0]);
      }
    }
  }, [selectedChildId, lessons, children, isAssigned, selectedSubject]);

  const handleExport = () => {
    const progressJson = exportProgress();
    const blob = new Blob([progressJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const date = new Date().toISOString().split('T')[0];
    link.download = `education-progress-${date}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importProgress(content);

      if (success) {
        setImportMessage('Progress imported successfully!');
        setTimeout(() => setImportMessage(''), 3000);
      } else {
        setImportMessage('Import failed. Please check the file format.');
        setTimeout(() => setImportMessage(''), 3000);
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const handleToggleAssignTopic = (childId: string, lessonId: string) => {
    if (isAssigned(childId, lessonId)) {
      unassignTopic(childId, lessonId);
    } else {
      assignTopic(childId, lessonId, currentUser?.id || '');
    }

    // Trigger cloud sync after assignment change
    if (cloudSyncService.isSetup()) {
      setTimeout(() => cloudSyncService.syncToCloud(), 1000);
    }
  };

  const handleSetupCloudSync = async () => {
    const success = await cloudSyncService.setupCloudSync();
    if (success) {
      setImportMessage('Cloud sync setup successfully!');
      setTimeout(() => setImportMessage(''), 3000);
    }
  };

  const handleManualSync = async () => {
    setImportMessage('Syncing...');
    const success = await cloudSyncService.sync();
    if (success) {
      setImportMessage('Sync completed!');
      setTimeout(() => setImportMessage(''), 3000);
    } else {
      setImportMessage(cloudSyncStatus.error || 'Sync failed');
      setTimeout(() => setImportMessage(''), 5000);
    }
  };

  const handleDisconnectSync = async () => {
    if (window.confirm('Are you sure you want to disconnect cloud sync? You can set it up again later.')) {
      await cloudSyncService.disconnect();
      setImportMessage('Cloud sync disconnected');
      setTimeout(() => setImportMessage(''), 3000);
    }
  };

  const filteredLessonsForAssignment = lessons.filter(lesson => {
    const matchesGrade = assignmentFilters.grade === 'all' || lesson.grade === parseInt(assignmentFilters.grade);
    const matchesSubject = assignmentFilters.subject === 'all' || lesson.subject === assignmentFilters.subject;
    return matchesGrade && matchesSubject;
  });

  const availableSubjects = Array.from(new Set(lessons.map(l => l.subject)));
  const availableGrades = Array.from(new Set(lessons.map(l => l.grade))).sort((a, b) => a - b);

  return (
    <div className="parent-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Parent Dashboard</h1>
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Lessons
          </button>
        </div>

        {/* Export/Import Section */}
        <div className="export-import-section">
          <div className="export-import-buttons">
            <button onClick={handleExport} className="export-button">
              📥 Export Progress
            </button>
            <label className="import-button">
              📤 Import Progress
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          {importMessage && <div className="import-message">{importMessage}</div>}
        </div>

        {/* Cloud Sync Section */}
        <div className="cloud-sync-section">
          <div className="cloud-sync-header">
            <h3>☁️ Cloud Sync (OneDrive/Dropbox/Google Drive)</h3>
            {!cloudSyncService.isSupported() && (
              <p className="sync-warning">
                ⚠️ Cloud sync requires Chrome or Edge browser
              </p>
            )}
          </div>

          {!cloudSyncStatus.isSetup ? (
            <div className="cloud-sync-setup">
              <p className="sync-description">
                Set up automatic cloud sync to keep your data synchronized across all your devices.
                Select a folder in your OneDrive, Dropbox, or Google Drive.
              </p>
              <button
                onClick={handleSetupCloudSync}
                className="setup-sync-button"
                disabled={!cloudSyncService.isSupported()}
              >
                📂 Select Cloud Folder
              </button>
            </div>
          ) : (
            <div className="cloud-sync-connected">
              <div className="sync-status-row">
                <div className="sync-status-info">
                  <span className="sync-status-badge">✓ Connected</span>
                  {cloudSyncStatus.lastSync && (
                    <span className="sync-last-time">
                      Last synced: {new Date(cloudSyncStatus.lastSync).toLocaleString()}
                    </span>
                  )}
                  {cloudSyncStatus.isSyncing && (
                    <span className="sync-in-progress">⟳ Syncing...</span>
                  )}
                </div>
                <div className="sync-actions">
                  <button
                    onClick={handleManualSync}
                    className="manual-sync-button"
                    disabled={cloudSyncStatus.isSyncing}
                  >
                    🔄 Sync Now
                  </button>
                  <button
                    onClick={handleDisconnectSync}
                    className="disconnect-sync-button"
                  >
                    🔌 Disconnect
                  </button>
                </div>
              </div>
              {cloudSyncStatus.error && (
                <div className="sync-error">
                  ⚠️ {cloudSyncStatus.error}
                </div>
              )}
              <p className="sync-info-text">
                💡 Data syncs automatically every minute. Changes are saved to <code>education-data-sync.json</code> in your selected folder.
              </p>
            </div>
          )}
        </div>

        {/* Child and Subject Selectors */}
        <div className="child-selector-section">
          <div className="selector-group">
            <label htmlFor="child-select" className="child-selector-label">
              View Child:
            </label>
            <select
              id="child-select"
              value={selectedChildId}
              onChange={(e) => setSelectedChildId(e.target.value)}
              className="child-selector-dropdown"
            >
              {children.map((child) => (
                <option key={child.id} value={child.id}>
                  {child.name} - Grade {child.grade}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Selector */}
          {selectedChildId && (() => {
            const selectedChild = children.find(c => c.id === selectedChildId);
            if (!selectedChild) return null;

            const relevantLessons = lessons.filter((lesson) => {
              const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
              const isGradeAppropriate = lesson.grade === selectedChild.grade;
              const isAssignedToChild = isAssigned(selectedChild.id, lessonId);
              return isGradeAppropriate || isAssignedToChild;
            });

            const availableSubjects = Array.from(new Set(relevantLessons.map(l => l.subject))).sort();

            return availableSubjects.length > 0 ? (
              <div className="selector-group">
                <label htmlFor="subject-select" className="child-selector-label">
                  View Subject:
                </label>
                <select
                  id="subject-select"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="child-selector-dropdown"
                >
                  {availableSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject.charAt(0).toUpperCase() + subject.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            ) : null;
          })()}
        </div>

        {children.filter(child => child.id === selectedChildId).map((child) => {
          const childProgress = progressData[child.id]?.lessons || {};

          // Filter lessons to only show grade-appropriate or assigned lessons
          const relevantLessons = lessons.filter((lesson) => {
            const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
            const isGradeAppropriate = lesson.grade === child.grade;
            const isAssignedToChild = isAssigned(child.id, lessonId);
            return isGradeAppropriate || isAssignedToChild;
          });

          const completedCount = Object.values(childProgress).filter(
            (p) => p.completed
          ).length;

          return (
            <div key={child.id} className="child-section">
              <div className="child-header">
                <div className="child-info">
                  <h2>{child.name}</h2>
                  <p className="child-grade">Grade {child.grade}</p>
                </div>
                <div className="child-stats">
                  <div className="stat">
                    <span className="stat-value">{completedCount}</span>
                    <span className="stat-label">Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{relevantLessons.length}</span>
                    <span className="stat-label">Available Lessons</span>
                  </div>
                </div>
              </div>

              {/* Topic Assignment Section */}
              <div className="assignment-section">
                <button
                  className="assignment-toggle"
                  onClick={() => setExpandedChild(expandedChild === child.id ? null : child.id)}
                >
                  <span className="toggle-icon">{expandedChild === child.id ? '▼' : '▶'}</span>
                  Assign Topics to {child.name}
                  <span className="assigned-count">
                    {getAssignments(child.id).length} assigned
                  </span>
                </button>

                {expandedChild === child.id && (
                  <div className="assignment-content">
                    {/* Filter Controls */}
                    <div className="assignment-filters">
                      <label>
                        Grade:
                        <select
                          value={assignmentFilters.grade}
                          onChange={(e) => setAssignmentFilters({ ...assignmentFilters, grade: e.target.value })}
                        >
                          <option value="all">All Grades</option>
                          {availableGrades.map(grade => (
                            <option key={grade} value={grade}>Grade {grade}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Subject:
                        <select
                          value={assignmentFilters.subject}
                          onChange={(e) => setAssignmentFilters({ ...assignmentFilters, subject: e.target.value })}
                        >
                          <option value="all">All Subjects</option>
                          {availableSubjects.map(subject => (
                            <option key={subject} value={subject}>
                              {subject.charAt(0).toUpperCase() + subject.slice(1)}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    {/* Available Topics */}
                    <div className="assignment-topics">
                      <h4>Available Topics ({filteredLessonsForAssignment.length})</h4>
                      <div className="topics-list">
                        {filteredLessonsForAssignment.map(lesson => {
                          const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
                          const assigned = isAssigned(child.id, lessonId);
                          const isGradeAppropriate = lesson.grade === child.grade;

                          return (
                            <label key={lessonId} className={`topic-checkbox ${assigned ? 'assigned' : ''}`}>
                              <input
                                type="checkbox"
                                checked={assigned}
                                onChange={() => handleToggleAssignTopic(child.id, lessonId)}
                              />
                              <span className="topic-info">
                                <span className="topic-name">{lesson.displayName}</span>
                                <span className="topic-meta">
                                  Grade {lesson.grade} • {lesson.subject.charAt(0).toUpperCase() + lesson.subject.slice(1)} • Q{lesson.quarter}
                                  {isGradeAppropriate && <span className="grade-badge">Grade Level</span>}
                                </span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Assigned Topics Summary */}
                    {getAssignments(child.id).length > 0 && (
                      <div className="assigned-topics-summary">
                        <h4>Assigned Topics ({getAssignments(child.id).length})</h4>
                        <div className="assigned-topics-list">
                          {getAssignments(child.id).map(assignment => {
                            const lesson = lessons.find(l =>
                              `${l.grade}-${l.subject}-${l.quarter}-${l.topicName}` === assignment.lessonId
                            );

                            return lesson ? (
                              <div key={assignment.lessonId} className="assigned-topic-item">
                                <span className="assigned-topic-name">{lesson.displayName}</span>
                                <span className="assigned-topic-meta">
                                  Assigned {new Date(assignment.assignedAt).toLocaleDateString()}
                                </span>
                                <button
                                  className="remove-assignment-btn"
                                  onClick={() => unassignTopic(child.id, assignment.lessonId)}
                                  title="Remove assignment"
                                >
                                  ✕
                                </button>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Charts and Statistics Section */}
              <div className="charts-section">
                <div className="statistics-grid">
                  {/* Statistics Cards */}
                  {(() => {
                    const allProgress = Object.values(childProgress);
                    const completedLessons = allProgress.filter((p) => p.completed).length;
                    const inProgressLessons = allProgress.filter(
                      (p) => p.startedAt && !p.completed
                    ).length;
                    const totalTime = allProgress.reduce((sum, p) => sum + (p.timeSpent || 0), 0);
                    const allExamAttempts = allProgress.flatMap((p) => p.examAttempts || []);
                    const totalExamAttempts = allExamAttempts.length;
                    const avgScore =
                      totalExamAttempts > 0
                        ? Math.round(
                            allExamAttempts.reduce((sum, a) => sum + (a.score || 0), 0) /
                              totalExamAttempts
                          )
                        : 0;

                    // Subject statistics (use relevant lessons only)
                    const subjectStats: Record<
                      string,
                      { time: number; scores: number[]; completed: number }
                    > = {};
                    relevantLessons.forEach((lesson) => {
                      const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
                      const progress = childProgress[lessonId];
                      if (!subjectStats[lesson.subject]) {
                        subjectStats[lesson.subject] = { time: 0, scores: [], completed: 0 };
                      }
                      if (progress) {
                        subjectStats[lesson.subject].time += progress.timeSpent || 0;
                        if (progress.completed) subjectStats[lesson.subject].completed++;
                        progress.examAttempts?.forEach((a) => {
                          if (a.score !== undefined) {
                            subjectStats[lesson.subject].scores.push(a.score);
                          }
                        });
                      }
                    });

                    const bestSubject = Object.entries(subjectStats)
                      .filter(([, stats]) => stats.scores.length > 0)
                      .sort((a, b) => {
                        const avgA = a[1].scores.reduce((s, sc) => s + sc, 0) / a[1].scores.length;
                        const avgB = b[1].scores.reduce((s, sc) => s + sc, 0) / b[1].scores.length;
                        return avgB - avgA;
                      })[0]?.[0] || 'N/A';

                    // Progress chart data (use relevant lessons only)
                    const progressData = [
                      { name: 'Completed', value: completedLessons, color: '#4caf50' },
                      { name: 'In Progress', value: inProgressLessons, color: '#ff9800' },
                      {
                        name: 'Not Started',
                        value: relevantLessons.length - completedLessons - inProgressLessons,
                        color: '#e0e0e0',
                      },
                    ];

                    // Time by subject data
                    const timeBySubject = Object.entries(subjectStats).map(([subject, stats]) => ({
                      subject: subject.charAt(0).toUpperCase() + subject.slice(1),
                      time: Math.round(stats.time / 60), // Convert to hours
                    }));

                    // Exam scores over time
                    const examScoresData = allExamAttempts
                      .filter((a) => a.completedAt && a.score !== undefined)
                      .sort(
                        (a, b) =>
                          new Date(a.completedAt!).getTime() -
                          new Date(b.completedAt!).getTime()
                      )
                      .slice(-10) // Last 10 attempts
                      .map((a, idx) => ({
                        attempt: `#${idx + 1}`,
                        score: a.score,
                        date: new Date(a.completedAt!).toLocaleDateString(),
                      }));

                    return (
                      <>
                        <div className="stats-cards">
                          <div className="stat-card">
                            <div className="stat-card-value">
                              {completedLessons}/{relevantLessons.length}
                            </div>
                            <div className="stat-card-label">Lessons Completed</div>
                            <div className="stat-card-percentage">
                              {relevantLessons.length > 0 ? Math.round((completedLessons / relevantLessons.length) * 100) : 0}%
                            </div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-card-value">{Math.round(totalTime / 60)}h</div>
                            <div className="stat-card-label">Time Spent</div>
                            <div className="stat-card-subtext">{totalTime} minutes</div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-card-value">{avgScore}%</div>
                            <div className="stat-card-label">Avg Exam Score</div>
                            <div className="stat-card-subtext">{totalExamAttempts} attempts</div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-card-value">{bestSubject}</div>
                            <div className="stat-card-label">Best Subject</div>
                            <div className="stat-card-subtext">Highest avg score</div>
                          </div>
                        </div>

                        <div className="charts-grid">
                          {/* Progress Overview Pie Chart */}
                          <div className="chart-card">
                            <h3>Progress Overview</h3>
                            <ResponsiveContainer width="100%" height={250}>
                              <PieChart>
                                <Pie
                                  data={progressData}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={({ name, value }) => `${name}: ${value}`}
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {progressData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>

                          {/* Time by Subject Bar Chart */}
                          {timeBySubject.length > 0 && (
                            <div className="chart-card">
                              <h3>Time Spent by Subject</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={timeBySubject}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="subject" />
                                  <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                                  <Tooltip />
                                  <Bar dataKey="time" fill="#4a90e2" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          )}

                          {/* Exam Scores Line Chart */}
                          {examScoresData.length > 0 && (
                            <div className="chart-card chart-card-wide">
                              <h3>Recent Exam Scores</h3>
                              <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={examScoresData}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="attempt" />
                                  <YAxis domain={[0, 100]} label={{ value: 'Score %', angle: -90, position: 'insideLeft' }} />
                                  <Tooltip />
                                  <Legend />
                                  <Line
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#4caf50"
                                    strokeWidth={2}
                                    dot={{ r: 5 }}
                                    activeDot={{ r: 7 }}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          )}
                        </div>

                        {/* Subject-Specific Cards */}
                        <div className="subject-cards-section">
                          <h3 className="section-title">Performance by Subject</h3>
                          <div className="subject-cards">
                            {Object.entries(subjectStats)
                              .sort(([a], [b]) => a.localeCompare(b))
                              .filter(([subject]) => subject === selectedSubject)
                              .map(([subject, stats]) => {
                                const subjectLessons = relevantLessons.filter(l => l.subject === subject);
                                const avgScoreForSubject = stats.scores.length > 0
                                  ? Math.round(stats.scores.reduce((sum, s) => sum + s, 0) / stats.scores.length)
                                  : 0;
                                const completionRate = subjectLessons.length > 0
                                  ? Math.round((stats.completed / subjectLessons.length) * 100)
                                  : 0;

                                return (
                                  <div key={subject} className="subject-card">
                                    <div className="subject-card-header">
                                      <h4 className="subject-card-title">
                                        {subject.charAt(0).toUpperCase() + subject.slice(1)}
                                      </h4>
                                    </div>
                                    <div className="subject-card-stats">
                                      <div className="subject-stat">
                                        <span className="subject-stat-value">{stats.completed}/{subjectLessons.length}</span>
                                        <span className="subject-stat-label">Completed</span>
                                      </div>
                                      <div className="subject-stat">
                                        <span className="subject-stat-value">{completionRate}%</span>
                                        <span className="subject-stat-label">Progress</span>
                                      </div>
                                      <div className="subject-stat">
                                        <span className="subject-stat-value">{Math.round(stats.time / 60)}h</span>
                                        <span className="subject-stat-label">Time Spent</span>
                                      </div>
                                      <div className="subject-stat">
                                        <span className="subject-stat-value">{avgScoreForSubject}%</span>
                                        <span className="subject-stat-label">Avg Score</span>
                                      </div>
                                    </div>
                                    <div className="subject-progress-bar">
                                      <div
                                        className="subject-progress-fill"
                                        style={{ width: `${completionRate}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              <div className="progress-table">
                <table>
                  <thead>
                    <tr>
                      <th>Lesson</th>
                      <th>Status</th>
                      <th>Best Score</th>
                      <th>Attempts</th>
                      <th>Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lessons.filter((lesson) => {
                      // Filter to show only grade-appropriate lessons or assigned lessons
                      const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
                      const isGradeAppropriate = lesson.grade === child.grade;
                      const isAssignedToChild = isAssigned(child.id, lessonId);
                      return isGradeAppropriate || isAssignedToChild;
                    }).map((lesson) => {
                      const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
                      const progress = childProgress[lessonId];
                      const examAttempts = progress?.examAttempts || [];
                      const isAssignedToChild = isAssigned(child.id, lessonId);

                      return (
                        <tr key={lessonId}>
                          <td className="lesson-name">
                            {lesson.displayName}
                            {isAssignedToChild && lesson.grade !== child.grade && (
                              <span className="assigned-badge-table">🎯 Assigned</span>
                            )}
                          </td>
                          <td>
                            {progress?.completed ? (
                              <span className="status-badge status-completed">
                                Completed
                              </span>
                            ) : progress?.startedAt ? (
                              <span className="status-badge status-in-progress">
                                In Progress
                              </span>
                            ) : (
                              <span className="status-badge status-not-started">
                                Not Started
                              </span>
                            )}
                          </td>
                          <td>
                            {progress?.bestScore !== undefined
                              ? `${progress.bestScore}%`
                              : '—'}
                          </td>
                          <td>{examAttempts.length || '—'}</td>
                          <td>
                            {progress?.completedAt
                              ? new Date(progress.completedAt).toLocaleDateString()
                              : '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
