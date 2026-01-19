import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentLoader } from '../services/contentLoader';
import { useProgressStore } from '../stores/progressStore';
import './LessonList.css';

interface Lesson {
  grade: number;
  subject: string;
  quarter: number;
  topicName: string;
  displayName: string;
}

export function LessonList() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const getProgress = useProgressStore((state) => state.getProgress);

  useEffect(() => {
    const loadLessons = async () => {
      try {
        const availableLessons = await ContentLoader.getAvailableLessons();
        setLessons(availableLessons);
      } catch (error) {
        console.error('Failed to load lessons:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLessons();
  }, []);

  if (loading) {
    return <div className="loading">Loading lessons...</div>;
  }

  if (lessons.length === 0) {
    return <div className="no-lessons">No lessons available yet.</div>;
  }

  return (
    <div className="lesson-list">
      <h2>📖 Available Lessons</h2>
      <div className="lessons-grid">
        {lessons.map((lesson) => {
          const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
          const progress = getProgress(lessonId);
          const isCompleted = progress?.completed || false;

          return (
            <Link
              key={lessonId}
              to={`/lesson/${lesson.grade}/${lesson.subject}/${lesson.quarter}/${lesson.topicName}`}
              className="lesson-card"
            >
              <div className="lesson-card-header">
                <span className="lesson-subject">{lesson.subject}</span>
                {isCompleted && <span className="completed-badge">✓ Completed</span>}
              </div>
              <h3>{lesson.displayName}</h3>
              <div className="lesson-meta">
                <span>Grade {lesson.grade}</span>
                <span>Quarter {lesson.quarter}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
