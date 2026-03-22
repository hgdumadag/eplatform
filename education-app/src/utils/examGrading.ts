import type {
  ExamQuestion,
  ExamQuestionResult,
  FreeTextGradingResponse,
} from '../types';
import { isAnswerCorrect } from './answerChecker';

export function getQuestionKey(questionId: string | number): string {
  return String(questionId);
}

function isBlankAnswer(answer: string | number | undefined): boolean {
  if (answer === undefined) {
    return true;
  }

  return String(answer).trim().length === 0;
}

function getUnansweredResult(questionId: string, provider: 'local' | 'openai'): ExamQuestionResult {
  return {
    questionId,
    isCorrect: false,
    feedback: 'No answer submitted.',
    source: 'unanswered',
    provider,
  };
}

export function buildQuestionResults(
  questions: ExamQuestion[],
  answers: Record<string, string | number>,
  freeTextResponse?: FreeTextGradingResponse,
): Record<string, ExamQuestionResult> {
  const freeTextResults = new Map(
    (freeTextResponse?.results || []).map((result) => [result.questionId, result]),
  );

  return questions.reduce<Record<string, ExamQuestionResult>>((results, question) => {
    const questionId = getQuestionKey(question.id);
    const answer = answers[questionId];

    if (question.type === 'short-answer') {
      if (isBlankAnswer(answer)) {
        results[questionId] = getUnansweredResult(questionId, 'openai');
        return results;
      }

      const freeTextResult = freeTextResults.get(questionId);
      results[questionId] = freeTextResult
        ? {
            ...freeTextResult,
            source: 'openai',
            provider: 'openai',
            model: freeTextResponse?.model,
            transport: freeTextResponse?.transport,
          }
        : {
            questionId,
            isCorrect: false,
            feedback: 'Free-text grading result is unavailable.',
            source: 'openai',
            provider: 'openai',
            model: freeTextResponse?.model,
            transport: freeTextResponse?.transport,
            errorCode: 'missing_result',
          };

      return results;
    }

    if (isBlankAnswer(answer)) {
      results[questionId] = getUnansweredResult(questionId, 'local');
      return results;
    }

    results[questionId] = {
      questionId,
      isCorrect: isAnswerCorrect(question, answer),
      source: 'local',
      provider: 'local',
    };

    return results;
  }, {});
}

export function calculateScoreFromResults(
  questions: ExamQuestion[],
  questionResults: Record<string, ExamQuestionResult>,
): number {
  const totalPoints = questions.reduce((sum, question) => sum + question.points, 0);

  if (totalPoints === 0) {
    return 0;
  }

  const earnedPoints = questions.reduce((sum, question) => {
    const questionId = getQuestionKey(question.id);
    return questionResults[questionId]?.isCorrect ? sum + question.points : sum;
  }, 0);

  return Math.round((earnedPoints / totalPoints) * 100);
}

export function getAnsweredFreeTextQuestionIds(
  questions: ExamQuestion[],
  answers: Record<string, string | number>,
): string[] {
  return questions
    .filter((question) => question.type === 'short-answer')
    .map((question) => getQuestionKey(question.id))
    .filter((questionId) => !isBlankAnswer(answers[questionId]));
}
