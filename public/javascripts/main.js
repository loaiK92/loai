import "../sass/style.scss";
import SweetScroll from "sweet-scroll";
import contactFrom from "./mudoles/contactForm";
import all from "./mudoles/animation";
const MenuSpy = require("menuspy");

// control scroll event in the page from SweetScroll
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const sweetScroll = new SweetScroll({
      trigger: "[data-scroll]",
      header: "[data-scroll-header]",
      duration: 1500,
      easing: "easeOutQuint",
      offset: -24,
      vertical: true,
      horizontal: false,
      cancellable: true,
      updateURL: false,
      preventDefault: true,
      stopPropagation: true,
      quickMode: false
    });
  },
  false
);

// change nav color when its active
const element = document.getElementById("header");
const ms = new MenuSpy(element, {
  menuItemSelector: 'a[href^="#"]',
  activeClass: "active-nav",
  threshold: 30,
  enableLocationHash: true,
  hashTimeout: 600
});

// projects click handler in 'WORK'
// document.querySelectorAll(".intro__work--content .image-card").forEach(item => {
//   item.addEventListener("click", e => {
//     if (e.target.dataset.href) {
//       document.location = e.target.dataset.href;
//     } else {
//       return;
//     }
//   });
// });

// handling nav-Btn for mobil screen
const navBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
navBtn.addEventListener("click", () => {
  if (navBtn.checked) {
    nav.classList.remove("activ-nav");
  }
});
nav.addEventListener("click", () => {
  nav.classList.add("activ-nav");
  navBtn.checked = false;
});
