let icon = document.querySelector(".icons");
let uls = document.querySelector(".menu");

let bar = document.getElementsByClassName("bar")[0];
let clos = document.getElementsByClassName("close")[0];

icon.addEventListener("click", () => {
  uls.classList.toggle("act");
  bar.classList.toggle("active");
  clos.classList.toggle("activee");
});
