# AutoExt Guardian

You are an expert front‑end developer. Build a complete, self‑contained HTML page for a brand called "AutoExt" – a startup developing intelligent multi‑sensor fire detection and suppression systems for automotive (ICE and EV) environments.

The page must be visually stunning, fully responsive, and include all the interactive elements described below. Do not use external libraries (except Google Fonts). Embed all CSS and JavaScript within a single HTML file.

---

## 1. Brand & Design System

- **Color Palette**
  - Background: `#05070A` (dark), `#080B10` (surface), `#0D1117` (elevated)
  - Text: `#F3F4F6` (main), `#9CA3AF` (muted)
  - Accent Orange: `#FF5722` (primary CTA, highlights)
  - Accent Cyan: `#00E5FF` (secondary, technology glow)
  - Red: `#D32F2F` (hazard/fire)
  - Subtle borders: `rgba(255,255,255,0.08)`

- **Typography**
  - Use Google Fonts: `Inter` (body), `JetBrains Mono` (monospace), `Syncopate` (display/headings)
  - Headings: `Syncopate`, uppercase, bold
  - Body: `Inter`, light/regular
  - Monospace: `JetBrains Mono` for technical labels and buttons

- **Custom Cursor**
  - A 20px orange circle that follows the mouse on desktop (hidden on mobile).
  - Expands to 40px and turns cyan when hovering over interactive elements (links, buttons, cards).

- **Scroll Progress Bar**
  - A thin gradient bar at the top of the viewport (orange → cyan) that fills as the user scrolls.

- **Grid Overlay**
  - A subtle fixed background grid (60px spacing, 2% opacity white lines) for a technical feel.

---

## 2. Layout & Sections

### 2.1 Navigation (fixed header)
- Left: Logo with an image placeholder (`./logo.jpg`) and brand name "AutoExt".
- Right: Navigation links: "Architecture", "Applications", "About Us", "Vision", and a "Partner With Us" button (styled as primary CTA).
- On mobile: hamburger menu that slides down the navigation links.

### 2.2 Hero Section
- Full viewport height with a dark radial gradient background.
- Animated particle canvas in the background (dots with connecting lines).
- Heading: "Detect Fire. Before it escalates." (animated entrance)
- Subheading: "Intelligent multi-sensor fire detection and suppression technology for internal combustion engines and EV systems."
- Primary CTA button: "Explore the Technology" linking to the Architecture section.

### 2.3 Intro Section ("What We Do")
- Centered content with a label "THE PROBLEM WITH SINGLE SENSORS".
- Heading: "Intelligence at the edge."
- Paragraph explaining the multi‑sensor fusion approach.

### 2.4 Architecture Section (Scroll‑Driven Sticky Car)
- A tall container (`400vh`) with a sticky inner container that occupies the viewport.
- Two‑column layout: left is a SVG car visual, right is a text panel with step‑by‑step explanations.
- The SVG car must visually change through **4 states** as the user scrolls:
  1. **State 1 – The Environment**  
     - Car chassis is visible, scan line sweeps across.
  2. **State 2 – Multi‑Modal Sensing**  
     - Sensor nodes appear (T, G, O, E, V labels), pulse rings animate.
  3. **State 3 – Sensor Fusion**  
     - Data traces flow from sensors to the MCU (Edge Controller), MCU glows cyan.
  4. **State 4 – Automated Response**  
     - Hazard zones pulse, suppression waves expand, fire flames flicker, MCU turns red.

- The text panel on the right shows one block at a time corresponding to the current state (01‑04 with titles and descriptions).
- Vertical dot navigation on the right side allows jumping to any step.

### 2.5 Applications Section
- Two cards side‑by‑side (stack on mobile):
  - **ICE & Engine Bays** – with wrench icon.
  - **EV & Battery Systems** – with battery icon.
- Each card has a hover effect with slight 3D tilt and border glow.

### 2.6 About Us Section
- Heading and tagline.
- A box explaining "The Core Problems We Solve".
- Team section: show at least one team member card (K. Lenin Barathi, Founder & CEO).

### 2.7 Vision Section
- Simple centered statement about transitioning from prototype to commercial hardware.

### 2.8 Contact Section
- Centered contact box with heading "Let's build safer vehicles."
- Displays founder name and title.
- Large clickable email address: `autoext.guardian@gmail.com` with hover effect.

### 2.9 Footer
- Logo, brief description.
- Contact info (email).
- Disclaimer text in small monospace grey.
- Copyright notice.

---

## 3. Interactions & Animations

- **Reveal on Scroll:** All sections (except hero and architecture) fade up when they enter the viewport (`.reveal` class with Intersection Observer).

- **Scroll‑Driven Car States:** Use JavaScript to compute scroll progress within the `.scroll-track` and assign CSS classes (`state-1` … `state-4`) to the SVG container. Update text blocks and dot indicators accordingly.

- **SVG Car Animations**
  - **Scan line**: moves horizontally via SMIL `<animate>`.
  - **Pulse rings**: CSS `@keyframes pulseRing` (scale and opacity).
  - **Data traces**: CSS `@keyframes flowTraces` (stroke‑dashoffset animation).
  - **Hazard zones**: CSS `@keyframes flickerHazard`.
  - **Suppression waves**: CSS `@keyframes deploySuppression` (scale up and fade).
  - **Fire flames**: CSS `@keyframes flameFlicker` (scale/rotate).
  - **MCU LED**: CSS `@keyframes blinkLed`.

- **3D Tilt on Application Cards**: On mousemove, rotate the card slightly based on cursor position (JavaScript).

- **Smooth scrolling** for anchor links.

---

## 4. Technical Requirements

- **No external dependencies** (except Google Fonts).
- All code in a single `.html` file.
- Fully responsive: mobile-first, breakpoints at 992px and 768px.
- Use CSS custom properties for theming.
- Ensure accessibility: semantic HTML, aria‑labels, proper heading hierarchy.

---

## 5. Code Generation Instructions

Generate the complete HTML document with:

- All CSS in a `<style>` block in the `<head>`.
- All JavaScript in a `<script>` block at the end of the `<body>`.
- The SVG car must be fully self‑contained (no external images).
- Placeholder `./logo.jpg` for the logo (add a comment where the image is used).
- Include a disclaimer in the footer (provided in the design).
- Ensure all animations work correctly and that the scroll‑driven state machine is smooth.

---

## 6. Deliverable

Produce the final, validated HTML code with detailed comments explaining key parts. The page must look and behave like a modern, high‑end tech startup landing page.

---

**Additional Notes:**
- The SVG car is the most complex piece – ensure its paths and elements are correctly styled and that each state enables/disables the appropriate classes.
- The scroll‑driven logic should work reliably across browsers (use `requestAnimationFrame` throttling).
- The particle canvas should not interfere with scrolling or interactivity.
- The custom cursor must be hidden on touch devices.

Now, generate the complete code.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7753e984-c2c0-45d1-aac0-26918f6bbb91).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
