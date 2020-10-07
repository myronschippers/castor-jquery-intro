console.log('CASTOR!!!');

function somethingElse() {
  console.log('do some things');
}

// DOM
// Document
// Object
// Model

// jQuery
// Library
$(document).ready(function () {
  // executed here
  // DOM is in state of being ready
  console.log('DOM Ready');
  console.log($('#jsPimaryHd'));
  somethingElse();
});

console.log($('#jsPimaryHd'));

console.log('In sequence');
somethingElse();

// API
// Application
// Programming
// Interface
somethingElse();

// CDN
// Content
// Delivery
// Network
