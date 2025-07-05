document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-site");
  const mensagemObrigado = document.getElementById("mensagem-obrigado");
  const btnContinuar = document.getElementById("btn-continuar");
  const conteudoExtra = document.getElementById("conteudo-pos-formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(formulario);

    fetch("https://script.google.com/macros/s/AKfycbxliX5VaH67C8A7-yMEgKHAZSJz0walOHOFienPB6R3cTf4tXXSygNezKSUi6vlJ0h0/exec", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        formulario.style.display = "none"; // Esconde o formulário
        mensagemObrigado.style.display = "block"; // Mostra mensagem de agradecimento
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao enviar. Tente novamente.");
    });
  });

  btnContinuar.addEventListener("click", function () {
    mensagemObrigado.style.display = "none"; // Esconde mensagem de agradecimento
    conteudoExtra.style.display = "block"; // Mostra o conteúdo pós-formulário
    conteudoExtra.scrollIntoView({ behavior: "smooth" }); // Rola até o conteúdo
  });
})