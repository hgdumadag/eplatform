import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ContentLoader } from '../services/contentLoader';
import {
  FreeTextGradingRequestError,
  gradeFreeTextAnswers as requestFreeTextGrading,
} from '../services/freeTextGradingService';
import { useProgressStore } from '../stores/progressStore';
import {
  buildQuestionResults,
  calculateScoreFromResults,
  getAnsweredFreeTextQuestionIds,
  isAiGradedQuestionType,
  getQuestionKey,
} from '../utils/examGrading';
import type {
  ExamAttempt,
  ExamQuestionResult,
  FreeTextGradingResponse,
  LessonExamData,
} from '../types';
import { buildLessonKey } from '../utils/lessonKey';
import { RichContentRenderer } from './rich-content/RichContentRenderer';
import './ExamViewer.css';

export function ExamViewer() {
  const { grade, subject, quarter, topicName } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const examType = searchParams.get('type') || 'practice';
  const saveExamAttempt = useProgressStore(state => state.saveExamAttempt);

  const [exam, setExam] = useState<LessonExamData | null>(null);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [questionResults, setQuestionResults] = useState<Record<string, ExamQuestionResult>>({});
  const [startTime] = useState<number>(Date.now());
  const [showExplanations, setShowExplanations] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const lessonId = grade && subject && quarter && topicName
    ? buildLessonKey({
        grade: Number(grade),
        subject,
        quarter: Number(quarter),
        topicName,
      })
    : '';

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
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

        if (cancelled) {
          return;
        }

        setExam(examData);
        setError(null);
        setLoading(false);
      } catch {
        if (cancelled) {
          return;
        }

        setError('Failed to load exam');
        setLoading(false);
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [examType, grade, quarter, subject, topicName]);

  const handleAnswerChange = (questionId: string, answer: number | string) => {
    setSubmitError(null);
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    if (!exam || !lessonId) return;
    if (submitting) return;

    // Check if all questions answered
    const unansweredCount = exam.questions.filter(
      (q) => answers[getQuestionKey(q.id)] === undefined
    ).length;

    if (unansweredCount > 0) {
      const confirmSubmit = window.confirm(
        `You have ${unansweredCount} unanswered question(s). Submit anyway?`
      );
      if (!confirmSubmit) return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const answeredFreeTextQuestionIds = getAnsweredFreeTextQuestionIds(exam.questions, answers);
      const answeredShortAnswerQuestionIds = exam.questions
        .filter(
          (question) =>
            question.type === 'short-answer' &&
            answers[getQuestionKey(question.id)] !== undefined &&
            String(answers[getQuestionKey(question.id)]).trim().length > 0,
        )
        .map((question) => getQuestionKey(question.id));
      let freeTextResponse: FreeTextGradingResponse | undefined;

      if (answeredFreeTextQuestionIds.length > 0) {
        try {
          freeTextResponse = await requestFreeTextGrading({
            grade: Number(grade),
            subject: subject!,
            quarter: Number(quarter),
            topicName: topicName!,
            examType: exam.examType,
            answers,
          });
        } catch (gradingError) {
          if (answeredShortAnswerQuestionIds.length > 0) {
            throw gradingError;
          }

          console.warn('AI grading unavailable for fill-in answers. Falling back to local grading.', gradingError);
          freeTextResponse = undefined;
        }
      }

      if (freeTextResponse) {
        const returnedQuestionIds = new Set(freeTextResponse.results.map((result) => result.questionId));
        const missingQuestionId = answeredShortAnswerQuestionIds.find(
          (questionId) => !returnedQuestionIds.has(questionId),
        );

        if (missingQuestionId) {
          throw new FreeTextGradingRequestError(
            `Missing grading result for question ${missingQuestionId}.`,
            'missing_result',
            true,
          );
        }
      }

      const calculatedQuestionResults = buildQuestionResults(exam.questions, answers, freeTextResponse);
      const calculatedScore = calculateScoreFromResults(exam.questions, calculatedQuestionResults);
      const totalPoints = exam.questions.reduce((sum, question) => sum + question.points, 0);
      const timeSpent = Math.round((Date.now() - startTime) / 60000); // minutes

      const attempt: ExamAttempt = {
        attemptId: `${exam.examId}-${Date.now()}`,
        lessonId,
        examType: exam.examType,
        startedAt: new Date(startTime).toISOString(),
        completedAt: new Date().toISOString(),
        answers,
        score: calculatedScore,
        totalPoints,
        passed: calculatedScore >= exam.passingScore,
        timeSpent: Math.max(1, timeSpent), // At least 1 minute
        questionResults: calculatedQuestionResults,
      };

      setQuestionResults(calculatedQuestionResults);
      setScore(calculatedScore);
      setSubmitted(true);
      saveExamAttempt(attempt);
    } catch (submissionError) {
      const typedError = submissionError as Error;
      setSubmitError(typedError.message || 'Failed to submit exam.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
    setQuestionResults({});
    setSubmitError(null);
    setShowExplanations(false);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="exam-viewer exam-mode">
        <div className="exam-loading">Loading exam...</div>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="exam-viewer exam-mode">
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
    const resultsInteractionMode = exam.examType === 'assessment' ? 'readonly' : 'interactive';
    const examBasePath = exam.examType === 'assessment' ? 'assessment.json' : 'practice.json';

    return (
      <div className="exam-viewer results-mode">
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
                const questionId = getQuestionKey(question.id);
                const userAnswer = answers[questionId];
                const result = questionResults[questionId];
                const isCorrect = result?.isCorrect ?? false;

                return (
                  <div
                    key={questionId}
                    className={`question-review ${isCorrect ? 'correct' : 'incorrect'}`}
                  >
                    <div className="question-header">
                      <span className="question-number">Question {index + 1}</span>
                      <span className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>

                    <div className="question-text">
                      <RichContentRenderer
                        markdown={question.question}
                        lessonKey={lessonId}
                        context="exam-question"
                        interactionMode={resultsInteractionMode}
                        basePath={examBasePath}
                      />
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
                              <div className="option-text">
                                <RichContentRenderer
                                  markdown={option}
                                  lessonKey={lessonId}
                                  context="exam-option"
                                  interactionMode={resultsInteractionMode}
                                  basePath={examBasePath}
                                />
                              </div>
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
                            {userAnswer !== undefined ? String(userAnswer) : 'No answer'}
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
                            {userAnswer !== undefined ? String(userAnswer) : 'No answer'}
                          </span>
                        </div>
                        {question.type === 'fill-in' && !isCorrect && (
                          <div className="answer-row">
                            <strong>Correct Answer:</strong>{' '}
                            <span className="correct-text">{String(question.correctAnswer)}</span>
                          </div>
                        )}
                        {isAiGradedQuestionType(question.type) && result?.feedback && (
                          <div className="answer-row">
                            <strong>Feedback:</strong>{' '}
                            <span className={isCorrect ? 'correct-text' : 'incorrect-text'}>
                              {result.feedback}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {question.explanation && (
                      <div className="explanation">
                        <strong>Explanation:</strong>{' '}
                        <RichContentRenderer
                          markdown={question.explanation}
                          lessonKey={lessonId}
                          context="exam-explanation"
                          interactionMode={resultsInteractionMode}
                          basePath={examBasePath}
                        />
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

  const takingInteractionMode = exam.examType === 'assessment' ? 'readonly' : 'interactive';
  const examBasePath = exam.examType === 'assessment' ? 'assessment.json' : 'practice.json';

  return (
    <div className="exam-viewer exam-mode">
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
        {exam.questions.map((question, index) => {
          const questionId = getQuestionKey(question.id);

          return (
            <div key={questionId} className="exam-question">
              <div className="question-header">
                <span className="question-number">Question {index + 1}</span>
                <span className="question-points">{question.points} points</span>
              </div>

              <div className="question-text">
                <RichContentRenderer
                  markdown={question.question}
                  lessonKey={lessonId}
                  context="exam-question"
                  interactionMode={takingInteractionMode}
                  basePath={examBasePath}
                />
              </div>

              {/* Multiple Choice */}
              {question.type === 'multiple-choice' && question.options && (
                <div className="options">
                  {question.options.map((option, optIndex) => (
                    <label key={optIndex} className="option">
                      <input
                        type="radio"
                        name={questionId}
                        value={optIndex}
                        checked={answers[questionId] === optIndex}
                        onChange={() => handleAnswerChange(questionId, optIndex)}
                      />
                      <div className="option-text">
                        <RichContentRenderer
                          markdown={option}
                          lessonKey={lessonId}
                          context="exam-option"
                          interactionMode={takingInteractionMode}
                          basePath={examBasePath}
                        />
                      </div>
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
                      name={questionId}
                      value="true"
                      checked={answers[questionId] === 'true'}
                      onChange={() => handleAnswerChange(questionId, 'true')}
                    />
                    <span className="option-text">True</span>
                  </label>
                  <label className="option">
                    <input
                      type="radio"
                      name={questionId}
                      value="false"
                      checked={answers[questionId] === 'false'}
                      onChange={() => handleAnswerChange(questionId, 'false')}
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
                    value={(answers[questionId] as string) || ''}
                    onChange={(e) => handleAnswerChange(questionId, e.target.value)}
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
                    value={(answers[questionId] as string) || ''}
                    onChange={(e) => handleAnswerChange(questionId, e.target.value)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {submitError && (
        <div className="exam-error">
          <h2>Unable to Submit</h2>
          <p>{submitError}</p>
        </div>
      )}

      <div className="exam-actions">
        <button onClick={() => void handleSubmit()} className="submit-button" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Exam'}
        </button>
        <button onClick={() => navigate(-1)} className="cancel-button" disabled={submitting}>
          Cancel
        </button>
      </div>
    </div>
  );
}
