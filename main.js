let menu = document.querySelector(".menu i");
let navbar = document.getElementById("navlinks");
let loader = document.getElementById("loader-container");

  window.addEventListener("load",() => {
  setTimeout(() => {
    loader.classList.toggle("toggle-load")
  },5000)
})

menu.addEventListener("click",() => {
  navbar.classList.toggle("toggle-menu")
  menu.classList.toggle("uil-multiply")
})