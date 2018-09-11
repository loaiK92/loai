$(document).ready(function() {
  // set the height of frontend--border && backend--border
  $(".frontend--border").css({
    height: `${$(".frontend--content").height() + 35}px`
  });
  $(".backend--border").css({
    height: `${$(".backend--content").height() + 35}px`
  });

  // page elements animation ScrollReveal library
  window.sr = ScrollReveal();
  sr.reveal(".nav__left", {
    origin: "left",
    distance: "500px",
    delay: 500,
    duration: 500,
    easing: "cubic-bezier(.61,.19,.44,1.37)"
  });
  sr.reveal(".nav__right", {
    origin: "right",
    distance: "500px",
    delay: 500,
    duration: 500,
    easing: "cubic-bezier(.61,.19,.44,1.37)"
  });
  // sr.reveal(".intro__home--content", {
  //   origin: "bottom",
  //   distance: "100px",
  //   delay: 1200,
  //   duration: 300,
  //   easing: "cubic-bezier(.44,.44,.75,1.18)"
  // });
  sr.reveal(".intro__about", {
    origin: "left",
    distance: "500px",
    delay: 700,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)"
  });
  sr.reveal(".intro__skills", {
    origin: "left",
    distance: "40px",
    delay: 1300,
    duration: 1000,
    easing: "cubic-bezier(.44,.44,.75,1.18)"
  });

  sr.reveal(".frontend--border", {
    origin: "right",
    distance: "20px",
    delay: 1600,
    duration: 1000,
    easing: "cubic-bezier(.44,.44,.75,1.18)"
  });

  sr.reveal(".backend--border", {
    origin: "right",
    distance: "20px",
    delay: 1600,
    duration: 1000,
    easing: "cubic-bezier(.44,.44,.75,1.18)"
  });

  sr.reveal(".skills--content--frontend", {
    origin: "right",
    distance: "40px",
    delay: 1700,
    duration: 500,
    easing: "cubic-bezier(.61,.19,.44,1.37)"
  });

  sr.reveal(".skills--border--frontend", {
    origin: "right",
    distance: "200px",
    delay: 1300,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });

  sr.reveal(".skills--content--tools", {
    origin: "right",
    distance: "40px",
    delay: 1000,
    duration: 500,
    easing: "cubic-bezier(.61,.19,.44,1.37)"
  });

  sr.reveal(".skills--border--tools", {
    origin: "right",
    distance: "200px",
    delay: 700,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });

  sr.reveal(".skills--content--backend", {
    origin: "right",
    distance: "40px",
    delay: 300,
    duration: 500,
    easing: "cubic-bezier(.61,.19,.44,1.37)"
  });

  sr.reveal(".skills--border--backend", {
    origin: "right",
    distance: "200px",
    delay: 0,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });

  sr.reveal(".card-1", {
    origin: "left",
    distance: "200px",
    delay: 100,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });
  sr.reveal(".card-2", {
    origin: "top",
    distance: "200px",
    delay: 500,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });
  sr.reveal(".card-3", {
    origin: "bottom",
    distance: "200px",
    delay: 900,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });
  sr.reveal(".card-4", {
    origin: "right",
    distance: "200px",
    delay: 1200,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });
  sr.reveal(".card-5", {
    origin: "bottom",
    distance: "200px",
    delay: 500,
    duration: 500,
    easing: "cubic-bezier(.44,.44,.75,1.18)",
    opacity: 0
  });

  // set intro__qoutes slider from slick-sliders
  $(".intro__qoutes--items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true
  });
});
export default document;
