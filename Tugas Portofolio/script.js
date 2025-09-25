// Contoh interaksi JS
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".designs img");
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      alert("Kamu mengklik gambar: " + img.alt);
    });
  });
});
