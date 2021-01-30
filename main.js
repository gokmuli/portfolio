'use strict';

//make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  console.log(window.scrollY); //스크롤값 확인
  console.log(`navbarHeight: ${navbarHeight}`); //navbar height 값 확인
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  } else{
    navbar.classList.remove('navbar--dark');
  }
});