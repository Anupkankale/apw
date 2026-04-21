/* ========== CUSTOM CURSOR ========== */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

if (cursor && cursorRing) {
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function animateCursor() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        cursor.style.left     = mx + 'px';
        cursor.style.top      = my + 'px';
        cursorRing.style.left = rx + 'px';
        cursorRing.style.top  = ry + 'px';
        requestAnimationFrame(animateCursor);
    })();
}

/* ========== NAVIGATION SCROLL ========== */
const header = document.getElementById('site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    lastY = y;
}, { passive: true });

/* ========== HAMBURGER ========== */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

/* ========== TYPEWRITER ========== */
const roles = [
    'Full Stack Developer',
    'WordPress Expert',
    'PHP Developer',
    'Vue.js & Nuxt.js Dev',
    'WP Core Contributor',
    'Open Source Author'
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
    if (!typeEl) return;
    const word = roles[roleIdx];
    typeEl.textContent = deleting
        ? word.slice(0, --charIdx)
        : word.slice(0, ++charIdx);

    let delay = deleting ? 55 : 95;
    if (!deleting && charIdx === word.length)      { delay = 2200; deleting = true; }
    else if (deleting && charIdx === 0)             { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 350; }
    setTimeout(type, delay);
}
setTimeout(type, 900);

/* ========== SCROLL REVEAL (staggered) ========== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
    const group = Math.floor(i / 4);
    el.style.transitionDelay = `${(i % 4) * 90}ms`;
    revealObserver.observe(el);
});

/* ========== COUNTER ANIMATION ========== */
function animateCounter(el) {
    const target = parseInt(el.dataset.target || el.textContent, 10);
    const suffix = el.textContent.replace(/[0-9]/g, '');
    let current = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const nums = entry.target.querySelectorAll('.stat-num');
            nums.forEach(n => {
                const match = n.textContent.match(/\d+/);
                if (match) {
                    n.dataset.target = match[0];
                    animateCounter(n);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) counterObserver.observe(statsSection);

/* ========== SMOOTH ANCHOR SCROLL ========== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});

/* ========== ACTIVE NAV ========== */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
}, { passive: true });

/* ========== MOUSE GLOW ON CARDS + GLASS SHEEN ========== */
document.querySelectorAll('.project-card, .skills-category, .timeline-content, .contact-form').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const px = ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%';
        const py = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%';
        card.style.setProperty('--mx', px);
        card.style.setProperty('--my', py);
        card.style.setProperty('--gx', px);
        card.style.setProperty('--gy', py);
    });
});

/* Glass sheen tracker for .liquid-glass elements */
document.querySelectorAll('.liquid-glass').forEach(el => {
    el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--gx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
        el.style.setProperty('--gy', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
    });
});

/* ========== CONTACT FORM ========== */
const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');
form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = 'Message Sent! ✓';
        if (success) success.style.display = 'block';
        form.reset();
        setTimeout(() => {
            btn.innerHTML = 'Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>';
            btn.disabled = false;
            if (success) success.style.display = 'none';
        }, 4000);
    }, 1200);
});

/* ========== SKILL CARD STAGGER ========== */
document.querySelectorAll('.skills-category').forEach(cat => {
    cat.querySelectorAll('.skill-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 40}ms`;
    });
});

/* ========== PARALLAX on hero orbs ========== */
window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll('.aurora').forEach((o, i) => {
        const d = (i + 1) * 0.4;
        o.style.transform = `translate(${x * d}px, ${y * d}px) scale(1)`;
    });
}, { passive: true });

/* ========== THEME TOGGLE ========== */
(function () {
    const html   = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const saved  = localStorage.getItem('theme');

    /* Apply saved preference, or fall back to system default */
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }

    toggle?.addEventListener('click', () => {
        html.classList.add('theme-transition');
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        /* Remove transition class once animation completes */
        setTimeout(() => html.classList.remove('theme-transition'), 380);
    });
})();

/* ========== PAGE LOAD FADE ========== */
document.documentElement.style.opacity = '0';
document.documentElement.style.transition = 'opacity 0.5s ease';
window.addEventListener('load', () => {
    document.documentElement.style.opacity = '1';
});
