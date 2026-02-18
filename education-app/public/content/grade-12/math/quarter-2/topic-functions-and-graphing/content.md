# Functions and Graphing

## Introduction

Functions are among the most important concepts in mathematics, serving as the foundation for advanced algebra, calculus, and mathematical modeling. A function describes a relationship between input and output values, where each input produces exactly one output. Understanding functions and their graphical representations is essential for success on the UPCAT and in higher mathematics.

Graphing functions—particularly quadratic functions—is a skill that appears frequently on standardized tests. The ability to quickly identify key features of a parabola (vertex, axis of symmetry, intercepts) and understand how transformations affect the graph can save valuable time on timed exams like the UPCAT.

In this topic, we will explore the definition and notation of functions, methods for determining domain and range, properties of quadratic functions, graphing techniques, and the algebraic transformations that shift, reflect, and stretch parabolas. These concepts build a comprehensive understanding of functional relationships that is critical for academic success.

## Function Definition and Notation

A **function** is a relationship between two sets of numbers where each input has exactly one output. If we denote the set of inputs as the domain and the set of outputs as the range, we can write:

$$f: \text{Domain} \to \text{Range}$$

The most common way to represent a function is using **function notation**: $f(x)$, which reads as "f of x." Here:
- $f$ is the function name (could be $g$, $h$, or any letter)
- $x$ is the input variable (the independent variable)
- $f(x)$ is the output (the dependent variable, equivalent to $y$)

**Example:** If $f(x) = 2x + 3$, then:
- $f(0) = 2(0) + 3 = 3$
- $f(5) = 2(5) + 3 = 13$
- $f(-2) = 2(-2) + 3 = -1$

### The Vertical Line Test

To determine if a graph represents a function, use the **vertical line test**: if any vertical line intersects the graph at more than one point, the relationship is not a function. A function can be intersected by a vertical line at most once.

![Description: Coordinate plane showing a parabola (function) and a circle (not a function) to illustrate vertical line test](/content/grade-12/math/quarter-2/topic-functions-and-graphing/images/vertical-line-test.png)
*Image needed: Illustration of vertical line test with function (parabola) and non-function (circle) examples*

## Domain and Range

**Domain** is the set of all possible input values (x-values) for which the function is defined.

**Range** is the set of all possible output values (y-values) that the function produces.

### Finding Domain

For polynomial functions like linear and quadratic functions, the domain is typically all real numbers: $\mathbb{R}$ or $(-\infty, \infty)$.

For rational functions, exclude values that make the denominator zero.

For functions with square roots, ensure the radicand (expression under the radical) is non-negative.

**Examples:**
- $f(x) = 2x + 5$: Domain = all real numbers = $(-\infty, \infty)$
- $f(x) = \frac{1}{x-3}$: Domain = all real numbers except 3 = $(-\infty, 3) \cup (3, \infty)$
- $f(x) = \sqrt{x - 4}$: Domain = $x \geq 4$ = $[4, \infty)$

### Finding Range

The range depends on the type of function. For quadratic functions, the range depends on the vertex and whether the parabola opens upward or downward.

**Examples:**
- $f(x) = x^2$ (opens upward, vertex at origin): Range = $[0, \infty)$
- $f(x) = -x^2 + 5$ (opens downward, vertex at (0,5)): Range = $(-\infty, 5]$
- $f(x) = 2x + 3$ (linear): Range = all real numbers = $(-\infty, \infty)$

## Quadratic Functions and Parabolas

A **quadratic function** has the form:

$$f(x) = ax^2 + bx + c$$

where $a$, $b$, and $c$ are constants and $a \neq 0$.

The graph of a quadratic function is a **parabola**—a U-shaped or inverted U-shaped curve.

### Key Properties of Parabolas

**Direction (opens up or down):**
- If $a > 0$, the parabola opens upward (minimum vertex)
- If $a < 0$, the parabola opens downward (maximum vertex)

**Vertex:**
The vertex is the lowest point (if opening up) or highest point (if opening down).

In standard form $f(x) = ax^2 + bx + c$, the x-coordinate of the vertex is:
$$x = -\frac{b}{2a}$$

Then substitute this $x$ value into the function to find the y-coordinate: $y = f(-\frac{b}{2a})$.

**Axis of Symmetry:**
The vertical line that passes through the vertex and divides the parabola into two mirror images:
$$x = -\frac{b}{2a}$$

### Vertex Form

The **vertex form** of a quadratic function is:
$$f(x) = a(x - h)^2 + k$$

where $(h, k)$ is the vertex.

- If $h > 0$, the parabola shifts RIGHT $h$ units from $y = ax^2$
- If $h < 0$, the parabola shifts LEFT $|h|$ units from $y = ax^2$
- If $k > 0$, the parabola shifts UP $k$ units
- If $k < 0$, the parabola shifts DOWN $|k|$ units

Converting from standard to vertex form often requires completing the square.

### Finding Intercepts

**Y-intercept:**
Set $x = 0$ in the function: $y = f(0) = c$ (for standard form)

**X-intercepts (zeros/roots):**
Set $f(x) = 0$ and solve the quadratic equation using factoring, completing the square, or the quadratic formula:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

## Function Transformations (UPCAT Focus)

Transformations describe how a function's graph changes when we modify the equation. Understanding transformations allows you to quickly sketch complex functions starting from simpler parent functions.

### Parent Function: $y = x^2$

This is the simplest quadratic function with vertex at the origin and opening upward.

### Horizontal Shifts

**Important:** When the variable $x$ is modified inside the parentheses, the direction of shift is OPPOSITE to what the sign suggests.

- $y = (x - h)^2$: shifts RIGHT $h$ units (note: inside brackets with minus sign, but shifts right)
- $y = (x + h)^2$: shifts LEFT $h$ units (note: inside brackets with plus sign, but shifts left)

**Example:**
- $y = (x - 3)^2$ shifts the parabola 3 units to the RIGHT
- $y = (x + 2)^2$ shifts the parabola 2 units to the LEFT

### Vertical Shifts

When constants are added or subtracted outside the squared term, the shift direction matches the sign.

- $y = x^2 + k$: shifts UP $k$ units
- $y = x^2 - k$: shifts DOWN $k$ units

**Example:**
- $y = x^2 + 4$ shifts the parabola 4 units UP
- $y = x^2 - 5$ shifts the parabola 5 units DOWN

### Reflections

- $y = -x^2$: reflects the parabola over the x-axis (opens downward instead of upward)
- Reflections over the y-axis are less common for parabolas in standard position

### Vertical Stretches and Compressions

The coefficient $a$ in $f(x) = ax^2$ affects the parabola's "width."

- If $|a| > 1$: the parabola is STRETCHED vertically (narrower)
- If $0 < |a| < 1$: the parabola is COMPRESSED vertically (wider)

**Examples:**
- $y = 2x^2$ is narrower than $y = x^2$
- $y = \frac{1}{3}x^2$ is wider than $y = x^2$
- $y = -3x^2$ is narrower and opens downward

### Combining Transformations

The equation $f(x) = a(x - h)^2 + k$ incorporates all transformations:
- $a$: vertical stretch/compression and reflection
- $h$: horizontal shift
- $k$: vertical shift

**Example:** Describe all transformations of $y = -2(x + 3)^2 - 1$ compared to $y = x^2$.

1. Vertical stretch by factor of 2 (because $|a| = 2 > 1$)
2. Reflection over x-axis (because $a = -2 < 0$)
3. Horizontal shift 3 units LEFT (because $(x + 3)$ means $h = -3$)
4. Vertical shift 1 unit DOWN (because $k = -1$)

The vertex is at $(-3, -1)$.

## Key Formulas

**Quadratic function (standard form):**
$$f(x) = ax^2 + bx + c$$

**Quadratic function (vertex form):**
$$f(x) = a(x - h)^2 + k, \quad \text{vertex at } (h, k)$$

**Vertex x-coordinate (from standard form):**
$$x = -\frac{b}{2a}$$

**Quadratic formula (for x-intercepts):**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Domain and Range (quadratic with $a > 0$):**
- Domain: $(-\infty, \infty)$
- Range: $[k, \infty)$ where $k$ is the y-coordinate of the vertex

**Domain and Range (quadratic with $a < 0$):**
- Domain: $(-\infty, \infty)$
- Range: $(-\infty, k]$ where $k$ is the y-coordinate of the vertex

## Worked Examples

### Example 1: Finding the Vertex from Standard Form

Find the vertex of $f(x) = 2x^2 - 8x + 3$.

Using $x = -\frac{b}{2a}$ with $a = 2$, $b = -8$:

$$x = -\frac{-8}{2(2)} = \frac{8}{4} = 2$$

Substitute $x = 2$ into the function:
$$f(2) = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5$$

The vertex is $(2, -5)$.

### Example 2: Identifying Transformations

Describe how the graph of $y = -\frac{1}{2}(x + 3)^2 + 1$ compares to $y = x^2$.

1. Vertical compression by factor of $\frac{1}{2}$ (because $|a| = \frac{1}{2} < 1$)
2. Reflection over the x-axis (because $a = -\frac{1}{2} < 0$)
3. Horizontal shift 3 units LEFT
4. Vertical shift 1 unit UP

Vertex: $(-3, 1)$

Opens downward with a "wider" shape than the parent function.

### Example 3: Finding X-intercepts

Find the x-intercepts of $f(x) = x^2 - 3x - 10$.

Set $f(x) = 0$:
$$x^2 - 3x - 10 = 0$$

Factor:
$$(x - 5)(x + 2) = 0$$

Solutions: $x = 5$ and $x = -2$

The x-intercepts are $(5, 0)$ and $(-2, 0)$.

### Example 4: Finding Domain and Range

Find the domain and range of $f(x) = -(x - 2)^2 + 6$.

**Domain:** All real numbers = $(-\infty, \infty)$

**Range:** Since $a = -1 < 0$, the parabola opens downward. The vertex is at $(2, 6)$, which is the maximum point. Therefore, the range is $(-\infty, 6]$.

### Example 5: Writing a Quadratic from Key Features

A parabola has vertex at $(-2, 5)$, opens downward, and has a vertical compression by factor $\frac{1}{2}$. Write the equation.

Using vertex form with $h = -2$, $k = 5$, $a = -\frac{1}{2}$:

$$f(x) = -\frac{1}{2}(x - (-2))^2 + 5$$
$$f(x) = -\frac{1}{2}(x + 2)^2 + 5$$

To expand to standard form:
$$f(x) = -\frac{1}{2}(x^2 + 4x + 4) + 5$$
$$f(x) = -\frac{1}{2}x^2 - 2x - 2 + 5$$
$$f(x) = -\frac{1}{2}x^2 - 2x + 3$$

## Graphing Quadratic Functions: Step-by-Step

**Steps to graph $f(x) = ax^2 + bx + c$:**

1. **Find the vertex:**
   - Calculate $x = -\frac{b}{2a}$
   - Calculate $y = f(-\frac{b}{2a})$
   - Plot the vertex $(h, k)$

2. **Find the y-intercept:**
   - Set $x = 0$: $y = c$
   - Plot the point $(0, c)$

3. **Find the x-intercepts (if they exist):**
   - Set $f(x) = 0$ and solve
   - Plot any x-intercepts

4. **Determine direction:**
   - If $a > 0$, opens upward
   - If $a < 0$, opens downward

5. **Draw the axis of symmetry:**
   - Vertical line at $x = -\frac{b}{2a}$

6. **Use symmetry to find additional points:**
   - If $(x_1, y)$ is on the parabola, then $(2h - x_1, y)$ is also on the parabola
   - Plot a few additional points and connect smoothly

## UPCAT Tips & Common Mistakes

**Tip 1: Remember the Horizontal Shift Direction**

Inside the parentheses, $y = (x - 3)^2$ shifts RIGHT (not left), and $y = (x + 3)^2$ shifts LEFT (not right). This is the opposite of what the sign might suggest and is frequently tested.

**Tip 2: Distinguish Between Vertex Form and Standard Form**

Be comfortable converting between forms. Vertex form makes transformations obvious; standard form is useful for applying the quadratic formula or finding y-intercepts.

**Tip 3: Use the Discriminant to Determine x-intercepts**

The discriminant $\Delta = b^2 - 4ac$ tells you:
- If $\Delta > 0$: two distinct real x-intercepts
- If $\Delta = 0$: one repeated real x-intercept (vertex touches x-axis)
- If $\Delta < 0$: no real x-intercepts (parabola doesn't cross x-axis)

**Tip 4: Determine Range Correctly Based on Direction**

- Opens upward ($a > 0$): range is $[k, \infty)$ where $k$ is the y-coordinate of the vertex
- Opens downward ($a < 0$): range is $(-\infty, k]$ where $k$ is the y-coordinate of the vertex

**Common Mistake 1: Incorrect Direction of Horizontal Shifts**

Students often flip the direction. Remember: $(x - h)$ means shift RIGHT by $h$.

**Common Mistake 2: Forgetting to Change the Sign**

When converting $y = (x + 3)^2$ to vertex form, the vertex is at $(-3, k)$, not $(3, k)$. The sign inside the parentheses is opposite the h-coordinate.

**Common Mistake 3: Confusing "Stretch" and "Compression"**

If $|a| > 1$, the parabola is NARROWER (stretched). If $0 < |a| < 1$, it's WIDER (compressed).

## Key Takeaways

1. **Functions** relate inputs to outputs, with each input producing exactly one output (verified by the vertical line test).

2. **Domain and range** describe the set of all possible inputs and outputs, respectively.

3. **Quadratic functions** ($f(x) = ax^2 + bx + c$) graph as parabolas with a vertex, axis of symmetry, and intercepts.

4. **Vertex form** ($f(x) = a(x - h)^2 + k$) makes the vertex and transformations immediately apparent.

5. **Transformations** of $y = x^2$ include:
   - Horizontal shifts: $(x - h)$ shifts RIGHT
   - Vertical shifts: $+k$ shifts UP
   - Reflections: negative $a$ reflects over x-axis
   - Stretches/compressions: $|a|$ affects width

6. **Key features** of parabolas include vertex, axis of symmetry, x- and y-intercepts, and direction of opening.

7. **Domain** of polynomial functions is all real numbers; **range** depends on the vertex and direction.

## Practice Problems

1. For $f(x) = 3(x - 2)^2 + 5$, identify the vertex, axis of symmetry, and direction of opening.

2. Find the vertex of $f(x) = x^2 - 6x + 8$ using the formula $x = -\frac{b}{2a}$.

3. Describe all transformations: $y = -2(x + 1)^2 - 3$ compared to $y = x^2$.

4. Find the x-intercepts of $f(x) = x^2 + 5x + 6$.

5. Find the domain and range of $f(x) = (x - 4)^2 - 9$.

6. Write the equation of a parabola with vertex at $(1, -4)$ that opens downward with vertical stretch by factor 3.

7. If $f(x) = 2x^2 - 5$, find $f(-3)$ and $f(2)$.

8. Determine if the parabola $f(x) = x^2 - 2x + 5$ has x-intercepts using the discriminant.

9. Graph $f(x) = -x^2 + 4$ and label the vertex, axis of symmetry, and intercepts.

10. A projectile is launched with the height function $h(t) = -16t^2 + 64t$, where $t$ is time in seconds. Find the maximum height and the time at which it occurs.
