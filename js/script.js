//cuadros
document.querySelectorAll('.cuadro').forEach(cuadro => {
    cuadro.addEventListener('click', () => {
        // Alterna la clase "active" en el cuadro clicado
        cuadro.classList.toggle('active');
    });
});

//numeros
const elements = document.querySelectorAll('.slide-top');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.5 }); // Activar cuando el 50% del elemento es visible

elements.forEach(element => {
    observer.observe(element);
});

//titulos
window.addEventListener('resize', () => {
    const h1 = document.querySelector('.cabecera');
    if (window.innerWidth <= 576) {
        h1.outerHTML = `<h3 class="${h1.className}">${h1.innerHTML}</h3>`;
    } else if (h1.tagName === 'H3') {
        h1.outerHTML = `<h1 class="${h1.className}">${h1.innerHTML}</h1>`;
    }

    let h5 = document.querySelector('.subcabecera');
    if (window.innerWidth <= 576) {
        if (h5.tagName === 'H5') { // Verificamos que sea un H4 antes de reemplazar
            h5.outerHTML = `<p class="${h5.className}">${h5.innerHTML}</p>`;
            h5 = document.querySelector('.subcabecera'); // Reasignamos para el nuevo elemento
        }
    } else if (h5.tagName === 'P') {
        h5.outerHTML = `<h4 class="${h5.className}">${h5.innerHTML}</h4>`;
        h5 = document.querySelector('.subcabecera'); // Reasignamos para el nuevo elemento
    }
});

    