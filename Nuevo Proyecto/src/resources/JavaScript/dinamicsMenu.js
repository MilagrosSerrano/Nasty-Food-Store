document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.producto');
    const mensaje = document.querySelector('.añadido');
    const contenidoMensaje = document.getElementById('content');

    productos.forEach(producto => {
        producto.addEventListener('click', function ({ target }) {
            console.log(target);
            if (target.className === 'botonAñadir') {
                contenidoMensaje.textContent = `${producto.querySelector('h3').textContent}`;
                mensaje.classList.add('animar');
                setTimeout(() => {
                    mensaje.classList.remove('animar');
                }, 2000);
                target.classList.add('btnClicked');
                setTimeout(() => {
                    target.classList.remove('btnClicked');
                }, 1000);
            }
        });
    });
});