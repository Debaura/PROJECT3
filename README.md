# PROJECT3
# Interactive Pricing Component

A responsive, pixel-perfect pricing component featuring a custom toggle switch that dynamically swaps between monthly and annual billing plans. Built with semantic HTML5, modern CSS3 (Flexbox & pseudo-elements), and vanilla JavaScript.

## Features

- **Dynamic Price Toggling:** Seamlessly swaps pricing data across multiple tiers using custom JavaScript event handlers.
- **Custom Toggle Component:** Form control switch engineered from scratch using accessible HTML labels, semantic checkboxes, and CSS pseudo-elements (`::before`).
- **Fluid Layout:** Centered, cross-browser compatible interface driven entirely by CSS Flexbox.
- **Visual Hierarchy:** Distinct, amplified styling for the featured Tier card to drive user conversions.

## Architecture & Implementation

### 1. Structural Layer (HTML5)
- Structured using semantic blocks (`<main>` grid wrapper).
- Nested core numerical metrics inside isolated `<span>` containers to preserve currency symbols and allow targeted DOM manipulations.
- Configured native form controls (`<input type="checkbox">`) bound cleanly to interactive `<label>` tracks.

### 2. Presentational Layer (CSS3)
- Cleared cross-browser layout inconsistencies via a universal margin/padding reset.
- Managed viewport positioning globally via `min-height: 100vh` and bidirectional Flexbox alignment on the document body.
- Implemented state-driven visual modifications via the adjacent sibling selector (`#toggle:checked + .switch-slider`).
- Integrated performance-tuned property transitions (`transition: 0.3s ease`) for smooth slider ball rendering.

### 3. Logic Layer (Vanilla JavaScript)
- Targeted DOM nodes cleanly utilizing standard lookup workflows (`getElementById` and `querySelectorAll`).
- Bound contextual execution flows directly to state transformations via the `'change'` event listener.
- Managed internal state processing via index-mapped condition handling blocks (`if/else` checks against boolean `.checked` states).

## Tech Stack

- **Structure:** HTML5
- **Styling:** CSS3 (Flexbox, Pseudo-elements, Transitions)
- **Interactivity:** JavaScript (ES6+ Vanilla)

## Development Milestones Completed

1. [x] Hardcoded semantic structural layouts for all matching pricing cards.
2. [x] Set up base typography controls, normalizations, and viewport layouts.
3. [x] Formed responsive side-by-side card distribution columns.
4. [x] Constructed custom interactive slider capsule assets without template dependencies.
5. [x] Deployed conditional logical state shifts to rewrite runtime string nodes on command.
