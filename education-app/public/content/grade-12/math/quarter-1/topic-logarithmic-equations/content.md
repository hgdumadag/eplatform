# Logarithmic Equations

## Introduction

Logarithms are the inverse of exponential functions and appear frequently on the UPCAT Mathematics exam. Understanding logarithms requires comfort with exponent rules and the ability to convert between exponential and logarithmic form. Once you master the definition and properties of logarithms, solving logarithmic and exponential equations becomes manageable. This topic covers the essential concepts: the definition of logarithm, the relationship to exponential form, logarithmic properties, and solving techniques.

The UPCAT tests not just procedural skill but conceptual understanding. You should be able to recognize when to apply each logarithm property, understand domain restrictions (logarithms are only defined for positive arguments), and confidently solve both pure logarithmic equations and equations that blend logarithmic and algebraic manipulations.

## The Definition of Logarithm

A **logarithm** is the exponent to which a base must be raised to obtain a given number. Formally:

$$\log_b(x) = y \quad \text{if and only if} \quad b^y = x$$

where $b > 0, b \neq 1$, and $x > 0$.

**Key components:**
- **Base** $b$: the number being raised to a power
- **Argument** $x$: the number we're finding the logarithm of
- **Value** $y$: the exponent (the logarithm itself)

**Example:** $\log_2(8) = 3$ because $2^3 = 8$

**Conversion between forms:**
- Exponential form: $2^3 = 8$
- Logarithmic form: $\log_2(8) = 3$

## Special Logarithmic Values

Understanding these special cases is essential:

$$\log_b(1) = 0 \quad \text{(because } b^0 = 1 \text{)}$$
$$\log_b(b) = 1 \quad \text{(because } b^1 = b \text{)}$$
$$\log_b(b^x) = x \quad \text{(the key identity)}$$
$$b^{\log_b(x)} = x \quad \text{(the inverse identity)}$$

The last two are the most important for solving equations on the UPCAT. They state that logarithm and exponentiation are inverse operations.

## Common and Natural Logarithms

Two logarithm bases are so common they have special notation:

**Common logarithm** (base 10):
$$\log(x) = \log_{10}(x)$$
When the base is not shown, it defaults to 10.

**Natural logarithm** (base $e$, where $e \approx 2.71828$):
$$\ln(x) = \log_e(x)$$
The natural logarithm appears in calculus, sciences, and on higher-level UPCAT problems.

## Logarithmic Properties

The **product rule** states that the logarithm of a product is the sum of logarithms:
$$\log_b(MN) = \log_b(M) + \log_b(N)$$

**Example:** $\log_3(9 \cdot 27) = \log_3(9) + \log_3(27) = 2 + 3 = 5$

The **quotient rule** states that the logarithm of a quotient is the difference of logarithms:
$$\log_b\left(\frac{M}{N}\right) = \log_b(M) - \log_b(N)$$

**Example:** $\log_5(125) - \log_5(5) = \log_5\left(\frac{125}{5}\right) = \log_5(25) = 2$

The **power rule** states that the logarithm of a power is the exponent times the logarithm of the base:
$$\log_b(M^n) = n \cdot \log_b(M)$$

**Example:** $\log_2(4^3) = 3 \cdot \log_2(4) = 3 \cdot 2 = 6$

## Change of Base Formula

When you need to evaluate a logarithm with a base that's not convenient, use the **change of base formula**:

$$\log_b(x) = \frac{\log(x)}{\log(b)} = \frac{\ln(x)}{\ln(b)}$$

This allows you to convert any logarithm to base 10 (common log) or base $e$ (natural log), which calculators can handle.

**Example:** $\log_7(49) = \frac{\log(49)}{\log(7)} = \frac{1.690}{0.845} \approx 2$

## Solving Logarithmic Equations

**General strategy:**
1. Use logarithm properties to combine logarithms (if multiple logs exist)
2. Convert to exponential form
3. Solve the resulting equation
4. **Check your solution** in the original equation to ensure the argument is positive

**Example:** Solve $\log_2(x) + \log_2(x - 2) = 3$

Step 1: Combine using the product rule
$$\log_2(x(x - 2)) = 3$$

Step 2: Convert to exponential form
$$x(x - 2) = 2^3 = 8$$

Step 3: Expand and solve
$$x^2 - 2x - 8 = 0$$
$$(x - 4)(x + 2) = 0$$
$$x = 4 \text{ or } x = -2$$

Step 4: Check domain restrictions. For the original equation, we need $x > 0$ and $x - 2 > 0$, so $x > 2$.
- $x = 4$: Both $\log_2(4)$ and $\log_2(2)$ are defined. $\log_2(4) + \log_2(2) = 2 + 1 = 3$ ✓
- $x = -2$: $\log_2(-2)$ is undefined. ✗

**Solution: $x = 4$**

## Solving Exponential Equations

When an unknown appears as an exponent, take the logarithm of both sides.

**Example:** Solve $3^x = 45$

Take the natural logarithm of both sides:
$$\ln(3^x) = \ln(45)$$

Apply the power rule:
$$x \ln(3) = \ln(45)$$

Solve for $x$:
$$x = \frac{\ln(45)}{\ln(3)} = \frac{\log(45)}{\log(3)} \approx \frac{1.653}{0.477} \approx 3.465$$

Alternatively, recognize that $x = \log_3(45)$.

## Key Formulas

$$\text{Definition}: \log_b(x) = y \iff b^y = x$$

$$\text{Product rule}: \log_b(MN) = \log_b(M) + \log_b(N)$$

$$\text{Quotient rule}: \log_b\left(\frac{M}{N}\right) = \log_b(M) - \log_b(N)$$

$$\text{Power rule}: \log_b(M^n) = n \log_b(M)$$

$$\text{Change of base}: \log_b(x) = \frac{\log(x)}{\log(b)} = \frac{\ln(x)}{\ln(b)}$$

$$\text{Key identities}: \log_b(b^x) = x \text{ and } b^{\log_b(x)} = x$$

## Worked Examples

**Example 1:** Evaluate $\log_2(32)$

Convert to exponential: $2^x = 32 = 2^5 \Rightarrow x = 5$

**Example 2:** Simplify $\log_3(3^7)$

Using the key identity: $\log_3(3^7) = 7$

**Example 3:** Simplify $\log_5(25) + \log_5(5)$

Evaluate each: $\log_5(25) = 2$ and $\log_5(5) = 1$

Result: $2 + 1 = 3$

Alternatively, use the product rule: $\log_5(25 \cdot 5) = \log_5(125) = 3$

**Example 4:** Solve $\log_2(x) + \log_2(x - 2) = 3$

Combine: $\log_2(x(x - 2)) = 3$

Exponential form: $x(x - 2) = 8$

Solve: $x^2 - 2x - 8 = 0 \Rightarrow (x - 4)(x + 2) = 0$

Check domain: $x > 2$, so $x = 4$ is valid (reject $x = -2$).

**Example 5:** Solve $3^x = 45$

Take logarithm: $x = \log_3(45) = \frac{\ln(45)}{\ln(3)} \approx 3.465$

## UPCAT Tips & Common Mistakes

1. **Always check domain restrictions.** Logarithms are undefined for non-positive arguments. After solving, verify that all logarithmic arguments are positive in the original equation.

2. **Memorize the key identity $\log_b(b^x) = x$.** This is tested repeatedly and can simplify expressions dramatically.

3. **Distinguish between $\log(x)$ and $\ln(x)$.** On the UPCAT, $\log$ without a base typically means common log (base 10), while $\ln$ means natural log (base $e$).

4. **Apply the power rule carefully.** A common error is writing $\log(x^2) = 2\log(x)$ without checking that $x > 0$ (since $\log(x)$ is only defined for positive $x$).

5. **Use change of base to evaluate non-standard logarithms.** If you need $\log_7(100)$, convert to base 10 or $e$ and use a calculator.

6. **Combine logarithms before converting to exponential form.** When an equation has multiple logarithms with the same base, use properties to combine them first.

7. **Solve exponential equations by taking logarithms.** There's no algebraic way to solve $2^x = 50$ without logarithms. Taking the natural log of both sides is the standard approach.

## Key Takeaways

- **Logarithm definition**: $\log_b(x) = y$ means $b^y = x$.
- **Properties**: Product, quotient, and power rules allow you to manipulate logarithmic expressions.
- **Key identity**: $\log_b(b^x) = x$ is your most powerful tool for simplification and solving.
- **Domain**: Logarithms are only defined for positive arguments.
- **Solving logarithmic equations**: Combine logs, convert to exponential form, solve, and check.
- **Solving exponential equations**: Take logarithms of both sides to bring the exponent down.

## Practice Problems

1. Evaluate $\log_3(81)$
2. Simplify $\log_4(4^9)$
3. Evaluate $\log_2(16) + \log_2(8)$
4. Solve $\log_5(x) = 2$
5. Solve $\log_3(x) + \log_3(2) = 2$
6. Solve $2^{x+1} = 32$
7. Solve $\log(x) + \log(x + 3) = 1$
8. Use the change of base formula to evaluate $\log_6(36)$
