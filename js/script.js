const menu = document.querySelector('#menu');
const menuOpenBtn = document.querySelector('#menu-open-btn')
const menuCloseBtn = document.querySelector('#menu-close-btn');
console.log(menuCloseBtn)

const slider1 = {
    slides: document.querySelectorAll('.slide'),
    puntito: document.querySelectorAll('#puntitos img'),
    contenedorPuntitos: document.querySelector('#puntitos'),
    prev: document.querySelector('#prev'),
    next: document.querySelector('#next')
}
const slider2 = {
    slides: document.querySelectorAll('.customer-card'),
    puntito: document.querySelectorAll('#puntitos2 img'),
    contenedorPuntitos: document.querySelector('#puntitos2'),
    prev: false,
    next: false
}

const carrusel = (slider) => {
    const { slides, puntito, contenedorPuntitos, prev, next } = slider;

    const derecha = () => {

        let lista = [...slides].map(i => i.classList[1]);
        let siguiente = undefined;
        let actual = contenedorPuntitos.querySelector('img.elElegido');

        if ([...puntito].indexOf(actual) < puntito.length - 1) {
            siguiente = actual.nextElementSibling;
        } else if ([...puntito].indexOf(actual) === puntito.length - 1) {
            siguiente = puntito[0];
        } 
        actual.classList.remove('elElegido');
        siguiente.classList.add('elElegido');
        // move saved classes 1 div backwards
        slides.forEach((slide, index, slides) => {
            if (index > 0) {
                slide.classList.replace(slide.classList[1], lista[index - 1])
            } else if (index === 0) {
                slide.classList.replace(slide.classList[1], lista[lista.length - 1])
            }
        })

    }
    const izquierda = () => {
        // save current styles position on divs
        let siguiente = undefined;
        let lista = [...slides].map(i => i.classList[1]);
        let actual = contenedorPuntitos.querySelector('img.elElegido');
        // move selected dot to the right
        if ([...puntito].indexOf(actual) === 0) {
            siguiente = puntito[puntito.length - 1];
        } else if ([...puntito].indexOf(actual) > 0) {
            siguiente = actual.previousElementSibling;
        }
        actual.classList.remove('elElegido');
        siguiente.classList.add('elElegido');
        // move saved classes 1 div backwards
        slides.forEach((slide, index, slides) => {
            if (index < slides.length - 1) {
                slide.classList.replace(slide.classList[1], lista[index + 1])
            } else if (index == slides.length - 1) {
                slide.classList.replace(slide.classList[1], lista[0])
            }
        })

    }

    const handleDotClick = (index) => {
        let previouseDot = contenedorPuntitos.querySelector('img.elElegido');
        let previouseIndex = [...puntito].indexOf(previouseDot);
        let newDot = puntito[index];
        let counter = index - previouseIndex;
        if (counter > 0) {
            derecha();
            counter--;
            let interval = setInterval(() => {
                if (counter === 0) {
                    clearInterval(interval)
                } else {
                    derecha();
                    counter--
                }
            }, 200)
        } else if (counter < 0) {
            izquierda();
            counter++;
            let interval = setInterval(() => {
                if (counter === 0) {
                    clearInterval(interval)
                } else {
                    izquierda();
                    counter++
                }
            }, 200)
        }
    }

    //Event Listeners

    if (prev) { prev.addEventListener('click', izquierda) };
    if (next) { next.addEventListener('click', derecha) };
    puntito.forEach((dot, index) => dot.addEventListener('click', () => handleDotClick(index)));

    if (slider ) {
        setInterval(() => {
            derecha();
        }, 3000);
    }
}

carrusel(slider1);
carrusel(slider2);
// menu openers/closers
const onMenuOpenBtnClick = () => {
    menu.classList.add('open-menu')
}
const onMenuCloseBtnClick = () => {
    menu.classList.replace('open-menu', 'close-menu')
}
menuOpenBtn.addEventListener('click', onMenuOpenBtnClick);
menuCloseBtn.addEventListener('click', onMenuCloseBtnClick);