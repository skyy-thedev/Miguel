  function moverFoto() {
    var foto = document.getElementById('userpic');
    foto.style.transform = 'translate(0%, 0)'
    foto.style.left = '0%';
  }
  setTimeout(moverFoto, 1000);

const options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
      x0: 1,
      x1: 58,
      y1: 62,
      x2: 55,
      y2: 48,
      x3: 18
  }
};

// Function to set background position forr slides
function setBgPosition(slide, index) {
  const x = -(slide.target + flkty.x) / 3;
  slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization
const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Event listener using bg position
flkty.on('scroll', () => {
  flkty.slides.forEach(setBgPosition);
});