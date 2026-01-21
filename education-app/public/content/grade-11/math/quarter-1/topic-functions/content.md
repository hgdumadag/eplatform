# Introduction to Functions

## Introduction

Functions are one of the most fundamental concepts in mathematics and appear everywhere in the real world—from calculating the cost of a phone plan based on usage, to modeling population growth, to predicting weather patterns. A function is essentially a relationship between inputs and outputs where each input produces exactly one output. Think of it like a machine: you put something in, the machine processes it according to a specific rule, and out comes a result.

In Grade 11, we build on basic algebraic knowledge to understand functions deeply. This foundation prepares you for calculus and helps you model complex real-world situations mathematically.

---

## Main Content

### Function Notation

**What is a function?** A function $f$ is a relation that assigns to each input value $x$ exactly one output value. We denote this as:

$$f: x \mapsto f(x)$$

Or more commonly, we write $y = f(x)$, where:
- $x$ is the **input** (independent variable)
- $f(x)$ (or $y$) is the **output** (dependent variable)
- $f$ is the **function name**

**Example:** If $f(x) = 2x + 3$, then:
- $f(5) = 2(5) + 3 = 13$ (when $x = 5$, the output is 13)
- $f(-2) = 2(-2) + 3 = -1$ (when $x = -2$, the output is -1)

### Domain and Range

Every function has two important sets:

**Domain:** The set of all possible input values ($x$-values) for which the function is defined. In real-world contexts, the domain is often restricted by practical limitations.

**Range:** The set of all possible output values ($f(x)$-values) that the function can produce.

**Finding the Domain:**
- Identify restrictions: Can't divide by zero, can't take even roots of negative numbers
- For $g(x) = \frac{1}{x-2}$: The domain is all real numbers except $x = 2$, written as $\mathbb{R} \setminus \{2\}$ or $(-\infty, 2) \cup (2, \infty)$
- For $h(x) = \sqrt{x-1}$: The domain is $x \geq 1$, written as $[1, \infty)$

### Evaluating Functions

To evaluate a function means to find the output value for a specific input.

**Steps:**
1. Identify the function rule
2. Substitute the input value for every $x$
3. Simplify following order of operations

**Be careful:** When evaluating $f(x-1)$, replace all instances of $x$ with $(x-1)$:

If $f(x) = x^2 + 2x$, then:
$$f(x-1) = (x-1)^2 + 2(x-1) = x^2 - 2x + 1 + 2x - 2 = x^2 - 1$$

### Function Operations

Just as we can add, subtract, multiply, and divide numbers, we can perform these operations on functions:

$$(f + g)(x) = f(x) + g(x)$$
$$(f - g)(x) = f(x) - g(x)$$
$$(f \cdot g)(x) = f(x) \cdot g(x)$$
$$\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}, \quad g(x) \neq 0$$

**Real-world context:** If $r(x)$ represents revenue as a function of items sold and $c(x)$ represents cost, then $(r - c)(x)$ represents profit!

### Composition of Functions

**Function composition** creates a new function by applying one function to the output of another. We denote this as $(f \circ g)(x)$ (read as "$f$ composed with $g$ of $x$"):

$$(f \circ g)(x) = f(g(x))$$

**Important:** $(f \circ g)(x) \neq (g \circ f)(x)$ in general—order matters!

**Steps to find $(f \circ g)(x)$:**
1. Start with the innermost function: $g(x)$
2. Take that result and substitute it into $f$: $f(g(x))$

**Example:** If $f(x) = 2x + 1$ and $g(x) = x^2$:
$$(f \circ g)(x) = f(g(x)) = f(x^2) = 2(x^2) + 1 = 2x^2 + 1$$
$$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$$

Notice they're different!

---

## Formulas

**Key Function Formulas:**

$$\text{Function notation: } y = f(x)$$

$$\text{Function composition: } (f \circ g)(x) = f(g(x))$$

$$\text{Function addition: } (f + g)(x) = f(x) + g(x)$$

$$\text{Function multiplication: } (f \cdot g)(x) = f(x) \cdot g(x)$$

$$\text{Difference quotient: } \frac{f(x + h) - f(x)}{h} \quad (h \neq 0)$$

---

## Examples

### Example 1: Evaluating a Function
**Problem:** Given $f(x) = 3x^2 - 4x + 1$, find $f(2)$.

**Solution:**
$$f(2) = 3(2)^2 - 4(2) + 1 = 3(4) - 8 + 1 = 12 - 8 + 1 = 5$$

**Answer:** $f(2) = 5$

---

### Example 2: Finding the Domain
**Problem:** Find the domain of $f(x) = \frac{1}{\sqrt{x-3}}$.

**Solution:**
- For the square root: need $x - 3 \geq 0$, so $x \geq 3$
- For the denominator: $\sqrt{x-3} \neq 0$, so $x - 3 \neq 0$, meaning $x \neq 3$
- Combined: $x > 3$

**Answer:** Domain = $(3, \infty)$

---

### Example 3: Function Composition
**Problem:** If $f(x) = x + 2$ and $g(x) = 3x$, find $(f \circ g)(x)$ and $(g \circ f)(x)$.

**Solution:**
$$(f \circ g)(x) = f(g(x)) = f(3x) = 3x + 2$$

$$(g \circ f)(x) = g(f(x)) = g(x + 2) = 3(x + 2) = 3x + 6$$

**Answer:** $(f \circ g)(x) = 3x + 2$ and $(g \circ f)(x) = 3x + 6$

---

### Example 4: Function Operations
**Problem:** Given $f(x) = x^2$ and $g(x) = 2x + 1$, find $(f + g)(x)$ and $(f \cdot g)(x)$.

**Solution:**
$$(f + g)(x) = f(x) + g(x) = x^2 + 2x + 1$$

$$(f \cdot g)(x) = f(x) \cdot g(x) = x^2(2x + 1) = 2x^3 + x^2$$

**Answer:** $(f + g)(x) = x^2 + 2x + 1$ and $(f \cdot g)(x) = 2x^3 + x^2$

---

### Example 5: Evaluating a Composed Function at a Point
**Problem:** If $f(x) = 2x - 3$ and $g(x) = x^2 + 1$, find $(f \circ g)(2)$.

**Solution:**
$$g(2) = 2^2 + 1 = 5$$
$$f(g(2)) = f(5) = 2(5) - 3 = 10 - 3 = 7$$

Alternatively: $(f \circ g)(x) = f(x^2 + 1) = 2(x^2 + 1) - 3 = 2x^2 + 2 - 3 = 2x^2 - 1$

So $(f \circ g)(2) = 2(2)^2 - 1 = 8 - 1 = 7$

**Answer:** $(f \circ g)(2) = 7$

---

### Example 6: Real-World Application
**Problem:** A phone company charges a base fee of \$20 per month plus \$0.10 per minute of usage. Write a function for the monthly cost, find the domain and range, then calculate the cost for 500 minutes of usage.

**Solution:**

Let $m$ = minutes used per month, $C(m)$ = monthly cost in dollars.

$$C(m) = 20 + 0.10m$$

**Domain:** Practically, $m \geq 0$ (can't use negative minutes). Depending on the plan, there might be an upper limit. Let's assume $0 \leq m \leq 2000$, so domain = $[0, 2000]$.

**Range:** When $m = 0$: $C(0) = 20$. When $m = 2000$: $C(2000) = 20 + 0.10(2000) = 220$. So range = $[20, 220]$.

**For 500 minutes:**
$$C(500) = 20 + 0.10(500) = 20 + 50 = 70 \text{ dollars}$$

**Answer:** The cost function is $C(m) = 20 + 0.10m$, with domain $[0, 2000]$ and range $[20, 220]$. The cost for 500 minutes is $70.

---

## Key Takeaways

1. **A function is a special relationship** where each input produces exactly one output. Use function notation $f(x)$ to represent this clearly.

2. **Domain and range matter:** The domain tells you what inputs are valid; the range tells you what outputs are possible. Always check for restrictions like division by zero or negative values under even roots.

3. **Evaluation is substitution:** To find $f(a)$, substitute $a$ for every $x$ and simplify carefully.

4. **You can combine functions** through addition, subtraction, multiplication, and division—just combine the outputs.

5. **Composition chains functions together:** $(f \circ g)(x) = f(g(x))$ means apply $g$ first, then apply $f$ to the result. Remember that order matters!

6. **Functions model the real world:** From costs and revenue to distances and temperatures, functions help us understand how one quantity depends on another. This is the power of mathematical modeling.

7. **Practice is essential:** Functions appear in every advanced mathematics course. Mastering them now sets you up for success in calculus, physics, economics, and many other fields.
