// ---------- Header: fondo solido al hacer scroll ----------
const header = document.getElementById('siteHeader');
function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// ---------- Menu movil ----------
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ---------- Pestañas (horarios, tarifas...) ----------
document.querySelectorAll('[data-tabgroup]').forEach(group => {
  const tabs = group.querySelectorAll('.tab-btn');
  const panels = group.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      tabs.forEach(t => {
        t.classList.toggle('is-active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });
      panels.forEach(panel => {
        panel.hidden = panel.dataset.panel !== target;
        panel.classList.toggle('is-active', panel.dataset.panel === target);
      });
    });
  });
});

// ---------- Cuenta atras para el lanzamiento de Barre ----------
// Desactivada: la fecha de inicio ya no es un dia fijo (1 de septiembre),
// asi que el badge se queda con el texto estatico "Nueva actividad".

// ---------- Año en footer ----------
document.getElementById('year').textContent = new Date().getFullYear();
