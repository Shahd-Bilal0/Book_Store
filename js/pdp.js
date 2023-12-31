//scroller
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollT = document.documentElement.scrollTop;
  el.style.width = `${(scrollT / height) * 100}%`;
});

let btn = document.querySelector("button");
window.onscroll = function () {
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
let selectedProduct;
let title = document.querySelector(".productName");
let price = document.querySelector(".productPrice");
let desc = document.querySelector(".productDescription");
const input = document.querySelector(".inputs input");
const minusBtn = document.querySelector(".btn.minus");
const plusBtn = document.querySelector(".btn.plus");
const addBtn = document.querySelector(".btn.add");
let carousel = document.querySelector(".carousel");
let Secondcarousel = document.querySelector(".second-carousel");
let prevButton = document.getElementById("prevC");
let nextButton = document.getElementById("nextC");
let nameP = document.getElementById("name-product");
let value = 1;
let currentIndex = 0;
const queryString = window.location.href;
var givenId = queryString.split("=")[1];
fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    MainProducts = data.Products;
    selectedProduct = MainProducts[givenId - 1];
  })
  .then(() => waitData());

function waitData() {
  //data
  title.innerHTML = `${selectedProduct.title.toUpperCase()}`;
  nameP.innerHTML = `${selectedProduct.title}`;
  price.innerHTML = `${selectedProduct.price}$`;
  desc.innerHTML = `${selectedProduct.description}`;
  //carousel
  for (let i = 0; i < selectedProduct.otherImages.length; i++) {
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    // carouselItem.classList.add("img-magnifier-container");
    let carouselItem2 = document.createElement("div");
    carouselItem2.classList.add("carousel-item-two");

    if (i == 0) {
      carouselItem.classList.add("active");
      carouselItem2.classList.add("active");
    }
    let img = document.createElement("img");
    img.src = selectedProduct.otherImages[i];
    img.alt = "Image";
    // img.classList.add("myimage");
    let img2 = document.createElement("img");
    img2.src = selectedProduct.otherImages[i];
    img2.alt = "Image";
    carouselItem.appendChild(img);

    carouselItem2.appendChild(img2);
    carousel.appendChild(carouselItem);
    Secondcarousel.appendChild(carouselItem2);
  }

  let carouselItems = document.querySelectorAll(".carousel-item");

  let SecondCarouselItems = document.querySelectorAll(".carousel-item-two");
  SecondCarouselItems.forEach((e, index) => {
    e.addEventListener("click", () => {
      currentIndex = index;
      showSlide(index);
    });
  });

  function showSlide(index) {
    carouselItems.forEach((e, i) => {
      if (i === index) {
        e.classList.add("active");
        SecondCarouselItems[i].classList.add("active");
      } else {
        e.classList.remove("active");
        SecondCarouselItems[i].classList.remove("active");
      }
    });
  }
  function changeSlide(direction) {
    currentIndex = currentIndex =
      (currentIndex + direction + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }
  prevButton.addEventListener("click", () => {
    changeSlide(-1);
  });
  nextButton.addEventListener("click", () => {
    changeSlide(1);
  });
  function autoAdvance() {
    changeSlide(1);
    setTimeout(autoAdvance, 10000);
  }
  //   Start the auto-advancing carousel
  setTimeout(autoAdvance, 10000);

  //quantity
  // Decrease the value
  minusBtn.addEventListener("click", () => {
    value = parseInt(input.value);
    if (value > 1) {
      value--;
      input.value = value;
    }
    if (value == 1) {
      console.log("hi");
      minusBtn.classList.add("disabled");
    }
  });
  // Increase the value
  plusBtn.addEventListener("click", () => {
    value = parseInt(input.value);
    value++;
    input.value = value;
    minusBtn.classList.remove("disabled");
  });
}
///
addBtn.addEventListener("click", () => {
  selectedProduct.value = value;
  storeItem();
  window.location.href = "../html/cart.html";
});
//
function storeItem() {
  const productString = JSON.stringify(selectedProduct);
  localStorage.setItem(`${givenId}`, productString);
}
