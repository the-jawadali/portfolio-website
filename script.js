document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    let current = 0;
  
    const updateView = () => {
      cards.forEach((card, index) => {
        card.classList.toggle("active", index === current);
      });
    };
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      current = (current - 1 + cards.length) % cards.length;
      updateView();
    });
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      current = (current + 1) % cards.length;
      updateView();
    });
  });
  