
// let currentIndex = 0;
// const slides = document.querySelectorAll(".item");
// const dots = document.querySelectorAll(".puntito");

// function showSlide(index) {
//   if (index >= slides.length) currentIndex = 0;
//   if (index < 0) currentIndex = slides.length - 1;

//   slides.forEach((slide, i) => {
//       slide.style.transform = `translateX(-${currentIndex * 100}%)`;
//   });

//   dots.forEach((dot, i) => {
//       dot.classList.remove("active"); // Eliminar la clase 'active' de todos los puntos
//       if (i === currentIndex) {
//           dot.classList.add("active"); // Agregar la clase 'active' solo al punto actual
//       }
//   });
// }
// function nextSlide() {
//     currentIndex++;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex--;
//     showSlide(currentIndex);
// }

// function currentSlide(index) {
//     currentIndex = index - 1;
//     showSlide(currentIndex);
// }

// showSlide(currentIndex);


let items = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let puntitos = document.querySelectorAll(".puntito");
let currentIndex = 0;


let active = 2;
function mostrar() {
  let stt = 0;
  // Establecer el elemento activo
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.opacity = 1;
  items[active].style.width = '319px';
  items[active].style.height = '622px';

  // Manejar los elementos a la derecha del activo
  for (let i = active + 1; i < items.length; i++) {
    items[i].style.transform = `translateX(${-56 * stt}%) scale(${1 - 0.15 * stt})`;
    items[i].style.zIndex = -stt;
    items[i].style.opacity = stt > 0 ? 0.5 : 1;
    console.log("se modifico " + i + "y el stt es" + stt)
    stt++;
  }

  // Manejar los elementos a la izquierda del activo
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    items[i].style.transform = `translateX(${56 * stt}%) scale(${1 - 0.15 * stt})`;
    items[i].style.zIndex = -stt;
    items[i].style.opacity = stt > 0 ? 0.5 : 1;
    stt++;
  }

  // Actualizar los puntos de navegación
  puntitos.forEach((puntito, index) => {
    puntito.classList.remove("active");
    if (index === active) {
      puntito.classList.add("active");
    }
  });
}

function currentSlide(index) {
    currentIndex = index - 1;
    loadShow(currentIndex);

}

mostrar();



next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}