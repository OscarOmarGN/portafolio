const menuBtn = document.querySelector('.menu-icon');
const menuCerrarBtn = document.querySelector('.menu-cerrar-icon');
const menu = document.querySelector('.header-info');

const funcionMenu = () => {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('ocultar');
    menuCerrarBtn.classList.toggle('ocultar');
    menu.classList.toggle('mostrar-menu');
  })
  
  menuCerrarBtn.addEventListener('click', ()  => {
    menuCerrarBtn.classList.toggle('ocultar');
    menuBtn.classList.toggle('ocultar');
    menu.classList.toggle('mostrar-menu');
  })
}

funcionMenu();

window.addEventListener('click', e => {
  window.addEventListener('click', e =>{
    if(menu.classList.contains("mostrar-menu") && e.target != menu && (e.target != menuBtn)){
      menuCerrarBtn.classList.toggle('ocultar');
      menuBtn.classList.toggle('ocultar');
      menu.classList.toggle("mostrar-menu");
    }
  })
})

