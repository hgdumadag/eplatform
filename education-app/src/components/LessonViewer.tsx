import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import { ContentLoader } from '../services/contentLoader';
import { useProgressStore } from '../stores/progressStore';
import type { TopicMetadata } from '../types';
import './LessonViewer.css';

export function LessonViewer() {
  const { grade, subject, quarter, topicName } = useParams<{
    grade: string;
    subject: string;
    quarter: string;
    topicName: string;
  }>();

  const navigate = useNavigate();
  const [metadata, setMetadata] = useState<TopicMetadata | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { markStarted, markComplete, getProgress, getExamAttempts, updateLessonTime } = useProgressStore();

  const lessonId = `${grade}-${subject}-${quarter}-${topicName}`;
  const progress = getProgress(lessonId);
  const examAttempts = getExamAttempts(lessonId);

  const startTimeRef = useRef<number>(Date.now());
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const loadLesson = async () => {
      if (!grade || !subject || !quarter || !topicName) {
        setError('Invalid lesson parameters');
        setLoading(false);
        return;
      }

      try {
        const gradeNum = parseInt(grade);
        const quarterNum = parseInt(quarter);

        const lessonData = await ContentLoader.loadLesson(
          gradeNum,
          subject,
          quarterNum,
          topicName
        );

        setMetadata(lessonData.metadata);
        setContent(lessonData.content);

        // Mark as started when lesson is loaded
        markStarted(lessonId);
      } catch (err) {
        console.error('Failed to load lesson:', err);
        setError('Failed to load lesson content. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [grade, subject, quarter, topicName, lessonId, markStarted]);

  // Time tracking
  useEffect(() => {
    startTimeRef.current = Date.now();

    // Save time every minute
    intervalRef.current = window.setInterval(() => {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 60000); // minutes
      if (elapsed > 0) {
        updateLessonTime(lessonId, elapsed);
        startTimeRef.current = Date.now(); // Reset start time
      }
    }, 60000); // Every minute

    // Save time on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 60000);
      if (elapsed > 0) {
        updateLessonTime(lessonId, elapsed);
      }
    };
  }, [lessonId, updateLessonTime]);

  const handleMarkComplete = () => {
    markComplete(lessonId);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleTakePracticeExam = () => {
    navigate(`/exam/${grade}/${subject}/${quarter}/${topicName}`);
  };

  const handleTakeAssessmentExam = () => {
    navigate(`/exam/${grade}/${subject}/${quarter}/${topicName}?type=assessment`);
  };

  if (loading) {
    return (
      <div className="lesson-viewer">
        <div className="loading-state">Loading lesson...</div>
      </div>
    );
  }

  if (error || !metadata) {
    return (
      <div className="lesson-viewer">
        <div className="error-state">
          <p>{error || 'Lesson not found'}</p>
          <button onClick={handleBack} className="btn-secondary">
            Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-viewer">
      <div className="lesson-header">
        <button onClick={handleBack} className="btn-back">
          ← Back to Lessons
        </button>
        <div className="lesson-info">
          <h1>{metadata.topicName}</h1>
          <div className="lesson-meta">
            <span className="badge">{metadata.subject}</span>
            <span>Grade {metadata.grade}</span>
            <span>Quarter {metadata.quarter}</span>
            <span>~{metadata.estimatedDuration} minutes</span>
            {progress?.completed && (
              <span className="badge-success">✓ Completed</span>
            )}
          </div>
          <p className="lesson-description">{metadata.description}</p>
        </div>
      </div>

      <div className="lesson-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div className="lesson-actions">
        {!progress?.completed ? (
          <button onClick={handleMarkComplete} className="btn-primary">
            ✓ Mark as Complete
          </button>
        ) : (
          <div className="completed-message">
            <span className="completed-icon">🎉</span>
            <span>You've completed this lesson!</span>
          </div>
        )}

        {metadata.resources.practiceExam && (
          <button onClick={handleTakePracticeExam} className="btn-exam">
            📝 Take Practice Exam
          </button>
        )}

        {metadata.resources.assessmentExam && (
          <button onClick={handleTakeAssessmentExam} className="btn-exam assessment">
            🎯 Take Assessment Exam
          </button>
        )}

        <button onClick={handleBack} className="btn-secondary">
          Back to Lessons
        </button>
      </div>

      {examAttempts.length > 0 && (
        <div className="exam-history">
          <h3>Practice Exam History</h3>
          <div className="attempt-list">
            {examAttempts.map((attempt, index) => (
              <div key={attempt.attemptId} className="attempt-card">
                <div className="attempt-header">
                  <span className="attempt-number">Attempt {examAttempts.length - index}</span>
                  <span className={`attempt-score ${attempt.passed ? 'passed' : 'failed'}`}>
                    {attempt.score}%
                  </span>
                </div>
                <div className="attempt-details">
                  <span>{new Date(attempt.completedAt || '').toLocaleDateString()}</span>
                  <span>{attempt.passed ? '✓ Passed' : '✗ Did Not Pass'}</span>
                </div>
              </div>
            ))}
          </div>
          {progress?.bestScore !== undefined && (
            <div className="best-score">
              Best Score: <strong>{progress.bestScore}%</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
