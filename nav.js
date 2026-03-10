/* cursor.js — Custom cursor logic */

const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Expand cursor on hoverable elements
document.querySelectorAll('a, button, .offer-card, .proj-card, .sk-card, .cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width    = '18px';
    cursor.style.height   = '18px';
    cursor.style.background = 'var(--accent2)';
    ring.style.width  = '48px';
    ring.style.height = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width    = '10px';
    cursor.style.height   = '10px';
    cursor.style.background = 'var(--accent)';
    ring.style.width  = '36px';
    ring.style.height = '36px';
  });
});
