let bell = document.querySelector(".profile-menu li");
let bellIcon = document.querySelector(".profile-menu li:first-child > img");
bell.addEventListener("mouseenter",()=>{
  console.log("HELLO");
  bellIcon.setAttribute("src","img/bell-ring-hover.svg");
})

bell.addEventListener("mouseleave",()=>{
  console.log("HELLO");
  bellIcon.setAttribute("src","img/bell-ring-default.svg");
})