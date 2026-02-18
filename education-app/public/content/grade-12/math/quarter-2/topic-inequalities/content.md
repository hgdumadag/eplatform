# Inequalities

## Introduction

Inequalities are mathematical statements that compare quantities using symbols other than the equals sign. Unlike equations, which show that two expressions have the same value, inequalities show relationships where one expression is greater than, less than, or not equal to another. Understanding inequalities is critical for Grade 12 students preparing for the UPCAT, as these concepts appear frequently in both pure algebra problems and real-world applications.

Inequalities model many practical situations: budgets with spending limits, test scores that meet minimum requirements, age restrictions, speed limits, and temperature ranges. The ability to solve inequalities and interpret their solutions is fundamental to advanced mathematics and numerous applications in science, economics, and engineering.

In this topic, we will explore the properties of inequalities, methods for solving them, compound inequalities, and how to translate everyday language into mathematical inequality notation—a skill frequently tested on standardized exams like the UPCAT.

## Inequality Symbols and Their Meanings

The four primary inequality symbols are:

- **<** (less than): indicates the value on the left is smaller than the value on the right
- **>** (greater than): indicates the value on the left is larger than the value on the right
- **≤** (less than or equal to, at most, no more than): indicates the value on the left is smaller or equal to the right
- **≥** (greater than or equal to, at least, no less than): indicates the value on the left is larger or equal to the right

Understanding the precise meaning of each symbol is essential, especially in UPCAT word problems where phrases like "at most" and "no more than" translate to ≤, while "at least" and "no less than" translate to ≥.

## Properties of Inequalities

Inequalities follow specific algebraic properties that govern how we solve them. These properties are similar to those for equations, with one critical exception regarding multiplication and division by negative numbers.

### Addition and Subtraction Property

When you add or subtract the same value from both sides of an inequality, the inequality symbol remains unchanged:

If $a < b$, then $a + c < b + c$ and $a - c < b - c$.

**Example:**
$$x - 5 > 3$$
$$x - 5 + 5 > 3 + 5$$
$$x > 8$$

### Multiplication and Division by Positive Numbers

When you multiply or divide both sides of an inequality by the same positive number, the inequality symbol remains unchanged:

If $a < b$ and $c > 0$, then $ac < bc$ and $\frac{a}{c} < \frac{b}{c}$.

**Example:**
$$3x < 12$$
$$\frac{3x}{3} < \frac{12}{3}$$
$$x < 4$$

### Multiplication and Division by Negative Numbers (KEY UPCAT TRAP)

When you multiply or divide both sides of an inequality by the same negative number, **the inequality symbol must be reversed**:

If $a < b$ and $c < 0$, then $ac > bc$ and $\frac{a}{c} > \frac{b}{c}$.

This is the most commonly tested concept regarding inequalities on the UPCAT. Failure to flip the symbol when multiplying or dividing by a negative number results in an incorrect solution.

**Example:**
$$-2x > 10$$
$$\frac{-2x}{-2} < \frac{10}{-2}$$
$$x < -5$$

Notice that the > symbol became < when we divided by -2.

## Solving Multi-Step Linear Inequalities

Solving linear inequalities follows the same multi-step process as solving equations, with careful attention to the direction of the inequality symbol.

**General Strategy:**
1. Distribute if needed
2. Combine like terms on each side
3. Use addition/subtraction to collect variable terms on one side
4. Use addition/subtraction to collect constant terms on the other side
5. Divide or multiply to isolate the variable (remember to flip the symbol if multiplying/dividing by a negative)

**Worked Example:**
$$-3x + 7 > 1$$
$$-3x + 7 - 7 > 1 - 7$$
$$-3x > -6$$
$$\frac{-3x}{-3} < \frac{-6}{-3}$$
$$x < 2$$

The solution is all real numbers less than 2. On a number line, we represent this with an open circle at 2 and an arrow extending left.

## Compound Inequalities

A compound inequality combines two or more inequalities using the words "and" or "or."

### Compound Inequalities with AND

An AND compound inequality requires both conditions to be true simultaneously. The solution is the intersection of the two solution sets.

**Form:** $a < x < b$ (also called a three-part inequality)

This is shorthand for: $(x > a) \text{ AND } (x < b)$

**Example:** Solve $-4 < 3x - 1 \leq 8$

Add 1 to all parts:
$$-4 + 1 < 3x - 1 + 1 \leq 8 + 1$$
$$-3 < 3x \leq 9$$

Divide all parts by 3:
$$-1 < x \leq 3$$

The solution includes all values strictly greater than -1 and less than or equal to 3.

### Compound Inequalities with OR

An OR compound inequality is satisfied when at least one of the conditions is true. The solution is the union of the two solution sets.

**Form:** $x < a \text{ OR } x > b$

**Example:** Solve $x + 2 < -1$ OR $x + 2 > 5$

First inequality:
$$x + 2 < -1$$
$$x < -3$$

Second inequality:
$$x + 2 > 5$$
$$x > 3$$

The solution is: $x < -3$ OR $x > 3$

This represents all numbers either to the left of -3 or to the right of 3 on the number line.

## Number Line Representation

Number lines provide visual representation of inequality solutions:

- Use an **open circle** (○) for strict inequalities (< or >)
- Use a **closed circle** (●) for inclusive inequalities (≤ or ≥)
- Draw an arrow or line from the circle in the direction that satisfies the inequality

![Description: Number line showing compound inequality -1 < x ≤ 3 with open circle at -1 and closed circle at 3](/content/grade-12/math/quarter-2/topic-inequalities/images/number-line.png)
*Image needed: Number line showing open and closed circles with inequalities, demonstrating both AND and OR compound inequalities*

## Interval Notation

Interval notation provides a compact way to express solution sets using brackets and parentheses:

- **[a, b]** – closed interval (both endpoints included, ≤ and ≥)
- **(a, b)** – open interval (endpoints excluded, < and >)
- **[a, b)** – half-open interval (left endpoint included, right excluded)
- **(a, ∞)** – open interval extending to infinity
- **[a, ∞)** – closed on left, extending to infinity
- **(-∞, b)** – extending from negative infinity to open right endpoint
- **(-∞, b]** – extending from negative infinity to closed right endpoint

**Examples:**
- $x < 4$ in interval notation is $(-\infty, 4)$
- $x \geq -2$ in interval notation is $[-2, \infty)$
- $-1 < x \leq 3$ in interval notation is $(-1, 3]$
- $x < -3$ OR $x > 3$ in interval notation is $(-\infty, -3) \cup (3, \infty)$

Note: The symbol $\cup$ represents the union of two sets.

## Translating Verbal Phrases to Inequalities (UPCAT Focus)

A significant portion of UPCAT inequality problems involve translating English phrases into mathematical notation. Mastering this skill is essential for success.

**Key Phrase Translations:**

| English Phrase | Symbol | Example |
|---|---|---|
| less than, fewer than | < | "fewer than 5 apples" → $a < 5$ |
| greater than, more than | > | "more than 10 dollars" → $d > 10$ |
| at most, no more than | ≤ | "at most 20 people" → $p \leq 20$ |
| at least, no less than | ≥ | "at least 15 correct" → $c \geq 15$ |
| between (exclusive) | $a < x < b$ | "between 5 and 10" → $5 < x < 10$ |
| not equal to | ≠ | "not equal to 7" → $x \neq 7$ |

**Complex Translation Example:**

"Three more than twice a number is at most 15"

Let $x$ represent the number.
- "Twice a number" → $2x$
- "Three more than" → $2x + 3$
- "is at most" → $\leq$

Inequality: $2x + 3 \leq 15$

Solving:
$$2x + 3 \leq 15$$
$$2x \leq 12$$
$$x \leq 6$$

## Key Formulas

The primary formulas and rules for working with inequalities are:

**Properties of Inequalities:**
- Addition/Subtraction: $a < b \Rightarrow a + c < b + c$
- Multiplication by positive: $a < b \text{ and } c > 0 \Rightarrow ac < bc$
- Multiplication by negative: $a < b \text{ and } c < 0 \Rightarrow ac > bc$ (symbol flips)

**Interval Notation:**
- Closed: $[a, b] = \{x : a \leq x \leq b\}$
- Open: $(a, b) = \{x : a < x < b\}$
- Combining inequalities: $\text{AND} \rightarrow$ intersection, $\text{OR} \rightarrow$ union

## Worked Examples

### Example 1: Simple Linear Inequality

Solve: $5x - 8 < 12$

$$5x - 8 < 12$$
$$5x < 20$$
$$x < 4$$

Solution: $x < 4$ or in interval notation: $(-\infty, 4)$

### Example 2: Inequality with Negative Coefficient

Solve: $-3x + 7 > 1$

$$-3x + 7 > 1$$
$$-3x > -6$$

Divide by -3 (flip the symbol):
$$x < 2$$

Solution: $x < 2$ or in interval notation: $(-\infty, 2)$

**Key Learning:** Remember to flip the inequality symbol when dividing by the negative coefficient.

### Example 3: Compound Inequality (AND)

Solve: $-4 < 3x - 1 \leq 8$

Add 1 to all three parts:
$$-3 < 3x \leq 9$$

Divide all three parts by 3:
$$-1 < x \leq 3$$

Solution in interval notation: $(-1, 3]$

### Example 4: Translating and Solving a Verbal Problem

A student needs at least 75% on the final exam to pass the course. The final exam is worth 40% of the overall grade. The student currently has 70% in the course based on work comprising 60% of the grade. What minimum score on the final is needed?

Let $f$ = score on final exam (out of 100).

Overall grade = $0.60(70) + 0.40(f) = 42 + 0.40f$

We need the overall grade to be at least 75%:
$$42 + 0.40f \geq 75$$
$$0.40f \geq 33$$
$$f \geq 82.5$$

The student needs at least 82.5% (or 83% in practice) on the final exam.

### Example 5: Compound OR Inequality from a Real Scenario

A manufacturing process must produce parts that are either undersize (less than 9.8 cm) or oversize (greater than 10.2 cm) to be rejected. Write and represent the inequality for rejected parts.

Let $p$ = length in cm.

Rejected parts satisfy: $p < 9.8$ OR $p > 10.2$

In interval notation: $(-\infty, 9.8) \cup (10.2, \infty)$

Acceptable parts would satisfy: $9.8 \leq p \leq 10.2$, or $[9.8, 10.2]$

## UPCAT Tips & Common Mistakes

**Tip 1: Always Flip When Multiplying/Dividing by Negatives**

This is the most commonly tested mistake. If you see a negative coefficient or multiplier, you must flip the inequality symbol. Practice this until it becomes automatic.

**Tip 2: Be Precise with Verbal Translations**

- "More than" is strictly > (not ≥)
- "At least" is ≥ (includes equality)
- "No more than" is ≤ (allows equality)
- These distinctions are deliberately tested on the UPCAT.

**Tip 3: Check Your Solution with Test Points**

After solving, substitute a test point from your solution into the original inequality to verify it's correct. For example, if you get $x < 4$, test $x = 0$: is $5(0) - 8 < 12$? Is $-8 < 12$? Yes, so the solution is correct.

**Tip 4: When Graphing on a Number Line**

- Open circles (○) for < and >
- Closed circles (●) for ≤ and ≥

Getting this wrong frequently costs points on the UPCAT.

**Tip 5: Compound Inequalities and Set Operations**

- AND inequalities use intersection (the overlapping region)
- OR inequalities use union (everything in either set)

On the UPCAT, expect questions asking you to identify which points satisfy an AND inequality versus which satisfy an OR inequality.

**Common Mistake 1: Forgetting to Flip the Symbol**

$$-2x > 8$$
$$x > -4 \quad \text{(WRONG!)}$$

Correct solution:
$$x < -4 \quad \text{(Flip the symbol)}$$

**Common Mistake 2: Mixing Up Interval Notation Brackets**

$[a, b]$ means $a$ and $b$ are included.
$(a, b)$ means $a$ and $b$ are excluded.

Getting these reversed changes your answer completely.

**Common Mistake 3: Incorrect Translations**

"Between 5 and 10" does NOT mean $5 \leq x \leq 10$ in all contexts. In UPCAT problems, verify whether the endpoints are included by reading the exact wording.

## Key Takeaways

1. **Inequality symbols** (<, >, ≤, ≥) indicate relationships between quantities, not equality.

2. **Properties are almost identical to equations**, with the critical exception: multiplying or dividing by a negative number reverses the inequality symbol.

3. **Compound inequalities** combine multiple conditions:
   - AND means intersection (both conditions true)
   - OR means union (at least one condition true)

4. **Number line representation** uses open circles for < and >, closed circles for ≤ and ≥.

5. **Interval notation** offers a concise way to express solution sets, using brackets and parentheses appropriately.

6. **Verbal translation to symbolic notation** is frequently tested on standardized exams like the UPCAT. Master key phrases: "at most," "at least," "between," "more than," etc.

7. **Always verify your solution** by substituting test points back into the original inequality.

## Practice Problems

Solve each inequality and express the solution in both inequality notation and interval notation.

1. $2x + 5 < 13$

2. $-3x - 4 \geq 11$

3. $\frac{x}{4} - 2 > 3$

4. $4(x - 1) \leq 2(x + 3)$

5. $-5 < 2x + 1 < 9$ (compound)

6. $x - 3 < -1$ OR $x - 3 > 5$ (compound)

7. Translate to an inequality: "The sum of twice a number and 8 is at least 20."

8. Translate to an inequality: "A number is between 10 and 15, inclusive."

9. If $-6 \leq 2x - 2 \leq 10$, find the interval for $x$.

10. At a concert, the seating price $p$ (in dollars) for premium seats is "at least 50 but not more than 150." Write this as a compound inequality.
