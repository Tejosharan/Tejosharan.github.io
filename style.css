/* nav.js — Navigation scroll + hamburger + active link */

const nav       = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const progress  = document.getElementById('progress');

// Scroll: shrink nav + progress bar
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);

  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progress.style.width = pct + '%';

  highlightNav();
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navAs.forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', active);
  });
}
