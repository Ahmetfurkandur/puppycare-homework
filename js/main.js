(function () {
     "use strict";
     function select(element, all) {
          var el = element.trim();
          if (all) {
               return [...document.querySelectorAll(el)];
          } else {
               return document.querySelector(el);
          }
     }

     const clients = select("#clientCount", false);
     document.addEventListener("load", () => {
          let count = 0;
          let x = setInterval(() => {
               count++;
               clients.innerText = `${count}+`;
          }, 300);

          if (count > 630) {
               clearInterval(x);
          }
     })
})()