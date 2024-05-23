document.addEventListener('DOMContentLoaded', function (){

// se buscan las imágenes por id y se añaden a constantes
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

//se buscan los botones anterior y siguiente por medio de id y se guardan en constantes
const btn1 = document.getElementById('btnNextImage');
const btn2 = document.getElementById('btnPrevImg');

// se añaden todas las imágenes a un array
let arrayImages = [img1, img2, img3, img4, img5, img6];
let indexImg = 0;

const title = document.getElementById('imgTitle');
let titles = ['Cheese Burger', 'Papas Recargadas', 'Nachos Mexicanos', 'Pizza NY', 'Tacos', 'Chicken Nuggets'];

title.textContent = `${titles[indexImg]}`;

console.log(title);


btn1.addEventListener('click', nextImg);
    
function nextImg() {
    arrayImages[indexImg].hidden = true;
    indexImg = (indexImg + 1) % arrayImages.length;
    arrayImages[indexImg].hidden = false;
    console.log(indexImg);
    console.log(indexImg2);
    title.textContent = `${titles[indexImg]}`;
}

btn2.addEventListener('click', prevImg);

let indexImg2 = 0;



function prevImg() {
    if (indexImg === 0) {
        indexImg2 = 5;
    }
    else if(indexImg2 === 0){
    }
    else {
        indexImg2 = indexImg2 - 1;
    }
    arrayImages[indexImg2].hidden = false;
    arrayImages[indexImg].hidden = true;
    indexImg = indexImg2;
    title.textContent = `${titles[indexImg2]}`;
}




});
