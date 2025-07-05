document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-site");
  const conteudoExtra = document.getElementById("conteudo-pos-formulario");
  const mensagemObrigado = document.getElementById("mensagem-obrigado");

  // 👉 Detecta retorno com sucesso na URL
  const urlParams = new URLSearchParams(window.location.search);
  const sucesso = urlParams.get("sucesso");

  if (sucesso === "true") {
    // ✅ Mensagem de boas-vindas ao retornar do formsubmit
    const mensagemBemVindo = document.createElement("div");
    mensagemBemVindo.innerHTML = `
      <div class="mensagem-bemvindo" style="background:#d4f8d4; padding:20px; text-align:center;">
        <h2>🎉 Bem-vindo à NOVAJ!</h2>
        <p>Obrigado pela inscrição. Agora tens acesso ao conteúdo exclusivo.</p>
      </div>
    `;
    document.body.prepend(mensagemBemVindo);

    // ✅ Libera scroll e mostra conteúdo oculto
    document.body.classList.remove("bloquear-scroll");
    if (conteudoExtra) {
      conteudoExtra.style.display = "block";
      conteudoExtra.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // ✅ Bloqueia o scroll até enviar o formulário
    document.body.classList.add("bloquear-scroll");
  }

  // 💡 Evento do botão "Fechar" na mensagem de obrigado
  window.fecharMensagem = function () {
    if (mensagemObrigado) mensagemObrigado.style.display = "none";
  };
});