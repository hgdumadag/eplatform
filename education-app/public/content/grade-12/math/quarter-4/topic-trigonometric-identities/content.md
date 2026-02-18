# Trigonometric Identities

## Introduction

Trigonometric identities form the backbone of advanced trigonometry and precalculus mathematics. At the Grade 12 UPCAT level, mastery of trigonometric identities is essential for success. These identities are mathematical statements that are always true—they relate different trigonometric functions and allow us to simplify, transform, and solve complex trigonometric equations and expressions.

An identity differs from an equation: an identity is true for all permissible values of the variable, while an equation is true for specific values only. For example, $\sin^2\theta + \cos^2\theta = 1$ is an identity (true for all $\theta$), while $\sin\theta = 0.5$ is an equation (true only for specific angles like $\theta = 30°$).

The three fundamental classes of identities—reciprocal, quotient, and Pythagorean—are the foundation upon which all advanced trigonometric work rests. UPCAT problems heavily test your ability to recognize when and how to apply these identities to simplify seemingly complicated expressions into elegant, simple forms. This topic develops the algebraic manipulation skills and pattern recognition that are critical for college-level mathematics.

## Basic Trigonometric Ratios

Before we explore identities, let's review the fundamental trigonometric ratios. In a right triangle with an acute angle $\theta$:

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$$

$$\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$$

$$\tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

These three ratios are abbreviated SOH-CAH-TOA (Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent). Every other trigonometric function is derived from these three basic ratios.

## Reciprocal Identities

The **reciprocal identities** define three additional trigonometric functions as the reciprocals of the primary three:

$$\csc\theta = \frac{1}{\sin\theta}$$ (cosecant)

$$\sec\theta = \frac{1}{\cos\theta}$$ (secant)

$$\cot\theta = \frac{1}{\tan\theta}$$ (cotangent)

Notice that these are defined only when the denominator is non-zero. For example, $\csc\theta$ is undefined when $\sin\theta = 0$, which occurs at multiples of $180°$.

The reciprocal identities can also be written as:
$$\sin\theta \cdot \csc\theta = 1$$

$$\cos\theta \cdot \sec\theta = 1$$

$$\tan\theta \cdot \cot\theta = 1$$

These forms are often useful in simplification problems. When you see $\csc\theta$, immediately think $\frac{1}{\sin\theta}$. When you see $\sec\theta$, think $\frac{1}{\cos\theta}$.

## Quotient Identities

The **quotient identities** express tangent and cotangent in terms of sine and cosine:

$$\tan\theta = \frac{\sin\theta}{\cos\theta}$$

$$\cot\theta = \frac{\cos\theta}{\sin\theta}$$

These identities are powerful because tangent and cotangent can always be reduced to ratios of sine and cosine. This is often the first step in UPCAT simplification problems: replace all non-sine/cosine functions with their sine and cosine equivalents.

The quotient identities follow immediately from the definitions of tangent and cotangent in terms of opposite, adjacent, and hypotenuse:
$$\tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{\text{opposite}/\text{hyp}}{\text{adjacent}/\text{hyp}} = \frac{\sin\theta}{\cos\theta}$$

## Pythagorean Identities

The **Pythagorean identities** are arguably the most important and most frequently tested identities in UPCAT. They arise from the Pythagorean theorem and are the foundation for countless algebraic manipulations.

### Fundamental Pythagorean Identity

From the Pythagorean theorem applied to the unit circle, we derive:

$$\sin^2\theta + \cos^2\theta = 1$$

This is the bedrock identity. It states that the sum of the squares of sine and cosine is always 1, regardless of the angle $\theta$. This is true for all real numbers $\theta$.

**Memory Trick:** Think of a point $(x, y) = (\cos\theta, \sin\theta)$ on the unit circle. By the Pythagorean theorem, $x^2 + y^2 = 1$, which gives us $\cos^2\theta + \sin^2\theta = 1$.

From this fundamental identity, we can derive two rearrangements:
$$\sin^2\theta = 1 - \cos^2\theta$$

$$\cos^2\theta = 1 - \sin^2\theta$$

These forms are critical when you need to replace $\sin^2\theta$ with something involving cosine, or vice versa.

### Pythagorean Identities with Tangent and Secant

To derive identities involving tangent and secant, we divide the fundamental identity by $\cos^2\theta$:

$$\frac{\sin^2\theta}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} = \frac{1}{\cos^2\theta}$$

$$\tan^2\theta + 1 = \sec^2\theta$$

Rearranging:
$$\sec^2\theta - \tan^2\theta = 1$$

$$\tan^2\theta = \sec^2\theta - 1$$

### Pythagorean Identities with Cotangent and Cosecant

Similarly, dividing the fundamental identity by $\sin^2\theta$:

$$\frac{\sin^2\theta}{\sin^2\theta} + \frac{\cos^2\theta}{\sin^2\theta} = \frac{1}{\sin^2\theta}$$

$$1 + \cot^2\theta = \csc^2\theta$$

Rearranging:
$$\csc^2\theta - \cot^2\theta = 1$$

$$\cot^2\theta = \csc^2\theta - 1$$

**Critical UPCAT Insight:** The three expressions $\sin^2\theta + \cos^2\theta = 1$, $\sec^2\theta - \tan^2\theta = 1$, and $\csc^2\theta - \cot^2\theta = 1$ are always true. Many UPCAT problems test whether you recognize these patterns instantly.

## Special Angles

Certain angles appear so frequently in mathematics that their trigonometric values must be memorized. These special angles are $0°$, $30°$, $45°$, $60°$, and $90°$.

| Angle | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|-------|-------------|-------------|------------|
| 0° | 0 | 1 | 0 |
| 30° | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ |
| 45° | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | 1 |
| 60° | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| 90° | 1 | 0 | undefined |

### Memory Trick for Special Angles

A powerful mnemonic for sine values at special angles uses the pattern:

$$\sin(0°, 30°, 45°, 60°, 90°) = \frac{\sqrt{0}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{4}}{2}$$

This simplifies to: $0, \frac{1}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, 1$

For cosine, the pattern reverses:
$$\cos(0°, 30°, 45°, 60°, 90°) = \frac{\sqrt{4}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{0}}{2}$$

This simplifies to: $1, \frac{\sqrt{3}}{2}, \frac{\sqrt{2}}{2}, \frac{1}{2}, 0$

Notice that $\sin\theta = \cos(90° - \theta)$ and $\cos\theta = \sin(90° - \theta)$. These are called **cofunction identities**—sine and cosine are cofunctions of complementary angles.

For tangent at special angles, remember:
- $\tan(30°) = \frac{1}{\sqrt{3}}$—rationalize to $\frac{\sqrt{3}}{3}$
- $\tan(45°) = 1$
- $\tan(60°) = \sqrt{3}$

## Simplification Strategy

When faced with a complex trigonometric expression to simplify, follow this systematic approach:

**Step 1:** Replace all reciprocal functions ($\csc$, $\sec$, $\cot$) with their sine and cosine equivalents.

**Step 2:** Replace all quotient functions ($\tan$) with $\frac{\sin}{\cos}$.

**Step 3:** Look for opportunities to apply Pythagorean identities, especially $\sin^2\theta + \cos^2\theta = 1$ and its rearrangements.

**Step 4:** Combine fractions, factor, and simplify algebraically.

**Step 5:** Check if the result matches a known trigonometric function or a simple numerical value.

This systematic approach transforms almost any complicated expression into something manageable.

## Key Formulas Summary

**Reciprocal Identities:**
- $\csc\theta = \frac{1}{\sin\theta}$
- $\sec\theta = \frac{1}{\cos\theta}$
- $\cot\theta = \frac{1}{\tan\theta}$

**Quotient Identities:**
- $\tan\theta = \frac{\sin\theta}{\cos\theta}$
- $\cot\theta = \frac{\cos\theta}{\sin\theta}$

**Pythagorean Identities:**
- $\sin^2\theta + \cos^2\theta = 1$
- $1 + \tan^2\theta = \sec^2\theta$ or $\sec^2\theta - \tan^2\theta = 1$
- $1 + \cot^2\theta = \csc^2\theta$ or $\csc^2\theta - \cot^2\theta = 1$

**Rearrangements:**
- $\sin^2\theta = 1 - \cos^2\theta$
- $\cos^2\theta = 1 - \sin^2\theta$
- $\tan^2\theta = \sec^2\theta - 1$
- $\cot^2\theta = \csc^2\theta - 1$

## Worked Examples

### Example 1: Simplify Using Reciprocal Identities

Simplify: $\sin\theta \cdot \csc\theta$

**Solution:**

Replace $\csc\theta$ with $\frac{1}{\sin\theta}$:

$$\sin\theta \cdot \csc\theta = \sin\theta \cdot \frac{1}{\sin\theta} = 1$$

The answer is simply $\boxed{1}$. This is always true, regardless of $\theta$ (as long as $\sin\theta \neq 0$).

### Example 2: Simplify Using Quotient and Pythagorean Identities

Simplify: $\frac{\sin^2\theta}{1 - \cos^2\theta}$

**Solution:**

Recognize that the denominator $1 - \cos^2\theta = \sin^2\theta$ (by the Pythagorean identity):

$$\frac{\sin^2\theta}{1 - \cos^2\theta} = \frac{\sin^2\theta}{\sin^2\theta} = 1$$

The answer is $\boxed{1}$.

### Example 3: Simplify Tangent and Cosine

Simplify: $\tan\theta \cdot \cos\theta$

**Solution:**

Replace $\tan\theta$ with $\frac{\sin\theta}{\cos\theta}$:

$$\tan\theta \cdot \cos\theta = \frac{\sin\theta}{\cos\theta} \cdot \cos\theta = \sin\theta$$

The answer is $\boxed{\sin\theta}$.

### Example 4: Simplify Using Pythagorean Identity

Simplify: $\frac{1 - \sin^2\theta}{\cos\theta}$

**Solution:**

Use the Pythagorean identity $1 - \sin^2\theta = \cos^2\theta$:

$$\frac{1 - \sin^2\theta}{\cos\theta} = \frac{\cos^2\theta}{\cos\theta} = \cos\theta$$

The answer is $\boxed{\cos\theta}$.

### Example 5: Verify a Pythagorean Identity

Simplify: $\sec^2\theta - \tan^2\theta$

**Solution:**

This expression matches the Pythagorean identity form directly. By definition:

$$\sec^2\theta - \tan^2\theta = 1$$

This is always true. Alternatively, we can substitute:
$$\sec^2\theta - \tan^2\theta = \frac{1}{\cos^2\theta} - \frac{\sin^2\theta}{\cos^2\theta} = \frac{1 - \sin^2\theta}{\cos^2\theta} = \frac{\cos^2\theta}{\cos^2\theta} = 1$$

The answer is $\boxed{1}$.

### Example 6: Evaluate at Special Angles

Evaluate: $\sin^2(30°) + \cos^2(30°)$

**Solution:**

This is a direct application of the fundamental Pythagorean identity. For any angle:

$$\sin^2(30°) + \cos^2(30°) = 1$$

We can verify by substituting the special angle values:
$$\left(\frac{1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{1}{4} + \frac{3}{4} = 1$$ ✓

The answer is $\boxed{1}$.

### Example 7: Complex Simplification

Simplify: $\frac{\cot\theta \cdot \sin\theta}{1}$

**Solution:**

Replace $\cot\theta$ with $\frac{\cos\theta}{\sin\theta}$:

$$\frac{\cot\theta \cdot \sin\theta}{1} = \frac{\frac{\cos\theta}{\sin\theta} \cdot \sin\theta}{1} = \frac{\cos\theta \cdot \sin\theta}{\sin\theta} = \cos\theta$$

The answer is $\boxed{\cos\theta}$.

## UPCAT Tips and Common Mistakes

**Tip 1: Always Recognize Pythagorean Patterns**

When you see expressions involving $\sin^2$ and $\cos^2$, immediately ask yourself: "Can I use $\sin^2\theta + \cos^2\theta = 1$?" This identity is the most powerful tool in your arsenal. Many seemingly complicated expressions simplify to 1 or 0.

**Tip 2: Replace Reciprocals Immediately**

When you encounter $\csc$, $\sec$, or $\cot$, replace them with their sine and cosine equivalents right away. This converts the problem to working with just sine and cosine, which is much more familiar.

$$\csc\theta \rightarrow \frac{1}{\sin\theta}, \quad \sec\theta \rightarrow \frac{1}{\cos\theta}, \quad \cot\theta \rightarrow \frac{\cos\theta}{\sin\theta}$$

**Tip 3: Memorize Special Angle Values**

The values of sine and cosine at $30°$, $45°$, and $60°$ appear in UPCAT problems constantly. Spend time memorizing the table of special angles. The cosine values are just sine values in reverse order.

**Tip 4: Sec² − Tan² = 1 Always**

Remember that $\sec^2\theta - \tan^2\theta = 1$ is a true identity for all $\theta$ (where the functions are defined). If you forget the direction of the subtraction, you can derive it: $1 + \tan^2\theta = \sec^2\theta \Rightarrow \sec^2\theta - \tan^2\theta = 1$.

**Tip 5: Rationalize Denominators**

When simplifying special angle expressions, always rationalize denominators. For example, $\frac{1}{\sqrt{3}}$ becomes $\frac{\sqrt{3}}{3}$. UPCAT typically prefers rationalized form.

**Common Mistake 1:** Confusing reciprocal with quotient. $\csc\theta = \frac{1}{\sin\theta}$ (reciprocal), while $\tan\theta = \frac{\sin\theta}{\cos\theta}$ (quotient).

**Common Mistake 2:** Assuming $\sin^2\theta = 1 - \sin\theta$. This is wrong! The correct identity is $\sin^2\theta = 1 - \cos^2\theta$.

**Common Mistake 3:** Forgetting that identities must work for all angles. If you derive a result that only works for specific angles, you've made an error. Identities must be universally true.

**Common Mistake 4:** Not recognizing when an expression is already simplified. Some UPCAT answers are just $\sin\theta$ or $\cos\theta$ or even $1$. Don't over-simplify.

**Common Mistake 5:** Misremembering special angle values. Double-check: $\sin(45°) = \frac{\sqrt{2}}{2}$, not $\frac{1}{\sqrt{2}}$ (although they're equal, the rationalized form is preferred).

## Key Takeaways

1. **Reciprocal identities** define $\csc\theta$, $\sec\theta$, and $\cot\theta$ as reciprocals of $\sin\theta$, $\cos\theta$, and $\tan\theta$ respectively. Always replace these with sine and cosine equivalents as a first step.

2. **Quotient identities** express $\tan\theta$ and $\cot\theta$ as ratios of sine and cosine. The identity $\tan\theta = \frac{\sin\theta}{\cos\theta}$ is the most frequently used.

3. **Pythagorean identities** are the most powerful simplification tools. The three core identities are $\sin^2\theta + \cos^2\theta = 1$, $\sec^2\theta - \tan^2\theta = 1$, and $\csc^2\theta - \cot^2\theta = 1$.

4. **Special angle values** for $0°$, $30°$, $45°$, $60°$, and $90°$ must be memorized. These appear in virtually every UPCAT trigonometry problem.

5. **Systematic simplification** requires replacing non-sine/cosine functions, recognizing Pythagorean patterns, and applying algebra. Most UPCAT expressions simplify to simple forms like 1, 0, $\sin\theta$, or $\cos\theta$.

6. **Verification is key.** After simplifying, check your answer by substituting a special angle to ensure the identity holds.

## Practice Problems

1. Simplify: $\cos\theta \cdot \sec\theta$

2. Simplify: $\frac{\tan\theta}{\sin\theta}$

3. Simplify: $\sin^2\theta + \cos^2\theta + \tan^2\theta$

4. Simplify: $\frac{1 - \sin^2\theta}{\sin^2\theta}$

5. Evaluate: $\sin(60°) \cdot \cos(30°)$

6. Simplify: $\cot\theta \cdot \sin\theta \cdot \sec\theta$

7. Simplify: $\frac{\sin\theta}{\csc\theta} + \frac{\cos\theta}{\sec\theta}$

8. Verify: $1 + \cot^2\theta = \csc^2\theta$

9. Simplify: $\frac{\tan^2\theta}{1 + \tan^2\theta}$

10. Evaluate: $\sin^2(45°) + \cos^2(45°) - \tan(45°)$
