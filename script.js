document.addEventListener("DOMContentLoaded", function () {
  const projectImgs = document.querySelectorAll(".project-img");

  projectImgs.forEach((img) => {
    img.addEventListener("click", function () {
      const overlay = this.nextElementSibling;
      const overlayContent = overlay.querySelector(".text");

      overlay.style.display = "flex"; // Menampilkan overlay saat gambar proyek diklik
      const description = overlayContent.innerHTML;
      overlayContent.innerHTML = `<h1>${title}</h1>${description}`;
    });
  });

  // Menyembunyikan overlay saat area luar overlay diklik
  document.querySelectorAll(".overlay").forEach((overlay) => {
    overlay.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  });
});
