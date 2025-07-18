// Você pode adicionar animações ou interações aqui depois.
console.log("Site do jogo carregado com sucesso!");
// Modal de imagem
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// Seleciona todas as imagens clicáveis
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Fecha o modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
