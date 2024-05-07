const mensaje = document.querySelector('.añadido');
const content = document.getElementById('content');

let añadido = function({target}){
    console.log(target);
    if (target.className == 'botonAñadir'){
        const nombre = target.parentElement.childNodes[3].childNodes[1].textContent;
        content.textContent = nombre;
        mensaje.classList.add('animar');
        setTimeout(() => {
            mensaje.classList.remove('animar');
        }, 2000);
    }
}

document.addEventListener('click',añadido);