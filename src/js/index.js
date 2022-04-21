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

//========= End of active nav link on the corresponding page ========//



//================== Smooth scrolling of pages ==================//
//========== Clear the hash links in a window location ==========//

const navLinks = document.querySelectorAll('.navigation__item-link')

/**
 * Handle links with hashes of the main page
 * If it's a homepage, event.preventDefault() stop the moving hash to window location.
 * If it isn't a home page, the removeHashFromLocation() function 
 * removes the hash from a location after windows loading.
 */

navLinks.forEach(link => {

  if (link.hash) {

    link.addEventListener('click', (event) => {

      // If there aren't symbols before the hash, that means that's a homepage.
      const isHome = !link.getAttribute('href').split(/#/)[0]

      // Get the link after a hash
      const id = link.hash.replace(/#/, '')

      if (isHome) {
        // Stop to move hash into window location
        event.preventDefault()
      }

      // Smooth scrolling to this hash link
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      })
    })
  }
})

// Remove hash link from a window location, after the window load or reload
function removeHashFromLocation() {
  window.addEventListener('load', () => {
    if (window.history.pushState) {
      window.history.pushState('', '/', window.location.pathname)
    } else {
      window.location.hash = '';
    }
  })
}

removeHashFromLocation()

//======= End of Clear the hash links in a window location =======//
//=============== End of Smooth scrolling of pages ===============//
