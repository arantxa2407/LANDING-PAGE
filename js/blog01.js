document.addEventListener('DOMContentLoaded', () => {
  const arriba = document.querySelectorAll('.up');
  const abajo = document.querySelectorAll('.down');
  const contadorDisplays = document.querySelectorAll('.contador');

  function actualizar(index, numero) {
    const contadorDisplay = contadorDisplays[index];
    let contador = parseInt(contadorDisplay.textContent) || 0;
    if (numero === -1 && contador < 2) {
      contadorDisplay.textContent = "";
      return;
    }
    contador += numero;
    contadorDisplay.textContent = contador
  }

  arriba.forEach((boton, index) => {
    boton.addEventListener('click', () => {
      actualizar(index, 1);
    });
  });

  abajo.forEach((boton, index) => {
    boton.addEventListener('click', () => {
      actualizar(index, -1);
    });
  });
});