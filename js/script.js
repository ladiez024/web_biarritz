// Selecciona todos los cuadros
document.querySelectorAll('.cuadro').forEach(cuadro => {
    cuadro.addEventListener('click', () => {
        // Alterna la clase "active" en el cuadro clicado
        cuadro.classList.toggle('active');
    });
});

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