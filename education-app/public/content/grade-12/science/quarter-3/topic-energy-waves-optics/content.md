# Energy, Waves, and Optics

## Introduction

Energy is one of the most fundamental concepts in physics, present in every interaction and transformation in the universe. From the chemical energy stored in your body to the electromagnetic energy of light traveling from distant stars, energy manifests in countless forms. Waves are the primary mechanism through which energy is transported across space, from sound waves traveling through air to electromagnetic waves traveling through the vacuum of space. Light, a form of electromagnetic wave, can be manipulated using mirrors and lenses to form images and magnify objects. This topic covers the conservation of energy, calculations of kinetic and potential energy, the electromagnetic spectrum, wave properties, and the principles of reflection and image formation using mirrors. These concepts are essential for understanding how the physical world operates and are heavily emphasized in the UPCAT Physics examination.

## Work and Energy

### Work

Work is the transfer of energy by a force acting over a distance. It is calculated as:

$$W = Fd \cos \theta$$

where $F$ is the magnitude of the force in newtons, $d$ is the displacement in meters, $\theta$ is the angle between the force and displacement vectors, and $W$ is the work in joules (J).

**Key insights:**
- Only the component of force parallel to the displacement does work: $F \cos \theta$
- If force and displacement are perpendicular ($\theta = 90°$), then $\cos 90° = 0$, and no work is done
- **Example:** A person carries a box horizontally across a room. The upward normal force does no work because it is perpendicular to the horizontal motion

### Kinetic Energy

Kinetic energy is the energy of motion:

$$KE = \frac{1}{2}mv^2$$

where $m$ is mass in kilograms and $v$ is speed in meters per second.

**Important properties:**
- Kinetic energy is always non-negative
- Kinetic energy depends on the **square of velocity**: doubling the speed quadruples the kinetic energy
- A lighter object moving fast may have the same kinetic energy as a heavier object moving slowly

**Example:** A 2 kg object moving at 10 m/s has $KE = \frac{1}{2}(2)(10)^2 = 100$ J. The same 2 kg object moving at 5 m/s has $KE = \frac{1}{2}(2)(5)^2 = 25$ J.

### Gravitational Potential Energy

Gravitational potential energy is the energy stored by an object's position in a gravitational field:

$$PE = mgh$$

where $m$ is mass in kilograms, $g$ is gravitational acceleration ($9.8 \text{ m/s}^2 \approx 10 \text{ m/s}^2$), and $h$ is the height above a chosen reference level in meters.

**Important notes:**
- Potential energy is relative to a chosen reference point (usually ground level, but can be any point)
- An object at height $h$ has greater potential energy than an identical object at height $h/2$
- Both mass AND height determine potential energy: an object with greater mass at the same height has more potential energy

**Which object has the greatest PE?** Compare $PE = mgh$ for all objects. The object with the largest product of $m \times h$ has the greatest potential energy.

**Example:** A 3 kg book on a 2 m shelf has $PE = 3 \times 10 \times 2 = 60$ J. A 2 kg book on a 3 m shelf has $PE = 2 \times 10 \times 3 = 60$ J. They have equal potential energy, even though one is heavier and the other is higher.

### Elastic Potential Energy

When a spring is compressed or stretched, it stores elastic potential energy:

$$PE_{\text{elastic}} = \frac{1}{2}kx^2$$

where $k$ is the spring constant in newtons per meter, and $x$ is the compression or extension distance in meters.

### Total Mechanical Energy and Conservation of Energy

The total mechanical energy of a system is the sum of kinetic and potential energy:

$$E_{\text{total}} = KE + PE$$

The law of conservation of mechanical energy states that in the **absence of friction and other non-conservative forces**, the total mechanical energy remains constant:

$$E_{\text{initial}} = E_{\text{final}}$$

$$KE_i + PE_i = KE_f + PE_f$$

**On a pendulum or falling object:**
- At the **top of a swing** (or highest point): PE is maximum, KE is minimum (zero at the turning point)
- At the **bottom** (lowest point): PE is minimum, KE is maximum
- **Total energy remains constant**: when PE decreases, KE increases by the same amount, and vice versa

**Worked example:** A 2 kg ball is dropped from a height of 5 m. What is its kinetic energy just before hitting the ground?

Initial state (at rest, 5 m above ground):
$$PE_i = mgh = 2 \times 10 \times 5 = 100 \text{ J}$$
$$KE_i = 0$$
$$E_i = 100 \text{ J}$$

Final state (just before impact, at ground level):
$$PE_f = 0$$
$$KE_f = E_i - PE_f = 100 - 0 = 100 \text{ J}$$

The ball's kinetic energy is converted entirely from its initial potential energy.

## Power

Power is the rate at which energy is transferred or work is done:

$$P = \frac{W}{t} = \frac{Fd}{t} = Fv$$

where $P$ is power in watts (W), $W$ is work in joules, $t$ is time in seconds, and $v$ is velocity in meters per second.

**Units:** 1 watt = 1 joule per second. A 100 W light bulb uses 100 joules of electrical energy every second.

**Conversion:** 1 horsepower = 746 W

## The Electromagnetic Spectrum

### Fundamental Properties

All electromagnetic (EM) waves share the following properties:
- Travel at the speed of light in vacuum: $c = 3 \times 10^8 \text{ m/s}$
- Are produced by oscillating electric and magnetic fields
- Can travel through vacuum (unlike sound waves)
- Carry energy proportional to their frequency

### Relationship Between Frequency and Wavelength

The wave equation relates the speed of light, frequency, and wavelength:

$$c = f\lambda$$

where $c = 3 \times 10^8 \text{ m/s}$ is the speed of light, $f$ is frequency in hertz (Hz), and $\lambda$ is wavelength in meters.

**Critical insight:** Frequency and wavelength are **inversely proportional**. As wavelength increases, frequency decreases, and vice versa:

$$f = \frac{c}{\lambda} \quad \text{and} \quad \lambda = \frac{c}{f}$$

**Energy relationship:** The energy of an EM wave is proportional to its frequency:
$$E = hf$$
where $h$ is Planck's constant. Therefore:
- **Higher frequency** → **shorter wavelength** → **higher energy**
- **Lower frequency** → **longer wavelength** → **lower energy**

### The EM Spectrum: Order by Wavelength (Longest to Shortest)

The electromagnetic spectrum, arranged from lowest to highest frequency (and lowest to highest energy), is:

$$\text{Radio} \rightarrow \text{Microwave} \rightarrow \text{Infrared} \rightarrow \text{Visible} \rightarrow \text{Ultraviolet} \rightarrow \text{X-ray} \rightarrow \text{Gamma ray}$$

**Mnemonic to remember the order:** "Raging Martians Invaded Venus Using X-ray Guns"

#### Radio Waves
- **Longest wavelength**, lowest frequency, lowest energy
- Wavelength: meters to kilometers
- Uses: radio broadcasting, television, cell phones, Wi-Fi
- Our atmosphere is transparent to most radio waves

#### Microwaves
- Wavelength: millimeters to centimeters
- Frequency: 10^9 to 10^12 Hz
- Uses: microwave ovens, radar, cellular networks
- Absorbed by water molecules, causing heating

#### Infrared (IR)
- Wavelength: micrometers
- Often called "heat radiation" because thermal objects emit IR
- Uses: thermal imaging, remote controls, night vision
- The human eye cannot see IR, but we feel it as warmth

#### Visible Light
- **The only region human eyes can detect**
- Wavelength: 400–700 nanometers (400–700 × 10^-9 m)
- **ROY G BIV:** Red, Orange, Yellow, Green, Blue, Indigo, Violet
  - **Red:** longest wavelength of visible light (~700 nm), lowest frequency
  - **Violet:** shortest wavelength of visible light (~400 nm), highest frequency
- Each color corresponds to a different frequency/wavelength

#### Ultraviolet (UV)
- Wavelength: 10–400 nanometers
- Higher energy than visible light
- Can damage DNA and cause sunburns
- Blocked partially by Earth's ozone layer
- Uses: sterilization, fluorescent lights

#### X-Rays
- Wavelength: 0.01–10 nanometers
- Very high energy and penetrating power
- Uses: medical imaging, security screening
- Can damage living tissue with prolonged exposure

#### Gamma Rays
- **Shortest wavelength**, highest frequency, highest energy
- Wavelength: less than 0.01 nanometers
- Emitted by radioactive nuclei
- Extremely dangerous to living organisms
- Uses: cancer radiotherapy, sterilization of medical equipment

### UPCAT Focus: Comparing EM Waves

A common UPCAT question asks: "Which type of EM wave has the longest wavelength?" or "Which has the highest frequency?"

**Remember:** Longer wavelength = lower frequency = lower energy. Shorter wavelength = higher frequency = higher energy.

**Example:** Comparing gamma rays and radio waves: Radio waves have a **much longer** wavelength than gamma rays. Gamma rays have a **much higher** frequency than radio waves.

## Wave Properties

### Basic Definitions

- **Wavelength ($\lambda$):** The distance between two consecutive crests (or troughs) of a wave; unit: meters
- **Frequency ($f$):** The number of complete waves (or oscillations) per second; unit: hertz (Hz)
- **Amplitude:** The maximum displacement from the equilibrium position; related to the intensity or energy of the wave
- **Period ($T$):** The time required for one complete oscillation; measured in seconds; inversely related to frequency: $T = 1/f$

### Wave Speed

The speed at which a wave travels is:

$$v = f\lambda$$

For electromagnetic waves in vacuum, $v = c = 3 \times 10^8 \text{ m/s}$.

## Reflection and Mirrors

### Law of Reflection

When light reflects off a surface, the angle of incidence equals the angle of reflection:

$$\theta_i = \theta_r$$

Both angles are measured from the **normal** (the perpendicular line to the surface at the point of incidence). This law holds for all reflecting surfaces.

### Plane Mirrors

A **plane mirror** is a flat reflecting surface.

**Properties of images in a plane mirror:**
- **Virtual image** (cannot be projected onto a screen)
- **Upright** (same orientation as the object)
- **Same size** as the object
- **Same distance behind the mirror** as the object is in front
- **Reversed laterally** (left and right are switched)

**Worked example:** A person stands 2 m in front of a plane mirror. Where is their image, and how far is the person from their image?

- Image is located 2 m **behind** the mirror
- Distance from person to image = 2 m (in front) + 2 m (behind) = **4 m**

### Concave Mirrors (Converging Mirrors)

A **concave mirror** has a surface that curves inward (like a "cave"). It can converge light rays to a single point.

**Properties:**
- Can form **real images** (can be projected) or virtual images, depending on object position
- Real images are inverted; virtual images are upright
- **Uses:** telescopes, headlights, makeup mirrors, searchlights
- Light rays parallel to the principal axis converge at the focal point

### Convex Mirrors (Diverging Mirrors)

A **convex mirror** has a surface that curves outward (like a dome). It diverges (spreads out) light rays.

**Properties:**
- Always forms **virtual, upright, smaller images**
- **Uses:** car side-view mirrors, security/surveillance mirrors, parking lot mirrors
- Makes objects appear farther away and smaller
- Provides a wider field of view than a plane mirror

### Mirror Formula

For both curved mirrors, the mirror formula relates the focal length, object distance, and image distance:

$$\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$$

where:
- $f$ = focal length of the mirror (in meters)
- $d_o$ = object distance (distance from object to mirror, positive in front of mirror)
- $d_i$ = image distance (distance from image to mirror; positive if in front, negative if behind)

**For concave mirrors:** $f > 0$
**For convex mirrors:** $f < 0$

### Magnification

The magnification of a mirror is defined as:

$$m = -\frac{d_i}{d_o}$$

**Interpretation:**
- If $m > 0$: image is upright (virtual)
- If $m < 0$: image is inverted (real)
- If $|m| > 1$: image is enlarged
- If $|m| < 1$: image is reduced (smaller)
- If $|m| = 1$: image is same size as object

### Worked Example: Concave Mirror Image Formation

A 5 cm tall object is placed 30 cm in front of a concave mirror with focal length 10 cm. Find the image distance, image size, and describe the image.

Using the mirror formula:
$$\frac{1}{10} = \frac{1}{30} + \frac{1}{d_i}$$

$$\frac{1}{d_i} = \frac{1}{10} - \frac{1}{30} = \frac{3 - 1}{30} = \frac{2}{30} = \frac{1}{15}$$

$$d_i = 15 \text{ cm}$$

The image is 15 cm in front of the mirror (positive, so it's real).

Magnification:
$$m = -\frac{15}{30} = -0.5$$

The magnification is negative (image is inverted) and less than 1 (image is reduced to half the size).

Image height: $h_i = m \times h_o = -0.5 \times 5 = -2.5$ cm (negative indicates inversion)

**Description:** The image is **real, inverted, and reduced to 2.5 cm tall**, located 15 cm in front of the mirror.

## Worked Examples (UPCAT-Style)

### Example 1: Conservation of Energy with Friction

A 3 kg ball is dropped from a 10 m height. Assuming no air resistance, what is the speed just before impact?

Using conservation of energy:
$$PE_i = KE_f$$
$$mgh = \frac{1}{2}mv^2$$
$$gh = \frac{1}{2}v^2$$
$$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 10} = \sqrt{200} = 10\sqrt{2} \approx 14.1 \text{ m/s}$$

### Example 2: Comparing Gravitational Potential Energy

Three objects are at different heights:
- Object A: 2 kg at 3 m
- Object B: 3 kg at 2 m
- Object C: 4 kg at 1 m

Which has the greatest gravitational potential energy?

Calculate PE for each:
- $PE_A = 2 \times 10 \times 3 = 60$ J
- $PE_B = 3 \times 10 \times 2 = 60$ J
- $PE_C = 4 \times 10 \times 1 = 40$ J

Objects A and B have equal PE (60 J each), and both are greater than object C (40 J).

### Example 3: Electromagnetic Spectrum Wavelength

Which electromagnetic wave has a longer wavelength: a UV photon with frequency $10^{15}$ Hz or an infrared photon with frequency $10^{13}$ Hz?

Using $\lambda = c/f$:

UV wavelength: $\lambda_{UV} = \frac{3 \times 10^8}{10^{15}} = 3 \times 10^{-7}$ m = 300 nm

IR wavelength: $\lambda_{IR} = \frac{3 \times 10^8}{10^{13}} = 3 \times 10^{-5}$ m = 30,000 nm = 30 μm

The infrared photon has a **much longer wavelength** (30 μm vs. 300 nm).

### Example 4: Plane Mirror Image Distance

A child stands 1.5 m in front of a plane mirror. How far is the child from their image?

In a plane mirror, the image is as far behind the mirror as the object is in front:
- Object distance: 1.5 m in front
- Image distance: 1.5 m behind
- Total distance from child to image: 1.5 + 1.5 = **3 m**

### Example 5: Mirror Formula Application

An object 4 cm tall is placed 20 cm from a concave mirror with focal length 8 cm. Find the image distance, magnification, and describe the image.

Mirror formula:
$$\frac{1}{8} = \frac{1}{20} + \frac{1}{d_i}$$

$$\frac{1}{d_i} = \frac{1}{8} - \frac{1}{20} = \frac{5 - 2}{40} = \frac{3}{40}$$

$$d_i = \frac{40}{3} \approx 13.3 \text{ cm}$$

Magnification:
$$m = -\frac{13.3}{20} = -0.665$$

The image is **real (positive $d_i$), inverted (negative $m$), and reduced in size** ($|m| < 1$). Image height ≈ 2.7 cm.

## UPCAT Tips and Common Mistakes

### Tip 1: Energy Conservation Requires Identifying the System

When using conservation of energy, clearly define your system (object + Earth, object + spring, etc.). Include all relevant forms of energy (KE, gravitational PE, elastic PE). If friction is present, account for energy lost to heat.

### Tip 2: Distinguishing Frequency and Wavelength

These are inversely proportional. A high-frequency EM wave has a short wavelength, and vice versa. Use the relationship $c = f\lambda$ to convert between them. Remember: $c$ is constant, so if $f$ increases, $\lambda$ must decrease.

### Tip 3: PE Depends on Both Mass AND Height

Do not just compare heights or masses separately. The object with the greatest PE is the one with the greatest product of mass and height ($m \times h$). Two objects can have equal PE even if one is heavier and lower, and the other is lighter and higher.

### Tip 4: Mirror Formula Sign Conventions

For mirrors, remember:
- Distances in front of the mirror are **positive**
- Distances behind the mirror are **negative** (for real images, positive for virtual)
- Concave mirrors have **positive focal length**
- Convex mirrors have **negative focal length**
- Negative magnification indicates an **inverted image**

### Tip 5: Light Travels in Straight Lines (Until Reflected or Refracted)

When drawing ray diagrams, remember that light travels in straight lines until it hits a surface. After reflection, the angle of reflection equals the angle of incidence, both measured from the normal.

### Common Mistake 1: Forgetting to Choose a Reference Point for PE

Gravitational potential energy is always measured relative to a reference point. The question or context usually implies ground level, but you must be explicit about which point has zero PE. The important quantity is the **change in PE** or the **difference in PE** between two points.

### Common Mistake 2: Confusing Real and Virtual Images

- **Real images** (formed by concave mirrors) can be projected onto a screen; they are inverted ($d_i > 0$)
- **Virtual images** (formed by plane and convex mirrors, and by concave mirrors when the object is very close) cannot be projected; they are upright ($d_i < 0$)

### Common Mistake 3: Misapplying the Inverse Relationship Between Frequency and Wavelength

Students sometimes think that because frequency and wavelength are inversely proportional, they must always be opposite (one increases, the other decreases). While true, remember they are **both properties of the same wave**, not independent variables. The product $f \times \lambda$ always equals the wave speed.

## Key Takeaways

1. **Work-Energy Theorem:** Work done by a force equals the change in kinetic energy.
2. **Kinetic Energy** depends on the square of velocity; doubling speed quadruples KE.
3. **Gravitational Potential Energy** depends on both mass and height; comparing requires calculating $m \times h$ for each object.
4. **Conservation of Energy:** In a system without friction, total mechanical energy (KE + PE) remains constant.
5. **Electromagnetic Spectrum:** From longest to shortest wavelength (lowest to highest frequency): Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma ray.
6. **Frequency and Wavelength:** Inversely proportional; use $c = f\lambda$ to relate them.
7. **Law of Reflection:** Angle of incidence = angle of reflection (both from the normal).
8. **Plane Mirrors:** Produce virtual, upright, same-size images at the same distance behind the mirror as the object is in front.
9. **Concave Mirrors:** Can produce real or virtual images depending on object position; converging mirrors used in telescopes and headlights.
10. **Convex Mirrors:** Always produce virtual, upright, smaller images; used for wide-field security mirrors.

## Practice Problems

1. A 5 kg object is lifted from the ground to a height of 2 m. Calculate its gravitational potential energy.
2. An object falls from a 50 m cliff. What is its kinetic energy just before hitting the ground? (Assume mass is 10 kg and use $g = 10 \text{ m/s}^2$)
3. Two objects are present: a 4 kg mass at 5 m height, and a 5 kg mass at 4 m height. Which has greater gravitational PE?
4. An electromagnetic wave has a frequency of $5 \times 10^{14}$ Hz. Is this wave in the visible or infrared region?
5. A 3 cm object is placed 25 cm from a concave mirror with focal length 10 cm. Find the image distance and magnification.

---

*Image needed: Electromagnetic spectrum diagram showing all types of waves, their wavelengths, frequencies, and applications*
*Image needed: Energy conservation diagram of a pendulum showing KE and PE at different points in the swing*
*Image needed: Ray diagrams for concave and convex mirrors showing object, image, focal point, and principal axis*
