"use strict"
console.log("index.js has been started")
//============ Active nav link on the corresponding page ============//

const navLink = document.querySelectorAll(".navigation__item-link")

navLink.forEach(link => {
  if ((window.location.pathname === "/" && link.href.match(/index.html/)) ||
    (link.href === window.location.href && !link.href.match(/[\?#]/))) {
    link.classList.add('active-link')
  }
})

// if (window.location.hash) {
//   window.location.pathname === '/'
//   window.location.hash === ''
//   console.log(window.location.hash)
//   console.log(window.location)
// }

//========= End of active nav link on the corresponding page ========//



//================== Smooth scrolling of pages ==================//
//========== Clear the hash links in a window location ==========//

// The href attribute must contain the hash
const hashLinksHome = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')
const hashLinksOthers = document.querySelectorAll('a[href^="./#"]:not(a[href="./#"])')

// Handle links with hashes of the main page
// event.preventDefault() here stop the moving hash to window location
hashLinksHome.forEach(link => {

  link.addEventListener('click', (event) => {
    // Stop to move hash into window location
    event.preventDefault()

    // Get the link after a hash
    const id = link.getAttribute('href').substring(1)
    // Smooth scrolling to this hash link
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Handle links with hashes for all other pages except the main one
hashLinksOthers.forEach(link => {
  link.addEventListener('click', (event) => {

    const id = link.getAttribute('href').substring(3)

    // Smooth scrolling to this hash link, when go to another page
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  })

})

// Remove hash link from a window location, after the window load or reload
window.addEventListener('load', () => {
  if (window.history.pushState) {
    window.history.pushState('', '/', window.location.pathname)
  } else {
    window.location.hash = '';
  }
})

//======= End of Clear the hash links in a window location =======//
//=============== End of Smooth scrolling of pages ===============//
