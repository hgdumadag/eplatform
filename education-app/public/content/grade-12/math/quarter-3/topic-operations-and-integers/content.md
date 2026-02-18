# Operations and Integers

## Introduction

Integers form the foundation of mathematical operations in the UPCAT. Understanding how integers behave—particularly when negative values are involved—is essential for solving complex problems efficiently. This topic covers the classification of integers, fundamental operations with sign rules, absolute value concepts, parity analysis, and real-world applications. Mastering these concepts will enable you to handle problems involving elevation changes, temperature variations, financial transactions, and more. The UPCAT frequently tests these fundamentals in various contexts, so precision and speed are critical.

## Classification of Integers

An integer is any whole number, including positive integers, negative integers, and zero. Integers form the set {..., -3, -2, -1, 0, 1, 2, 3, ...}.

- **Positive integers**: 1, 2, 3, 4, ...
- **Negative integers**: -1, -2, -3, -4, ...
- **Zero**: neither positive nor negative

The number line provides a visual representation of integers. On a horizontal number line, zero is at the center, positive integers extend to the right, and negative integers extend to the left. The distance from zero increases as you move away from zero in either direction.

**Ordering integers**: For any two integers on the number line, the one on the left is always smaller than the one on the right. For example, -5 < -2 < 0 < 3 < 7.

## Absolute Value

Absolute value represents the distance of a number from zero on the number line. Critically, distance is always non-negative, so absolute value is always greater than or equal to zero.

**Definition**: The absolute value of x, denoted |x|, is:
- $|x| = x$ if $x \geq 0$
- $|x| = -x$ if $x < 0$

**Examples**:
- $|-7| = 7$ (distance of -7 from 0 is 7)
- $|7| = 7$ (distance of 7 from 0 is 7)
- $|0| = 0$ (distance of 0 from 0 is 0)
- $|-3.5| = 3.5$

**Key property**: $|x| = |-x|$ for all real x. This symmetry is essential for solving absolute value equations and inequalities.

When evaluating absolute value expressions, always simplify the expression inside the absolute value bars first, then apply the absolute value operation.

### Absolute Value in Real-World Contexts

Absolute value often represents magnitude without regard to direction:
- **Distance**: How far apart are two points?
- **Temperature change**: How many degrees difference, regardless of direction?
- **Elevation**: How far from sea level, whether above or below?

## Integer Addition and Subtraction

Sign rules for addition and subtraction determine both the magnitude and sign of the result.

**Rule 1 - Same Signs**: Add the absolute values and keep the common sign.
- $5 + 3 = 8$
- $-5 + (-3) = -8$

**Rule 2 - Different Signs**: Subtract the smaller absolute value from the larger, and keep the sign of the number with the larger absolute value.
- $7 + (-4) = 3$ (subtract 4 from 7, keep positive)
- $-7 + 4 = -3$ (subtract 4 from 7, keep negative)
- $8 + (-8) = 0$

**Subtraction as addition**: $a - b = a + (-b)$. Always convert subtraction to adding the opposite.

## Integer Multiplication and Division

The sign of a product or quotient depends on the signs of the factors.

**Multiplication sign rules**:
- $(+) \times (+) = (+)$: positive × positive = positive
- $(-) \times (-) = (+)$: negative × negative = positive
- $(+) \times (-) = (-)$: positive × negative = negative
- $(-) \times (+) = (-)$: negative × positive = negative

**Quick rule**: Multiply any number by a negative number to reverse its sign. The product of an even number of negative factors is positive; the product of an odd number of negative factors is negative.

**Examples**:
- $3 \times 5 = 15$
- $(-3) \times (-5) = 15$
- $3 \times (-5) = -15$
- $(-2) \times (-3) \times (-4) = -24$ (odd number of negatives)

**Division sign rules**: Same as multiplication. The quotient takes the sign determined by the signs of the dividend and divisor.
- $20 \div 5 = 4$
- $(-20) \div (-5) = 4$
- $20 \div (-5) = -4$
- $(-20) \div 5 = -4$

## Exponents and Signs

When raising an integer to a power, the sign of the result depends on the base's sign and the exponent.

**For positive bases**: Any power of a positive number is positive.
- $3^4 = 81$
- $2^5 = 32$

**For negative bases**:
- **Even exponents**: The result is always positive. $(-3)^4 = 81$, $(-2)^2 = 4$
- **Odd exponents**: The result is always negative. $(-3)^3 = -27$, $(-2)^5 = -32$

**Reason**: Negative × negative = positive, so pairs of negative factors cancel out the negative sign. With an odd number of negative factors, one sign remains negative.

## Parity: Even and Odd Numbers

Parity analysis determines whether sums, products, and powers are even or odd. This is a favorite UPCAT concept.

**Definitions**:
- **Even**: divisible by 2; can be written as $2k$ for some integer k
- **Odd**: leaves remainder 1 when divided by 2; can be written as $2k + 1$ for some integer k

**Addition rules**:
- Even + Even = Even
- Odd + Odd = Even
- Even + Odd = Odd

**Multiplication rules**:
- Even × (anything) = Even (because at least one factor is even)
- Odd × Odd = Odd (no even factors)

**Power rules**:
- $\text{Even}^n = \text{Even}$ for all positive integers n
- $\text{Odd}^n = \text{Odd}$ for all positive integers n

**Negative number parity**: Negative numbers follow the same parity rules as their positive counterparts. -4 is even, -5 is odd.

## Key Formulas

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

**Integer Addition/Subtraction**:
- Same signs: Add magnitudes, keep sign
- Different signs: Subtract magnitudes, keep sign of larger

**Multiplication Sign Rule**: Count negative factors. Even count → positive; odd count → negative.

**Parity Results**:
- Even ± Even = Even; Odd ± Odd = Even; Even ± Odd = Odd
- Even × k = Even (for any integer k)
- Odd × Odd = Odd

## Worked Examples

### Example 1: Determining the Sign of a Complex Expression

**Problem**: What is the sign of $(-3)^4 \times (-2)^3$?

**Solution**:
- $(-3)^4 = 81$ (even exponent, positive result)
- $(-2)^3 = -8$ (odd exponent, negative result)
- $81 \times (-8) = -648$ (positive × negative = negative)

**Answer**: Negative

### Example 2: Parity Analysis

**Problem**: If m is even and n is odd, determine whether $m^2 + 2mn + n^2$ is even or odd.

**Solution**:
- Recognize that $m^2 + 2mn + n^2 = (m + n)^2$
- m is even, n is odd, so m + n = even + odd = odd
- $(m + n)^2 = \text{odd}^2 = \text{odd}$

**Answer**: The expression is odd.

### Example 3: Real-World Application—Elevation

**Problem**: A diver is at 45 meters below sea level. They ascend 18 meters. What is their new depth?

**Solution**:
- Below sea level is represented as -45 meters
- Ascending 18 meters means adding 18
- New position: $-45 + 18 = -27$ meters
- Interpretation: The diver is 27 meters below sea level

**Answer**: -27 meters (or 27 meters below sea level)

### Example 4: Absolute Value with Nested Operations

**Problem**: Evaluate $|(-4)^2 - |3 - 9||$

**Solution**:
- Innermost absolute value: $|3 - 9| = |-6| = 6$
- Substitute: $|(-4)^2 - 6|$
- Power: $(-4)^2 = 16$
- Substitute: $|16 - 6| = |10| = 10$

**Answer**: 10

### Example 5: Counting Integers with Absolute Value Conditions

**Problem**: How many integers from -5 to 5 (inclusive) satisfy $|x| < 4$?

**Solution**:
- $|x| < 4$ means x is within distance 4 from 0
- This means $-4 < x < 4$
- Integers in this range: -3, -2, -1, 0, 1, 2, 3
- Count: 7 integers

**Answer**: 7

## Divisibility Rules (Reference)

Quick divisibility checks save time on UPCAT problems:

- **Divisible by 2**: Last digit is even (0, 2, 4, 6, 8)
- **Divisible by 3**: Sum of digits is divisible by 3
- **Divisible by 4**: Last two digits form a number divisible by 4
- **Divisible by 5**: Last digit is 0 or 5
- **Divisible by 6**: Divisible by both 2 and 3
- **Divisible by 9**: Sum of digits is divisible by 9
- **Divisible by 10**: Last digit is 0

## UPCAT Tips & Common Mistakes

**Tip 1: Sign multiplication errors**: When multiplying three or more numbers, count the negative signs. If odd count, the result is negative. If even count, the result is positive.

**Tip 2: Absolute value is always non-negative**: Students sometimes forget that $|x| \geq 0$ always. There is no such thing as a negative absolute value.

**Tip 3: Parity is independent of magnitude**: -100 is even just like 100 is even. The size doesn't matter for parity, only divisibility by 2.

**Tip 4: Order of operations with absolute value**: Simplify inside the absolute value bars first, then apply the absolute value.

**Tip 5: Negative bases vs. negative exponents**: Distinguish between $-3^2 = -9$ (negative of 3 squared) and $(-3)^2 = 9$ (negative 3 squared). Parentheses matter!

**Common Mistake 1**: Assuming $|a - b| = a - b$. It's true only if $a \geq b$. Always use the definition.

**Common Mistake 2**: Forgetting to flip the inequality when multiplying or dividing by a negative. Example: $-2x > 6$ becomes $x < -3$, not $x > -3$.

**Common Mistake 3**: Confusing $(-2)^3 = -8$ with $-2^3 = -8$. The first is correct; the second should actually be interpreted as $-(2^3) = -8$. Parentheses are critical.

## Key Takeaways

1. Absolute value measures distance from zero and is always non-negative.
2. Sign rules for operations are consistent: same signs give positive; different signs give negative (after magnitude calculation).
3. Parity analysis is a powerful tool for determining the nature of results without full calculation.
4. Real-world contexts like elevation and temperature use integers and sign rules naturally.
5. Careful attention to notation (parentheses) prevents sign errors.
6. Divisibility rules provide quick shortcuts for integer problems.

## Practice Problems

1. Evaluate $|-8| + |3| - |-5|$
2. Simplify $(-2)^5 + 3 \times (-4)$
3. If a is even and b is odd, is $3a + 2b$ even or odd?
4. A submarine is at 120 meters below the surface. It descends 45 more meters. What is its new depth?
5. How many integers x satisfy both $-6 < x < 6$ and $|x| \geq 2$?
6. Determine the sign of $(-1)^{47} \times (-3)^{34} \times 5^2$
7. Is the sum of three consecutive odd integers always divisible by 3?
8. Evaluate $|2 - 7| + |7 - 2| - |-5|$

---

*Images needed in this section*:
1. Number line showing integers from -10 to 10 with absolute value distances marked
2. Table showing parity combinations (even+even, even+odd, odd+odd) and their results
3. Sign rule reference chart for multiplication and division with visual examples
4. Real-world context diagram: elevation scale with sea level, submarine depths, and mountain heights marked with integers
