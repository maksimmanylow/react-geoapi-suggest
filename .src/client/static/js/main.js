(function($) {
  "use strict"; // Start of use strict

  // Animate On Scroll
  AOS.init({
    duration: 1200,
  })


  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-mh', { duration: 2000 }, 50);

  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
  sr.reveal('.sr-left', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-right', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-bottom', {
    duration: 1000,
    delay: 200
  });


})(jQuery); // End of use strict
