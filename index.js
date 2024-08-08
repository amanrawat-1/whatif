// Loader ------------->

window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});


//  Scroll Reveal ----------->

    ScrollReveal({ 
      reset: true,
      distance: '60px',
      duration : 2500,
      delay : 400
    });

    ScrollReveal().reveal('.brand', { delay: 200, origin:'left'});
    ScrollReveal().reveal('.header', { delay: 200, origin:'left'});
    ScrollReveal().reveal('.slide', { delay: 200, origin:'right'});
    ScrollReveal().reveal('.social-buttons', { delay: 200, origin:'right'});
   
