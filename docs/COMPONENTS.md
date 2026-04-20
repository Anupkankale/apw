# Component Reference Guide

Each section of the portfolio is a self-contained component in `parts/`.

---

## header.html
**File:** `parts/header.html`
**Renders:** Fixed navigation bar

Elements:
- `#cursor` + `#cursor-ring` — custom cursor DOM nodes
- `.site-header` — fixed positioned, gains `.scrolled` class on scroll
- `.logo-text` — site title with animated gradient
- `.primary-nav` — desktop nav links (hidden on mobile)
- `.btn-hire` — gradient CTA button
- `.hamburger` — mobile toggle button
- `.mobile-menu` — full-width mobile dropdown

JS hooks: `#site-header`, `#hamburger`, `#mobile-menu`

---

## section-hero.html
**File:** `parts/section-hero.html`
**Renders:** Full-screen landing section

Elements:
- `.hero-bg` — contains aurora + grid + particles
- `.aurora-1/2/3/4` — animated gradient blobs
- `.grid-lines` — subtle dot grid overlay
- `.particles` — 10 `.particle` divs (CSS animated)
- `.hero-greeting` — "Hi, I'm" pill badge
- `.hero-name.gradient-text` — large animated name
- `.hero-role` — typewriter container (`#typewriter` + `.cursor`)
- `.hero-tagline` — description paragraph
- `.hero-ctas` — button group
- `.hero-social` — icon links row
- `.scroll-indicator` — animated scroll line

JS hooks: `#typewriter`, `.aurora` (parallax), `.reveal` (scroll observer)

---

## section-marquee.html
**File:** `parts/section-marquee.html`
**Renders:** Auto-scrolling tech ticker

Elements:
- `.marquee-section` — border-top/bottom container
- `.marquee-track` — overflow hidden wrapper
- `.marquee-content` — duplicated content for seamless loop

Animation: pure CSS `@keyframes marquee` on `.marquee-content`

To update tech names: edit the `<span>` list (duplicate all items — both halves must match for seamless loop).

---

## section-about.html
**File:** `parts/section-about.html`
**Renders:** Two-column about section

Elements:
- `.about-grid` — CSS Grid, 2 columns (image + content)
- `.image-wrap` — contains frame + glow
- `.image-frame` — gradient border via `padding: 3px + background: gradient`
- `.avatar-placeholder` — shown when no photo; replace with `<img>` tag
- `.image-glow` — blurred radial gradient behind image
- `.image-badge` — "Available for work" with pulsing dot
- `.about-stats` — 3 `.stat` items with `.stat-num` (counter targets)
- `.about-actions` — two buttons

**To add photo:** Replace `.avatar-placeholder` div with:
```html
<img src="/wp-content/uploads/your-photo.jpg" alt="Your Name">
```

JS hooks: `.stat-num` (counter animation), `.about-stats` (IntersectionObserver trigger)

---

## section-skills.html
**File:** `parts/section-skills.html`
**Renders:** Three-column skills grid

Elements:
- `.skills-categories` — CSS Grid, 3 columns
- `.skills-category` — category card with gradient hover overlay
- `.category-title` — emoji icon + label
- `.skills-grid` — 2-column grid of skill cards
- `.skill-card` — individual skill with emoji + name

**To add a skill:**
```html
<div class="skill-card"><span class="skill-icon">🔥</span><span>New Tech</span></div>
```

**To add a category:**
```html
<div class="skills-category reveal">
    <h3 class="category-title"><span class="cat-icon purple">🎯</span> New Category</h3>
    <div class="skills-grid">
        <!-- skill cards here -->
    </div>
</div>
```

---

## section-projects.html
**File:** `parts/section-projects.html`
**Renders:** 2×2 project card grid

Elements:
- `.projects-grid` — CSS Grid 2 columns
- `.project-card` — card with mouse-glow effect (`--mx`, `--my` CSS vars)
- `.project-image` — image area with hover overlay
- `.project-img-placeholder` — colored gradient placeholder (replace with `<img>`)
- `.project-overlay` — hidden, reveals on hover with two link buttons
- `.project-info` — tags + title + description

**Placeholder colors:** `purple-bg`, `blue-bg`, `pink-bg`, `cyan-bg`

**To use a real screenshot:**
```html
<div class="project-image">
    <img src="/wp-content/uploads/project.jpg" alt="Project Name" style="width:100%;height:100%;object-fit:cover;">
    <div class="project-overlay">...</div>
</div>
```

JS hooks: `.project-card` (mouse glow event listener)

---

## section-experience.html
**File:** `parts/section-experience.html`
**Renders:** Vertical timeline

Elements:
- `.timeline` — relative container with gradient `::before` line
- `.timeline-item` — flex row (dot + card)
- `.timeline-dot` — colored circle with glow (`.purple`, `.blue`, `.pink`, `.cyan`)
- `.timeline-content` — card with gradient hover overlay
- `.timeline-header` — flex row: job title + period badge
- `.job-period` — cyan badge
- `.job-tags` — tech stack tags

**Dot colors:** `purple`, `blue`, `pink`, `cyan`

---

## section-contact.html
**File:** `parts/section-contact.html`
**Renders:** Two-column contact section

Elements:
- `.contact-inner` — CSS Grid 2 columns
- `.contact-text` — left: label, heading, tagline, info, social buttons
- `.contact-info` — list of contact items (email, phone, location)
- `.contact-item` — icon + text row
- `.contact-social` — social link pills
- `.contact-form` — right: form card with top gradient border
- `#contact-form` — JS handles submit
- `#form-success` — success message (hidden by default)

JS hooks: `#contact-form` (submit handler), `.contact-form` (mouse glow)

---

## footer.html
**File:** `parts/footer.html`
**Renders:** Simple dark footer

Elements:
- `.footer-inner` — flex row: logo + links + social + copyright
- `.footer-logo` — site name with gradient
- `.footer-links` — nav link list
- `.footer-social` — icon link row
- `.footer-copy` — copyright paragraph

---

## CSS Class Naming Convention

| Prefix/Pattern     | Meaning                               |
|--------------------|---------------------------------------|
| `.section`         | Adds standard section padding         |
| `.reveal`          | Scroll-animated element               |
| `.gradient-text`   | Animated color-shifting text          |
| `.section-label`   | Small uppercase section identifier    |
| `.section-title`   | Large section heading                 |
| `.btn-primary`     | Gradient filled button                |
| `.btn-outline`     | Transparent bordered button           |
| `.tag.{color}`     | Small pill tag (purple/blue/pink/cyan/green) |
| `.container`       | Max-width centered wrapper            |
| `.*-bg`            | Project placeholder background color  |
