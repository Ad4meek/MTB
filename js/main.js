const navMenu = document.getElementById("nav__menu");
const sidePanel = document.getElementById("side_panel");
const images = document.querySelectorAll(".fotka");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");

navMenu.onclick = () => {
  navMenu.classList.toggle("menuActive");
  sidePanel.classList.toggle("menuActive");
  document.body.classList.toggle("overflow");
};

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    modalImage.src = event.target.src;
    modal.style.display = "flex";
  });
});
