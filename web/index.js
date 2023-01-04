"use strict";
//reveal
window.sr = ScrollReveal();
 sr.reveal('.navbar',{
    duration: 2000,
    origin: 'top',
    distance : '100px'
 });


 sr.reveal('.presentation',{
    duration: 2000,
    origin: 'top',
    distance : '100px'
 });

 sr.reveal('.tu-pedido',{
    duration: 2000,
    origin: 'top',
    distance : '100px'
 });

 sr.reveal('.division',{
    duration: 3000,
    origin: 'left',
    distance : '100px'
 })


const burgerButton = document.querySelector('.navbar__burger-icon__container');
const modal = document.querySelector('.modal-navbar__background');
const closeIcon = document.querySelector('.modal-navbar__close-icon');


burgerButton.addEventListener('click',(e)=>{
    modal.style.display = 'flex';
});

closeIcon.addEventListener('click',(e)=>{

    modal.style.display = 'none';
})

