import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentLoader } from '../services/contentLoader';
import { useProgressStore } from '../stores/progressStore';
import { useUserStore } from '../stores/userStore';
import { useAssignmentStore } from '../stores/assignmentStore';
import { useChildStore } from '../stores/childStore';
import { buildLessonKey } from '../utils/lessonKey';
import {
  getLessonGradeDisplay,
  getLessonGradeFilterKey,
  isLessonAccessibleToChild,
} from '../utils/collegeReview';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    grade: 'all',
    subject: 'all',
    quarter: 'all',
    status: 'all',
  });
  const getProgress = useProgressStore((state) => state.getProgress);
  const { currentUser } = useUserStore();
  const { isAssigned } = useAssignmentStore();
  const { activeChild } = useChildStore();

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

  // Filter lessons based on search and filters
  const filteredLessons = lessons.filter((lesson) => {
    const lessonId = buildLessonKey({
      grade: lesson.grade,
      subject: lesson.subject,
      quarter: lesson.quarter,
      topicName: lesson.topicName,
    });
    const progress = getProgress(lessonId);

    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      lesson.displayName.toLowerCase().includes(searchLower) ||
      lesson.subject.toLowerCase().includes(searchLower) ||
      getLessonGradeDisplay(lesson).toLowerCase().includes(searchLower);

    // Subject filter
    const matchesSubject = filters.subject === 'all' || lesson.subject === filters.subject;

    // Quarter filter
    const matchesQuarter =
      filters.quarter === 'all' || lesson.quarter === parseInt(filters.quarter);
    const matchesGrade = filters.grade === 'all' || getLessonGradeFilterKey(lesson) === filters.grade;

    // Status filter
    let matchesStatus = true;
    if (filters.status === 'completed') {
      matchesStatus = progress?.completed || false;
    } else if (filters.status === 'in-progress') {
      matchesStatus = (progress?.startedAt && !progress?.completed) || false;
    } else if (filters.status === 'not-started') {
      matchesStatus = !progress?.startedAt || false;
    }

    // Children only see grade-appropriate or assigned lessons.
    // Parents/admins can browse the full catalog even when a child is selected.
    const isChildView = currentUser?.role === 'child';

    if (isChildView && activeChild) {
      // For children: show grade-appropriate OR assigned lessons
      const isAssignedToChild = isAssigned(activeChild.id, lessonId);
      const matchesChildAccess = isLessonAccessibleToChild(lesson, activeChild.grade, isAssignedToChild);

      return matchesSearch && matchesChildAccess && matchesGrade && matchesSubject && matchesQuarter && matchesStatus;
    }

    // For parents without active child: show all lessons with grade filter
    return matchesSearch && matchesGrade && matchesSubject && matchesQuarter && matchesStatus;
  });

  const handleClearFilters = () => {
    setSearchQuery('');
    setFilters({
      grade: 'all',
      subject: 'all',
      quarter: 'all',
      status: 'all',
    });
  };

  const activeFilterCount = Object.values(filters).filter((v) => v !== 'all').length;
  const availableGradeFilters = Array.from(
    new Map(
      lessons.map((lesson) => [
        getLessonGradeFilterKey(lesson),
        {
          key: getLessonGradeFilterKey(lesson),
          label: getLessonGradeDisplay(lesson),
          sortValue: lesson.grade,
        },
      ]),
    ).values(),
  ).sort((a, b) => a.label.localeCompare(b.label) || a.sortValue - b.sortValue);
  const availableSubjects = Array.from(new Set(lessons.map((lesson) => lesson.subject))).sort();

  if (lessons.length === 0) {
    return <div className="no-lessons">No lessons available yet.</div>;
  }

  return (
    <div className="lesson-list">
      <h2>📖 Available Lessons</h2>

      {/* Search and Filter Bar */}
      <div className="filter-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters-container">
          <select
            value={filters.grade}
            onChange={(e) => setFilters({ ...filters, grade: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Grades</option>
            {availableGradeFilters.map((gradeOption) => (
              <option key={gradeOption.key} value={gradeOption.key}>
                {gradeOption.label}
              </option>
            ))}
          </select>

          <select
            value={filters.subject}
            onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Subjects</option>
            {availableSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={filters.quarter}
            onChange={(e) => setFilters({ ...filters, quarter: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Quarters</option>
            <option value="1">Quarter 1</option>
            <option value="2">Quarter 2</option>
            <option value="3">Quarter 3</option>
            <option value="4">Quarter 4</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="not-started">Not Started</option>
          </select>

          {(activeFilterCount > 0 || searchQuery) && (
            <button onClick={handleClearFilters} className="clear-filters-button">
              Clear Filters
            </button>
          )}
        </div>

        <div className="results-count">
          Showing {filteredLessons.length} of {lessons.length} lessons
          {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount} filters active</span>}
        </div>
      </div>

      {filteredLessons.length === 0 ? (
        <div className="no-results">
          No lessons match your search or filters. Try adjusting your criteria.
        </div>
      ) : (
        <div className="lessons-grid">
          {filteredLessons.map((lesson) => {
          const lessonId = buildLessonKey({
            grade: lesson.grade,
            subject: lesson.subject,
            quarter: lesson.quarter,
            topicName: lesson.topicName,
          });
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
                {isAssigned(activeChild?.id || '', lessonId) && (
                  <span className="assigned-badge">🎯 Assigned</span>
                )}
              </div>
              <h3>{lesson.displayName}</h3>
              <div className="lesson-meta">
                <span>{getLessonGradeDisplay(lesson)}</span>
                <span>Quarter {lesson.quarter}</span>
              </div>
            </Link>
          );
        })}
        </div>
      )}
    </div>
  );
}
