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
let categorys;
let types;
let products;
const TypeContainer = document.querySelector(".byType .container");
const AgeContainer = document.querySelector(".byAge .container ");
fetch("../data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    categorys = jsonData.Categories;
    types = jsonData.types;
    products = jsonData.Products;
  })
  .then(() => {
    waitData();
  })
  .catch((error) => console.error("Error fetching the data:", error));
function waitData() {
  //AGE
  categorys.forEach((cat) => {
    const box = document.createElement("div");
    box.classList.add("box");

    const image = document.createElement("div");
    image.classList.add("image");
    image.style.background = `url(${cat.imageUrl})`;
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundSize = "cover";

    const info = document.createElement("div");
    info.classList.add("info");

    const heading = document.createElement("h2");
    heading.textContent = cat.name;

    const link = document.createElement("a");
    link.href = `../html/book.html#plp/?id=c${cat.id - 1}`;
    link.textContent = "Go Shop";

    info.appendChild(heading);
    info.appendChild(link);
    box.appendChild(image);
    box.appendChild(info);
    AgeContainer.appendChild(box);
  });
  //TYPE
  types.forEach((type) => {
    let temp = products.filter(
      (p) => p.type.toLowerCase() === type.name.toLowerCase()
    );
    const box = document.createElement("div");
    box.classList.add("box");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const image = document.createElement("img");
    image.setAttribute("decoding", "async");
    image.src = type.imageUrl;
    image.alt = "";
    const link = document.createElement("a");
    link.href = `../html/book.html#plp/?id=t${type.id - 1}` || "#";
    link.textContent = "shop now";
    if (temp.length === 0) link.style.pointerEvents = "none";

    const info = document.createElement("div");
    info.classList.add("info");
    const heading = document.createElement("h2");
    heading.textContent = type.name;
    const count = document.createElement("h2");
    count.classList.add("count");
    count.textContent = temp.length;

    imageContainer.appendChild(image);
    info.appendChild(heading);
    info.appendChild(count);
    box.appendChild(imageContainer);
    box.appendChild(link);
    box.appendChild(info);

    TypeContainer.appendChild(box);
  });
}
