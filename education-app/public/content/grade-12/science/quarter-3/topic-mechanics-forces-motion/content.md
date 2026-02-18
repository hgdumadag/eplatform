# Mechanics: Forces and Motion

## Introduction

Mechanics is the foundation of physics, describing how objects move and interact through forces. Whether it's a rocket launching into space, a car accelerating down a highway, or a ball arcing through the air, the principles of forces and motion govern all these phenomena. This topic covers Newton's three laws of motion, the types of forces acting on objects, the concept of torque, and the kinematics of uniformly accelerated motion including projectile motion. Understanding these concepts is essential for solving real-world physics problems and is a critical focus area for the UPCAT examination. You will learn to apply mathematical equations to predict motion, calculate forces, and analyze complex scenarios involving multiple forces acting simultaneously.

## Newton's Laws of Motion

### Newton's First Law (Law of Inertia)

An object at rest stays at rest, and an object in motion stays in motion at the same speed and in the same direction, **unless acted upon by a net external force**. This principle is called the Law of Inertia, and inertia is the resistance of an object to changes in its state of motion. The greater an object's mass, the greater its inertia—a heavy truck is harder to move from rest than a bicycle because it has more inertia.

**Key Insight:** Inertia is not a force; it is a property of matter. It explains why you lurch forward when a car brakes suddenly (your body wants to continue moving) and why you need to push harder to move a heavier object.

### Newton's Second Law (F = ma)

The net force acting on an object equals the object's mass multiplied by its acceleration:

$$\sum F = ma$$

where $\sum F$ is the net force (vector sum of all forces), $m$ is mass in kilograms, and $a$ is acceleration in $\text{m/s}^2$.

**Important consequences:**
- If the net force **doubles**, the acceleration **doubles** (for the same mass).
- If the mass **doubles**, the acceleration is **halved** (for the same net force).
- The direction of acceleration is the **same as the direction of the net force**.
- Units: 1 newton (N) = 1 kg·m/s²

**Example:** A 5 kg box experiences a net force of 20 N. Then $a = F/m = 20/5 = 4 \text{ m/s}^2$.

### Newton's Third Law (Action-Reaction Pairs)

For every action, there is an equal and opposite reaction. Forces always come in pairs—an **action force** and a **reaction force**—and they act on **different objects**.

**Critical Clarification:** Many students mistakenly think action-reaction pairs cancel each other. They do **not** cancel because they act on different objects and therefore do not contribute to the net force on any single object.

**Example:** When a rocket propels itself upward:
- **Action:** The rocket pushes burning gases downward (large force, small mass).
- **Reaction:** The gases push the rocket upward (equal force, much smaller mass, so large acceleration).

The action and reaction forces are equal in magnitude and opposite in direction, but because they act on different objects (rocket and gas), neither can cancel the other.

## Types of Forces

Understanding the different forces acting on objects is essential for solving mechanics problems.

### Weight (Gravitational Force)

Weight is the force exerted by gravity on an object:

$$W = mg$$

where $m$ is mass in kilograms and $g$ is the acceleration due to gravity ($9.8 \text{ m/s}^2 \approx 10 \text{ m/s}^2$ for UPCAT calculations).

**Note:** Weight is a force, not a mass. A 10 kg object has a weight of approximately 100 N on Earth.

### Normal Force

The normal force ($N$) is the perpendicular force exerted by a surface on an object in contact with that surface. It always acts perpendicular to the surface, pointing away from the surface.

**Example:** A book resting on a table experiences a downward weight force and an upward normal force from the table. If the book is at rest, these forces are equal in magnitude.

### Friction Force

Friction opposes the relative motion between two surfaces in contact. There are two types:

- **Static friction** ($f_s$): friction that prevents an object from starting to move; maximum value is $f_{s,\text{max}} = \mu_s N$
- **Kinetic friction** ($f_k$): friction that opposes an object already in motion; $f_k = \mu_k N$

where $\mu$ is the coefficient of friction (a dimensionless number that depends on the surfaces).

### Tension

Tension is the force transmitted through a string, rope, cable, or rod under stress. For an ideal string, tension is uniform throughout and acts along the length of the string, pulling on the objects at both ends.

### Net Force

The **net force** is the vector sum of all forces acting on an object. If the net force is zero, the object is in **equilibrium** and experiences no acceleration (it may be at rest or moving at constant velocity).

$$\sum F = 0 \text{ (equilibrium)}$$

## Torque

Torque is the rotational equivalent of force. It measures the tendency of a force to rotate an object about a pivot point.

$$\tau = F \cdot d$$

where $F$ is the magnitude of the force in newtons, $d$ is the perpendicular distance from the line of action of the force to the pivot (the moment arm) in meters, and $\tau$ is the torque in newton-meters (N·m).

**Key Points:**
- **Perpendicular distance matters:** Only the component of force perpendicular to the lever arm contributes to torque. If a force is applied parallel to the lever arm, it produces no torque.
- **Clockwise vs. counterclockwise:** By convention, counterclockwise torques are often considered positive, and clockwise torques are negative (or vice versa—consistency is what matters).
- **Equilibrium condition:** For an object to be in rotational equilibrium, the sum of all torques about any pivot point must be zero:

$$\sum \tau = 0$$

This means the sum of counterclockwise torques equals the sum of clockwise torques.

**Worked Example:** A lever is balanced on a pivot. A 100 N force is applied downward 2 m to the left of the pivot. What force must be applied 3 m to the right of the pivot (upward) to balance the lever?

Using $\sum \tau = 0$:
$$100 \times 2 = F \times 3$$
$$F = \frac{200}{3} \approx 66.7 \text{ N}$$

## Kinematics: Uniformly Accelerated Motion

Kinematics describes the motion of objects without considering the forces that cause the motion. Uniformly accelerated motion occurs when acceleration is constant.

### Variables and Symbols

- $v_0$ = initial velocity (m/s)
- $v$ = final velocity (m/s)
- $a$ = acceleration (m/s²)
- $t$ = time (s)
- $s$ or $d$ = displacement (m)

### Kinematic Equations

The five main kinematic equations for uniformly accelerated motion are:

$$v = v_0 + at$$

$$s = v_0 t + \frac{1}{2}at^2$$

$$v^2 = v_0^2 + 2as$$

$$s = \frac{1}{2}(v_0 + v)t$$

$$s = vt - \frac{1}{2}at^2$$

**Selection strategy:** Choose the equation that relates the three known variables and the one unknown variable you seek. Often, the problem will suggest which equation to use.

### Free Fall

Free fall is motion under the influence of gravity alone (ignoring air resistance). The acceleration is $a = g = 9.8 \text{ m/s}^2$ (or approximately $10 \text{ m/s}^2$ for UPCAT), directed downward.

**For an object dropped from rest:**
- $v_0 = 0$
- After time $t$: $v = gt$ (velocity increases linearly with time)
- Distance fallen: $s = \frac{1}{2}gt^2$

**Example:** A ball is dropped from a 45 m cliff. How long does it take to reach the ground?

Using $s = \frac{1}{2}gt^2$:
$$45 = \frac{1}{2}(10)t^2$$
$$45 = 5t^2$$
$$t = 3 \text{ s}$$

## Projectile Motion

Projectile motion is two-dimensional motion under the influence of gravity. The key insight is that the horizontal and vertical components of motion are **independent** of each other.

### Horizontal and Vertical Components

For a projectile launched with initial velocity $v_0$ at an angle $\theta$ above the horizontal:

- **Horizontal component:** $v_x = v_0 \cos \theta$ (constant throughout the flight)
- **Vertical component:** $v_y = v_0 \sin \theta$ (initial); decreases linearly due to gravity

### Motion at Maximum Height (UPCAT Focus)

This is a critical concept frequently tested on UPCAT. At the **maximum height** of a projectile's trajectory:

- **Vertical velocity is zero:** $v_y = 0$ (the projectile momentarily stops rising)
- **Horizontal velocity is unchanged:** $v_x = v_0 \cos \theta$ (constant throughout)
- **Total velocity equals horizontal velocity:** $v_{\text{total}} = v_x = v_0 \cos \theta$
- **Acceleration is still $g$ downward:** Gravity always acts downward, even at the peak

**Worked Example:** A projectile is launched at 30 m/s at an angle of 60° above the horizontal. What is its speed at maximum height?

At maximum height:
$$v_x = 30 \cos 60° = 30 \times 0.5 = 15 \text{ m/s}$$
$$v_y = 0$$
$$v_{\text{total}} = 15 \text{ m/s}$$

### Time to Maximum Height

$$t_{\text{max}} = \frac{v_0 \sin \theta}{g}$$

### Maximum Height

$$h_{\text{max}} = \frac{(v_0 \sin \theta)^2}{2g}$$

### Range (Horizontal Distance)

$$R = \frac{v_0^2 \sin 2\theta}{g}$$

Note: Maximum range occurs at $\theta = 45°$.

## Resultant Force and Vector Addition

When multiple forces act on an object, the net force is found by vector addition.

### Perpendicular Forces

For two perpendicular forces $F_1$ and $F_2$, the resultant force $R$ is:

$$R = \sqrt{F_1^2 + F_2^2}$$

The direction $\theta$ (measured from $F_1$) is found using:

$$\tan \theta = \frac{F_2}{F_1}$$

**Example:** A force of 3 N acts due east, and a force of 4 N acts due north. The resultant force is:

$$R = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5 \text{ N}$$

$$\tan \theta = \frac{4}{3} \approx 1.333 \implies \theta \approx 53.1° \text{ north of east}$$

## Worked Examples (UPCAT-Style)

### Example 1: Newton's Second Law

**Problem:** A 5 kg box is pushed across a frictionless floor with a net force of 20 N. Calculate its acceleration.

**Solution:**
Using $F = ma$:
$$a = \frac{F}{m} = \frac{20 \text{ N}}{5 \text{ kg}} = 4 \text{ m/s}^2$$

### Example 2: Torque and Lever Balance

**Problem:** A seesaw is balanced on a pivot. A 40 kg child sits 1.5 m to the left of the pivot. Where must a 60 kg adult sit on the right side to balance the seesaw?

**Solution:**
Setting up the torque balance equation:
$$\text{Weight of child} \times d_{\text{child}} = \text{Weight of adult} \times d_{\text{adult}}$$
$$(40 \times 10) \times 1.5 = (60 \times 10) \times d_{\text{adult}}$$
$$600 = 600 \times d_{\text{adult}}$$
$$d_{\text{adult}} = 1 \text{ m}$$

### Example 3: Projectile Motion at Maximum Height

**Problem:** A ball is thrown horizontally from a 20 m cliff with a velocity of 15 m/s. What is its velocity at the highest point of its trajectory?

**Solution:**
Since the ball is thrown horizontally, the initial vertical velocity is zero. The highest point of the trajectory is at the launch point itself, where the vertical velocity is zero and the horizontal velocity remains 15 m/s.

$$v_{\text{total}} = 15 \text{ m/s (horizontal)}$$

### Example 4: Kinematics with Uniformly Accelerated Motion

**Problem:** A car accelerates uniformly from rest to 30 m/s in 10 seconds. Calculate the distance traveled.

**Solution:**
First, find the acceleration:
$$a = \frac{v - v_0}{t} = \frac{30 - 0}{10} = 3 \text{ m/s}^2$$

Then, use the kinematic equation:
$$s = v_0 t + \frac{1}{2}at^2 = 0 + \frac{1}{2}(3)(10)^2 = 150 \text{ m}$$

Alternatively, using the average velocity method:
$$s = \frac{1}{2}(v_0 + v) \times t = \frac{1}{2}(0 + 30) \times 10 = 150 \text{ m}$$

### Example 5: Resultant Force (Vector Addition)

**Problem:** Two forces act on an object: 12 N to the east and 5 N to the north. Find the magnitude and direction of the resultant force.

**Solution:**
Since the forces are perpendicular:
$$R = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13 \text{ N}$$

Direction:
$$\tan \theta = \frac{5}{12} \approx 0.417 \implies \theta \approx 22.6° \text{ north of east}$$

## UPCAT Tips and Common Mistakes

### Tip 1: Distinguish Between Action-Reaction Pairs and Balanced Forces

Many students confuse action-reaction pairs (Newton's third law) with balanced forces (Newton's first/second law). **Remember:** Action-reaction pairs act on *different* objects, while balanced forces act on the *same* object. Action-reaction pairs never cancel each other.

### Tip 2: Maximum Height in Projectile Motion

At maximum height, vertical velocity is **zero**, but horizontal velocity is **not** zero. The projectile is still moving horizontally at maximum speed. This is the most frequently tested concept about projectile motion.

### Tip 3: Perpendicular Distance in Torque Calculations

In torque calculations, use the **perpendicular distance** from the pivot to the line of action of the force, not the straight-line distance. If you need to find this distance, draw a right angle from the pivot to the line of force.

### Tip 4: Free Body Diagrams Are Your Friend

Always draw a free body diagram showing all forces acting on the object. Label each force and choose a coordinate system. This prevents errors and makes problem-solving systematic.

### Tip 5: Check Your Answers for Reasonableness

After solving a problem, ask yourself: Does the answer make physical sense? If a 10 kg object is accelerated by a 5 N force, should the acceleration be close to 0.5 m/s²? Yes—this is reasonable. Always perform a sanity check.

### Common Mistake 1: Ignoring Vector Direction

Forces are vectors, not scalars. When finding net force, you must add them as vectors, considering both magnitude and direction. A 10 N force to the east and a 10 N force to the west do not add to 20 N; they add to zero.

### Common Mistake 2: Confusing Mass and Weight

Mass (measured in kg) is the amount of matter in an object. Weight (measured in newtons) is the gravitational force on that mass. On Earth, a 10 kg object weighs about 100 N, but on the Moon, it would weigh only about 17 N, even though its mass remains 10 kg.

### Common Mistake 3: Using the Wrong Kinematic Equation

Choose the equation that relates your known variables and your unknown. If you don't know time, use $v^2 = v_0^2 + 2as$, not $s = v_0 t + \frac{1}{2}at^2$.

## Key Takeaways

1. **Newton's First Law** explains inertia; an object at rest stays at rest unless a net force acts on it.
2. **Newton's Second Law** ($F = ma$) is the fundamental equation linking force, mass, and acceleration.
3. **Newton's Third Law** tells us forces come in equal and opposite pairs acting on different objects.
4. **Torque** determines rotational motion; equilibrium requires the sum of torques to be zero.
5. **Kinematics** describes motion using four equations relating velocity, acceleration, displacement, and time.
6. **Projectile motion** separates into independent horizontal (constant velocity) and vertical (accelerated) components.
7. **At maximum height**, vertical velocity is zero, but horizontal velocity (and horizontal motion) continues.
8. **Vector addition** combines forces or velocities using the Pythagorean theorem (for perpendicular vectors) or component methods.

## Practice Problems

1. A 2 kg object experiences a net force of 8 N. What is its acceleration?
2. A lever has a 300 N load placed 2 m from the pivot. What force must be applied 5 m from the pivot to balance it?
3. A projectile is launched at 40 m/s at 45° above horizontal. Find its speed at maximum height.
4. A car travels from rest to 25 m/s in 5 seconds with uniform acceleration. How far does it travel?
5. Two perpendicular forces of 6 N and 8 N act on an object. Find the magnitude of the resultant force.

---

*Image needed: Free body diagram showing forces acting on an object*
*Image needed: Torque lever system with moment arms labeled*
*Image needed: Projectile motion parabola showing velocity components at launch, maximum height, and impact*
