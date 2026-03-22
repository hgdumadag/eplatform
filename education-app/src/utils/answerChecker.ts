/**
 * Utility functions for checking non-LLM answer correctness with flexible matching
 */
import type { ExamQuestion } from '../types';

/**
 * Check if two fractions are equivalent
 * Supports formats: "2/3", "6/9", etc.
 */
function areFractionsEquivalent(userAnswer: string, correctAnswer: string): boolean {
  const fractionRegex = /^(\d+)\/(\d+)$/;

  const userMatch = userAnswer.match(fractionRegex);
  const correctMatch = correctAnswer.match(fractionRegex);

  if (!userMatch || !correctMatch) return false;

  const userNum = parseInt(userMatch[1]);
  const userDenom = parseInt(userMatch[2]);
  const correctNum = parseInt(correctMatch[1]);
  const correctDenom = parseInt(correctMatch[2]);

  // Check if fractions are equivalent by cross-multiplication
  // a/b = c/d if a*d = b*c
  return userNum * correctDenom === correctNum * userDenom;
}

/**
 * Normalize text for comparison:
 * - Lowercase
 * - Remove extra whitespace
 * - Remove punctuation
 * - Remove common words (a, an, the, is, are, etc.)
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,!?;:()]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')       // Normalize whitespace
    .trim();
}

/**
 * Main answer checking function with flexible matching for fill-in answers
 */
export function checkAnswer(userAnswer: string, correctAnswer: string, questionType: string): boolean {
  const userStr = String(userAnswer).trim();
  const correctStr = String(correctAnswer).trim();

  // Empty answer is always wrong
  if (!userStr) return false;

  // Exact match (case-insensitive)
  if (userStr.toLowerCase() === correctStr.toLowerCase()) {
    return true;
  }

  // For fill-in questions, try fraction equivalence
  if (questionType === 'fill-in') {
    if (areFractionsEquivalent(userStr, correctStr)) {
      return true;
    }

    // Try normalizing and comparing (removes punctuation and extra spaces)
    const userNorm = normalizeText(userStr);
    const correctNorm = normalizeText(correctStr);
    if (userNorm === correctNorm) {
      return true;
    }
  }

  return false;
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
