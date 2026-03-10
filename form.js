/* typed.js — Typewriter effect for hero greeting */

const el      = document.getElementById('typed-text');
const fullText = '// Hello World, I\'m Tejo 👋';
const accentWord = 'Tejo';

let i = 0;

const interval = setInterval(() => {
  if (i <= fullText.length) {
    const shown = fullText.slice(0, i);
    // Highlight "Tejo" in accent color
    el.innerHTML = shown.replace(
      accentWord,
      `<span style="color:var(--accent)">${accentWord}</span>`
    );
    i++;
  } else {
    clearInterval(interval);
    // Blinking cursor after typing
    el.innerHTML += '<span class="blink">|</span>';
    const style = document.createElement('style');
    style.textContent = '.blink { animation: blink 1s step-end infinite; } @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }';
    document.head.appendChild(style);
  }
}, 32);
