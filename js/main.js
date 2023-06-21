
  const openNav = document.querySelector(".ri-menu-line");

  const closeNav = document.querySelector(".ri-close-circle-line");
  
  const navList = document.querySelector("nav ul");
  
  openNav.addEventListener("click", function() {
  
      navList.style.top = "40%"
  
      openNav.style.display = "none"
  
      closeNav.style.display = "block"
  
  })
  
  closeNav.addEventListener("click", function() {
  
      navList.style.top = "-40%"
  
      openNav.style.display = "block"
  
      closeNav.style.display = "none"
  
  })
  
  document.querySelectorAll("nav ul a").forEach(navLink => {
  
      navLink.addEventListener("click", function() {
  
          navList.style.top = "-40%"
  
          openNav.style.display = "block"
  
          closeNav.style.display = "none"
  
      })
  
  })
  // Get the button:
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
    AOS.init();
  console.log("hello world")