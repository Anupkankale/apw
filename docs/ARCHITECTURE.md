# Architecture Deep-Dive

## Why FSE (Full Site Editing)?

Traditional WordPress uses PHP templates (`header.php`, `footer.php`, `page.php`). FSE replaces all of that with **block markup in HTML files** — giving:

- Visual editing in Site Editor (Appearance → Editor)
- Each section is an independent, reusable component
- No PHP required for layout (only for enqueue/setup)
- Block patterns are insertable into any page via the editor

## Data Flow

```
Browser Request
    ↓
WordPress Router
    ↓
templates/front-page.html (layout)
    ↓
wp:template-part references
    ↓
parts/section-*.html (components)
    ↓
wp:html blocks (custom HTML) + native blocks
    ↓
functions.php enqueues assets/css/main.css + assets/js/main.js
    ↓
Rendered HTML + CSS + JS to browser
```

## Block Types Used

| Block            | Used For                                 |
|------------------|------------------------------------------|
| `wp:html`        | Complex animated sections (hero, skills) |
| `wp:group`       | Section wrappers, layout containers      |
| `wp:columns`     | Two-column layouts (about, contact)      |
| `wp:column`      | Individual columns                       |
| `wp:heading`     | Section titles (editable in editor)      |
| `wp:paragraph`   | Text content (editable in editor)        |
| `wp:buttons`     | CTA button groups                        |
| `wp:button`      | Individual CTA buttons                   |
| `wp:list`        | Navigation link lists                    |
| `wp:site-title`  | Logo / site name                         |
| `wp:template-part` | Component references                   |

## CSS Architecture

`assets/css/main.css` is structured in order:

1. CSS Variables (`:root`)
2. Reset + base
3. Utility classes (`.gradient-text`, `.section-label`, etc.)
4. Animated gradient border utility (`.glow-border`)
5. Buttons (`.btn-primary`, `.btn-outline`)
6. Tags (`.tag.purple`, `.tag.blue`, etc.)
7. Navigation
8. Hero section + aurora + particles
9. Marquee
10. About section
11. Skills section
12. Projects grid
13. Experience timeline
14. Contact section
15. Footer
16. Scroll reveal system
17. Responsive breakpoints

## JS Architecture

`assets/js/main.js` — no framework, no build step required.

Sections in order:
1. Custom cursor (requestAnimationFrame loop)
2. Navigation scroll effect
3. Hamburger menu
4. Typewriter effect
5. Scroll reveal (IntersectionObserver)
6. Counter animation (IntersectionObserver)
7. Smooth anchor scroll
8. Active nav link highlight
9. Mouse glow on cards
10. Contact form handler
11. Skill card stagger
12. Aurora parallax (mousemove)
13. Page load fade-in

## theme.json Role

`theme.json` provides design tokens to the **block editor** (Gutenberg):
- Color palette shown in editor color pickers
- Font families available in editor typography
- Sets global background/text color
- Controls layout max-widths

Does NOT affect the frontend — CSS variables in `main.css` control the actual rendered styles.
