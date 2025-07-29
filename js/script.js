// Configuração inicial do tempo do countdown (hora, minuto, segundo)
const tempoInicial = {
  horas: 0,
  minutos: 30,
  segundos: 0,
};

// Seleciona o elemento no DOM onde o countdown vai aparecer
const countdownEl = document.getElementById('countdown');
// Seleciona botão para liberar/desbloquear oferta
const botaoDesbloquear = document.querySelector('.botao');

// Total de segundos
let totalSegundos = tempoInicial.horas * 3600 + tempoInicial.minutos * 60 + tempoInicial.segundos;

// Função para formatar o tempo em HH:MM:SS com zero à esquerda
function formatarTempo(segundos) {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = segundos % 60;

  return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// Função para animar o texto final do timer
function animarTextoFinal() {
  countdownEl.classList.add('pulse');
}

// Função para desabilitar o botão após o timer acabar
function desabilitarBotao() {
  botaoDesbloquear.classList.add('disabled');
  botaoDesbloquear.textContent = "Oferta Encerrada";
  botaoDesbloquear.style.pointerEvents = "none";
  botaoDesbloquear.style.opacity = "0.6";
}

// Função para habilitar o botão enquanto a oferta está ativa
function habilitarBotao() {
  botaoDesbloquear.classList.remove('disabled');
  botaoDesbloquear.textContent = "Quero Desbloquear o Código Agora";
  botaoDesbloquear.style.pointerEvents = "auto";
  botaoDesbloquear.style.opacity = "1";
}

// Função que dispara alerta e confete simples no fim da contagem
function dispararFinal() {
  alert("⏰ O tempo da oferta acabou! Mas fique atento para as próximas promoções.");
  animarTextoFinal();
  desabilitarBotao();
  confeteSimples();
}

// Atualiza o timer a cada segundo
function atualizarCountdown() {
  if (totalSegundos <= 0) {
    countdownEl.textContent = '⏰ Oferta Expirada!';
    clearInterval(intervaloTimer);
    dispararFinal();
    return;
  }

  countdownEl.textContent = formatarTempo(totalSegundos);
  habilitarBotao();
  totalSegundos--;
}

// Inicia contador com atualização imediata
atualizarCountdown();
const intervaloTimer = setInterval(atualizarCountdown, 1000);


/* ----------------
   EFEITO CONFETE SIMPLES
-----------------*/

// Cria um canvas flutuante com confete colorido
function confeteSimples() {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');

  const confetes = [];
  const cores = ['#ff6a00', '#ff9100', '#ffd580', '#ffb347', '#ff7f00'];

  // Cria confetes
  for(let i = 0; i < 150; i++) {
    confetes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: (Math.random() * 7) + 5,
      d: (Math.random() * 10) + 5,
      color: cores[Math.floor(Math.random() * cores.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngle: 0,
      tiltAngleIncrement: (Math.random() * 0.07) + 0.05
    });
  }

  function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetes.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r / 2;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
      ctx.stroke();
    });
    atualizarPosicao();
  }

  function atualizarPosicao() {
    confetes.forEach(c => {
      c.tiltAngle += c.tiltAngleIncrement;
      c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(c.d);
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if (c.y > canvas.height) {
        c.x = Math.random() * canvas.width;
        c.y = -20;
        c.tilt = Math.floor(Math.random() * 10) - 10;
      }
    });
  }

  // Loop de animação
  let animacaoID;
  function animarConfete() {
    desenhar();
    animacaoID = requestAnimationFrame(animarConfete);
  }

  animarConfete();

  // Para animação depois de 8 segundos e remove canvas
  setTimeout(() => {
    cancelAnimationFrame(animacaoID);
    canvas.remove();
  }, 8000);
}