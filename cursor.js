/* animations.js — Scroll reveal using IntersectionObserver */

// Single elements: .reveal, .reveal-l, .reveal-r
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => {
  revealObserver.observe(el);
});

// Stagger groups: .stagger
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
      staggerObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.stagger').forEach(el => {
  staggerObserver.observe(el);
});
