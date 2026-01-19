import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChildStore } from '../stores/childStore';
import { useProgressStore } from '../stores/progressStore';
import { useParentAuthStore } from '../stores/parentAuthStore';
import { ContentLoader } from '../services/contentLoader';
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
  const { children: progressData } = useProgressStore();
  const { isAuthenticated, authenticate } = useParentAuthStore();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [lessons, setLessons] = useState<LessonSummary[]>([]);

  useEffect(() => {
    // Load available lessons
    ContentLoader.getAvailableLessons().then(setLessons);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await authenticate(password);
    if (!success) {
      setError('Incorrect password');
    }
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="parent-dashboard">
        <div className="auth-container">
          <h1>Parent Dashboard</h1>
          <p className="auth-subtitle">Enter your password to view all children's progress</p>
          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parent password"
              className="auth-input"
              autoFocus
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-button">
              Access Dashboard
            </button>
            <p className="auth-hint">
              First time? Your first entry will set the password.
            </p>
          </form>
          <button onClick={() => navigate('/')} className="back-link">
            ← Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="parent-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Parent Dashboard</h1>
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Lessons
          </button>
        </div>

        {children.map((child) => {
          const childProgress = progressData[child.id]?.lessons || {};
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
                    <span className="stat-value">{lessons.length}</span>
                    <span className="stat-label">Total Lessons</span>
                  </div>
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
                    {lessons.map((lesson) => {
                      const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
                      const progress = childProgress[lessonId];
                      const examAttempts = progress?.examAttempts || [];

                      return (
                        <tr key={lessonId}>
                          <td className="lesson-name">{lesson.displayName}</td>
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
