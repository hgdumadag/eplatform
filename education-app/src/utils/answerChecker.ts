/**
 * Utility functions for checking non-LLM answer correctness with flexible matching
 */
import type { ExamQuestion } from '../types';

interface ParsedFraction {
  numerator: number;
  denominator: number;
}

interface ParsedNumericValue {
  value: number;
  isPercent: boolean;
}

function normalizeMathText(text: string): string {
  return text
    .trim()
    .replace(/^\$+|\$+$/g, '')
    .replace(/\\left|\\right/g, '')
    .replace(/\\%/g, '%')
    .replace(/\\infty/g, 'infinity')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitAlternativeAnswers(answer: string): string[] {
  return answer
    .split(/\s+or\s+/i)
    .map((option) => option.trim())
    .filter(Boolean);
}

/**
 * Check if two fractions are equivalent
 * Supports formats: "2/3", "6/9", etc.
 */
function parseFraction(value: string): ParsedFraction | null {
  const normalized = normalizeMathText(value).replace(/\s+/g, '');
  const plainFractionRegex = /^([+-]?\d+)\/([+-]?\d+)$/;
  const latexFractionRegex = /^([+-]?)\\frac\{([+-]?\d+)\}\{([+-]?\d+)\}$/;

  const plainMatch = normalized.match(plainFractionRegex);
  if (plainMatch) {
    const numerator = parseInt(plainMatch[1], 10);
    const denominator = parseInt(plainMatch[2], 10);

    if (denominator === 0) {
      return null;
    }

    return { numerator, denominator };
  }

  const latexMatch = normalized.match(latexFractionRegex);
  if (!latexMatch) {
    return null;
  }

  const leadingSign = latexMatch[1] === '-' ? -1 : 1;
  const numerator = leadingSign * parseInt(latexMatch[2], 10);
  const denominator = parseInt(latexMatch[3], 10);

  if (denominator === 0) {
    return null;
  }

  return { numerator, denominator };
}

function areFractionsEquivalent(userAnswer: string, correctAnswer: string): boolean {
  const userFraction = parseFraction(userAnswer);
  const correctFraction = parseFraction(correctAnswer);

  if (!userFraction || !correctFraction) {
    return false;
  }

  // Check if fractions are equivalent by cross-multiplication
  // a/b = c/d if a*d = b*c
  return (
    userFraction.numerator * correctFraction.denominator ===
    correctFraction.numerator * userFraction.denominator
  );
}

function parseNumericValue(value: string): ParsedNumericValue | null {
  const normalized = normalizeMathText(value).replace(/,/g, '').trim();
  const isPercent = normalized.endsWith('%');
  const numericPart = isPercent ? normalized.slice(0, -1).trim() : normalized;

  if (!/^[-+]?\d*\.?\d+$/.test(numericPart)) {
    return null;
  }

  const parsed = Number(numericPart);
  if (!Number.isFinite(parsed)) {
    return null;
  }

  return {
    value: parsed,
    isPercent,
  };
}

function areNumericValuesEquivalent(userAnswer: string, correctAnswer: string): boolean {
  const userNumeric = parseNumericValue(userAnswer);
  const correctNumeric = parseNumericValue(correctAnswer);

  if (!userNumeric || !correctNumeric) {
    return false;
  }

  if (userNumeric.isPercent !== correctNumeric.isPercent) {
    return false;
  }

  return Math.abs(userNumeric.value - correctNumeric.value) < 1e-9;
}

/**
 * Normalize text for comparison:
 * - Lowercase
 * - Remove extra whitespace
 * - Remove punctuation
 * - Remove common words (a, an, the, is, are, etc.)
 */
function normalizeText(text: string): string {
  return normalizeMathText(text)
    .toLowerCase()
    .replace(/[.,!?;:(){}\[\]]/g, '') // Remove punctuation and math wrappers
    .replace(/\s+/g, ' ')       // Normalize whitespace
    .trim();
}

function matchesSingleAnswer(userAnswer: string, correctAnswer: string, questionType: string): boolean {
  const userStr = normalizeMathText(userAnswer);
  const correctStr = normalizeMathText(correctAnswer);

  if (!userStr) {
    return false;
  }

  if (userStr.toLowerCase() === correctStr.toLowerCase()) {
    return true;
  }

  if (questionType === 'fill-in') {
    if (areFractionsEquivalent(userStr, correctStr)) {
      return true;
    }

    if (areNumericValuesEquivalent(userStr, correctStr)) {
      return true;
    }

    const userNorm = normalizeText(userStr);
    const correctNorm = normalizeText(correctStr);
    if (userNorm === correctNorm) {
      return true;
    }
  }

  return false;
}

/**
 * Main answer checking function with flexible matching for fill-in answers
 */
export function checkAnswer(userAnswer: string, correctAnswer: string, questionType: string): boolean {
  const userStr = String(userAnswer).trim();
  const correctStr = String(correctAnswer).trim();
  const acceptedAnswers = splitAlternativeAnswers(correctStr);

  return acceptedAnswers.some((acceptedAnswer) =>
    matchesSingleAnswer(userStr, acceptedAnswer, questionType),
  );
}

export function isAnswerCorrect(
  question: Pick<ExamQuestion, 'type' | 'correctAnswer'>,
  userAnswer: string | number | undefined,
): boolean {
  if (userAnswer === undefined) {
    return false;
  }

  if (question.type === 'multiple-choice' || question.type === 'true-false') {
    return userAnswer === question.correctAnswer;
  }

  if (question.type === 'fill-in') {
    return checkAnswer(String(userAnswer), String(question.correctAnswer), question.type);
  }

  return false;
}
