const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav__menu");

hamburguer.addEventListener("click" , () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})