// script.js - JS Avançado para landing page profissional

// Scroll suave para seções
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animações on scroll (efeito fade-in)
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});
animatedElements.forEach(el => observer.observe(el));

// Contador de tempo para escassez (ex: oferta por tempo limitado)
function iniciarContador(dias, horas, minutos, segundos) {
  const display = document.getElementById('contador');
  let total = ((dias * 24 + horas) * 60 + minutos) * 60 + segundos;

  const timer = setInterval(() => {
    const d = Math.floor(total / (60 * 60 * 24));
    const h = Math.floor((total % (60 * 60 * 24)) / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    display.textContent = `${d}d ${h}h ${m}m ${s}s`;

    if (--total < 0) {
      clearInterval(timer);
      display.textContent = 'Tempo expirado!';
    }
  }, 1000);
}

// Inicia contador: 0 dias, 0h, 10m, 0s
iniciarContador(0, 0, 10, 0);

// Pop-up de saída (quando o usuário tenta sair)
document.addEventListener('mouseleave', function(e) {
  if (e.clientY < 50) {
    const popup = document.getElementById('exit-popup');
    if (popup) popup.classList.add('show');
  }
});

// Fechar popup
const closePopup = document.querySelector('#exit-popup .close');
if (closePopup) {
  closePopup.addEventListener('click', () => {
    document.getElementById('exit-popup').classList.remove('show');
  });
}

// Botão flutuante do WhatsApp
const whatsappBtn = document.getElementById('whatsapp-btn');
whatsappBtn.addEventListener('click', () => {
  const phone = '+258840000000';
  const msg = encodeURIComponent('Olá, tenho interesse no grupo VIP!');
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
});

// Validação de formulário simples
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', function(e) {
    const email = form.querySelector('input[name="email"]').value;
    if (!email.includes('@')) {
      e.preventDefault();
      alert('Por favor, insira um e-mail válido.');
    }
  });
}
