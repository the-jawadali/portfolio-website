document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    let current = 0;
  
    function updateCards() {
      cards.forEach((card, idx) => {
        card.classList.toggle("active", idx === current);
      });
    }
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      current = (current + 1) % cards.length;
      updateCards();
    });
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      current = (current - 1 + cards.length) % cards.length;
      updateCards();
    });
  
    updateCards();
  });
  