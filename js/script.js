// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace (móvil)
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== MODALES DE NOTICIAS =====
const modal = document.getElementById('noticiaModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const readMoreButtons = document.querySelectorAll('.read-more');

const noticiasData = {
  noticia1: {
    title: 'Victoria en el Santiago Bernabéu',
    body: 'El Real Madrid sumó tres puntos clave en el Santiago Bernabéu tras una actuación brillante del equipo. Con un juego combinativo y una defensa sólida, los blancos demostraron por qué son un serio candidato a todos los títulos en juego esta temporada.',
  },
  noticia2: {
    title: 'Camino a la Decimosexta',
    body: 'El equipo blanco ya prepara la próxima eliminatoria de la Champions League. Los jugadores y el cuerpo técnico trabajan a diario en Valdebebas con la vista puesta en conquistar una nueva Orejona y seguir haciendo historia en la máxima competición europea.',
  },
  noticia3: {
    title: 'La Fábrica sigue creciendo',
    body: 'La cantera del Real Madrid sigue demostrando su enorme nivel. Los jóvenes talentos de Valdebebas, formados con la filosofía de La Fábrica, apuntan a ser los futuros líderes del primer equipo, asegurando el futuro de la entidad blanca.',
  },
};

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.modal;
    const data = noticiasData[key];
    if (data) {
      modalTitle.textContent = data.title;
      modalBody.textContent = data.body;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ===== BOTÓN RESERVAR VISITA =====
const btnGira = document.getElementById('btnGira');

btnGira.addEventListener('click', (event) => {
  event.preventDefault();
  modalTitle.textContent = 'Reserva tu visita al Bernabéu';
  modalBody.textContent =
    '¡Gracias por tu interés en visitar el Santiago Bernabéu! Para reservar tu visita oficial al estadio, contacta con nuestro centro de atención al socio en el teléfono +34 913 983 400 o a través de la página oficial de entradas del club.';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

// ===== NEWSLETTER =====
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = newsletterEmail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    formMessage.textContent = '¡Bienvenido a la familia madridista! 🤍';
    formMessage.className = 'form-message success';
    newsletterForm.reset();
  } else {
    formMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
    formMessage.className = 'form-message error';
  }

  // Limpiar mensaje después de unos segundos
  setTimeout(() => {
    formMessage.textContent = '';
    formMessage.className = 'form-message';
  }, 4000);
});