const nav = document.querySelector(".nav__inner");
const menu = document.querySelector(".nav__menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

let transformIcon = function (icon) {
  icon.classList.toggle("fa-times");
};
