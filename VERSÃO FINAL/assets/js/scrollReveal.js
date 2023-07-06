ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

/* Animação Global */
ScrollReveal().reveal('.container__inicio h1, .container__sobre h1, .container__habilidades h1, .container__projetos h1', { delay: 500, origin:'left' });

ScrollReveal().reveal('.container__inicio .inicio__titulos span, .container__sobre span, .container__habilidades .titulo__habilidades span, .container__projetos span', { delay: 600, origin:'right' });
/* Animação Global */

/* Animação Início */
ScrollReveal().reveal('.botao__curriculo', { delay: 700, origin:'top' });
ScrollReveal().reveal('.inicio__subTitulo', { delay: 600, origin:'right' });
ScrollReveal().reveal('.imagem__inicio img', { delay: 900, origin:'bottom' });
ScrollReveal().reveal('.icones__contato a', { delay: 500, origin:'top', interval: 200 });
/* Animação Início */