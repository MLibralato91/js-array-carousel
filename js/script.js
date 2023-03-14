/*
Ersercitazione
--------------------------------------------------
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
---------------------------------------------------------
MILESTONE 1

Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico. 
--DONE--
-----------------------------------------------------------
MILESTONE 2

Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
-----------------------------------------------------------
MILESTONE 3

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

*/



`
<div class="slide">
    <img src="" alt="Img1">
</div>
`
let imgSlide = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

// console.log(imgSlide);

let slider = document.getElementById('slider');
let slideTemplate = '';
let slideIndex = 0;

for (let i = 0; i < imgSlide.length; i++) {
    
    slideTemplate += `
    <div class="slide">
        <img src="${imgSlide[i]}" alt="Img ${i + 1}">
    </div>
    `
    // console.log(slideTemplate);
}

slider.innerHTML += slideTemplate;

let slides= document.querySelectorAll('.slide');
console.log(slides);
slides[slideIndex].classList.add('active');


let btnDown = document.querySelector('.down');
let btnUp = document.querySelector('.up');

//console.log(btnDown, btnUp);

btnDown.addEventListener('click', changeDown);
btnUp.addEventListener('click', changeUp);

function changeDown(){


    slides[slideIndex].classList.remove('active');
    slideIndex++;
    slides[slideIndex].classList.add('active');


}

function changeUp(){
    
}