document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    let currentIndex = 0;
  
    function showCard(idx) {
      cards.forEach((card, i) => {
        card.classList.toggle('active', i === idx);
      });
    }
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url && url !== '#') {
          window.open(url, '_blank');
        }
      });
    });
  
    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    });
  
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    });
  
    showCard(currentIndex);
  });
  