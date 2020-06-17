// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector(".menu");


function toggleMenu() {
  menuBtn.classList.toggle("close");
}

menuBtn.addEventListener("click", toggleMenu);
