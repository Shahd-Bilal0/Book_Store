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
let temp;
let MainProducts = [
  {
    title: "the LEAF THIEF",
    price: 10,
    discountPrice: 20,
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
  },
];
