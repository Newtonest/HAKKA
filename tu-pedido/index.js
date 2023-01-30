"use strict";
//reveal
window.sr = ScrollReveal();
 sr.reveal('.navbar',{
    duration: 2000,
    origin: 'top',
    distance : '100px'
 });

 sr.reveal('.pedir', {
  duration: 2000,
  origin: 'top',
  distance : '100px'
 })


//View modal
const burgerButton = document.querySelector('.navbar__burger-icon__container');
const modal = document.querySelector('.modal-navbar__background');
const closeIcon = document.querySelector('.modal-navbar__close-icon');


burgerButton.addEventListener('click',(e)=>{
    modal.style.display = 'flex';
});

closeIcon.addEventListener('click',(e)=>{
    modal.style.display = 'none';
})

modal.addEventListener('click',()=>{
  if(modal.style.display === 'flex'){
    modal.style.display = 'none'
  } 
})
