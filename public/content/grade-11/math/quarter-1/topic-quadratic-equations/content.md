# Quadratic Equations

## Introduction

Welcome to the fascinating world of quadratic equations! These equations appear everywhere in mathematics and real life - from calculating the trajectory of a basketball to determining the maximum profit for a business. A quadratic equation is a polynomial equation of degree 2, and mastering different methods to solve them is essential for advanced mathematics.

In this lesson, you'll learn multiple techniques to solve quadratic equations and understand when each method is most effective.

## What is a Quadratic Equation?

A **quadratic equation** is an equation that can be written in the standard form:

$$ax^2 + bx + c = 0$$

where:
- $a$, $b$, and $c$ are constants (numbers)
- $a \neq 0$ (if $a = 0$, it becomes a linear equation)
- $x$ represents the unknown variable

The solutions to a quadratic equation are called **roots** or **zeros**.

## Methods for Solving Quadratic Equations

### 1. Factoring Method

When a quadratic expression can be factored into two binomials, we can use the Zero Product Property: if $AB = 0$, then $A = 0$ or $B = 0$.

**Steps:**
1. Write the equation in standard form
2. Factor the quadratic expression
3. Set each factor equal to zero
4. Solve for $x$

### 2. Quadratic Formula

The most powerful and universal method uses the quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This formula works for ANY quadratic equation in standard form $ax^2 + bx + c = 0$.

### 3. Completing the Square

This method transforms the equation into a perfect square trinomial.

**Steps:**
1. Move the constant term to the right side
2. Divide by $a$ if $a \neq 1$
3. Add $\left(\frac{b}{2}\right)^2$ to both sides
4. Factor the left side as a perfect square
5. Take the square root of both sides
6. Solve for $x$

### 4. The Discriminant

The expression $b^2 - 4ac$ is called the **discriminant** ($\Delta$). It tells us about the nature of the roots:

- If $\Delta > 0$: Two distinct real roots
- If $\Delta = 0$: One repeated real root (two equal roots)
- If $\Delta < 0$: No real roots (two complex roots)

## Worked Examples

### Example 1: Solving by Factoring

**Problem:** Solve $x^2 + 5x + 6 = 0$

**Solution:**

Step 1: Factor the quadratic expression
$$x^2 + 5x + 6 = (x + 2)(x + 3) = 0$$

Step 2: Apply the Zero Product Property
$$x + 2 = 0 \text{ or } x + 3 = 0$$

Step 3: Solve each equation
$$x = -2 \text{ or } x = -3$$

**Answer:** $x = -2$ or $x = -3$

### Example 2: Using the Quadratic Formula

**Problem:** Solve $2x^2 - 7x + 3 = 0$

**Solution:**

Step 1: Identify $a = 2$, $b = -7$, $c = 3$

Step 2: Substitute into the quadratic formula
$$x = \frac{-(-7) \pm \sqrt{(-7)^2 - 4(2)(3)}}{2(2)}$$

Step 3: Simplify
$$x = \frac{7 \pm \sqrt{49 - 24}}{4}$$
$$x = \frac{7 \pm \sqrt{25}}{4}$$
$$x = \frac{7 \pm 5}{4}$$

Step 4: Calculate both solutions
$$x = \frac{7 + 5}{4} = \frac{12}{4} = 3$$
$$x = \frac{7 - 5}{4} = \frac{2}{4} = \frac{1}{2}$$

**Answer:** $x = 3$ or $x = \frac{1}{2}$

### Example 3: Completing the Square

**Problem:** Solve $x^2 + 6x + 1 = 0$

**Solution:**

Step 1: Move the constant to the right side
$$x^2 + 6x = -1$$

Step 2: Add $\left(\frac{6}{2}\right)^2 = 9$ to both sides
$$x^2 + 6x + 9 = -1 + 9$$
$$x^2 + 6x + 9 = 8$$

Step 3: Factor the left side as a perfect square
$$(x + 3)^2 = 8$$

Step 4: Take the square root of both sides
$$x + 3 = \pm\sqrt{8} = \pm 2\sqrt{2}$$

Step 5: Solve for $x$
$$x = -3 \pm 2\sqrt{2}$$

**Answer:** $x = -3 + 2\sqrt{2}$ or $x = -3 - 2\sqrt{2}$

### Example 4: Using the Discriminant

**Problem:** Determine the nature of roots for $x^2 - 4x + 5 = 0$ without solving.

**Solution:**

Step 1: Identify $a = 1$, $b = -4$, $c = 5$

Step 2: Calculate the discriminant
$$\Delta = b^2 - 4ac = (-4)^2 - 4(1)(5) = 16 - 20 = -4$$

Step 3: Interpret the result
Since $\Delta < 0$, this equation has no real roots (two complex roots).

**Answer:** The equation has no real solutions.

### Example 5: Real-World Application

**Problem:** A ball is thrown upward with an initial velocity of 20 m/s from a height of 2 meters. The height $h$ (in meters) after $t$ seconds is given by $h = -5t^2 + 20t + 2$. When does the ball hit the ground?

**Solution:**

Step 1: Set $h = 0$ (ground level)
$$-5t^2 + 20t + 2 = 0$$

Step 2: Use the quadratic formula with $a = -5$, $b = 20$, $c = 2$
$$t = \frac{-20 \pm \sqrt{20^2 - 4(-5)(2)}}{2(-5)}$$
$$t = \frac{-20 \pm \sqrt{400 + 40}}{-10}$$
$$t = \frac{-20 \pm \sqrt{440}}{-10}$$
$$t = \frac{-20 \pm 20.98}{-10}$$

Step 3: Calculate both solutions
$$t = \frac{-20 + 20.98}{-10} = \frac{0.98}{-10} = -0.098$$ (reject, negative time)
$$t = \frac{-20 - 20.98}{-10} = \frac{-40.98}{-10} = 4.098$$

**Answer:** The ball hits the ground after approximately 4.1 seconds.

## Key Takeaways

1. **Standard Form**: Always write quadratic equations as $ax^2 + bx + c = 0$ before solving
2. **Multiple Methods**: Choose the most efficient method based on the equation
   - Use factoring when the equation factors easily
   - Use the quadratic formula for any quadratic equation
   - Use completing the square for derivations and specific applications
3. **The Discriminant**: Check $b^2 - 4ac$ to determine the nature of roots before solving
4. **Check Your Work**: Substitute solutions back into the original equation to verify
5. **Real Applications**: Quadratic equations model many real-world phenomena including projectile motion, area problems, and optimization

## Practice Problems

Now that you've learned the methods, test your understanding with the practice exam. Remember to show your work and check your answers!
