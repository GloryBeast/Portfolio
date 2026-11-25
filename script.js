const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Subtle pointer parallax on the hero illustration; disabled for touch and reduced motion.
if (matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const art = document.querySelector('.hero-art');
  window.addEventListener('pointermove', event => {
    const x = (event.clientX / innerWidth - .5) * 7;
    const y = (event.clientY / innerHeight - .5) * 7;
    art.style.transform = `translate(${x}px, ${y}px)`;
  }, { passive: true });
}
