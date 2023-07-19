ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

/* Animação Global */
ScrollReveal().reveal('.container__inicio h1, .container__sobre h1, .container__habilidades h1, .container__projetos h1, .escrita__footer', { delay: 200, origin:'left' });

ScrollReveal().reveal('.container__inicio .inicio__titulos span, .container__sobre span, .container__habilidades .titulo__habilidades span, .subtitulo, .contato__footer', { delay: 300, origin:'right' });

ScrollReveal().reveal('.primeiraLinha, .segundaLinha, .terceiraLinha, .copy', { delay: 400, origin:'top' });

ScrollReveal().reveal('.sobre__resumoSobreMim, .slide__container', { delay: 600, origin:'bottom' });
/* Animação Global */

/* Animação Início */
ScrollReveal().reveal('.inicio__subTitulo', { delay: 300, origin:'right' });
ScrollReveal().reveal('.botao__curriculo', { delay: 400, origin:'top' });
ScrollReveal().reveal('.icones__contato a', { delay: 500, origin:'top', interval: 200 });
ScrollReveal().reveal('.imagem__inicio img', { delay: 500, origin:'bottom' });
/* Animação Início */

/* Animação Sobre */
ScrollReveal().reveal('.minha__imagem', { delay: 500, origin:'left' });
/* Animação Sobre */

/* Animação Habilidades */
ScrollReveal().reveal('.minhas__habilidades .habilidade', { delay: 300, origin:'top', interval: 200 });
/* Animação Habilidades */
