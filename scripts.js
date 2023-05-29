const menuBtn = document.querySelector('.menu-icon');
const menuCerrarBtn = document.querySelector('.menu-cerrar-icon');
const menu = document.querySelector('.header-info');
const btnModo = document.querySelector('.modo-oscuro-visible');
const $body = document.querySelector('body');
const $uxSeccion = document.querySelector('.seccion-diseño-ux');
const $desarrolloSeccion = document.querySelector('.seccion-desarrollo-web');
const $uxBtn = document.querySelector('.boton-diseño-ux');
const $desarrolloBtn = document.querySelector('.boton-desarrollo-web');

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


const cambioSeccionUx = () => {
  $uxBtn.addEventListener('click', () => {
    $uxSeccion.classList.remove('ocultar');
    $uxBtn.classList.add('seleccionado');
    $desarrolloSeccion.classList.add('ocultar');
    $desarrolloBtn.classList.remove('seleccionado');
  })
}

const cambioSeccionDesarrollo = () => {
  $desarrolloBtn.addEventListener('click', () => {
    $uxSeccion.classList.add('ocultar');
    $uxBtn.classList.remove('seleccionado');
    $desarrolloSeccion.classList.remove('ocultar');
    $desarrolloBtn.classList.add('seleccionado');
  })
}

cambioSeccionUx();
cambioSeccionDesarrollo();
