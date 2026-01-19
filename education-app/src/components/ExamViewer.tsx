import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { ContentLoader } from '../services/contentLoader';
import { useProgressStore } from '../stores/progressStore';
import type { ExamQuestion, ExamAttempt } from '../types';
import './ExamViewer.css';

interface ExamData {
  examId: string;
  examType: 'practice' | 'assessment';
  title: string;
  description: string;
  passingScore: number;
  timeLimit?: number;
  questions: ExamQuestion[];
}

export function ExamViewer() {
  const { grade, subject, quarter, topicName } = useParams();
  const navigate = useNavigate();
  const saveExamAttempt = useProgressStore(state => state.saveExamAttempt);

  const [exam, setExam] = useState<ExamData | null>(null);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [showExplanations, setShowExplanations] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadExam();
  }, [grade, subject, quarter, topicName]);

  const loadExam = async () => {
    try {
      setLoading(true);
      const examData = await ContentLoader.loadPracticeExam(
        Number(grade),
        subject!,
        Number(quarter),
        topicName!
      );
      setExam(examData);
      setLoading(false);
    } catch (err) {
      setError('Failed to load exam');
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionId: string, answer: number | string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const calculateScore = () => {
    if (!exam) return 0;

    let correct = 0;
    let totalPoints = 0;

    exam.questions.forEach((question) => {
      totalPoints += question.points;
      const userAnswer = answers[question.id];

      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        correct += question.points;
      }
    });

    return Math.round((correct / totalPoints) * 100);
  };

  const handleSubmit = () => {
    if (!exam) return;

    // Check if all questions answered
    const unansweredCount = exam.questions.filter(
      (q) => answers[q.id] === undefined
    ).length;

    if (unansweredCount > 0) {
      const confirmSubmit = window.confirm(
        `You have ${unansweredCount} unanswered question(s). Submit anyway?`
      );
      if (!confirmSubmit) return;
    }

    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setSubmitted(true);

    // Save attempt to progress store
    const lessonId = `grade-${grade}-${subject}-q${quarter}-${topicName}`.replace(
      /topic-/,
      ''
    );

    const attempt: ExamAttempt = {
      attemptId: `${exam.examId}-${Date.now()}`,
      lessonId,
      examType: exam.examType,
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      answers,
      score: calculatedScore,
      totalPoints: 100,
      passed: calculatedScore >= exam.passingScore,
    };

    saveExamAttempt(attempt);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
    setShowExplanations(false);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="exam-viewer">
        <div className="exam-loading">Loading exam...</div>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="exam-viewer">
        <div className="exam-error">
          <h2>Error Loading Exam</h2>
          <p>{error || 'Exam not found'}</p>
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (submitted && score !== null) {
    const passed = score >= exam.passingScore;

    return (
      <div className="exam-viewer">
        <div className="exam-results">
          <h1>Exam Results</h1>
          <div className={`score-display ${passed ? 'passed' : 'failed'}`}>
            <div className="score-number">{score}%</div>
            <div className="score-status">
              {passed ? '✓ Passed' : '✗ Did Not Pass'}
            </div>
            <p className="passing-score">Passing score: {exam.passingScore}%</p>
          </div>

          <div className="results-actions">
            <button onClick={handleRetry} className="retry-button">
              Try Again
            </button>
            <button
              onClick={() => setShowExplanations(!showExplanations)}
              className="toggle-explanations-button"
            >
              {showExplanations ? 'Hide' : 'Show'} Answers & Explanations
            </button>
            <button onClick={() => navigate(-1)} className="back-button">
              Back to Lesson
            </button>
          </div>

          {showExplanations && (
            <div className="explanations-section">
              <h2>Review Questions</h2>
              {exam.questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;

                return (
                  <div
                    key={question.id}
                    className={`question-review ${isCorrect ? 'correct' : 'incorrect'}`}
                  >
                    <div className="question-header">
                      <span className="question-number">Question {index + 1}</span>
                      <span className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>

                    <div className="question-text">
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {question.question}
                      </ReactMarkdown>
                    </div>

                    {question.type === 'multiple-choice' && question.options && (
                      <div className="options-review">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === optIndex;
                          const isCorrectAnswer = question.correctAnswer === optIndex;

                          return (
                            <div
                              key={optIndex}
                              className={`option-review ${
                                isCorrectAnswer ? 'correct-answer' : ''
                              } ${isUserAnswer && !isCorrectAnswer ? 'user-wrong-answer' : ''}`}
                            >
                              {isCorrectAnswer && <span className="correct-marker">✓ </span>}
                              {isUserAnswer && !isCorrectAnswer && <span className="wrong-marker">✗ </span>}
                              <span className="option-text">
                                <ReactMarkdown
                                  remarkPlugins={[remarkMath]}
                                  rehypePlugins={[rehypeKatex]}
                                >
                                  {option}
                                </ReactMarkdown>
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {question.explanation && (
                      <div className="explanation">
                        <strong>Explanation:</strong>{' '}
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {question.explanation}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="exam-viewer">
      <div className="exam-header">
        <h1>{exam.title}</h1>
        <p className="exam-description">{exam.description}</p>
        <div className="exam-info">
          <span>Questions: {exam.questions.length}</span>
          {exam.timeLimit && <span>Time Limit: {exam.timeLimit} minutes</span>}
          <span>Passing Score: {exam.passingScore}%</span>
        </div>
      </div>

      <div className="exam-questions">
        {exam.questions.map((question, index) => (
          <div key={question.id} className="exam-question">
            <div className="question-header">
              <span className="question-number">Question {index + 1}</span>
              <span className="question-points">{question.points} points</span>
            </div>

            <div className="question-text">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {question.question}
              </ReactMarkdown>
            </div>

            {question.type === 'multiple-choice' && question.options && (
              <div className="options">
                {question.options.map((option, optIndex) => (
                  <label key={optIndex} className="option">
                    <input
                      type="radio"
                      name={question.id}
                      value={optIndex}
                      checked={answers[question.id] === optIndex}
                      onChange={() => handleAnswerChange(question.id, optIndex)}
                    />
                    <span className="option-text">
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {option}
                      </ReactMarkdown>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="exam-actions">
        <button onClick={handleSubmit} className="submit-button">
          Submit Exam
        </button>
        <button onClick={() => navigate(-1)} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
}
