# Graphic Designer Portfolio — Single Page

## Look and feel
- Near-black background (#0A0A0A), off-white text, warm gold accent. Dark-only.
- Headlines: Cormorant Garamond (elegant serif). Body: Manrope (clean sans). Generous whitespace.

## Sections (one long scrolling page, smooth-scroll nav)
1. **Hero** — huge name, tagline, gold "View work" magnetic button, background image with parallax.
2. **Marquee strip** — looping text ("Branding — Packaging — Illustration — ...").
3. **Work** — filter tabs (All / Branding / Social Media / Packaging / Illustration), responsive grid (1/2/3 columns), animated filtering, staggered entrance, image zoom on hover, parallax inside cards. Clicking a card opens a modal with a gallery of images + short description, client, year.
4. **About** — portrait, short bio, a few stats.
5. **Services** — numbered list of services with short descriptions.
6. **Contact** — large "Let's work together" headline with WhatsApp, Email, Instagram links (magnetic). No form. Footer.

## Animations
- Custom cursor (dot + ring) that grows over cards/links; disabled on touch devices.
- Scroll-reveal on every section, staggered cards.
- Magnetic buttons, smooth scroll, respects reduced-motion.

## Content
- Placeholder name, bio, and ~9 projects with AI-generated placeholder images; contact links use placeholder number/email/handle you can replace.

## Technical details
- Install `framer-motion` for layout/filter animation, modal, reveal, parallax (useScroll/useTransform).
- `src/data/projects.ts`: single editable array `{ id, title, category, year, client, cover, images[], description }`.
- Components in `src/components/portfolio/`: Cursor, Hero, Marquee, Work, ProjectModal, About, Services, Contact, Magnetic, Reveal.
- Tokens (gold accent, fonts) in `src/styles.css`; fonts via `<link>` in `__root.tsx`; proper head() metadata on `/`.
- Images generated into `src/assets/`, lazy-loaded.
