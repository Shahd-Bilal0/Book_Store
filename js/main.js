//getDataFromApi
let jsData;
async function getData() {
  let myData = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=story%20potter&ke=AIzaSyBYjac80Uj7KwHUMYCRkX7-GYlbb3HtCn8"
  );
  jsData = await myData.json();
  console.log(jsData);
}

//Pagination
const itemsPerPage = 5;
let currentPage = 1;
let bookslength = 13;
const prevPage = document.querySelector(".pagination .prevPage");
const nextPage = document.querySelector(".pagination .nextPage");
let tableBody = document.getElementsByTagName("tbody")[0];
getData().then(updateTable).then(updatePagination);
// MODAL B
let modalB = document.querySelector(".modalB");
let rows = document.querySelectorAll(".Book-table .book-row");
let arrS = [1, 2, 3, 4, 5, 4, 3, 2, 1, 5];
function openModalB(e) {
  document.getElementById("bn").textContent =
    e.querySelector("td:nth-child(1)").textContent;
  document.getElementById("bd").textContent =
    e.querySelector("td:nth-child(5)").textContent;
  document.getElementById("ba").textContent =
    e.querySelector("td:nth-child(6)").textContent;

  modalB.style.display = "block";
}

function updateTable() {
  tableBody.innerHTML = ``;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  for (let i = start; i < end && i < bookslength; i++) {
    addRow(
      jsData.items[i % 10].volumeInfo.title,
      jsData.items[i % 10].volumeInfo.publishedDate,
      "$24.99",
      arrS[i % 10],
      jsData.items[i % 10].volumeInfo.description,
      jsData.items[i % 10].volumeInfo.authors
    );
  }
}

function addRow(name, publishDate, price, rate, description, author) {
  let newRow = document.createElement("tr");
  newRow.classList.add("book-row");

  let nameCell = document.createElement("td");
  let publishDateCell = document.createElement("td");
  let priceCell = document.createElement("td");
  let rateCell = document.createElement("td");
  let descriptionCell = document.createElement("td");
  let authorCell = document.createElement("td");

  nameCell.textContent = name;
  publishDateCell.textContent = publishDate;
  priceCell.textContent = price;
  descriptionCell.textContent = description;
  authorCell.textContent = author;

  let starsSpan = document.createElement("span");
  starsSpan.classList.add("stars");
  let yellowStars = rate;
  let grayStars = 5 - rate;

  let starHTML = "";
  for (let i = 0; i < yellowStars; i++) {
    starHTML += '<span class="Ystar">★</span>';
  }
  for (let i = 0; i < grayStars; i++) {
    starHTML += '<span class="Gstar">★</span>';
  }

  starsSpan.innerHTML = starHTML;
  rateCell.appendChild(starsSpan);

  newRow.appendChild(nameCell);
  newRow.appendChild(publishDateCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(rateCell);
  newRow.appendChild(descriptionCell);
  newRow.appendChild(authorCell);
  newRow.addEventListener("click", () => openModalB(newRow));
  tableBody.appendChild(newRow);
}

function updatePagination() {
  if (currentPage === 1) {
    prevPage.disabled;
    prevPage.classList.add("disabled");
  } else {
    prevPage.classList.remove("disabled");
  }
  if (currentPage * itemsPerPage >= bookslength) {
    nextPage.disable;
    nextPage.classList.add("disabled");
  } else {
    nextPage.classList.remove("disabled");
  }
}

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
    updatePagination();
  }
});

nextPage.addEventListener("click", () => {
  if (currentPage * itemsPerPage < bookslength) {
    currentPage++;
    updateTable();
    updatePagination();
  }
});
// MODAL C
let modal = document.querySelector(".modal");
let closeBtn = document.querySelectorAll(".closeM");
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

closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("h");
    modal.style.display = "none";
    modalB.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target == modal || e.target == modalB) {
    modal.style.display = "none";
    modalB.style.display = "none";
  }
});

function openModal(e) {
  var qt = document.getElementById("qt");
  var st = document.getElementById("st");
  qt.innerText = e;
  st.innerText = "source";
  modal.style.display = "block";
}

//get carousel items
var carouselImage = document.querySelectorAll(".slider-container .col");
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

//scroller
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("resize", checkScreenSize);
window.addEventListener("scroll", () => {
  let scrollT = document.documentElement.scrollTop;
  el.style.width = `${(scrollT / height) * 100}%`;
});
// Start What we do
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".services");
let star = true;
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
let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (star) {
      star = false;
      nums.forEach(function (el) {
        startCount(el);
      });
    }
  }

  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
