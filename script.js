let menu = document.querySelector('.menu-bars');
 let navbar = document.querySelector('.navbar');
menu.onclick = function myfunction() {
    
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    navbar.classList.toggle('active');
} 

const searchbtn=document.querySelector('.search-icon')
searchbtn.onclick = () => {
  var x = document.getElementById("search-form");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

const closebtn=document.getElementById('close')
closebtn.onclick= () => {
  var x = document.getElementById("search-form");
  if (x.style.display === "flex") {
    x.style.display = "none";
  }
}

window.onscroll =  function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 

var swiper = new Swiper(".mySwiper", {
    loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});