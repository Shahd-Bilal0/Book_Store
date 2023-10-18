//MODAL
// let modal = document.querySelector(".modal");
// let closeBtn = document.getElementsByClassName("closeM")[0];
// let quotes = document.querySelectorAll(".feature .col");

// quotes.forEach(function (e) {
//   e.addEventListener("click", function () {
//     var quote = e.innerText;
//     console.log(quote);
//     var source = "Riyad alsalihen";
//     openModal(quote, source);
//   });
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (e) => {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// });

// function openModal(quote, source) {
//   var qt = document.getElementById("qt");
//   var st = document.getElementById("st");
//   qt.innerText = quote;
//   st.innerText = source;
//   modal.style.display = "block";
// }

//carousel
//get carousel items |Array.form[es6]
var carouselImage = document.querySelectorAll(".slider-container img");
// );

//get number of slides
var carouselNumber = carouselImage.length;

//set current
var curIndex = 1;

var slideCn = document.getElementById("slide-number");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

next.onclick = nextcarousel;
prev.onclick = prevcarousel;

//create the main ul
var ulElement = document.createElement("ul");
ulElement.setAttribute("id", "ulE");

for (var i = 0; i < carouselNumber; i++) {
  var liElement = document.createElement("li");
  liElement.setAttribute("data-index", `${i + 1}`);
  liElement.appendChild(document.createTextNode(`${i + 1}`));
  ulElement.appendChild(liElement);
}
document.getElementById("indicators").appendChild(ulElement);
var lii = document.querySelectorAll("li");
check(curIndex);
lii.forEach((e) => {
  e.addEventListener("click", () => {
    curIndex = e.innerText;
    check(curIndex);
  });
});

function check(curIndex) {
  console.log("ff" + curIndex);
  if (curIndex <= 1) {
    prev.classList.add("disabled");
    next.classList.remove("disabled");
  } else if (curIndex >= carouselNumber) {
    next.classList.add("disabled");
    prev.classList.remove("disabled");
  } else {
    next.classList.remove("disabled");
    prev.classList.remove("disabled");
  }
  lii.forEach(function (l) {
    l.classList.remove("active");
  });

  carouselImage.forEach(function (l) {
    l.classList.remove("active");
  });
  lii[curIndex - 1].classList.add("active");
  carouselImage[curIndex - 1].classList.add("active");
  slideCnUpdate(curIndex);
}

function slideCnUpdate(curIndex) {
  slideCn.innerHTML = curIndex;
}

function prevcarousel() {
  if (!prev.classList.contains("disabled")) {
    curIndex--;
  }
  check(curIndex);
}
function nextcarousel() {
  if (!next.classList.contains("disabled")) {
    curIndex++;
  }
  check(curIndex);
}
