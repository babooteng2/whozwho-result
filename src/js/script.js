const menuEH = () => {
  const hamburgerBtn = document.querySelector('button.hamburger');
  /* const mobileMenu = document.querySelector('.mobile-menu'); */
  const menu = document.querySelector('.leftNavArea');
  const menuCloseBtn = document.querySelector('.navbar-close');
 /*  const mobilBackEl = document.querySelector('.navbar-backdrop'); */
  menuCloseBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
  
  hamburgerBtn.addEventListener('click', ()=> {
    /* mobileMenu.classList.toggle('hidden'); */
    /* menu.classList.toggle('lg:block'); */
    menu.classList.toggle('hidden');
  })
}

const initElement = () => {
  menuEH();  
}

document.addEventListener('DOMContentLoaded', () => {
  initElement();
})