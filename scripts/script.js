document.addEventListener('DOMContentLoaded', function sld() {
  // Inicializar Flickity
  var flkty = new Flickity('.hero-slider', {
      wrapAround: true,
      autoPlay: 6000, // Mudar slide a cada 15 segundos
      pauseAutoPlayOnHover: false, // Não pausar no hover
      prevNextButtons: true, // Desabilitar botões de navegação
  });
});

  function moverFoto() {
    var foto = document.getElementById('userpic');
    foto.style.transform = 'translate(0%, 0)'
    foto.style.left = '0%';
  }
setTimeout(moverFoto, 300);
  function moverFotoDesk() {
    var foto = document.getElementById('userpic');
    foto.style.transform = 'translate(-10%, 0)'
    foto.style.left = '-10%';
    foto.style.marginRight = '150px'
  }

  function moverTexto() {
    var txtmove = document.getElementById('animatedtxt');
    txtmove.style.transform = 'translate(-10%, 0)'
    txtmove.style.left = '-10%';
  }
  function verificarMediaQuery() {
    if (window.matchMedia('(min-width: 600px)').matches) {
        moverFoto();
        sld();
        // Verifica se a largura da tela é maior ou igual a 600 pixels (exemplo)
    } if (window.matchMedia('(min-width: 1200px)').matches) {
        moverTexto();
        moverFotoDesk();
    }
  }
verificarMediaQuery();


// const options = {
//   accessibility: true,
//   prevNextButtons: true,
//   pageDots: true,
//   setGallerySize: false,
//   arrowShape: {
//       x0: 1,
//       x1: 58,
//       y1: 62,
//       x2: 55,
//       y2: 48,
//       x3: 18
//   }
// };

// // Function to set background position forr slides
// function setBgPosition(slide, index) {
//   const x = -(slide.target + flkty.x) / 3;
//   slides[index].style.backgroundPosition = `${x}px`;
// }

// // Slides initialization
// const carousel = document.querySelector('[carousel]');
// const slides = Array.from(document.getElementsByClassName('carousel-cell'));
// const flkty = new Flickity(carousel, options);

// // Event listener using bg position
// flkty.on('scroll', () => {
//   flkty.slides.forEach(setBgPosition);
// });