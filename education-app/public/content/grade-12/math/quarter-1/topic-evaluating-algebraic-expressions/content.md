# Evaluating Algebraic Expressions

## Introduction

Evaluating algebraic expressions is the cornerstone of algebra and one of the most frequently tested skills on the UPCAT Mathematics exam. When you evaluate an expression, you replace variables with specific numerical values and perform the arithmetic operations to find the result. This skill appears not only as standalone problems but as a component of solving equations, analyzing functions, and interpreting real-world scenarios.

Many students struggle with evaluation because they overlook the careful handling of negative numbers, the precise order of operations, and the domain restrictions in rational expressions. On the UPCAT, a single sign error or misapplied exponent can lead to an incorrect answer. This topic emphasizes not just *how* to evaluate, but *why* certain mistakes are common and how to avoid them systematically.

## Understanding Algebraic Expressions

An **algebraic expression** is a mathematical phrase containing variables (letters representing unknown or changing values), constants (fixed numbers), coefficients (numbers multiplying variables), and operations (addition, subtraction, multiplication, division, exponents).

**Key terminology:**
- **Variable**: A symbol (usually a letter) representing an unknown value. Example: $x$, $y$, $a$
- **Coefficient**: The numerical factor of a term. In $5xy$, the coefficient is 5.
- **Term**: A single part of an expression. In $3x^2 - 2xy + 4$, the terms are $3x^2$, $-2xy$, and $4$.
- **Degree**: The highest power of a variable in a term. The expression $x^3 + 2x^2 - x + 1$ has degree 3.
- **Polynomial**: An expression with non-negative integer exponents. Example: $2x^3 - 5x + 7$
- **Rational expression**: A ratio of two polynomials. Example: $\frac{3x + 2}{x - 1}$

Understanding these components helps you recognize what operations to perform when substituting values.

## Order of Operations: PEMDAS/BODMAS

The order of operations is non-negotiable in evaluation. Any deviation leads to incorrect answers. **PEMDAS** stands for:

1. **Parentheses** (or Brackets)
2. **Exponents** (or Orders)
3. **Multiplication and Division** (left to right)
4. **Addition and Subtraction** (left to right)

**Critical reminder for UPCAT**: Exponents must be applied BEFORE negation. The expression $-x^2$ when $x = 3$ equals $-(3^2) = -9$, NOT $(-3)^2 = 9$. This distinction is frequently tested.

When substituting negative values, always wrap them in parentheses to prevent sign errors:
- Correct: $-(-3)^2 = -(9) = -9$
- Incorrect: $-3^2$ evaluated at $x = -3$ — ambiguous without parentheses

## The Substitution Method

The substitution method involves replacing each variable with its given value. Follow these systematic steps:

1. **Identify all variables** in the expression
2. **Replace each variable** with its value, enclosed in parentheses if the value is negative
3. **Apply the order of operations** carefully, starting with exponents
4. **Simplify step by step**, showing all arithmetic

**Example process**: Evaluate $2x^2 - 3x + 5$ when $x = -2$
- Replace $x$ with $(-2)$: $2(-2)^2 - 3(-2) + 5$
- Apply exponents: $2(4) - 3(-2) + 5$
- Multiply: $8 + 6 + 5$
- Add: $19$

## Evaluating Polynomial Expressions

Polynomials are among the most commonly evaluated expressions on standardized tests. The key is tracking signs and exponents carefully.

**Linear expressions** ($ax + b$):
$$f(x) = 3x - 7 \text{ at } x = 4 \Rightarrow f(4) = 3(4) - 7 = 12 - 7 = 5$$

**Quadratic expressions** ($ax^2 + bx + c$):
$$g(x) = 2x^2 - 5x + 3 \text{ at } x = -1 \Rightarrow g(-1) = 2(-1)^2 - 5(-1) + 3 = 2(1) + 5 + 3 = 10$$

**Higher-degree polynomials**: Apply exponent rules carefully, especially with negative bases.

## Evaluating Rational Expressions

A rational expression is a fraction of polynomials: $\frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials.

**Critical restriction**: The denominator can NEVER equal zero. Before evaluating, always check that your substitution does not make the denominator zero.

**Example**: Evaluate $\frac{x + 3}{x - 2}$ when $x = 5$
- First, check: Is $x - 2 = 5 - 2 = 3 \neq 0$? Yes, safe to evaluate.
- Numerator: $5 + 3 = 8$
- Denominator: $5 - 2 = 3$
- Result: $\frac{8}{3}$

**When denominator is zero**: The expression is **undefined** at that value. Example: $\frac{x + 3}{x - 2}$ is undefined when $x = 2$ because the denominator becomes 0.

## Evaluating Multi-Variable Expressions

When an expression contains multiple variables, substitute all values simultaneously and track each computation carefully.

**Example**: Evaluate $3x^2 - 2xy + y^3$ when $x = -2, y = 1$
- Replace variables: $3(-2)^2 - 2(-2)(1) + (1)^3$
- Apply exponents: $3(4) - 2(-2)(1) + 1$
- Multiply: $12 + 4 + 1$
- Result: $17$

Always substitute negative values with parentheses to avoid sign errors with negative bases.

## Common UPCAT Mistakes and How to Avoid Them

**Mistake 1: Confusing $-x^2$ with $(-x)^2$**

When $x = -3$:
- $-x^2 = -((-3)^2) = -(9) = -9$ ✓
- $(-x)^2 = (-(-3))^2 = (3)^2 = 9$ ✓ (different!)

The UPCAT frequently tests this distinction. The exponent applies to what's directly in front of it. A negative sign in front of the variable is a separate operation.

**Mistake 2: Forgetting to use parentheses with negative substitutions**

When substituting $x = -3$ into $2x^2$:
- Correct: $2(-3)^2 = 2(9) = 18$ ✓
- Incorrect: $2-3^2 = 2 - 9 = -7$ ✗ (wrong order of operations)

**Mistake 3: Dropping negative signs in multi-step calculations**

When evaluating $5 - 3x$ at $x = -2$:
- Correct: $5 - 3(-2) = 5 - (-6) = 5 + 6 = 11$ ✓
- Incorrect: $5 - 6 = -1$ ✗ (forgot the double negative)

**Mistake 4: Ignoring domain restrictions in rational expressions**

Always check the denominator before claiming a value is "defined." Do not evaluate at values that make the denominator zero.

## Key Formulas and Principles

$$\text{PEMDAS Order}: \text{Parentheses} \to \text{Exponents} \to \text{Multiplication/Division} \to \text{Addition/Subtraction}$$

$$\text{Substitution Identity}: \text{If } f(x) = ax^n + bx + c, \text{ then } f(a) = a(a)^n + b(a) + c$$

$$\text{Domain Restriction}: \text{For } \frac{P(x)}{Q(x)}, \text{ we require } Q(x) \neq 0$$

## Worked Examples

**Example 1**: Evaluate $3x^2 - 2xy + y^3$ when $x = -2, y = 1$

$$3(-2)^2 - 2(-2)(1) + (1)^3$$
$$= 3(4) - 2(-2)(1) + 1$$
$$= 12 + 4 + 1$$
$$= 17$$

**Example 2**: Evaluate $\frac{2a + b}{a - b}$ when $a = 4, b = -2$

First, check domain: $a - b = 4 - (-2) = 6 \neq 0$ ✓

$$\frac{2(4) + (-2)}{4 - (-2)} = \frac{8 - 2}{6} = \frac{6}{6} = 1$$

**Example 3**: Evaluate $2m^3 - 3m^2n + mn^2$ when $m = 1, n = -2$

$$2(1)^3 - 3(1)^2(-2) + (1)(-2)^2$$
$$= 2(1) - 3(1)(-2) + (1)(4)$$
$$= 2 + 6 + 4$$
$$= 12$$

**Example 4**: Evaluate $\frac{x^2 - y^2}{x + y}$ when $x = 5, y = 3$

First, note that the numerator factors: $\frac{(x-y)(x+y)}{x+y}$. For $x = 5, y = 3$: the denominator is $5 + 3 = 8 \neq 0$.

We can simplify: $\frac{(5-3)(5+3)}{5+3} = \frac{2 \cdot 8}{8} = 2$

Alternatively, direct substitution: $\frac{25 - 9}{5 + 3} = \frac{16}{8} = 2$

**Example 5**: Evaluate $|2x - y| + x^2$ when $x = -3, y = 4$

$$|2(-3) - 4| + (-3)^2$$
$$= |-6 - 4| + 9$$
$$= |-10| + 9$$
$$= 10 + 9$$
$$= 19$$

## UPCAT Tips & Common Mistakes

1. **Always use parentheses** when substituting negative values. This prevents misinterpretation of the order of operations.

2. **Double-check the domain** of rational expressions before declaring a value is "defined." If the denominator is zero, write "undefined."

3. **Distinguish between $-x^2$ and $(-x)^2$**. On the UPCAT, these are frequently confused. The first equals $-(x^2)$; the second equals $x^2$.

4. **Perform exponentiation before multiplication and division**. A common error is computing $2 \cdot 3^2$ as $(2 \cdot 3)^2 = 36$ instead of $2 \cdot 9 = 18$.

5. **Watch for double negatives**. When you substitute a negative value and the expression already has a negative sign, two negatives make a positive: $5 - (-3) = 5 + 3 = 8$.

6. **Simplify step by step**. UPCAT problems often test whether you can track operations across multiple steps. Write each step clearly to avoid errors.

## Key Takeaways

- **Substitution** is the process of replacing variables with specific values.
- **Order of operations (PEMDAS)** must be followed precisely, especially regarding exponents before negation.
- **Rational expressions** have domain restrictions: the denominator cannot be zero.
- **Negative values** must be enclosed in parentheses when substituted to prevent sign errors.
- **Multi-variable expressions** require careful tracking of all operations across all variables.
- Common UPCAT errors involve sign confusion, exponent misapplication, and ignoring domain restrictions.

## Practice Problems

1. Evaluate $5x - 3$ when $x = -2$.
2. Evaluate $x^2 - 4x + 1$ when $x = 3$.
3. Evaluate $\frac{3x + 5}{x - 1}$ when $x = 2$. (Is it defined?)
4. Evaluate $-x^2 + 2x - 7$ when $x = -1$.
5. Evaluate $a^3 - 2ab + b^2$ when $a = 2, b = -3$.
6. For the expression $\frac{2x - 3}{x + 4}$, find the value(s) of $x$ for which it is undefined.
7. Evaluate $|x - 5| + 2x$ when $x = 1$.
8. Evaluate $\frac{(x+1)(x-2)}{x-2}$ when $x = 3$ and when $x = 2$ (if possible).
