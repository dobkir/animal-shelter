"use strict"
console.log("index.js has been started")
//============ Active nav link on the corresponding page ============//

const navLink = document.querySelectorAll(".navigation__item-link")

navLink.forEach(link => {
  if ((window.location.pathname === "/" && link.href.match(/index.html/)) ||
    (link.href === window.location.href)) {
    link.classList.add('active-link')
  }
})

//========= End of active nav link on the corresponding page ========//