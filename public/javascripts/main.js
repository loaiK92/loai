import "../sass/style.scss";
import SweetScroll from "sweet-scroll";
import contactFrom from "./mudoles/contactForm";
import all from "./mudoles/animation";
// import submitForm from "./mudoles/submitForm";
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

// handle submit function
// const form = document.querySelector(".contact__form");
// form.addEventListener("submit", submitForm);

if (annyang) {
  // Let's define a command.
  var commands = {
    hello: function() {
      alert("Hello world!");
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
  console.log("start");
}
