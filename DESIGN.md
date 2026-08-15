# Design system: Annotated Learning Ledger

## Direction

The site is treated as a working learning ledger rather than a technology product landing page. The visual system borrows from an actively maintained studio notebook: clear rulings, strong page hierarchy, direct labels, and evidence arranged for later review.

## Design read

Redesign overhaul of a student portfolio and learning hub for teachers, admissions readers, peers, and the student himself. The language is editorial, orderly, and personal, implemented with native HTML and CSS on the existing static architecture.

## Dials

- Design variance: 6. The hero is asymmetric, while dense study tools remain predictable.
- Motion intensity: 2. Existing functional transitions remain; decorative scene motion is disabled.
- Visual density: 5. The learning dashboard stays information-rich, with stronger grouping and whitespace.

## Tokens

- Canvas: `#f2f0ea`
- Raised paper: `#faf9f5`
- Ink: `#1d1c1a`
- Muted ink: `#615e57`
- Rule: `#c8c3b8`
- Accent: `#a43e2c`
- Corners: 2px across panels, controls, and cards

Dark mode uses the same hierarchy with charcoal paper and a lighter brick accent. No section changes theme independently.

## Composition

- The first viewport introduces Jimmy's current work and two useful routes.
- Section headings stack vertically; supporting copy never floats as a detached caption.
- Repeated information uses ruled grids instead of floating glass cards.
- Controls stay rectangular and compact, like labeled tools inside the ledger.
- Projects, archive categories, and about content share the same archival grid without becoming identical marketing cards.

## Interaction

- Hover indicates action through ink or paper changes, not glow.
- Pressed controls move by one pixel for tactile feedback.
- Focus rings use the accent color and remain visible on both themes.
- Reduced-motion preferences disable nonessential animation and smooth scrolling.

## Preservation

The existing navigation labels, anchor IDs, content sections, stored browser data, sub-sites, PDFs, logo asset, contact links, and GitHub Pages structure remain intact.

## Asset provenance

No new raster assets were created or added. The existing repository logo and icons are reused without modifying their source files.
