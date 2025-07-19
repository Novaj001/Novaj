// script.js - Versão Avançada e Profissional

// === Scroll suave para links de navegação ===
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

// === Animação ao rolar a página ===
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
animatedElements.forEach(el => observer.observe(el));

// === Contador de escassez (tempo limitado) ===
function iniciarContador(dias, horas, minutos, segundos) {
  const display = document.getElementById('contador');
  if (!display) return;

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
iniciarContador(0, 0, 10, 0); // 10 minutos

// === Popup de saída ===
document.addEventListener('mouseleave', function(e) {
  if (e.clientY < 50) {
    const popup = document.getElementById('exit-popup');
    if (popup) popup.classList.add('show');
  }
});
const closePopup = document.querySelector('#exit-popup .close');
if (closePopup) {
  closePopup.addEventListener('click', () => {
    document.getElementById('exit-popup').classList.remove('show');
  });
}
<script>
  const carousel = document.querySelector('.product-carousel');
  let scrollAmount = 0;

  setInterval(() => {
    if (carousel.scrollWidth - scrollAmount <= carousel.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += 240;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 4000);
  
</script>
// === Botão flutuante do WhatsApp ===
const whatsappBtn = document.getElementById('whatsapp-btn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    const phone = '+258840000000';
    const msg = encodeURIComponent('Olá, tenho interesse no grupo VIP!');
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  });
}

// === Validação simples de formulário ===
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

// === Carrossel Automático e Navegável (Produtos) ===
function iniciarCarrossel(selector) {
  const carousel = document.querySelector(selector);
  if (!carousel) return;

  let scrollAmount = 0;
  const scrollStep = 240; // tamanho do item + margem
  const intervalTime = 3000; // 3 segundos

  const nextBtn = carousel.parentElement.querySelector('.next');
  const prevBtn = carousel.parentElement.querySelector('.prev');

  function nextSlide() {
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
  }

  function prevSlide() {
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay com pausa no hover
  let autoPlay = setInterval(nextSlide, intervalTime);
  carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
  carousel.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, intervalTime));

  // Suporte a swipe para mobile
  let startX = 0;
  carousel.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
  carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide(); // swipe para esquerda
    if (endX - startX > 50) prevSlide(); // swipe para direita
  });
}

// Inicia carrosséis (um para produtos em destaque, outro para encomenda)
iniciarCarrossel('#produtos .product-carousel');
iniciarCarrossel('#destaques .product-carousel');