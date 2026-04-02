# Design System Strategy: Trinergy Solar Solutions

## 1. Overview & Creative North Star
**Creative North Star: "The Solar Architect"**
This design system moves beyond the generic utility-provider aesthetic to embrace a "High-End Editorial" experience. We reject the rigid, boxy templates common in the energy sector. Instead, we adopt **The Solar Architect** mindset: a blend of technical precision and organic warmth. The layout utilizes intentional asymmetry, generous white space (breathing room), and sophisticated layering to mirror the way light interacts with surfaces. 

By prioritizing "Tonal Layering" over structural lines, the interface feels like an architectural blueprint come to life—clean, reliable, and undeniably high-tech.

---

## 2. Colors
Our palette is rooted in the sun (`primary`) and the environment (`secondary`), grounded by deep architectural tones (`tertiary`).

- **Primary (Solar Energy):** `#964900` (Core) / `#F58220` (Container). Use the vibrant orange for high-action CTAs and the deeper tones for sophisticated branding.
- **Secondary (Sustainability):** `#426900` (Core) / `#8DC63F` (Container). This "Fresh Leaf" green is used to signify growth, efficiency, and environmental harmony.
- **Surface & Background:** We use a warm neutral base (`surface`: `#fbf9f8`) to avoid the clinical "coldness" of pure white.

### The Rules of Color Application
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Definition must be achieved through background shifts. For example, a `surface-container-low` section should sit directly on a `surface` background to create a visible but soft boundary.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. An inner card (`surface-container-lowest`) nested inside a section (`surface-container-low`) creates natural depth without visual noise.
*   **The "Glass & Gradient" Rule:** For floating navigation or hero elements, use Glassmorphism. Apply a semi-transparent `surface` color with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Use subtle linear gradients for primary buttons—transitioning from `primary` (#964900) to `primary_container` (#F58220)—to mimic the glint of a solar panel under direct sunlight.

---

## 3. Typography
The typography uses a high-contrast pairing to balance technicality with modernity.

*   **Display & Headlines (Space Grotesk):** This typeface offers a "High-Tech Editorial" feel. Its geometric quirks reflect engineering precision. Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em) to command authority.
*   **Body & Titles (Inter):** A workhorse for readability. Inter’s neutral tone allows the brand colors and Space Grotesk headlines to take center stage.
*   **Visual Hierarchy:** Use `headline-lg` for section headers and `label-md` (uppercase with 0.05em tracking) for small technical metadata. This contrast ensures that even dense solar data feels curated and intentional.

---

## 4. Elevation & Depth
We eschew the "material" look of floating shadows for "Tonal Layering."

*   **The Layering Principle:** Depth is "stacked." 
    *   *Level 0:* `surface` (Base layer)
    *   *Level 1:* `surface-container-low` (Content sections)
    *   *Level 2:* `surface-container-lowest` (Cards/Interaction points)
*   **Ambient Shadows:** If a shadow is required for a floating state (e.g., a mobile menu), it must be an "Ambient Shadow": `0px 24px 48px rgba(27, 28, 28, 0.06)`. The color is a tinted version of `on_surface` to feel like a natural light obstruction.
*   **The "Ghost Border" Fallback:** For input fields or high-density lists where separation is critical, use a "Ghost Border": `outline_variant` (#ddc1b0) at **15% opacity**.

---

## 5. Components

### Buttons
*   **Primary (Solar Action):** Gradient fill (`primary` to `primary_container`), `rounded-md` (0.75rem), `title-sm` (Inter Semi-Bold). High contrast text (`on_primary`).
*   **Secondary (Sustainability):** Solid fill `secondary_container` with `on_secondary_container` text. Use for "Learn More" or "Calculate Savings."
*   **Tertiary (Ghost):** No fill, no border. `on_surface` text with an underline that appears on hover.

### Cards & Layout Containers
*   **Architecture:** Use `rounded-lg` (1rem). 
*   **Separation:** No dividers. Use `spacing-12` (3rem) or `spacing-16` (4rem) to create clear content groups.
*   **The "Solar Panel" Card:** A `surface-container-lowest` card with a `surface_variant` header area to house technical specs.

### Input Fields
*   **Style:** Minimalist. No solid borders. Use a `surface-container-high` background with a `rounded-sm` corner. 
*   **Focus State:** The bottom edge receives a 2px `primary` line, providing a high-tech "active" signal.

### Feature Chips
*   **Style:** `rounded-full`, background `surface-container-highest`. Use these for technical tags like "Tier 1 Panels" or "25-Year Warranty."

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Place a hero image offset to the right with a text block overlapping its edge to create an editorial feel.
*   **Do** use `spacing-20` (5rem) for section vertical padding. Solar energy is about "limitless" space; the UI should reflect that.
*   **Do** use `Glassmorphism` on the sticky navigation bar to maintain a sense of lightness.

### Don't:
*   **Don't** use 1px solid grey lines (`#ccc`) for any reason. They clutter the visual field and look "out of the box."
*   **Don't** use standard "Drop Shadows" with high opacity. They make the UI look heavy and dated.
*   **Don't** use the Green (`secondary`) and Orange (`primary`) immediately adjacent to each other without a neutral buffer; it can create visual vibration.