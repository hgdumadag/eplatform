/**
 * Utility functions for checking answer correctness with flexible matching
 */

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
 * Check if the user's answer contains all key words from the correct answer
 * Useful for short-answer questions where order and exact wording don't matter
 */
function containsKeywords(userAnswer: string, correctAnswer: string): boolean {
  const userNorm = normalizeText(userAnswer);
  const correctNorm = normalizeText(correctAnswer);

  // Common filler words to ignore
  const fillerWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'to', 'of', 'in', 'on', 'at', 'and', 'or']);

  // Extract keywords from correct answer
  const keywords = correctNorm
    .split(' ')
    .filter(word => word.length > 0 && !fillerWords.has(word));

  // Check if user answer contains all keywords
  return keywords.every(keyword => userNorm.includes(keyword));
}

/**
 * Main answer checking function with flexible matching
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

  // For short-answer questions, use keyword matching
  if (questionType === 'short-answer') {
    // Check if user answer contains all key concepts
    if (containsKeywords(userStr, correctStr)) {
      return true;
    }

    // Also check reverse (in case correct answer is longer)
    // Accept if correct answer keywords are in user answer
    const userNorm = normalizeText(userStr);
    const correctNorm = normalizeText(correctStr);

    // Split both into words and check overlap
    const userWords = new Set(userNorm.split(' '));
    const correctWords = correctNorm.split(' ');

    // If user answer contains at least 60% of correct answer words, consider it correct
    const matchedWords = correctWords.filter(word => userWords.has(word));
    const matchPercentage = matchedWords.length / correctWords.length;

    return matchPercentage >= 0.6;
  }

  return false;
}
