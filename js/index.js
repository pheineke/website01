/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    if (window.innerWidth > window.innerHeight) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
    }
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    if (window.innerWidth > window.innerHeight) {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0";
    } else {
      document.getElementById("mySidenav").style.width = "0";
    }
  } 

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;
var navStatus = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          document.getElementById("main").style.marginRight = "250px";
          if (navStatus == 1) {
            closeNav();
            navStatus = 0
          } else {
            // left swipe
          }
        } else {
          openNav();
          navStatus = 1
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
