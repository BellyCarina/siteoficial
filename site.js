let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 5000); // Troca de imagem a cada 5 segundos
