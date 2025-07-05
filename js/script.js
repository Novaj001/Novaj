document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-site");
  const conteudoSecreto = document.getElementById("conteudo-secreto");
  const conteudoExtra = document.getElementById("conteudo-pos-formulario");

  if (!formulario) return;

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome && email) {
      formulario.reset();
      document.getElementById("formulario").style.display = "none";

      if (conteudoSecreto) {
        conteudoSecreto.classList.remove("oculto");
        conteudoSecreto.classList.add("visivel");
      }

      if (conteudoExtra) {
        conteudoExtra.classList.remove("oculto");
        conteudoExtra.classList.add("visivel");
      }
    } else {
      alert("Preencha todos os campos corretamente.");
    }
    // EXISTENTE: Primeiro formulário (formulario-site)
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-site");
  const conteudoSecreto = document.getElementById("conteudo-secreto");

  if (formulario && conteudoSecreto) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();

      if (nome && email) {
        formulario.reset();
        document.getElementById("formulario").style.display = "none";

        conteudoSecreto.classList.remove("oculto");
        conteudoSecreto.classList.add("visivel");
      } else {
        alert("Preencha todos os campos corretamente.");
      }
    });
  }

  // NOVO: Segundo formulário (formulário principal da página)
  const form2 = document.querySelector('section#inicio form');
  const conteudo = document.getElementById("conteudo-pos-formulario");
  const msgObrigado = document.getElementById("mensagem-obrigado");

  if (form2 && conteudo) {
    form2.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita envio imediato

      const nome = form2.querySelector('input[name="nome"]').value.trim();
      const email = form2.querySelector('input[name="email"]').value.trim();
      const numero = form2.querySelector('input[name="numero"]').value.trim();

      if (nome && email && numero) {
        msgObrigado.style.display = "block";
        conteudo.style.display = "block";

        // Envia após um pequeno delay
        setTimeout(() => {
          form2.submit();
        }, 1500);
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }
});

// Função de fechar mensagem de obrigado
function fecharMensagem() {
  document.getElementById("mensagem-obrigado").style.display = "none";
}
  });
});