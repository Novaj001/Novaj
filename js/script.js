// FAQ toggle
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    const content = item.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Popup de email após 10s ou scroll
setTimeout(showPopup, 10000);
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) showPopup();
});

function showPopup() {
  const popup = document.getElementById('popup-email');
  if (popup && !popup.classList.contains('ativo')) {
    popup.classList.add('ativo');
  }
}

document.querySelector('.fechar')?.addEventListener('click', () => {
  document.getElementById('popup-email').classList.remove('ativo');
});

// Scroll reveal
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".hero-img");

  // Adiciona a classe de rotação após 1 segundo
  setTimeout(() => {
    img.classList.add("girar");
  }, 1000);
});