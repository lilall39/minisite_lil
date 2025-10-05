// Changer l'image principale en cliquant une miniature
function changeImage(thumbnail) {
  const main = document.getElementById("mainImage");
  main.src = thumbnail.src;
  main.alt = thumbnail.alt;
}

// Ouvrir la lightbox au clic sur l'image principale
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("mainImage");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImage");

  if (!main || !lightbox || !lightboxImg) return;

  main.addEventListener("click", () => {
    lightboxImg.src = main.src;
    lightboxImg.alt = main.alt || "Zoom produit";
    lightbox.style.display = "flex";
  });

  // Fermer la lightbox au clic sur le fond sombre
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Fermer avec la touche Echap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.style.display = "none";
  });
});


