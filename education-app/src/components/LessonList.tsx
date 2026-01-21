import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContentLoader } from '../services/contentLoader';
import { useProgressStore } from '../stores/progressStore';
import { useUserStore } from '../stores/userStore';
import { useAssignmentStore } from '../stores/assignmentStore';
import { useChildStore } from '../stores/childStore';
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
    const lessonId = `${lesson.grade}-${lesson.subject}-${lesson.quarter}-${lesson.topicName}`;
    const progress = getProgress(lessonId);

    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      lesson.displayName.toLowerCase().includes(searchLower) ||
      lesson.subject.toLowerCase().includes(searchLower) ||
      `grade ${lesson.grade}`.includes(searchLower);

    // Subject filter
    const matchesSubject = filters.subject === 'all' || lesson.subject === filters.subject;

    // Quarter filter
    const matchesQuarter =
      filters.quarter === 'all' || lesson.quarter === parseInt(filters.quarter);

    // Status filter
    let matchesStatus = true;
    if (filters.status === 'completed') {
      matchesStatus = progress?.completed || false;
    } else if (filters.status === 'in-progress') {
      matchesStatus = (progress?.startedAt && !progress?.completed) || false;
    } else if (filters.status === 'not-started') {
      matchesStatus = !progress?.startedAt || false;
    }

    // Check if this is a child view (child user or parent with active child)
    const isChildView = currentUser?.role === 'child' ||
                        (currentUser?.role === 'parent' && activeChild);

    if (isChildView && activeChild) {
      // For children: show grade-appropriate OR assigned lessons
      const isGradeAppropriate = lesson.grade === activeChild.grade;
      const isAssignedToChild = isAssigned(activeChild.id, lessonId);
      const matchesChildAccess = isGradeAppropriate || isAssignedToChild;

      return matchesSearch && matchesChildAccess && matchesSubject && matchesQuarter && matchesStatus;
    }

    // For parents without active child: show all lessons with grade filter
    const matchesGrade = filters.grade === 'all' || lesson.grade === parseInt(filters.grade);
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
            <option value="11">Grade 11</option>
            <option value="8">Grade 8</option>
            <option value="5">Grade 5</option>
          </select>

          <select
            value={filters.subject}
            onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Subjects</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
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
                {isAssigned(activeChild?.id || '', lessonId) && (
                  <span className="assigned-badge">🎯 Assigned</span>
                )}
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
      )}
    </div>
  );
}
