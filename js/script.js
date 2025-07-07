// JavaScript Profissional com interações modernas para site de vendas NOVAJ

// -----------------------------
// CONFIGURAÇÕES GLOBAIS
// -----------------------------

<script>
  const navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
</script>