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
let selectedProduct = {
  title: "the LEAF THIEF",
  price: 150,
  discountPrice: 20,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
    assumenda aliquid quae eaque animi id? Ad adipisci porro enim nam
    doloremque rerum beatae ratione neque. Nihil blanditiis pariatur
    voluptates cupiditate? Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Ab quo officiis itaque quaerat ipsum, suscipit
    vel a pariatur incidunt velit iste tempore tempora necessitatibus
    maiores deleniti quos quasi. Debitis, cupiditate.`,
  imageUrl: "../assets/children/3.jpg",
  otherImages: [
    "../assets/children/3a.jpg",
    "../assets/children/3b.jpg",
    "../assets/children/3c.jpg",
    "../assets/children/3d.jpg",
    "../assets/children/3e.jpg",
    "../assets/children/3f.jpg",
    "../assets/children/3g.jpg",
    "../assets/children/3h.jpg",
    "../assets/children/3i.jpg",
    "../assets/children/3j.jpg",
  ],
  categories: "children",
  type: "Action",
};

//PDP
let title = document.querySelector(".productName");
let price = document.querySelector(".productPrice");
let desc = document.querySelector(".productDescription");
const input = document.querySelector(".inputs input");
const minusBtn = document.querySelector(".btn.minus");
const plusBtn = document.querySelector(".btn.plus");
let carousel = document.querySelector(".carousel");
let prevButton = document.getElementById("prevC");
let nextButton = document.getElementById("nextC");
let currentIndex = 0;
//data

title.innerHTML = `${selectedProduct.title.toUpperCase()}`;
price.innerHTML = `${selectedProduct.price}$`;
desc.innerHTML = `${selectedProduct.description}`;
//carousel
for (let i = 0; i < selectedProduct.otherImages.length; i++) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  if (i == 0) {
    carouselItem.classList.add("active");
  }
  const img = document.createElement("img");
  img.src = selectedProduct.otherImages[i];
  img.alt = "Image";

  carouselItem.appendChild(img);
  carousel.appendChild(carouselItem);
}
let carouselItems = document.querySelectorAll(".carousel-item");
console.log(carouselItems);

function showSlide(index) {
  carouselItems.forEach((e, i) => {
    if (i === index) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
}
function changeSlide(direction) {
  console.log("before" + currentIndex);
  currentIndex = currentIndex =
    (currentIndex + direction + carouselItems.length) % carouselItems.length;
  console.log("after" + currentIndex);
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
  setTimeout(autoAdvance, 7000);
}
// Start the auto-advancing carousel
setTimeout(autoAdvance, 7000);

//quantity
// Decrease the value
minusBtn.addEventListener("click", () => {
  let value = parseInt(input.value);
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
  let value = parseInt(input.value);
  value++;
  input.value = value;
  minusBtn.classList.remove("disabled");
});
