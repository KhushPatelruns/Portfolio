/* =============================================
   KHUSH PATEL — ENGINEERING PORTFOLIO
   main.js
   ============================================= */

// ---- Cursor Glow ----
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top  = e.clientY + 'px';
  });
}

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ---- Active nav link ----
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-resume-btn)');
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current ||
        a.getAttribute('href') === 'index.html#' + current) {
      a.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// ---- Mobile nav toggle ----
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
}

function closeMobileNav() {
  if (hamburger)  hamburger.classList.remove('open');
  if (mobileNav)  mobileNav.classList.remove('open');
}
window.closeMobileNav = closeMobileNav;

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  if (mobileNav && mobileNav.classList.contains('open')) {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileNav();
    }
  }
});

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children a bit
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

// Also reveal project cards with stagger
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const idx = Array.from(projectCards).indexOf(entry.target);
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, idx * 100);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(28px)';
  card.style.transition = 'opacity 0.55s ease, transform 0.55s ease, border-color 0.25s, box-shadow 0.25s';
  cardObserver.observe(card);
});

// Timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const idx = Array.from(timelineItems).indexOf(entry.target);
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }, idx * 130);
      tlObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-16px)';
  item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  tlObserver.observe(item);
});

// Skill cards
const skillCards = document.querySelectorAll('.skill-card');
const scObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = Array.from(skillCards).indexOf(entry.target);
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, idx * 70);
      scObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

skillCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = 'opacity 0.45s ease, transform 0.45s ease, border-color 0.25s';
  scObserver.observe(card);
});

// ---- Contact form with Formspree ----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const btn = contactForm.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    
    const formData = new FormData(contactForm);
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        
        if (formSuccess) {
          formSuccess.style.display = 'block';
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 5000);
        }
      } else {
        btn.textContent = originalText;
        btn.disabled = false;
        alert('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      btn.textContent = originalText;
      btn.disabled = false;
      alert('Something went wrong. Please try again or email me directly.');
    }
  });
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobileNav();
    }
  });
});

// ---- Typing effect on hero tagline (optional) ----
// Runs only on index page
const heroEyebrow = document.querySelector('.hero-eyebrow');
if (heroEyebrow) {
  heroEyebrow.style.opacity = '0';
  heroEyebrow.style.transition = 'opacity 0.6s ease 0.3s';
  setTimeout(() => { heroEyebrow.style.opacity = '1'; }, 100);
}
