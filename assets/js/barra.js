let menu = document.querySelector('#menu__icon');
let navbar = document.querySelector('.nav__bar');

menu.onclick = () => {
  menu.classList.toggle('bx');
  navbar.classList.toggle('open');
}