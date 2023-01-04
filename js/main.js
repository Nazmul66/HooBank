//// COunterup js Code
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/// responsive toggle bar

var nav = document.querySelector("#menu-icon");
var menu = document.querySelector(".menu");

nav.addEventListener("click", function(){
    nav.classList.toggle("fa-xmark");
});

nav.addEventListener("click", function(){
    menu.classList.toggle("active1");
});

/// responsive toggle bar scrolling

window.addEventListener("scroll", function(){
    nav.classList.remove("fa-xmark");
    menu.classList.remove("active1");
});

/// header sticky bar

var header = document.querySelector("header");

window.addEventListener("scroll", function(){
   header.classList.toggle("sticky", window.scrollY > 0);
});

