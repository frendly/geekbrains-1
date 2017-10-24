"use strict";

(function() {
  var menuButton = document.querySelector('.js-button-menu');
  var menu = document.querySelector('.button-menu');
  
  menuButton.addEventListener('click', function(e) {
    menu.classList.toggle("button-menu--open");
    e.stopPropagation();
  });

  // contains(es6) – https://developer.mozilla.org/ru/docs/Web/API/Element/classList
  document.addEventListener('click', function() {
    var isMenuOpen = menu.classList.contains("button-menu--open");
    if(isMenuOpen) {
      menu.classList.remove("button-menu--open");
    }
  });
})();