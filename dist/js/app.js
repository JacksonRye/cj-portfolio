AOS.init({
  duration: 1500,
});

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const infos = document.querySelectorAll(".info");

function toggleMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  menuBranding.classList.toggle("show");
  navItems.forEach((item) => item.classList.toggle("show"));
}

function addFadeUp(ele) {
  ele.setAttribute("data-aos", "fade-up");
}

navItems.forEach((item) => item.addEventListener("click", toggleMenu));

// infos.forEach((info) => addFadeUp(info));

menuBtn.addEventListener("click", toggleMenu);
