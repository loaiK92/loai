import '../sass/style.scss';
import SweetScroll from 'sweet-scroll';
import contactFrom from './mudoles/contactForm'; 
import all from './mudoles/animation'; 
const MenuSpy = require('menuspy');



// control scroll event in the page from SweetScroll
document.addEventListener('DOMContentLoaded', () => {
    const sweetScroll = new SweetScroll({ 
        trigger: '[data-scroll]', 
        header: '[data-scroll-header]',
        duration: 1500,
        easing: 'easeOutQuint',
        offset: -56,
        vertical: true,
        horizontal: false,
        cancellable: true,
        updateURL: false,
        preventDefault: true,
        stopPropagation: true,
        quickMode: false,
     });
  }, false);

// change nav color when its active
const element = document.getElementById('header')
const ms = new MenuSpy(element, {
    menuItemSelector : 'a[href^="#"]',
    activeClass : 'active-nav',
    threshold : 56,
    enableLocationHash : true,
    hashTimeout : 600
});