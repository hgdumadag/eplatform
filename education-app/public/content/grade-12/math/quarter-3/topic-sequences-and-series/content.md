# Sequences and Series

## Introduction

Sequences and series form the mathematical backbone of growth patterns, financial calculations, and pattern recognition. In the UPCAT, these topics test both procedural fluency and conceptual understanding. An arithmetic sequence demonstrates constant growth, while a geometric sequence captures multiplicative growth. The ability to determine the nth term of a sequence, to sum series, and to recognize which type of sequence governs a given situation separates high-performing students from the rest. This topic emphasizes not just formula application but also the reasoning behind these formulas, enabling students to tackle novel problems and real-world applications with confidence.

## Sequence: Definition and Notation

A sequence is an ordered list of numbers following a specific pattern or rule. Each number in the sequence is called a term, and terms are typically indexed by position: $a_1, a_2, a_3, \ldots, a_n$.

**Example**: The sequence 2, 5, 8, 11, 14, ...
- $a_1 = 2$ (first term)
- $a_2 = 5$ (second term)
- $a_3 = 8$ (third term)

Sequences can be finite (ending after a specific term) or infinite (continuing indefinitely).

## Arithmetic Sequences

An arithmetic sequence has a constant difference between consecutive terms, called the common difference.

**Definition**: A sequence $a_1, a_2, a_3, \ldots$ is arithmetic if there exists a constant d such that:
$$a_{n+1} - a_n = d \text{ for all } n$$

**Finding the common difference**:
$$d = a_2 - a_1 = a_3 - a_2 = a_4 - a_3 = \ldots$$

**Example**: 3, 7, 11, 15, 19, ...
- $d = 7 - 3 = 4$
- $d = 11 - 7 = 4$
- All differences equal 4, confirming this is arithmetic

### The nth Term Formula for Arithmetic Sequences

The nth term of an arithmetic sequence is:
$$a_n = a_1 + (n-1)d$$

where:
- $a_n$ is the nth term
- $a_1$ is the first term
- $d$ is the common difference
- $n$ is the position number

**Derivation**:
- $a_1 = a_1$
- $a_2 = a_1 + d$
- $a_3 = a_1 + 2d$
- $a_n = a_1 + (n-1)d$

**Example**: Find the 10th term of 5, 9, 13, 17, ...
- $a_1 = 5$, $d = 4$
- $a_{10} = 5 + (10-1) \times 4 = 5 + 36 = 41$

### Finding the Common Difference from First and Last Terms

If the first term $a_1$ and the nth term $a_n$ of an n-term arithmetic sequence are known:
$$d = \frac{a_n - a_1}{n - 1}$$

**Example**: An arithmetic sequence has 8 terms with first term 3 and last term 31. Find d.
$$d = \frac{31 - 3}{8 - 1} = \frac{28}{7} = 4$$

## Arithmetic Series: Sum of Terms

A series is the sum of the terms in a sequence. An arithmetic series is the sum of terms in an arithmetic sequence.

**Notation**: $S_n = a_1 + a_2 + a_3 + \ldots + a_n$

**Sum Formula for Arithmetic Series**:
$$S_n = \frac{n}{2}(a_1 + a_n)$$

Alternatively:
$$S_n = \frac{n}{2}(2a_1 + (n-1)d)$$

**Explanation**: The sum can be computed by pairing terms equidistant from the ends. For an arithmetic sequence, these pairs sum to a constant value, so:
$$S_n = \frac{n}{2} \times (\text{sum of first and last term})$$

**Example**: Find the sum of the first 12 terms of 4, 8, 12, 16, ...
- $a_1 = 4$, $d = 4$
- $a_{12} = 4 + (12-1) \times 4 = 4 + 44 = 48$
- $S_{12} = \frac{12}{2}(4 + 48) = 6 \times 52 = 312$

### Special Sums: Building Blocks of Arithmetic Series

**Sum of first n natural numbers**:
$$1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2}$$

**Sum of first n odd numbers**:
$$1 + 3 + 5 + \ldots + (2n-1) = n^2$$

**Sum of first n even numbers**:
$$2 + 4 + 6 + \ldots + 2n = n(n+1)$$

**Example**: Find the sum of the first 20 odd numbers.
- Using formula: $S = 20^2 = 400$
- Verification: Odd numbers are 1, 3, 5, ..., 39. Using $S_n = \frac{20}{2}(1 + 39) = 10 \times 40 = 400$ ✓

### Arithmetic Mean

The arithmetic mean (or average) of two numbers a and b is:
$$\text{Mean} = \frac{a + b}{2}$$

This value is the arithmetic mean and also the midpoint between a and b on the number line. If a, m, and b form an arithmetic sequence, then m is the arithmetic mean of a and b.

**Example**: Find the arithmetic mean of 12 and 28.
$$\text{Mean} = \frac{12 + 28}{2} = \frac{40}{2} = 20$$

Indeed, 12, 20, 28 form an arithmetic sequence with $d = 8$.

## Geometric Sequences

A geometric sequence has a constant ratio between consecutive terms, called the common ratio.

**Definition**: A sequence $a_1, a_2, a_3, \ldots$ is geometric if there exists a constant r (common ratio) such that:
$$\frac{a_{n+1}}{a_n} = r \text{ for all } n$$

**Finding the common ratio**:
$$r = \frac{a_2}{a_1} = \frac{a_3}{a_2} = \frac{a_4}{a_3} = \ldots$$

**Example**: 2, 6, 18, 54, ...
- $r = \frac{6}{2} = 3$
- $r = \frac{18}{6} = 3$
- All ratios equal 3, confirming this is geometric

### The nth Term Formula for Geometric Sequences

The nth term of a geometric sequence is:
$$a_n = a_1 \cdot r^{n-1}$$

where:
- $a_n$ is the nth term
- $a_1$ is the first term
- $r$ is the common ratio
- $n$ is the position number

**Derivation**:
- $a_1 = a_1$
- $a_2 = a_1 \cdot r$
- $a_3 = a_1 \cdot r^2$
- $a_n = a_1 \cdot r^{n-1}$

**Example**: Find the 6th term of 3, 12, 48, 192, ...
- $a_1 = 3$, $r = 4$
- $a_6 = 3 \cdot 4^{6-1} = 3 \cdot 4^5 = 3 \cdot 1024 = 3072$

## Geometric Series: Sum of Terms

A geometric series is the sum of terms in a geometric sequence.

**Sum Formula for Geometric Series** (when $r \neq 1$):
$$S_n = a_1 \cdot \frac{1 - r^n}{1 - r}$$

Alternatively:
$$S_n = a_1 \cdot \frac{r^n - 1}{r - 1}$$

**Special case** (when $r = 1$):
$$S_n = n \cdot a_1$$

**Explanation**: The formula exploits the algebraic property that $1 + r + r^2 + \ldots + r^{n-1} = \frac{1 - r^n}{1 - r}$ when $r \neq 1$.

**Example**: Find the sum of the first 5 terms of 2, 6, 18, 54, ...
- $a_1 = 2$, $r = 3$, $n = 5$
- $S_5 = 2 \cdot \frac{1 - 3^5}{1 - 3} = 2 \cdot \frac{1 - 243}{-2} = 2 \cdot \frac{-242}{-2} = 2 \cdot 121 = 242$

## Inserting Arithmetic Means

To insert k arithmetic means between two numbers a and b, creating an arithmetic sequence of (k+2) terms:

1. Identify the sequence: $a, m_1, m_2, \ldots, m_k, b$ (total k+2 terms)
2. Use the formula for d: $d = \frac{b - a}{k + 1}$
3. Generate each mean: $m_i = a + i \cdot d$ for $i = 1, 2, \ldots, k$

**Example**: Insert 3 arithmetic means between 2 and 14.
- Total terms: 5 (the 2, three means, and 14)
- $d = \frac{14 - 2}{4} = 3$
- Means: 2 + 3 = 5, 5 + 3 = 8, 8 + 3 = 11
- Sequence: 2, 5, 8, 11, 14 ✓

## Key Formulas

**Arithmetic Sequence**:
$$a_n = a_1 + (n-1)d$$

**Arithmetic Series**:
$$S_n = \frac{n}{2}(a_1 + a_n) = \frac{n}{2}(2a_1 + (n-1)d)$$

**Geometric Sequence**:
$$a_n = a_1 \cdot r^{n-1}$$

**Geometric Series** (r ≠ 1):
$$S_n = a_1 \cdot \frac{1 - r^n}{1 - r}$$

**Special Sums**:
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2} \quad \sum_{i=1}^{n} (2i-1) = n^2 \quad \sum_{i=1}^{n} 2i = n(n+1)$$

## Worked Examples

### Example 1: Finding the nth Term of an Arithmetic Sequence

**Problem**: Find the 20th term of the sequence 5, 9, 13, 17, ...

**Solution**:
- First term: $a_1 = 5$
- Common difference: $d = 9 - 5 = 4$
- 20th term: $a_{20} = 5 + (20-1) \times 4 = 5 + 76 = 81$

**Answer**: 81

### Example 2: Computing the Sum of an Arithmetic Series

**Problem**: Find the sum of the first 15 terms of 3, 7, 11, 15, ...

**Solution**:
- $a_1 = 3$, $d = 4$
- $a_{15} = 3 + (15-1) \times 4 = 3 + 56 = 59$
- $S_{15} = \frac{15}{2}(3 + 59) = \frac{15}{2} \times 62 = 15 \times 31 = 465$

**Answer**: 465

### Example 3: Summing a Specific Arithmetic Series

**Problem**: Find the sum of all even integers from 2 to 50.

**Solution**:
- Even integers: 2, 4, 6, ..., 50 form an AP with $a_1 = 2$, $d = 2$, $a_n = 50$
- Number of terms: $n = \frac{50 - 2}{2} + 1 = 24 + 1 = 25$
- Sum: $S_{25} = \frac{25}{2}(2 + 50) = \frac{25}{2} \times 52 = 25 \times 26 = 650$

**Answer**: 650

### Example 4: Finding the nth Term of a Geometric Sequence

**Problem**: Find the 8th term of 2, 6, 18, 54, ...

**Solution**:
- First term: $a_1 = 2$
- Common ratio: $r = \frac{6}{2} = 3$
- 8th term: $a_8 = 2 \times 3^{8-1} = 2 \times 3^7 = 2 \times 2187 = 4374$

**Answer**: 4374

### Example 5: Determining the Number of Terms in a Sequence

**Problem**: How many terms are in the arithmetic sequence -3, 1, 5, ..., 97?

**Solution**:
- $a_1 = -3$, $d = 4$, $a_n = 97$
- Use formula: $a_n = a_1 + (n-1)d$
- $97 = -3 + (n-1) \times 4$
- $100 = (n-1) \times 4$
- $n - 1 = 25$
- $n = 26$

**Answer**: 26 terms

## UPCAT Tips & Common Mistakes

**Tip 1: Distinguish between sequence and series**: A sequence is a list; a series is a sum. An arithmetic sequence is 2, 4, 6, 8; the corresponding arithmetic series is 2 + 4 + 6 + 8.

**Tip 2: Use the correct formula for the given r value**: When $r = 1$, the geometric series sum is $S_n = na_1$, not the usual formula.

**Tip 3: Identify the pattern first**: Before applying formulas, explicitly state what type of sequence you're dealing with and what its defining parameters are.

**Tip 4: Check your common difference or ratio**: Verify by computing the difference/ratio between consecutive terms before proceeding with calculations.

**Tip 5: Index carefully**: Remember that $a_n = a_1 + (n-1)d$, not $a_1 + nd$. The exponent in geometric sequences is $(n-1)$, not $n$.

**Common Mistake 1**: Using the wrong index in the formula. The exponent is $(n-1)$, and $(n-1)$ is also the multiplier of d.

**Common Mistake 2**: Forgetting to identify which formula to use (arithmetic vs. geometric).

**Common Mistake 3**: Miscomputing the common difference or ratio, leading to cascading errors.

**Common Mistake 4**: In geometric series, forgetting the condition $r \neq 1$ and attempting to use the standard formula when $r = 1$.

## Key Takeaways

1. Arithmetic sequences have constant differences; geometric sequences have constant ratios.
2. The nth term formulas allow direct computation without computing all prior terms.
3. Arithmetic series sums exploit the pairing of equidistant terms.
4. Geometric series sums use algebraic identities dependent on the ratio.
5. Special sums (sum of natural numbers, odd numbers, even numbers) are useful shortcuts.
6. Real-world problems often involve determining n (number of terms) or finding missing parameters.
7. Arithmetic and geometric progressions model different types of growth: linear vs. exponential.

## Practice Problems

1. Find the 12th term of 7, 14, 21, 28, ...
2. Find the sum of the first 10 terms of 5, 10, 15, 20, ...
3. How many terms are in -2, 2, 6, ..., 58?
4. Find the sum of all positive integers from 1 to 100.
5. Find the 7th term of 1, 3, 9, 27, ...
6. Find the sum of the first 6 terms of 2, 6, 18, 54, ...
7. Insert 2 arithmetic means between 5 and 17.
8. Determine whether 2, 4, 8, 16, ... is arithmetic or geometric, and find the 5th term.
9. If an arithmetic sequence has first term 10 and last term 40, and contains 7 terms, find the common difference.
10. Find the sum 1 + 2 + 3 + ... + 50 using the formula.

---

*Images needed in this section*:
1. Visual diagram comparing arithmetic vs. geometric sequence growth
2. Number line showing an arithmetic sequence with constant differences marked
3. Exponential curve overlay for geometric sequence growth illustration
4. Table showing nth term formulas side-by-side for both types
5. Example computation walkthrough: arithmetic series with pairing visualization
