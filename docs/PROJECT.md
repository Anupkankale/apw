# Anup Portfolio — Project Documentation

**Version:** 1.0.0
**Last Updated:** April 2026
**Author:** Anup Kankale

---

## 1. Project Overview

This is a premium dark personal portfolio website built on WordPress with a fully custom Gutenberg FSE (Full Site Editing) block-based theme. The design is inspired by fueled.com — black background, multicolor animated gradients, and smooth cinematic animations.

### Goals
- Showcase skills, projects, and work experience
- Premium UI/UX with production-grade animations
- Fast, maintainable, and extensible codebase
- Component-based architecture (edit sections independently)

---

## 2. Technology Stack

| Layer        | Technology              | Version  |
|--------------|-------------------------|----------|
| CMS          | WordPress               | Latest   |
| Database     | MySQL                   | 8.0      |
| PHP          | WordPress default        | 8.0+     |
| Theme        | Custom FSE theme        | 1.0.0    |
| Container    | Docker + Docker Compose | Latest   |
| DB GUI       | phpMyAdmin              | Latest   |
| Fonts        | Google Fonts (Inter, Plus Jakarta Sans) | — |
| CSS          | Vanilla CSS (CSS Variables + Keyframes) | — |
| JavaScript   | Vanilla JS (ES6+)       | —        |

---

## 3. Local Development Setup

### Prerequisites
- Docker Desktop installed and running
- WSL2 (on Windows)

### First-Time Setup

```bash
# 1. Navigate to project
cd /home/anupkankale/projects/anup-web

# 2. Start all services
docker compose up -d

# 3. Wait ~30 seconds for MySQL to initialize, then visit:
#    http://localhost:9000   → WordPress site
#    http://localhost:9001   → phpMyAdmin
```

### WordPress Admin
- **URL:** http://localhost:9000/wp-admin
- **Username:** `admin`
- **Password:** `Admin@1234`

### Stop / Reset

```bash
# Stop containers (data preserved)
docker compose down

# Stop + wipe all data (fresh install)
docker compose down -v
```

---

## 4. Theme Architecture

The theme uses **WordPress Full Site Editing (FSE)** — a component-based block architecture where every part of the page is a reusable block template.

### Design Pattern: Template → Parts → Patterns

```
templates/front-page.html
    └── references → parts/header.html
    └── references → parts/section-hero.html
    └── references → parts/section-marquee.html
    └── references → parts/section-about.html
    └── references → parts/section-skills.html
    └── references → parts/section-projects.html
    └── references → parts/section-experience.html
    └── references → parts/section-contact.html
    └── references → parts/footer.html
```

Each `parts/section-*.html` file is an **independent component** — edit one section without touching others.

The `patterns/` directory registers each section as a **Gutenberg block pattern**, so you can insert any section into any page via the block editor.

---

## 5. Page Sections

The homepage is divided into 8 sections:

### 5.1 Hero
- Full-screen section with animated aurora background
- Floating color orbs and rising particle effect
- Typewriter animation cycling through job roles
- Animated gradient name text
- CTA buttons: "View My Work" and "Download Resume"
- Social links (GitHub, LinkedIn, Email)

### 5.2 Marquee
- Auto-scrolling ticker with tech stack names
- Fades at edges, infinite loop animation

### 5.3 About
- Two-column layout: photo (left) + bio (right)
- Photo has animated gradient border frame
- "Available for work" badge with pulsing green dot
- Animated stat counters (Years, Projects, Clients)
- Download Resume + Let's Talk CTAs

### 5.4 Skills / Tech Stack
- Three category columns: Frontend, Backend, Tools & Cloud
- 18 total skill cards with emoji icons
- Hover effects: card lifts + color shift
- Animated gradient overlay on category hover

### 5.5 Projects / Work
- 2×2 grid of project cards
- Each card: colored placeholder image, tags, title, description
- Hover: overlay reveals "View Live" and "GitHub" links
- Mouse-follow gradient glow on cards

### 5.6 Experience
- Vertical timeline with glowing colored dots
- Cards for each job: title, company, period, description, tech tags
- Animated gradient line connecting timeline items

### 5.7 Contact
- Two-column: contact info (left) + form (right)
- Contact details: email, phone, location
- Social links: GitHub, LinkedIn, Twitter
- Contact form with animated top gradient border

### 5.8 Footer
- Site name, nav links, social icons
- Subtle purple glow at bottom center

---

## 6. Design System

### Color Palette

| Name    | Hex       | Usage                          |
|---------|-----------|--------------------------------|
| Dark BG | `#080808` | Page background                |
| Card BG | `#111111` | Card/section backgrounds       |
| Card 2  | `#181818` | Nested elements                |
| White   | `#ffffff` | Primary text                   |
| Muted   | `#777777` | Secondary text                 |
| Purple  | `#8b5cf6` | Primary accent, CTA            |
| Blue    | `#3b82f6` | Secondary accent               |
| Pink    | `#f472b6` | Tertiary accent                |
| Cyan    | `#22d3ee` | Labels, section indicators     |
| Green   | `#34d399` | Success states, available badge|

### Typography

| Font               | Usage            | Weights        |
|--------------------|------------------|----------------|
| Plus Jakarta Sans  | Headings, logo   | 700, 800, 900  |
| Inter              | Body, UI         | 400, 500, 600  |

### Spacing Scale
- Section padding: `110px 0`
- Container max-width: `1200px`
- Card border-radius: `12px` (default), `20px` (large)

### Animations
All CSS animations use `cubic-bezier(0.4, 0, 0.2, 1)` easing (`--t` variable).
Gradient animations use `background-size: 300%` with a `270deg` sweep at 5s.

---

## 7. JavaScript Features

All JS is in `assets/js/main.js` — vanilla ES6+, no dependencies.

| Feature               | Trigger         | Description                                    |
|-----------------------|-----------------|------------------------------------------------|
| Custom Cursor         | mousemove       | Dot + ring follow with lerp lag                |
| Nav Scroll Effect     | scroll          | Header gains blur + border after 30px scroll   |
| Hamburger Menu        | click           | Toggles mobile nav with animation              |
| Typewriter            | auto (timeout)  | Types/deletes role strings with realistic speed|
| Scroll Reveal         | IntersectionObserver | Staggered fade-up on elements entering view |
| Counter Animation     | IntersectionObserver | Stats count from 0 to target over 1.8s    |
| Mouse Glow on Cards   | mousemove       | Radial gradient tracks cursor via CSS vars     |
| Aurora Parallax       | mousemove       | Background blobs shift relative to mouse       |
| Active Nav Link       | scroll          | Highlights current section in navigation       |
| Contact Form          | submit          | Simulates send with success message            |
| Page Fade-In          | load            | Full page fades in on load                     |

---

## 8. File Reference

### Core Files

| File                    | Purpose                                           |
|-------------------------|---------------------------------------------------|
| `style.css`             | Theme declaration header (metadata only)          |
| `functions.php`         | Theme setup, enqueue assets, register patterns    |
| `theme.json`            | Block editor color palette, font, spacing tokens  |

### Templates (Page Layouts)

| File                          | Purpose                                |
|-------------------------------|----------------------------------------|
| `templates/index.html`        | Default layout for posts/pages         |
| `templates/front-page.html`   | Homepage — composes all section parts  |

### Template Parts (Components)

| File                              | Section       |
|-----------------------------------|---------------|
| `parts/header.html`               | Navigation    |
| `parts/footer.html`               | Footer        |
| `parts/section-hero.html`         | Hero          |
| `parts/section-marquee.html`      | Ticker        |
| `parts/section-about.html`        | About         |
| `parts/section-skills.html`       | Skills        |
| `parts/section-projects.html`     | Projects      |
| `parts/section-experience.html`   | Experience    |
| `parts/section-contact.html`      | Contact       |

### Block Patterns (Editor-Insertable Components)

| File                              | Pattern Slug                          |
|-----------------------------------|---------------------------------------|
| `patterns/hero-section.php`       | `anup-portfolio/hero-section`         |
| `patterns/about-section.php`      | `anup-portfolio/about-section`        |
| `patterns/skills-section.php`     | `anup-portfolio/skills-section`       |
| `patterns/projects-section.php`   | `anup-portfolio/projects-section`     |
| `patterns/experience-section.php` | `anup-portfolio/experience-section`   |
| `patterns/contact-section.php`    | `anup-portfolio/contact-section`      |

### Assets

| File                    | Purpose                                             |
|-------------------------|-----------------------------------------------------|
| `assets/css/main.css`   | All styles — layout, animations, dark theme, responsive |
| `assets/js/main.js`     | All interactivity — cursor, typewriter, reveals, etc.|

---

## 9. How to Edit Content

To personalize the portfolio, replace placeholder content in these files:

### Personal Info
- **`parts/section-hero.html`** — Name, tagline, social links
- **`parts/section-about.html`** — Bio text, photo, stats (years/projects/clients)
- **`assets/js/main.js`** — `roles` array (lines 1-7) — job title strings

### Projects
- **`parts/section-projects.html`** — Project titles, descriptions, tags, live/GitHub links
- Replace `.project-img-placeholder` divs with actual `<img>` tags for screenshots

### Experience
- **`parts/section-experience.html`** — Job titles, companies, dates, descriptions

### Contact
- **`parts/section-contact.html`** — Email, phone, city, social links

### Footer
- **`parts/footer.html`** — Name, social links

---

## 10. Adding a New Project Card

Open `parts/section-projects.html` and copy an existing `.project-card` block, then modify:

```html
<div class="project-card reveal">
    <div class="project-image">
        <!-- Option A: Colored placeholder -->
        <div class="project-img-placeholder purple-bg"><span>05</span></div>

        <!-- Option B: Real screenshot -->
        <!-- <img src="/wp-content/uploads/project5.jpg" alt="Project Name"> -->

        <div class="project-overlay">
            <a href="https://your-live-site.com" class="project-link" target="_blank" rel="noopener">View Live ↗</a>
            <a href="https://github.com/you/repo" class="project-link" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
    </div>
    <div class="project-info">
        <div class="project-tags">
            <span class="tag purple">React</span>
            <span class="tag blue">Node.js</span>
        </div>
        <h3 class="project-title">My New Project</h3>
        <p class="project-desc">What the project does and the problem it solves.</p>
    </div>
</div>
```

Available placeholder colors: `purple-bg`, `blue-bg`, `pink-bg`, `cyan-bg`
Available tag colors: `purple`, `blue`, `pink`, `cyan`, `green`

---

## 11. Adding a New Experience Entry

Open `parts/section-experience.html` and add inside `.timeline`:

```html
<div class="timeline-item reveal">
    <div class="timeline-dot cyan"></div>  <!-- purple | blue | pink | cyan -->
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="job-title">Your Job Title</h3>
            <span class="job-period">2023 — 2024</span>
        </div>
        <p class="job-company">Company Name · Full-time</p>
        <p class="job-desc">What you did and what you achieved at this role.</p>
        <div class="job-tags">
            <span class="tag cyan">React</span>
            <span class="tag blue">AWS</span>
        </div>
    </div>
</div>
```

---

## 12. Adding a New Skill

Open `parts/section-skills.html` — find the correct category and add to its `.skills-grid`:

```html
<div class="skill-card"><span class="skill-icon">🔥</span><span>New Skill</span></div>
```

---

## 13. Docker Reference

### docker-compose.yml Services

```yaml
wordpress:   port 9000  → main site
db:          internal   → MySQL 8.0
phpmyadmin:  port 9001  → database GUI
```

### Common Commands

```bash
docker compose up -d           # Start
docker compose down            # Stop
docker compose down -v         # Stop + delete all data
docker compose logs -f         # Follow logs (all services)
docker compose logs wordpress  # WordPress logs only
docker compose exec wordpress bash --allow-root  # Shell in
```

---

## 14. Roadmap / Next Steps

- [ ] Replace all placeholder content with real resume data
- [ ] Add real project screenshots
- [ ] Upload profile photo
- [ ] Connect contact form to email (WP Mail SMTP or similar)
- [ ] Add real social media links
- [ ] SEO optimization (Yoast or RankMath plugin)
- [ ] Performance audit (WebP images, caching plugin)
- [ ] Deploy to production server

---

*Documentation auto-generated for the anup-web portfolio project.*
