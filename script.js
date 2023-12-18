let prevScrollPos = window.scrollY;


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
    mysearchbar.style.top ="2em";
   
  
  } else {
    // user has scrolled down;
    mynavbar.style.position = "absolute";
   
    mysearchbar.style.top ="0em";
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});




let i=true;
function booking() {

    if(i)
    {
        alert("Hello! I am an alert box!!");
        i =false;
      
      }
      else{
        alert("Hello! !!");
       i=true;
      }
      
    
    }