let contador = 0;
const display = document.getElementById('contador');
const incrementarBtn = document.getElementById('incrementar');
const resetarBtn     = document.getElementById('resetar');

function atualizarDisplay() {
  display.textContent = contador;
}

function incrementar() {
  contador += 1;
  atualizarDisplay();
}

function resetar() {
  contador = 0;
  atualizarDisplay();
}

incrementarBtn.addEventListener('click', incrementar);
resetarBtn.addEventListener('click', resetar);

atualizarDisplay();