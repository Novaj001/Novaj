// Define a data final da promoção (ex: 23 de julho de 2025 às 23:59)
const dataLimite = new Date("2025-07-23T23:59:59").getTime();

function atualizarContador() {
  const agora = new Date().getTime();
  const tempoRestante = dataLimite - agora;

  if (tempoRestante <= 0) {
    document.getElementById("tempo").innerText = "00:00:00";
    clearInterval(intervalo);
    return;
  }

  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  document.getElementById("tempo").innerText =
    `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

const intervalo = setInterval(atualizarContador, 1000);