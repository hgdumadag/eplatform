# Plane and Solid Geometry

## Introduction

Plane and solid geometry represents one of the most visually intuitive yet mathematically rigorous areas of high school mathematics. At the Grade 12 UPCAT level, you'll encounter sophisticated problems that require mastery of geometric relationships in both two and three dimensions. This module focuses on four critical skill areas: similar polygons and their properties, circles and their components, three-dimensional solids and their measurements, and the elegant relationships between inscribed and circumscribed figures.

The ability to visualize geometric relationships, apply scaling principles, and manipulate three-dimensional objects mentally are essential skills for UPCAT success. Many UPCAT geometry problems test your understanding of how properties change as shapes are scaled, how circles interact with other figures, and how to calculate volumes and surface areas efficiently. This topic integrates concepts from earlier geometry studies into a sophisticated framework that will appear throughout your college mathematics journey.

## Similar Polygons and Scaling Principles

### Definition and Properties

Two polygons are **similar** if they have the same shape but different sizes. More formally, similar polygons must satisfy two conditions: (1) corresponding angles are equal, and (2) corresponding sides are proportional. We write $\triangle ABC \sim \triangle DEF$ to indicate that these triangles are similar.

The fundamental measure of similarity is the **scale factor** $k$, which represents the ratio of corresponding sides. If polygon $P_1$ has corresponding side of length $s_1$ and polygon $P_2$ has corresponding side of length $s_2$, then the scale factor is $k = \frac{s_1}{s_2}$.

### Linear Ratios

When two polygons are similar with scale factor $k$, the ratio of corresponding linear measurements (sides, heights, perimeters, radii, diameters) is exactly $k:1$.

**Key Formula:** If the ratio of corresponding sides is $k:1$, then the ratio of perimeters is also $k:1$.

This makes intuitive sense: perimeter is the sum of all sides. If each side is scaled by factor $k$, the entire perimeter scales by factor $k$.

Example: Two similar rectangles have corresponding sides in the ratio $3:5$. Their perimeters are therefore in the ratio $3:5$ as well.

### Area Ratios

Area ratios follow a different pattern than linear ratios. When sides are scaled by factor $k$, the area is scaled by factor $k^2$.

**Key Formula:** If the ratio of corresponding sides is $k:1$, then the ratio of corresponding areas is $k^2:1$.

This is a critical UPCAT concept. Many students mistakenly think area scales linearly. The quadratic relationship arises because area is a two-dimensional measurement. To see why: if a square with side $s$ has area $s^2$, a similar square with side $ks$ has area $(ks)^2 = k^2 s^2$.

**Working Backward:** If you know the ratio of areas, you can find the ratio of sides by taking the square root. If two similar figures have areas in the ratio $16:25$, then their corresponding sides are in the ratio $\sqrt{16}:\sqrt{25} = 4:5$.

### Volume Ratios for Similar 3D Figures

Three-dimensional figures follow yet another scaling law. When all linear dimensions are scaled by factor $k$, the volume is scaled by factor $k^3$.

**Key Formula:** If the ratio of corresponding linear measurements is $k:1$, then the ratio of corresponding volumes is $k^3:1$.

This cubic relationship arises because volume is three-dimensional. A cube with side $s$ has volume $s^3$; a similar cube with side $ks$ has volume $(ks)^3 = k^3 s^3$.

## Circles: Areas, Circumferences, and Sectors

### Fundamental Formulas

For a circle with radius $r$ and diameter $d = 2r$:

**Circumference (perimeter):**
$$C = 2\pi r = \pi d$$

**Area:**
$$A = \pi r^2$$

These formulas are foundational. Commit them to memory and practice using them in various contexts. The circumference formula can be remembered as "2 pi r" or "pi d." The area formula emphasizes why the constant is different—we're measuring a two-dimensional region, not just the boundary.

### Arc Length and Central Angles

A **central angle** is an angle formed by two radii of the circle. If a central angle measures $\theta$ degrees (where $0° \leq \theta \leq 360°$), it determines an **arc** on the circle.

The length of an arc is proportional to the central angle:

$$\text{Arc length} = \frac{\theta}{360°} \times 2\pi r = \frac{\theta}{360°} \times C$$

Here, $\frac{\theta}{360°}$ represents the fraction of the complete circle that the arc occupies.

### Sector Area

A **sector** is a "pie-slice" region of the circle bounded by two radii and an arc. The area of a sector is proportional to its central angle:

$$\text{Sector Area} = \frac{\theta}{360°} \times \pi r^2 = \frac{\theta}{360°} \times A$$

### Segment Area

A **segment** is the region between a chord and the arc it cuts off. The segment is smaller than the sector; it equals the sector area minus the area of the triangular region:

$$\text{Segment Area} = \text{Sector Area} - \text{Triangle Area}$$

The triangle formed by the two radii and chord has a specific area that depends on the central angle and radius.

## Concentric Circles and Annuli

**Concentric circles** are two or more circles that share the same center but have different radii. Let $R$ be the radius of the outer circle and $r$ be the radius of the inner circle (where $R > r > 0$).

The region between two concentric circles is called an **annulus** or **ring**. Its area is:

$$A_{\text{ring}} = \pi R^2 - \pi r^2 = \pi(R^2 - r^2)$$

This is simply the area of the larger circle minus the area of the smaller circle. Many UPCAT problems test whether you can identify the correct radii and apply this formula.

Example: Two concentric circles have radii 8 cm and 5 cm. The area of the ring is $\pi(64 - 25) = 39\pi$ cm².

## Three-Dimensional Solids: Volumes and Surface Areas

### Cube

A cube is a regular solid with six square faces, each with side length $s$.

- **Volume:** $V = s^3$
- **Surface Area:** $SA = 6s^2$ (six faces, each with area $s^2$)
- **Space Diagonal:** $d = s\sqrt{3}$ (distance from one corner to the opposite corner through the interior)

### Rectangular Prism (Box)

A rectangular prism has dimensions length $l$, width $w$, and height $h$.

- **Volume:** $V = lwh$
- **Surface Area:** $SA = 2(lw + lh + wh)$ (three pairs of rectangular faces)
- **Space Diagonal:** $d = \sqrt{l^2 + w^2 + h^2}$ (Pythagorean theorem extended to three dimensions)

### Cylinder

A cylinder has a circular base with radius $r$ and height $h$.

- **Volume:** $V = \pi r^2 h$ (area of base times height)
- **Surface Area:** $SA = 2\pi r^2 + 2\pi rh$ (two circular bases plus lateral surface)
  - Two circular bases: $2\pi r^2$
  - Lateral (curved) surface: $2\pi rh$ (this is the circumference times the height)

### Sphere

A sphere with radius $r$ is the set of all points at distance $r$ from a center point.

- **Volume:** $V = \frac{4}{3}\pi r^3$
- **Surface Area:** $SA = 4\pi r^2$

These formulas are central to many UPCAT problems. The volume formula shows why doubling the radius increases volume by a factor of $2^3 = 8$.

### Cone

A cone has a circular base with radius $r$, height $h$, and slant height $\ell$ (the distance from the apex along the surface to a point on the base circle).

The slant height and height are related by the Pythagorean theorem: $\ell^2 = r^2 + h^2$.

- **Volume:** $V = \frac{1}{3}\pi r^2 h$ (one-third the volume of a cylinder with the same base and height)
- **Surface Area:** $SA = \pi r^2 + \pi r\ell$ (circular base plus lateral surface)
  - Circular base: $\pi r^2$
  - Lateral surface: $\pi r\ell$

## Inscribed and Circumscribed Figures

### Cube Inscribed in a Sphere

One of the most elegant UPCAT geometry problems involves a cube inscribed in a sphere (all eight vertices of the cube touch the sphere). Let the cube have side length $s$ and the sphere have radius $r$.

The space diagonal of the cube passes through the center of both the cube and sphere. This diagonal has length $s\sqrt{3}$, and it equals the diameter of the sphere:

$$s\sqrt{3} = 2r$$

Solving for $s$ in terms of $r$:
$$s = \frac{2r}{\sqrt{3}} = \frac{2r\sqrt{3}}{3}$$

Conversely, solving for $r$ in terms of $s$:
$$r = \frac{s\sqrt{3}}{2}$$

### Sphere Inscribed in a Cube

When a sphere is inscribed in a cube (touches all six faces), the diameter of the sphere equals the side length of the cube:

$$2r = s \implies r = \frac{s}{2}$$

This is much simpler than the circumscribed case and should be easy to visualize.

### Pythagorean Theorem in Three Dimensions

The Pythagorean theorem extends beautifully to three dimensions. For a rectangular box with dimensions $l$, $w$, $h$, the space diagonal has length:

$$d = \sqrt{l^2 + w^2 + h^2}$$

For a cube with side $s$, the space diagonal is:
$$d = \sqrt{s^2 + s^2 + s^2} = \sqrt{3s^2} = s\sqrt{3}$$

Understanding this relationship is crucial for inscribed/circumscribed figure problems.

## Polygon Angles

### Sum of Interior Angles

For any convex polygon with $n$ sides, the sum of all interior angles is:

$$\text{Sum} = (n-2) \times 180°$$

This formula comes from triangulating the polygon. Any $n$-sided polygon can be divided into $(n-2)$ non-overlapping triangles, each contributing $180°$ to the total.

### Interior Angle of a Regular Polygon

A **regular polygon** has all sides equal and all angles equal. Each interior angle of a regular $n$-gon measures:

$$\text{Each Interior Angle} = \frac{(n-2) \times 180°}{n}$$

### Exterior Angles

An **exterior angle** of a polygon is formed by one side and the extension of an adjacent side. For any convex polygon, regardless of the number of sides, the sum of all exterior angles is always:

$$\text{Sum of Exterior Angles} = 360°$$

Each exterior angle of a regular $n$-gon measures $\frac{360°}{n}$.

## Key Formulas Summary

**Similar Figures:**
- Ratio of sides: $k:1$
- Ratio of perimeters: $k:1$
- Ratio of areas: $k^2:1$
- Ratio of volumes: $k^3:1$

**Circles:**
- Circumference: $C = 2\pi r$
- Area: $A = \pi r^2$
- Arc length: $\frac{\theta}{360°} \times 2\pi r$
- Sector area: $\frac{\theta}{360°} \times \pi r^2$
- Ring area: $\pi(R^2 - r^2)$

**3D Solids:**
- Cube: $V = s^3$, $SA = 6s^2$, Diagonal: $s\sqrt{3}$
- Cylinder: $V = \pi r^2 h$, $SA = 2\pi r^2 + 2\pi rh$
- Sphere: $V = \frac{4}{3}\pi r^3$, $SA = 4\pi r^2$
- Cone: $V = \frac{1}{3}\pi r^2 h$, $SA = \pi r^2 + \pi r\ell$

**Polygon Angles:**
- Sum of interior angles: $(n-2) \times 180°$
- Each interior angle (regular $n$-gon): $\frac{(n-2) \times 180°}{n}$

## Worked Examples

### Example 1: Similar Triangles and Area Ratios

Two similar triangles have areas of 36 cm² and 100 cm². What is the ratio of their corresponding perimeters?

**Solution:**

The ratio of areas is $\frac{36}{100} = \frac{9}{25}$.

Since area scales as the square of the linear scale factor, we have:
$$k^2 = \frac{9}{25} \implies k = \frac{3}{5}$$

The ratio of corresponding sides is $3:5$, so the ratio of perimeters is also $\boxed{3:5}$.

### Example 2: Ring Area (Concentric Circles)

A ring is formed by two concentric circles with radii 8 cm and 5 cm. Find the area of the ring.

**Solution:**

The area of the ring is:
$$A = \pi R^2 - \pi r^2 = \pi(8^2 - 5^2) = \pi(64 - 25) = \boxed{39\pi \text{ cm}^2}$$

Or approximately 122.5 cm².

### Example 3: Sphere Inscribed in a Cube

A sphere is inscribed in a cube with side length 6 cm. Find the volume of the sphere.

**Solution:**

When a sphere is inscribed in a cube, the diameter of the sphere equals the side length of the cube. Thus:
$$2r = 6 \implies r = 3 \text{ cm}$$

The volume of the sphere is:
$$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi (3)^3 = \frac{4}{3}\pi \times 27 = 36\pi \text{ cm}^3$$

Or approximately 113.1 cm³.

### Example 4: Cube Inscribed in a Sphere

A cube is inscribed in a sphere with radius 5 cm. Find the side length of the cube.

**Solution:**

When a cube is inscribed in a sphere, the space diagonal of the cube equals the diameter of the sphere:
$$s\sqrt{3} = 2r = 2(5) = 10$$

$$s = \frac{10}{\sqrt{3}} = \frac{10\sqrt{3}}{3} \text{ cm}$$

Or approximately 5.77 cm.

### Example 5: Sector Area

A sector of a circle has a central angle of 60° and radius 6 cm. Find the area of the sector.

**Solution:**

$$A_{\text{sector}} = \frac{\theta}{360°} \times \pi r^2 = \frac{60°}{360°} \times \pi (6)^2 = \frac{1}{6} \times 36\pi = \boxed{6\pi \text{ cm}^2}$$

Or approximately 18.8 cm².

## UPCAT Tips and Common Mistakes

**Tip 1: Remember the Scaling Laws**
- Linear measurements scale by $k$
- Areas scale by $k^2$
- Volumes scale by $k^3$

A very common mistake is to assume areas scale linearly when sides scale. Always apply the squaring rule.

**Tip 2: Inscribed vs. Circumscribed**
- **Inscribed**: The inner figure's vertices/points touch the outer figure
- **Circumscribed**: The outer figure touches the sides/surface of the inner figure

When a cube is inscribed in a sphere, the cube's vertices touch the sphere. This is the opposite of a sphere inscribed in the cube.

**Tip 3: Space Diagonal Recognition**
The space diagonal of a cube with side $s$ is always $s\sqrt{3}$. This is one of the most tested facts in UPCAT geometry. Memorize it.

**Tip 4: Annulus Formula**
Many students forget that a ring's area is the difference of two circular areas, not some more complicated formula. Keep it simple: $A = \pi(R^2 - r^2)$.

**Tip 5: Sector vs. Segment**
A **sector** includes the two radii and the arc (a pie-slice). A **segment** is just the curved region between the chord and arc. The segment is always smaller. If the problem doesn't specify, assume it's asking for the sector.

**Common Mistake 1:** Confusing perimeter and area ratios for similar figures. If sides scale by 2:3, perimeters also scale by 2:3, but areas scale by $(2:3)^2 = 4:9$.

**Common Mistake 2:** Forgetting the cone and pyramid volume formula is one-third. A cone with base area $B$ and height $h$ has volume $\frac{1}{3}Bh$, not $Bh$.

**Common Mistake 3:** Using the wrong formula for surface area of a cylinder. Many students forget one or both of the circular bases and only calculate the lateral surface area.

## Key Takeaways

1. **Similar polygons maintain proportional side lengths but change areas quadratically and volumes cubically.** This relationship is fundamental to scaling and similarity problems.

2. **Circles are completely determined by their radius.** All measurements (circumference, area, arc length, sector area) flow from the radius and the central angle.

3. **Concentric circles form rings whose area is simply the difference of the two circular areas.** This elegant formula appears frequently in UPCAT.

4. **Three-dimensional solids require mastery of multiple formulas**, but they all follow from basic principles: volume is typically base area times height (or a fraction thereof), and surface area is the sum of all face areas.

5. **Inscribed and circumscribed figures create beautiful geometric relationships.** The cube-in-sphere and sphere-in-cube problems are elegant applications of the 3D Pythagorean theorem.

6. **Polygon angle sums depend only on the number of sides.** The formula $(n-2) \times 180°$ is reliable and powerful for any polygon.

## Practice Problems

1. Two similar rectangles have areas in the ratio 25:64. What is the ratio of their corresponding perimeters?

2. A circle has radius 10 cm. Find the area of a sector with central angle 45°.

3. Two concentric circles have radii 12 cm and 7 cm. What is the area of the annulus?

4. A cube with side 4 cm is inscribed in a sphere. What is the radius of the sphere?

5. A cylinder has radius 5 cm and height 12 cm. What is its volume?

6. The interior angle of a regular polygon is 135°. How many sides does the polygon have?

7. A cone has radius 3 cm, height 4 cm, and slant height 5 cm. What is its lateral surface area?

8. A sphere with radius 6 cm is inscribed in a cube. What is the volume of the cube?

9. Find the arc length of a circle with radius 8 cm where the arc subtends a central angle of 72°.

10. Two similar triangles have corresponding sides in the ratio 2:5. If the smaller triangle has area 20 cm², what is the area of the larger triangle?
