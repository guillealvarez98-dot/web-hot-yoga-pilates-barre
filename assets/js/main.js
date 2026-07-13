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

// ---------- Pestañas de horarios ----------
const horarioTabs = document.querySelectorAll('.horario-tab');
const horarioPanels = document.querySelectorAll('.horario-panel');

horarioTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;

    horarioTabs.forEach(t => {
      t.classList.toggle('is-active', t === tab);
      t.setAttribute('aria-selected', t === tab);
    });
    horarioPanels.forEach(panel => {
      panel.hidden = panel.dataset.panel !== target;
      panel.classList.toggle('is-active', panel.dataset.panel === target);
    });
  });
});

// ---------- Cuenta atras para el lanzamiento de Barre ----------
const barreCountdown = document.getElementById('barreCountdown');
if (barreCountdown) {
  const launch = new Date('2026-09-01T00:00:00');
  const today = new Date();
  const diffDays = Math.ceil((launch - today) / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    barreCountdown.textContent = `Faltan ${diffDays} días`;
  } else {
    barreCountdown.textContent = 'Ya disponible';
  }
}

// ---------- Año en footer ----------
document.getElementById('year').textContent = new Date().getFullYear();
