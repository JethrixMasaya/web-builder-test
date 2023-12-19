let prevScrollPos = window.scrollY;
let showing=true;
const myBody = document.body.innerHTML;

const booking = document.getElementById("booking");
const mysearchbar = document.getElementById("searchBar");
const mynavbar = document.getElementById("navbar");

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    mynavbar.style.position = "fixed";
    mynavbar.style.Top = "-3em";
    mynavbar.style.backgroundColor = "var(--dark-color)";
    mysearchbar.style.top ="3em";
   
  
  } else {
    // user has scrolled down;
    mynavbar.style.position = "absolute";
   
    mysearchbar.style.top ="0em";
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});



function bookingShow() {

    if(showing)
    {
        booking.style.display = "none";
        document.body.style.overflowY = "scroll";
        showing =false;
      
      }
      else{
        booking.style.display = "block";
        document.body.style.overflowY = "hidden";
        showing =true;
      }
      
    
    }


 