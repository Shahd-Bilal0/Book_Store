let icon = document.querySelector(".icons");
let uls = document.querySelector(".menu");
let menuLinks = document.querySelectorAll(".menu a");
// console.log(menuLinks);
let bar = document.getElementsByClassName("bar")[0];
let clos = document.getElementsByClassName("close")[0];

icon.addEventListener("click", () => {
  uls.classList.toggle("act");
  bar.classList.toggle("active");
  clos.classList.toggle("activee");
});
//
menuLinks.forEach(function (l) {
  l.addEventListener("click", function (e) {
    uls.classList.toggle("act");
    bar.classList.toggle("active");
    clos.classList.toggle("activee");
  });
});

//MODAL
let modal = document.querySelector(".modal");
let closeBtn = document.getElementsByClassName("closeM")[0];
let quotes = document.querySelectorAll(".feature .col");

quotes.forEach(function (e) {
  e.addEventListener("click", function () {
    var quote = e.innerText;
    console.log(quote);
    var source = "Riyad alsalihen";
    openModal(quote, source);
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

function openModal(quote, source) {
  var qt = document.getElementById("qt");
  var st = document.getElementById("st");
  qt.innerText = quote;
  st.innerText = source;
  modal.style.display = "block";
}
