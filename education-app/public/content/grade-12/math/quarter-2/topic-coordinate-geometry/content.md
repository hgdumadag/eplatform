# Coordinate Geometry

## Introduction

Coordinate geometry (also called analytic geometry) merges algebra and geometry by using a coordinate system to represent geometric figures algebraically. This powerful approach allows us to solve geometric problems using equations and formulas, and to visualize algebraic equations as geometric shapes. For Grade 12 students preparing for the UPCAT, mastery of coordinate geometry is essential.

The coordinate plane, introduced in earlier grades, becomes a tool for more sophisticated analysis in this topic. We will explore how to calculate distances between points, find the midpoint of a segment, determine the slope of a line, write equations of lines in multiple forms, and analyze relationships such as parallel and perpendicular lines. These skills are directly tested on standardized exams and form the foundation for analytic geometry in advanced courses.

## The Coordinate Plane and Quadrants

The **coordinate plane** is formed by two perpendicular number lines: the **x-axis** (horizontal) and the **y-axis** (vertical). They intersect at the **origin** $(0, 0)$.

Points are represented as ordered pairs $(x, y)$, where:
- $x$ is the horizontal coordinate (positive to the right, negative to the left)
- $y$ is the vertical coordinate (positive upward, negative downward)

The coordinate plane is divided into four **quadrants**:

- **Quadrant I:** $(+, +)$ — upper right
- **Quadrant II:** $(-, +)$ — upper left
- **Quadrant III:** $(-, -)$ — lower left
- **Quadrant IV:** $(+, -)$ — lower right

Points on the axes are not in any quadrant. The origin $(0, 0)$ is the intersection point of the axes.

![Description: Coordinate plane divided into four quadrants with labeled axes and sample points](/content/grade-12/math/quarter-2/topic-coordinate-geometry/images/coordinate-plane.png)
*Image needed: Labeled coordinate plane with four quadrants, axes, origin, and example points in each region*

## Distance Formula

The **distance formula** calculates the straight-line distance between two points $(x_1, y_1)$ and $(x_2, y_2)$. It is derived from the Pythagorean theorem:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This formula represents the length of the hypotenuse of a right triangle with legs of length $(x_2 - x_1)$ and $(y_2 - y_1)$.

**Example 1:**
Find the distance between $(0, 0)$ and $(5, 12)$.

$$d = \sqrt{(5 - 0)^2 + (12 - 0)^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$

**Example 2:**
Find the distance between $(-2, 3)$ and $(4, -1)$.

$$d = \sqrt{(4 - (-2))^2 + (-1 - 3)^2} = \sqrt{6^2 + (-4)^2} = \sqrt{36 + 16} = \sqrt{52} = 2\sqrt{13}$$

## Midpoint Formula

The **midpoint formula** finds the point exactly halfway between two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

This formula takes the average of the x-coordinates and the average of the y-coordinates.

**Example 1:**
Find the midpoint of the segment connecting $(3, -4)$ and $(-1, 6)$.

$$M = \left(\frac{3 + (-1)}{2}, \frac{-4 + 6}{2}\right) = \left(\frac{2}{2}, \frac{2}{2}\right) = (1, 1)$$

**Example 2:**
The endpoints of a segment are $(8, 2)$ and $(-4, 10)$. Find the midpoint.

$$M = \left(\frac{8 + (-4)}{2}, \frac{2 + 10}{2}\right) = \left(\frac{4}{2}, \frac{12}{2}\right) = (2, 6)$$

## Slope

The **slope** of a line measures its steepness and direction. It represents the ratio of the vertical change (rise) to the horizontal change (run) between two points.

### Slope Formula

For two points $(x_1, y_1)$ and $(x_2, y_2)$ with $x_2 \neq x_1$:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}$$

### Interpreting Slope

- **Positive slope** ($m > 0$): the line rises from left to right
- **Negative slope** ($m < 0$): the line falls from left to right
- **Zero slope** ($m = 0$): the line is horizontal
- **Undefined slope**: the line is vertical (the denominator is zero)

**Example 1:**
Find the slope through $(-2, 5)$ and $(4, -1)$.

$$m = \frac{-1 - 5}{4 - (-2)} = \frac{-6}{6} = -1$$

The slope is -1, indicating the line falls 1 unit for every 1 unit to the right.

**Example 2:**
Find the slope through $(3, 7)$ and $(3, 2)$.

$$m = \frac{2 - 7}{3 - 3} = \frac{-5}{0}$$ — **undefined**

This is a vertical line at $x = 3$ with undefined slope.

## Linear Equations: Forms and Conversions

### Slope-Intercept Form

The **slope-intercept form** is the most commonly used form for linear equations:

$$y = mx + b$$

where:
- $m$ is the slope
- $b$ is the y-intercept (the point where the line crosses the y-axis)

**Advantages:** Immediately shows the slope and y-intercept, making graphing straightforward.

**Example:** $y = 2x - 3$ has slope $m = 2$ and y-intercept $b = -3$ at the point $(0, -3)$.

### Point-Slope Form

The **point-slope form** is useful when you know a point on the line and the slope:

$$y - y_1 = m(x - x_1)$$

where $(x_1, y_1)$ is a known point and $m$ is the slope.

**Example:** Write the equation of a line through $(2, -3)$ with slope $\frac{2}{3}$.

$$y - (-3) = \frac{2}{3}(x - 2)$$
$$y + 3 = \frac{2}{3}x - \frac{4}{3}$$
$$y = \frac{2}{3}x - \frac{4}{3} - 3 = \frac{2}{3}x - \frac{13}{3}$$

### Standard Form

The **standard form** of a linear equation is:

$$Ax + By = C$$

where $A$, $B$, and $C$ are integers, and typically $A \geq 0$.

**Example:** Convert $y = -\frac{1}{2}x + 4$ to standard form.

$$y = -\frac{1}{2}x + 4$$
$$2y = -x + 8$$
$$x + 2y = 8$$

### Converting Between Forms

Students should be comfortable converting between all three forms.

## Finding Intercepts

### Y-Intercept

Set $x = 0$ and solve for $y$. For $y = mx + b$, the y-intercept is simply $b$.

**Example:** For $3x - 4y = 12$, set $x = 0$:
$$-4y = 12 \Rightarrow y = -3$$

The y-intercept is $(0, -3)$.

### X-Intercept

Set $y = 0$ and solve for $x$.

**Example:** For $3x - 4y = 12$, set $y = 0$:
$$3x = 12 \Rightarrow x = 4$$

The x-intercept is $(4, 0)$.

## Parallel and Perpendicular Lines

### Parallel Lines

Two lines are **parallel** if they have the same slope and do not intersect.

**Condition:** If line 1 has slope $m_1$ and line 2 has slope $m_2$, then the lines are parallel if $m_1 = m_2$.

**Example:** $y = 3x + 2$ and $y = 3x - 5$ are parallel (both have slope 3).

### Perpendicular Lines

Two lines are **perpendicular** if they intersect at a right angle (90°). Their slopes are **negative reciprocals** of each other.

**Condition:** If line 1 has slope $m_1$ and line 2 has slope $m_2$, then the lines are perpendicular if $m_1 \cdot m_2 = -1$.

Equivalently, $m_2 = -\frac{1}{m_1}$.

**Example 1:** Are $y = 2x + 1$ and $y = -\frac{1}{2}x - 3$ perpendicular?

Slope 1: $m_1 = 2$
Slope 2: $m_2 = -\frac{1}{2}$

Product: $m_1 \cdot m_2 = 2 \cdot (-\frac{1}{2}) = -1$ ✓

Yes, these lines are perpendicular.

**Example 2:** Are $2x + 3y = 6$ and $3x - 2y = 9$ perpendicular?

Rewrite in slope-intercept form:
- $3y = -2x + 6 \Rightarrow y = -\frac{2}{3}x + 2$, so $m_1 = -\frac{2}{3}$
- $-2y = -3x + 9 \Rightarrow y = \frac{3}{2}x - \frac{9}{2}$, so $m_2 = \frac{3}{2}$

Product: $m_1 \cdot m_2 = (-\frac{2}{3}) \cdot \frac{3}{2} = -1$ ✓

Yes, these lines are perpendicular.

## Key Formulas

**Distance Formula:**
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Midpoint Formula:**
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

**Slope Formula:**
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Slope-Intercept Form:**
$$y = mx + b$$

**Point-Slope Form:**
$$y - y_1 = m(x - x_1)$$

**Standard Form:**
$$Ax + By = C$$

**Parallel Lines:**
$$m_1 = m_2$$

**Perpendicular Lines:**
$$m_1 \cdot m_2 = -1$$

## Worked Examples

### Example 1: Finding Slope Between Two Points

Find the slope of the line passing through $(-2, 5)$ and $(4, -1)$.

$$m = \frac{-1 - 5}{4 - (-2)} = \frac{-6}{6} = -1$$

The slope is -1.

### Example 2: Finding Distance and Midpoint

Find the distance and midpoint between $(0, 0)$ and $(5, 12)$.

**Distance:**
$$d = \sqrt{(5 - 0)^2 + (12 - 0)^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$

**Midpoint:**
$$M = \left(\frac{0 + 5}{2}, \frac{0 + 12}{2}\right) = (2.5, 6)$$

### Example 3: Writing the Equation of a Line

Write the equation of the line passing through $(2, -3)$ with slope $\frac{2}{3}$, then convert to standard form.

**Using point-slope form:**
$$y - (-3) = \frac{2}{3}(x - 2)$$
$$y + 3 = \frac{2}{3}x - \frac{4}{3}$$

**Convert to slope-intercept form:**
$$y = \frac{2}{3}x - \frac{4}{3} - 3 = \frac{2}{3}x - \frac{13}{3}$$

**Convert to standard form:**
Multiply by 3 to eliminate fractions:
$$3y = 2x - 13$$
$$2x - 3y = 13$$

### Example 4: Determining Perpendicular Lines

Are the lines $2x - 3y = 6$ and $3x + 2y = 4$ perpendicular?

**Rewrite in slope-intercept form:**
- Line 1: $-3y = -2x + 6 \Rightarrow y = \frac{2}{3}x - 2$, so $m_1 = \frac{2}{3}$
- Line 2: $2y = -3x + 4 \Rightarrow y = -\frac{3}{2}x + 2$, so $m_2 = -\frac{3}{2}$

**Check product of slopes:**
$$m_1 \cdot m_2 = \frac{2}{3} \cdot (-\frac{3}{2}) = -1$$ ✓

Yes, the lines are perpendicular.

### Example 5: Finding Intersection Point

Find the point of intersection of $y = 2x + 1$ and $y = -x + 4$.

Since both expressions equal $y$:
$$2x + 1 = -x + 4$$
$$3x = 3$$
$$x = 1$$

Substitute $x = 1$ into either equation:
$$y = 2(1) + 1 = 3$$

The intersection point is $(1, 3)$.

**Verification:** Check with the second equation: $y = -(1) + 4 = 3$ ✓

## UPCAT Tips & Common Mistakes

**Tip 1: Distance Formula is Derived from Pythagorean Theorem**

Understanding the connection between distance formula and the Pythagorean theorem helps you remember and apply it correctly. The horizontal and vertical distances form the legs of a right triangle.

**Tip 2: Horizontal and Vertical Lines Have Special Slopes**

- Horizontal lines have slope $m = 0$
- Vertical lines have undefined slope (not 0)

This distinction is frequently tested on the UPCAT.

**Tip 3: Remember the Perpendicular Slope Relationship**

For perpendicular lines, the slopes are **negative reciprocals**. If one slope is $\frac{2}{3}$, the perpendicular slope is $-\frac{3}{2}$. A common error is forgetting the negative sign.

**Tip 4: Use Point-Slope Form Strategically**

When given a point and a slope, use point-slope form directly rather than trying to first find the y-intercept. This reduces the chance of computational errors.

**Tip 5: Always Verify Perpendicularity with the Product**

To check if two lines are perpendicular, multiply their slopes. The product should equal exactly -1. If it doesn't, they're not perpendicular.

**Common Mistake 1: Confusing Numerator and Denominator in Slope Formula**

The slope formula has rise (change in $y$) in the numerator and run (change in $x$) in the denominator. Reversing these gives the reciprocal of the correct slope.

**Common Mistake 2: Forgetting About Vertical Lines**

Students sometimes say a vertical line has slope 0. Actually, a vertical line has **undefined slope**. The denominator $(x_2 - x_1)$ equals zero, making the slope undefined.

**Common Mistake 3: Incorrect Perpendicular Slope Calculation**

If a line has slope $m = 3$, the perpendicular slope is NOT $\frac{1}{3}$. It's $-\frac{1}{3}$ (negative reciprocal). The negative sign is essential.

**Common Mistake 4: Confusing Parallel and Perpendicular Conditions**

Parallel lines have equal slopes ($m_1 = m_2$). Perpendicular lines have slopes whose product is -1 ($m_1 \times m_2 = -1$). Don't mix these up.

## Key Takeaways

1. **The coordinate plane** is divided into four quadrants by the x-axis and y-axis, intersecting at the origin.

2. **Distance formula** $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ calculates the straight-line distance between two points using the Pythagorean theorem.

3. **Midpoint formula** $M = (\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2})$ finds the point halfway between two points.

4. **Slope** $m = \frac{y_2 - y_1}{x_2 - x_1}$ measures the steepness and direction of a line. Horizontal lines have slope 0; vertical lines have undefined slope.

5. **Linear equations** can be written in three forms:
   - Slope-intercept: $y = mx + b$ (most convenient for graphing)
   - Point-slope: $y - y_1 = m(x - x_1)$ (useful given a point and slope)
   - Standard: $Ax + By = C$ (often used in application problems)

6. **Parallel lines** have the same slope. **Perpendicular lines** have slopes that are negative reciprocals of each other (product = -1).

7. **Intercepts** are found by setting $x = 0$ for y-intercept and $y = 0$ for x-intercept.

## Practice Problems

1. Find the distance between $(3, 4)$ and $(-6, 12)$.

2. Find the midpoint of the segment connecting $(-5, 2)$ and $(7, -8)$.

3. Calculate the slope of the line through $(1, -2)$ and $(5, 6)$.

4. Write the equation of the line with slope -2 and y-intercept 5.

5. Write the equation of the line through $(-1, 3)$ and $(2, 9)$ in slope-intercept form.

6. Determine if the lines $4x - 2y = 8$ and $y = 2x + 3$ are parallel, perpendicular, or neither.

7. Find the equation of a line perpendicular to $y = \frac{1}{3}x - 2$ passing through $(0, 4)$.

8. Find the x- and y-intercepts of $3x + 4y = 12$.

9. Two lines intersect at right angles. If one line has slope $\frac{3}{4}$, what is the slope of the other line?

10. A line passes through $(2, 5)$ and is parallel to the line $2x + 3y = 6$. Write its equation in slope-intercept form.
