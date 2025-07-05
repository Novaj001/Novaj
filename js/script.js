document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-site");
  const mensagemObrigado = document.getElementById("mensagem-obrigado");
  const btnContinuar = document.getElementById("btn-continuar");
  const conteudoExtra = document.getElementById("conteudo-pos-formulario");

  const scriptURL = "https://script.google.com/macros/s/AKfycbzhm6SvipRKIvYqwHX-v9BKryzd8227LP1pAr1dl_VbcdHgkA94j8x1-mN-iYt5gR48/exec";

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // impedir envio normal

    const formData = new FormData(formulario);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Mostra a mensagem de obrigado
          mensagemObrigado.style.display = "block";
        } else {
          alert("Erro ao enviar. Tente novamente.");
        }
      })
      .catch((error) => {
        alert("Erro ao enviar. Tente novamente.");
        console.error("Erro:", error);
      });
  });

  btnContinuar.addEventListener("click", function () {
    mensagemObrigado.style.display = "none";
    conteudoExtra.style.display = "block";
    conteudoExtra.scrollIntoView({ behavior: "smooth" });
  });
});