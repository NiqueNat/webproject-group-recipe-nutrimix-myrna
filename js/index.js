function openImage(url) {
    const card = document.createElement('div');
    card.style.position = 'fixed';
    card.style.top = '0';
    card.style.right = '0';
    card.style.bottom = '0';
    card.style.left = '0';
    card.style.background = 'rgba(0,0,0,0.8)';
    card.style.display = 'flex';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.zIndex = '1000';
    card.onclick = function() {
        document.body.removeChild(card);
    };

    const img = document.createElement('img');
    img.src = url;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';

    card.appendChild(img);
    document.body.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.Backend img');
  

    images.forEach(image => {
      image.addEventListener('click', function() {
        openImage(this.src);
      });
    });
});
