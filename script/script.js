var container = document.getElementById('container');
var animatedImage = document.getElementById('animatedImage');

function fadeInImage() {
  var currentPosition = -100; // Inicializa a posição à esquerda
  var opacity = 0; // Inicializa a opacidade

  function frame() {
    currentPosition += 1; // Move da esquerda para a direita
    opacity += 0.01; // Aumenta gradualmente a opacidade
    animatedImage.style.left = currentPosition + '%';
    animatedImage.style.opacity = opacity;

    if (currentPosition >= 0) {
      clearInterval(animationInterval);
    }
  }

  var animationInterval = setInterval(frame, 10);
}

fadeInImage(); // Chama a função para iniciar a animação quando a página carrega