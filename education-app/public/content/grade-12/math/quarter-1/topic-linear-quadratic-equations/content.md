# Linear and Quadratic Equations

## Introduction

Solving equations is the backbone of algebra and appears repeatedly throughout the UPCAT Mathematics exam. Whether you're working with linear equations in one variable, systems of equations in two or more variables, or quadratic equations, mastering solution methods is essential. This topic covers the most important techniques: isolating variables, elimination and substitution for systems, factoring and the quadratic formula for quadratic equations, and interpreting the discriminant to understand the nature of solutions.

The UPCAT frequently tests not just whether you can solve an equation, but whether you understand the conceptual meaning behind solutions, such as why the discriminant determines the number of real roots or how Vieta's formulas relate coefficients to roots without solving. This topic emphasizes both procedural skill and conceptual depth.

## Linear Equations in One Variable

A **linear equation** in one variable has the form $ax + b = c$, where $a, b, c$ are constants and $a \neq 0$. Solving requires isolating the variable through inverse operations.

**Basic method:**
1. Remove constants by adding or subtracting
2. Remove coefficients by multiplying or dividing
3. Check the solution by substituting back into the original equation

**Example:** Solve $3(x - 2) + 5 = 2x + 7$
$$3x - 6 + 5 = 2x + 7$$
$$3x - 1 = 2x + 7$$
$$x = 8$$

Check: $3(8 - 2) + 5 = 3(6) + 5 = 23$ and $2(8) + 7 = 23$ ✓

**Common challenges:**
- Distributing correctly
- Combining like terms
- Tracking negative signs

## Systems of Linear Equations

A **system of linear equations** consists of two or more equations with multiple variables. We seek values that satisfy all equations simultaneously.

**Substitution method:**
1. Solve one equation for one variable
2. Substitute that expression into the other equation
3. Solve the resulting single-variable equation
4. Back-substitute to find the other variable

**Example:**
$$2x + 3y = 12 \quad \text{...(1)}$$
$$x - y = 1 \quad \text{...(2)}$$

From equation (2): $x = y + 1$

Substitute into (1): $2(y + 1) + 3y = 12$
$$2y + 2 + 3y = 12$$
$$5y = 10$$
$$y = 2$$

Then $x = 2 + 1 = 3$

**Elimination (addition/subtraction) method:**
1. Multiply one or both equations to make coefficients of one variable opposites
2. Add the equations to eliminate that variable
3. Solve the resulting equation
4. Back-substitute

**Example (same system):**
Multiply equation (2) by 3: $3x - 3y = 3$

Add to equation (1):
$$(2x + 3y) + (3x - 3y) = 12 + 3$$
$$5x = 15$$
$$x = 3$$

Substitute back: $3 - y = 1 \Rightarrow y = 2$

## Quadratic Equations

A **quadratic equation** has the form $ax^2 + bx + c = 0$, where $a \neq 0$. The highest exponent is 2.

### Solving by Factoring

If the quadratic factors as $(px + q)(rx + s) = 0$, then either $px + q = 0$ or $rx + s = 0$.

**Steps:**
1. Write the equation in standard form: $ax^2 + bx + c = 0$
2. Factor the left side (find factors of $ac$ that sum to $b$)
3. Apply the zero-product property: each factor equals 0
4. Solve each resulting linear equation

**Example:** Solve $x^2 - 5x + 6 = 0$

Factors of 6 that sum to -5: -2 and -3

$$(x - 2)(x - 3) = 0$$
$$x = 2 \text{ or } x = 3$$

### Solving with the Quadratic Formula

When factoring is difficult or impossible, use the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Example:** Solve $2x^2 - 3x - 5 = 0$

Here $a = 2, b = -3, c = -5$

$$x = \frac{-(-3) \pm \sqrt{(-3)^2 - 4(2)(-5)}}{2(2)}$$
$$= \frac{3 \pm \sqrt{9 + 40}}{4}$$
$$= \frac{3 \pm \sqrt{49}}{4}$$
$$= \frac{3 \pm 7}{4}$$

So $x = \frac{10}{4} = \frac{5}{2}$ or $x = \frac{-4}{4} = -1$

### Completing the Square

Another method involves rewriting the equation as a perfect square.

$ax^2 + bx + c = 0 \Rightarrow a\left(x + \frac{b}{2a}\right)^2 = c - \frac{b^2}{4a}$

This method is less commonly used on the UPCAT but shows why the quadratic formula works.

## The Discriminant

The **discriminant** is $\Delta = b^2 - 4ac$. It determines the nature of the roots without solving:

- **If $\Delta > 0$:** Two distinct real roots (parabola crosses $x$-axis twice)
- **If $\Delta = 0$:** One real root with multiplicity 2 (parabola touches $x$-axis once)
- **If $\Delta < 0$:** No real roots; two complex conjugate roots (parabola does not touch $x$-axis)

**Example:** Determine the nature of roots for $3x^2 - 4x + 2 = 0$

$$\Delta = (-4)^2 - 4(3)(2) = 16 - 24 = -8 < 0$$

Since $\Delta < 0$, this equation has no real roots.

## Vieta's Formulas

For a quadratic $ax^2 + bx + c = 0$ with roots $r$ and $s$:

$$\text{Sum of roots: } r + s = -\frac{b}{a}$$
$$\text{Product of roots: } rs = \frac{c}{a}$$

These relationships allow you to find relationships between roots without solving.

**Example:** For $x^2 - 5x + 6 = 0$:
- Sum: $r + s = -\frac{-5}{1} = 5$
- Product: $rs = \frac{6}{1} = 6$

Indeed, the roots are 2 and 3: $2 + 3 = 5$ and $2 \cdot 3 = 6$ ✓

## Word Problems and Applications

Equations model real-world situations. Common types include:
- Distance-rate-time problems
- Work-rate problems
- Profit and cost optimization
- Area and volume calculations

## Key Formulas

$$\text{Linear equation (one variable): } ax + b = c$$

$$\text{Quadratic equation (standard form): } ax^2 + bx + c = 0, \quad a \neq 0$$

$$\text{Quadratic formula: } x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

$$\text{Discriminant: } \Delta = b^2 - 4ac$$

$$\text{Sum of roots: } r + s = -\frac{b}{a}$$

$$\text{Product of roots: } rs = \frac{c}{a}$$

## Worked Examples

**Example 1:** Solve $3(x - 2) + 5 = 2x + 7$
$$3x - 6 + 5 = 2x + 7$$
$$3x - 1 = 2x + 7$$
$$x = 8$$

**Example 2:** Solve the system:
$$2x + 3y = 12$$
$$x - y = 1$$

Using substitution: $x = y + 1 \Rightarrow 2(y + 1) + 3y = 12 \Rightarrow 5y = 10 \Rightarrow y = 2$, $x = 3$

**Example 3:** Solve $x^2 - 5x + 6 = 0$ by factoring
$$(x - 2)(x - 3) = 0 \Rightarrow x = 2 \text{ or } x = 3$$

**Example 4:** Solve $2x^2 - 3x - 5 = 0$ using the quadratic formula
$$x = \frac{3 \pm \sqrt{9 + 40}}{4} = \frac{3 \pm 7}{4} \Rightarrow x = \frac{5}{2} \text{ or } x = -1$$

**Example 5:** Determine the nature of roots for $3x^2 - 4x + 2 = 0$
$$\Delta = 16 - 24 = -8 < 0 \Rightarrow \text{No real roots}$$

## UPCAT Tips & Common Mistakes

1. **Always check your solution.** Substitute back into the original equation to verify.

2. **Use the discriminant first.** Before solving a quadratic, compute $\Delta$ to determine how many real roots exist. This can save time and prevent careless errors.

3. **Factor carefully.** When using the factoring method, ensure the factors multiply to give $ac$ and sum to $b$. Common error: mixing up signs.

4. **Distribute and combine like terms precisely.** Most errors in solving arise from algebraic manipulation, not from the solving method itself.

5. **Watch for special cases.** A quadratic with $a = 1$ (monic polynomial) is easier to factor: look for two numbers that multiply to $c$ and sum to $b$.

6. **In systems, choose the simpler equation to manipulate.** If one equation is already solved for a variable (e.g., $x = \ldots$), use substitution directly.

7. **Understand Vieta's formulas.** These allow you to verify your solutions and sometimes solve problems without explicit calculation.

## Key Takeaways

- **Linear equations** are solved by isolating the variable through inverse operations.
- **Systems of equations** are solved by substitution or elimination.
- **Quadratic equations** can be solved by factoring, completing the square, or the quadratic formula.
- **The discriminant** determines the number and type of roots without solving.
- **Vieta's formulas** relate the sum and product of roots to the coefficients.
- Always verify solutions by substitution and understand the conceptual meaning of your answers.

## Practice Problems

1. Solve $4x - 7 = 13$
2. Solve the system: $3x + 2y = 11$ and $x - y = 2$
3. Solve $x^2 + 5x + 4 = 0$ by factoring
4. Solve $3x^2 - 2x - 1 = 0$ using the quadratic formula
5. Find the discriminant of $2x^2 - 5x + 3 = 0$ and determine the nature of roots
6. For $x^2 - 7x + 10 = 0$, verify that the sum and product of roots match Vieta's formulas
7. A rectangle has length 3 more than its width. Its area is 40 square units. Find the dimensions.
8. Solve $2(3x - 1) = 4(x + 2)$
