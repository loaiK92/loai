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
    "go to home": function() {
      window.location = "http://localhost:8080/#home";
    },
    "go to about": function() {
      window.location = "http://localhost:8080/#about";
    },
    "go to work": function() {
      window.location = "http://localhost:8080/#work";
    },
    "go to contact": function() {
      window.location = "http://localhost:8080/#contact";
    },
    "get in touch": function() {
      window.location = "http://localhost:8080/contact";
    },
    "home": function() {
      window.location = "http://localhost:8080/#home";
    },
    "about": function() {
      window.location = "http://localhost:8080/about";
    },
    "work": function() {
      window.location = "http://localhost:8080/work";
    },
    "contact": function() {
      window.location = "http://localhost:8080/contact";
    },
    "up": function() {
      window.location = "http://localhost:8080/#home";
    },
    "down": function() {
      window.location = "http://localhost:8080/#contact";
    },
    "name *tag": function(tag) {
      let element = document.querySelector('#name')
      element.focus();
      element.value = tag;
      console.log("name: " + tag);
    },
    "email *tag": function(tag) {
      let element = document.querySelector('#email')
      element.focus();
      tag = tag.replace(" at ", "@");
      tag = tag.replace(/\s/g, "");
      element.value = tag;

      console.log("mail: " + tag);
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // annyang.addCallback('result', function(userSaid, commandText, phrases) {
  //   console.log(userSaid); // sample output: 'hello'
  //   console.log(commandText); // sample output: 'hello (there)'
  //   console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
  // });
  // Start listening.
  annyang.start();
  console.log("hiii");
}
