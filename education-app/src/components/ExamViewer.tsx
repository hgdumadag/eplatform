import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import { ContentLoader } from '../services/contentLoader';
import { useProgressStore } from '../stores/progressStore';
import { checkAnswer } from '../utils/answerChecker';
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
  const [searchParams] = useSearchParams();
  const examType = searchParams.get('type') || 'practice';
  const saveExamAttempt = useProgressStore(state => state.saveExamAttempt);

  const [exam, setExam] = useState<ExamData | null>(null);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [startTime] = useState<number>(Date.now());
  const [showExplanations, setShowExplanations] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadExam();
  }, [grade, subject, quarter, topicName, examType]);

  const loadExam = async () => {
    try {
      setLoading(true);
      const examData = examType === 'assessment'
        ? await ContentLoader.loadAssessmentExam(
            Number(grade),
            subject!,
            Number(quarter),
            topicName!
          )
        : await ContentLoader.loadPracticeExam(
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

      if (userAnswer === undefined) return;

      let isCorrect = false;

      // Different comparison logic based on question type
      if (question.type === 'multiple-choice' || question.type === 'true-false') {
        isCorrect = userAnswer === question.correctAnswer;
      } else if (question.type === 'fill-in' || question.type === 'short-answer') {
        // Use flexible answer checking
        isCorrect = checkAnswer(String(userAnswer), String(question.correctAnswer), question.type);
      }

      if (isCorrect) {
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

    const timeSpent = Math.round((Date.now() - startTime) / 60000); // minutes

    const attempt: ExamAttempt = {
      attemptId: `${exam.examId}-${Date.now()}`,
      lessonId,
      examType: exam.examType,
      startedAt: new Date(startTime).toISOString(),
      completedAt: new Date().toISOString(),
      answers,
      score: calculatedScore,
      totalPoints: 100,
      passed: calculatedScore >= exam.passingScore,
      timeSpent: Math.max(1, timeSpent), // At least 1 minute
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

                // Calculate if answer is correct based on question type
                let isCorrect = false;
                if (userAnswer !== undefined) {
                  if (question.type === 'multiple-choice' || question.type === 'true-false') {
                    isCorrect = userAnswer === question.correctAnswer;
                  } else if (question.type === 'fill-in' || question.type === 'short-answer') {
                    const userAnswerStr = String(userAnswer).trim().toLowerCase();
                    const correctAnswerStr = String(question.correctAnswer).trim().toLowerCase();
                    isCorrect = userAnswerStr === correctAnswerStr;
                  }
                }

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
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeRaw, rehypeKatex]}
                      >
                        {question.question}
                      </ReactMarkdown>
                    </div>

                    {/* Multiple Choice Review */}
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
                                  remarkPlugins={[remarkGfm, remarkMath]}
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

                    {/* True/False Review */}
                    {question.type === 'true-false' && (
                      <div className="answer-review">
                        <div className="answer-row">
                          <strong>Your Answer:</strong>{' '}
                          <span className={isCorrect ? 'correct-text' : 'incorrect-text'}>
                            {userAnswer ? String(userAnswer) : 'No answer'}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="answer-row">
                            <strong>Correct Answer:</strong>{' '}
                            <span className="correct-text">{String(question.correctAnswer)}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Fill-in and Short Answer Review */}
                    {(question.type === 'fill-in' || question.type === 'short-answer') && (
                      <div className="answer-review">
                        <div className="answer-row">
                          <strong>Your Answer:</strong>{' '}
                          <span className={isCorrect ? 'correct-text' : 'incorrect-text'}>
                            {userAnswer ? String(userAnswer) : 'No answer'}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="answer-row">
                            <strong>Correct Answer:</strong>{' '}
                            <span className="correct-text">{String(question.correctAnswer)}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {question.explanation && (
                      <div className="explanation">
                        <strong>Explanation:</strong>{' '}
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkMath]}
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
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {question.question}
              </ReactMarkdown>
            </div>

            {/* Multiple Choice */}
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
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeRaw, rehypeKatex]}
                      >
                        {option}
                      </ReactMarkdown>
                    </span>
                  </label>
                ))}
              </div>
            )}

            {/* True/False */}
            {question.type === 'true-false' && (
              <div className="options">
                <label className="option">
                  <input
                    type="radio"
                    name={question.id}
                    value="true"
                    checked={answers[question.id] === 'true'}
                    onChange={() => handleAnswerChange(question.id, 'true')}
                  />
                  <span className="option-text">True</span>
                </label>
                <label className="option">
                  <input
                    type="radio"
                    name={question.id}
                    value="false"
                    checked={answers[question.id] === 'false'}
                    onChange={() => handleAnswerChange(question.id, 'false')}
                  />
                  <span className="option-text">False</span>
                </label>
              </div>
            )}

            {/* Fill in the Blank */}
            {question.type === 'fill-in' && (
              <div className="fill-in-container">
                <input
                  type="text"
                  className="fill-in-input"
                  placeholder="Type your answer here..."
                  value={(answers[question.id] as string) || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
              </div>
            )}

            {/* Short Answer */}
            {question.type === 'short-answer' && (
              <div className="short-answer-container">
                <textarea
                  className="short-answer-input"
                  placeholder="Type your answer here..."
                  rows={4}
                  value={(answers[question.id] as string) || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
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
