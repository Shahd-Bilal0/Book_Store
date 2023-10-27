// Start What we do
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".services");
let star = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!star) {
      star = true;
      nums.forEach(function (el) {
        startCount(el);
      });
    }
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  console.log(goal);
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}

// MODAL
let modal = document.querySelector(".modal");
let closeBtn = document.getElementsByClassName("closeM")[0];
let quotes = document.querySelectorAll(".slider-container .col");

quotes.forEach(function (e) {
  e.addEventListener("click", function () {
    quotes.forEach(function (e) {
      if (e.classList.contains("active")) {
        console.log(e.children[1].textContent.trim());
        console.log(e.children[1].innerHTML);
        openModal(e.children[1].innerHTML);
      }
    });
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

function openModal(e) {
  var qt = document.getElementById("qt");
  var st = document.getElementById("st");
  qt.innerText = e;
  st.innerText = "source";
  modal.style.display = "block";
}

//get carousel items |Array.form[es6]
var carouselImage = document.querySelectorAll(".slider-container .col");
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

// Carousel
checkScreenSize();
var itemSelected;
var itemC;
var itemsCNumber;
var current;
nextC = document.getElementById("nextC");
prevC = document.getElementById("prevC");
nextC.addEventListener("click", nextCli);
prevC.onclick = prevCli;
var indicatorsC;
var lisCreated;
var divsli;
function init(itemSelected) {
  itemC = document.querySelectorAll(".itemC");
  itemsCNumber = itemC.length;
  current = 1;
  indicatorsC = document.getElementById("indicatorsC");
  lisCreated = itemsCNumber + 1 - itemSelected;
  divsli = document.querySelectorAll(".indicatorC");
  ubdated(lisCreated, itemSelected);
  checkC(current, itemSelected);
}
function ubdated(lisCreated, itemSelected) {
  while (indicatorsC.firstChild) {
    indicatorsC.removeChild(indicatorsC.firstChild);
  }
  for (var i = 0; i < lisCreated; i++) {
    var divIn = document.createElement("div");
    divIn.classList.add("indicatorC");
    indicatorsC.appendChild(divIn);
  }
  divsli = document.querySelectorAll(".indicatorC");
  divsli.forEach((e, index) => {
    e.addEventListener("click", () => {
      current = index;
      console.log(index);
      checkC(current, itemSelected);
    });
  });
}
function checkC(current, itemSelected) {
  if (current <= 0) {
    prevC.classList.add("disabled");
    nextC.classList.remove("disabled");
  } else if (current >= lisCreated - 1) {
    nextC.classList.add("disabled");
    prevC.classList.remove("disabled");
  } else {
    nextC.classList.remove("disabled");
    prevC.classList.remove("disabled");
  }
  divsli.forEach(function (l) {
    l.classList.remove("active");
  });
  itemC.forEach(function (l) {
    l.classList.remove("select");
  });
  divsli[current].classList.add("active");
  for (var i = 0; i < itemSelected; i++) {
    itemC[current++].classList.add("select");
  }
}
function checkScreenSize() {
  const tabletQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 1024px)"
  );
  const largeQuery = window.matchMedia("(min-width: 1025px)");

  if (tabletQuery.matches) {
    itemSelected = 2;
    init(itemSelected);
  } else if (largeQuery.matches) {
    itemSelected = 3;
    init(itemSelected);
  } else {
    itemSelected = 1;
    init(itemSelected);
  }
}
function nextCli() {
  current++;
  checkC(current, itemSelected);
}
function prevCli() {
  current--;
  checkC(current, itemSelected);
}
window.addEventListener("resize", checkScreenSize);
