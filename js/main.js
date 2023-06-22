const navMenu = document.getElementById("nav__menu");
const sidePanel = document.getElementById("side_panel");

navMenu.onclick = () => {
  navMenu.classList.toggle("menuActive");
  sidePanel.classList.toggle("menuActive");
  document.body.classList.toggle("overflow");
};
