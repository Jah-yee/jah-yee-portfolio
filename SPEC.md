# Jah-yee Personal Portfolio — SPEC

## 1. Concept & Vision

A cold, precise developer portfolio that reads like decompiled firmware — stripped of all vanity, every pixel earns its place. The site embodies the "prototype fast, test hard" philosophy: sharp, functional, deliberately minimal. Think terminal meets brutalist architecture. The visitor should feel like they're interfacing with a well-documented API, not browsing a marketing page.

**Tagline concept:** *"Building at the edge of intent."*

---

## 2. Design Language

### Aesthetic Direction
**Cold Precision / Terminal Brutalism** — Inspired by engineering dashboards, decompiled binaries, and the stark beauty of a clean system architecture diagram. Not warm, not playful — calculated.

### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0a0a0a` | Deep void black |
| Surface | `#111111` | Cards, elevated surfaces |
| Border | `#1e1e1e` | Subtle separators |
| Muted | `#3a3a3a` | Disabled, secondary text |
| Text Primary | `#e5e5e5` | Main body text |
| Text Secondary | `#888888` | Labels, captions |
| Accent | `#00ff88` | Electric mint — CTAs, highlights, glows |
| Accent Alt | `#00b4d8` | Cyan — secondary highlights |
| Danger | `#ff4444` | Error states |

### Typography
- **Display:** `JetBrains Mono` — for name, code snippets, technical labels
- **Body:** `Inter` — clean sans-serif for readable prose
- **Mono/Label:** `JetBrains Mono` — tags, stats, timestamps

### Spatial System
- Base unit: 8px
- Section padding: 120px vertical on desktop, 64px mobile
- Max content width: 1024px
- Card padding: 24px
- Tight letter-spacing on headings (-0.02em to -0.04em)

### Motion Philosophy
- **Entrance:** Staggered fade-up, 300ms ease-out, 60ms stagger between items
- **Hover:** Fast, snappy (150ms) — scale 1.02, border glow
- **Scroll-triggered:** Elements reveal as they enter viewport
- **Cursor:** Custom crosshair cursor on hero
- **No:** Bouncy animations, spring physics, playful transitions — everything is linear or ease-out

### Visual Assets
- **Icons:** Lucide React — consistent stroke-width 1.5, minimal
- **Decorative:** Subtle grid pattern overlay, scanline effect on hero
- **No images** — pure typography and geometry
- **Code blocks:** Syntax-highlighted snippets showing actual code

---

## 3. Layout & Structure

```
[NAV] — Fixed, transparent → blurred on scroll. Name left, links right.

[HERO] — Full viewport. Name in huge mono. Title below. One line tagline.
         Subtle grid + scanline bg. "Status: available" badge.

[STATS BAR] — Horizontal strip. 4 numbers: Projects / Stars / Hackathons / Yrs.
              Cold, data-dashboard feel.

[ABOUT] — Two columns. Left: bio paragraphs. Right: quick-facts sidebar.
          Tight, factual, no fluff.

[SKILLS] — Terminal-style list. Language bars + proficiency indicators.
           Categorized: Languages / Frameworks / Tools / Learning.

[PROJECTS] — 3 featured cards. Each: title, tech stack tags, one-line desc,
              link + github icon. Sharp hover state.

[PHILOSOPHY] — Quote section. "Prototype fast, test harder."
               Dark background, large italic quote.

[CONTACT] — Minimal. Email + links. One sentence.

[FOOTER] — Single line. Year + name. No social icons clutter.
```

### Responsive Strategy
- Desktop: Full layout as described
- Tablet: Single column, reduced padding
- Mobile: Stacked, hamburger nav, touch-friendly spacing

---

## 4. Features & Interactions

### Navigation
- Smooth scroll to sections on click
- Active section highlight (accent underline)
- Mobile: slide-in drawer

### Hero
- Typewriter effect on tagline (optional, subtle)
- Status badge pulses subtly (available indicator)
- Grid background with subtle parallax on mouse move

### Stats
- Count-up animation on scroll-into-view
- Number formatting: "42" not "42.00"

### Skills
- Expandable categories (click to show/hide sub-skills)
- Proficiency shown as percentage bar

### Projects
- Hover: card lifts, border glows accent
- External links open in new tab
- Tag pills with category colors

### Contact
- Click-to-copy email
- Toast notification: "Copied to clipboard"

---

## 5. Component Inventory

### `<Nav />`
- States: default (transparent), scrolled (blur backdrop), mobile-open
- Logo: Name in mono font, accent color on hover

### `<Hero />`
- Giant display name (clamp: 3rem to 8rem)
- Subtitle: "Full-Stack Developer · AI Tool Builder"
- Tagline: italic, muted
- Status badge: pulsing green dot + "Available for projects"

### `<StatCard />`
- Large number (mono, accent)
- Label below (small, muted)
- Hover: subtle glow

### `<SkillCategory />`
- Header: category name + icon
- Items: name + proficiency bar (filled %)
- Default: collapsed on mobile, expanded on desktop

### `<ProjectCard />`
- Title (mono, large)
- Description (body text)
- Tech tags (small pills)
- Links: GitHub + Demo icons
- States: default, hover (lift + glow)

### `<ContactSection />`
- Email with copy button
- Social links: GitHub, Twitter/X, LinkedIn
- Minimal, icon-only

### `<Footer />`
- Single line: `© 2025 Jah-yee. Built with intent.`
- No decorations

---

## 6. Technical Approach

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS variables
- **Fonts:** Google Fonts (JetBrains Mono, Inter)
- **Icons:** Lucide React
- **Animation:** CSS transitions + Intersection Observer for scroll triggers
- **Deployment:** Vercel (zero-config)

### Project Structure
```
jah-yee-portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page assembling all sections
│   └── globals.css      # Tailwind + custom CSS
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Philosophy.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts          # All content data (skills, projects, etc.)
├── public/
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### Performance Targets
- Lighthouse: 95+ all categories
- No layout shift
- < 100KB initial JS
