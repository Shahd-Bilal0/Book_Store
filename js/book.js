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
    title: "Whats Wrong with a pet Dinosaur",
    price: 17,
    discountPrice: 25,
    imageUrl: "../assets/children/1.jpg",
    categories: "children",
    type: "Sci-Fi",
  },
  {
    title: "Silly Jokes",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/children/2.jpg",
    categories: "children",
    type: "Fantasy",
  },
  {
    title: "the LEAF THIEF",
    price: 10,
    discountPrice: 20,
    imageUrl: "../assets/children/3.jpg",
    categories: "children",
    type: "Action",
  },
  {
    title: "LITTLE HOUSE AND FRIENDS",
    price: 16,
    discountPrice: 20,
    imageUrl: "../assets/children/4.jpg",
    categories: "children",
    type: "Crime",
  },
  {
    title: "My First Book of Planets",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/children/5.jpg",
    categories: "children",
    type: "Romance",
  },
  {
    title: "The 50 States",
    price: 11,
    discountPrice: 20,
    imageUrl: "../assets/children/6.jpg",
    categories: "children",
    type: "Sci-Fi",
  },
  {
    title: "Why a Son Needs a Dad",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/children/7.jpg",
    categories: "children",
    type: "Fantasy",
  },
  {
    title: "Little Planets",
    price: 12,
    discountPrice: 20,
    imageUrl: "../assets/children/8.jpg",
    categories: "children",
    type: "Action",
  },
  {
    title: "Awesome Facts",
    price: 15,
    discountPrice: 25,
    imageUrl: "../assets/children/9.jpg",
    categories: "children",
    type: "Crime",
  },
  {
    title: "How to Catch a Mermaid",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/children/10.jpg",
    categories: "children",
    type: "Romance",
  },
  {
    title: "If Animals Kissed Good Night",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/children/11.jpg",
    categories: "children",
    type: "Sci-Fi",
  },
  {
    title: "Why a Son Needs a Mom",
    price: 15,
    discountPrice: 20,
    imageUrl: "../assets/children/12.jpg",
    categories: "children",
    type: "Fantasy",
  },
  {
    title: "The Seeking Tree",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/children/13.jpg",
    categories: "children",
    type: "Action",
  },
  {
    title: "Everything children' Science Experiments",
    price: 30,
    discountPrice: 40,
    imageUrl: "../assets/children/14.jpg",
    categories: "children",
    type: "Crime",
  },
  {
    title: "The Not So Special Fish",
    price: 8,
    discountPrice: 10,
    imageUrl: "../assets/children/15.jpg",
    categories: "children",
    type: "Romance",
  },
  {
    title: "The Wonderful Things You Will Be Hardcover",
    price: 16,
    discountPrice: 20,
    imageUrl: "../assets/children/16.jpg",
    categories: "children",
    type: "Sci-Fi",
  },
  {
    title: "How to Catch the Easter Bunny",
    price: 15,
    discountPrice: 20,
    imageUrl: "../assets/children/17.jpg",
    categories: "children",
    type: "Fantasy",
  },
  {
    title: "My Magical Choices",
    price: 11,
    discountPrice: 20,
    imageUrl: "../assets/children/18.jpg",
    categories: "children",
    type: "Action",
  },
  {
    title: "The Scarecrow",
    price: 10,
    discountPrice: 20,
    imageUrl: "../assets/children/19.jpg",
    categories: "children",
    type: "Crime",
  },
  {
    title: "Leaf Man",
    price: 19,
    discountPrice: 25,
    imageUrl: "../assets/children/20.jpg",
    categories: "children",
    type: "Romance",
  },
  {
    title: "What's In The Forest?",
    price: 8,
    discountPrice: 25,
    imageUrl: "../assets/children/21.jpg",
    categories: "children",
    type: "Sci-Fi",
  },
  {
    title: "Harry Potter Coloring Book",
    price: 17,
    discountPrice: 25,
    imageUrl: "../assets/Adults/1.jpg",
    categories: "Adults",
    type: "Fantasy",
  },
  {
    title: "Harry Potter Magical Places",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/Adults/2.jpg",
    categories: "Adults",
    type: "Sci-Fi",
  },
  {
    title: "Harry Potter Origami Volume",
    price: 10,
    discountPrice: 20,
    imageUrl: "../assets/Adults/3.jpg",
    categories: "Adults",
    type: "Fantasy",
  },
  {
    title: "Relaxing Flowers",
    price: 16,
    discountPrice: 20,
    imageUrl: "../assets/Adults/4.jpg",
    categories: "Adults",
    type: "Romance",
  },
  {
    title: "Catching Fire",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/Adults/5.jpg",
    categories: "Adults",
    type: "Action",
  },
  {
    title: "The Ballad of Songbirds and Snakes",
    price: 11,
    discountPrice: 20,
    imageUrl: "../assets/Adults/6.jpg",
    categories: "Adults",
    type: "Fantasy",
  },
  {
    title: "Vintage Christmas Village",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/Adults/7.jpg",
    categories: "Adults",
    type: "Romance",
  },
  {
    title: "Unbroken",
    price: 12,
    discountPrice: 20,
    imageUrl: "../assets/Adults/8.jpg",
    categories: "Adults",
    type: "Action",
  },
  {
    title: "Vintage Cars and Trucks",
    price: 15,
    discountPrice: 25,
    imageUrl: "../assets/Adults/9.jpg",
    categories: "Adults",
    type: "Crime",
  },
  {
    title: "The Silent Wife",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/Adults/10.jpg",
    categories: "Adults",
    type: "Romance",
  },
  {
    title: "It Ends with Us",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/Adults/11.jpg",
    categories: "Adults",
    type: "Fantasy",
  },
  {
    title: "Maybe Someday",
    price: 15,
    discountPrice: 20,
    imageUrl: "../assets/Adults/12.jpg",
    categories: "Adults",
    type: "Sci-Fi",
  },
  {
    title: "Some Kind of Comfort",
    price: 17,
    discountPrice: 25,
    imageUrl: "../assets/older/1.jpg",
    categories: "older",
    type: "Fantasy",
  },
  {
    title: "TimeOuts Titanic",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/older/2.jpg",
    categories: "older",
    type: "Sci-Fi",
  },
  {
    title: "The Way I Used to Be Paperback",
    price: 10,
    discountPrice: 20,
    imageUrl: "../assets/older/3.jpg",
    categories: "older",
    type: "Fantasy",
  },
  {
    title: "The Prison Healer",
    price: 16,
    discountPrice: 20,
    imageUrl: "../assets/older/4.jpg",
    categories: "older",
    type: "Romance",
  },
  {
    title: "Once Upon a Dream",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/older/5.jpg",
    categories: "older",
    type: "Action",
  },
  {
    title: "LORE",
    price: 11,
    discountPrice: 20,
    imageUrl: "../assets/older/6.jpg",
    categories: "older",
    type: "Fantasy",
  },
  {
    title: "How I Magically Messed Up My Life",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/older/7.jpg",
    categories: "older",
    type: "Romance",
  },
  {
    title: "The Girl in the Castlek",
    price: 12,
    discountPrice: 20,
    imageUrl: "../assets/older/8.jpg",
    categories: "older",
    type: "Action",
  },
  {
    title: "Stephen king",
    price: 15,
    discountPrice: 25,
    imageUrl: "../assets/older/9.jpg",
    categories: "older",
    type: "Crime",
  },
  {
    title: "The Island Paperback",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/older/10.jpg",
    categories: "older",
    type: "Romance",
  },
  {
    title: "Hatchet Paperback",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/older/11.jpg",
    categories: "older",
    type: "Fantasy",
  },
  {
    title: "47 Days",
    price: 15,
    discountPrice: 20,
    imageUrl: "../assets/older/12.jpg",
    categories: "older",
    type: "Sci-Fi",
  },
];

function displayProduct(products) {
  let cp = [...products].sort(compareByPriceAscending);
  const itemsPerPage = 9;
  let currentPage = 1;
  const prevPage = document.querySelector(".pagination .main-ul .prevPP");
  const nextPage = document.querySelector(".pagination .main-ul .nextPP");
  let productsD = document.querySelector(".products");
  let minValue = document.getElementById("min-value");
  let maxValue = document.getElementById("max-value");
  const inputElements = document.querySelectorAll(".range-slider input");

  updatePoduct();
  updatePagination();

  //FILTER BY PRICE
  validateRange(
    parseInt(inputElements[0].value),
    parseInt(inputElements[1].value)
  );
  function validateRange(minPrice, maxPrice) {
    if (minPrice > maxPrice) {
      let tempValue = maxPrice;
      maxPrice = minPrice;
      minPrice = tempValue;
    }
    minValue.innerHTML = "$" + minPrice;
    maxValue.innerHTML = "$" + maxPrice;
    const filteredResult = filterProd(cp, minPrice, maxPrice);
    products = filteredResult.products;
    products.length = filteredResult.countInRange;
    updatePagination();
    updatePoduct();
  }
  function filterProd(cp, minPrice, maxPrice) {
    const filteredProducts = cp.filter(
      (c) => c.price >= minPrice && c.price <= maxPrice
    );
    const otherProducts = cp.filter(
      (c) => c.price < minPrice || c.price > maxPrice
    );

    const countInRange = filteredProducts.length;
    const result = filteredProducts.concat(otherProducts);
    return {
      products: result,
      countInRange: countInRange,
    };
  }

  inputElements.forEach((element) => {
    element.addEventListener("change", () => {
      currentPage = 1;
      let minPrice = parseInt(inputElements[0].value);
      let maxPrice = parseInt(inputElements[1].value);
      validateRange(minPrice, maxPrice);
    });
  });

  function updatePoduct() {
    productsD.innerHTML = ``;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = start; i < end && i < products.length; i++) {
      addCard(
        products[i].imageUrl,
        products[i].title,
        products[i].price,
        products[i].discountPrice
      );
    }
  }
  function addCard(imageUrl, title, price, discountPrice) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
          <img width="210px"  decoding="async" src="${imageUrl}" alt="" />
          <div class="content">
            <h6>${title}</h6>
            <div class="pri">
              <h6>$${price}</h6>
              <h6><del>$${discountPrice}</del></h6>
            </div>
          </div>
          <div class="info">
            <a href="" class="btn"><i class="icon fas fa-heart"></i></a>
            <a href="" class="btn"><i class="icon fas fa-shopping-cart"></i></a>
            <a href="" class="btn"><i class="icon fas fa-eye"></i></a>
          </div>
        `;
    productsD.appendChild(newCard);
  }

  function updatePagination() {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    let ulP = document.querySelector(".pagination .second-ul");
    ulP.innerHTML = ``;
    for (var i = 0; i < totalPages; i++) {
      var liElement = document.createElement("li");
      liElement.classList.add("main-li");
      liElement.setAttribute("data-index", `${i + 1}`);
      liElement.appendChild(document.createTextNode(`${i + 1}`));
      ulP.appendChild(liElement);
    }
    let lii = document.querySelectorAll(".main-li");

    lii.forEach((e, index) => {
      e.addEventListener("click", () => {
        lii.forEach(function (l) {
          l.classList.remove("active");
        });
        e.classList.add("active");
        currentPage = lii[index].getAttribute("data-index");
        updatePoduct();
        updatePagination();
      });
    });
    lii.forEach(function (l) {
      l.classList.remove("active");
    });

    if (lii.length >= 1) lii[currentPage - 1].classList.add("active");
    if (currentPage === 1) {
      prevPage.disabled;
      prevPage.classList.add("disabled");
    } else {
      prevPage.classList.remove("disabled");
    }
    if (currentPage * itemsPerPage >= products.length) {
      nextPage.disable;
      nextPage.classList.add("disabled");
    } else {
      nextPage.classList.remove("disabled");
    }
  }
  prevPage.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePoduct();
      updatePagination();
    }
  });

  nextPage.addEventListener("click", () => {
    if (currentPage * itemsPerPage < products.length) {
      currentPage++;
      updatePoduct();
      updatePagination();
    }
  });
  //SORT BY
  let x = 1;
  let items = document.querySelectorAll(".item");

  items.forEach((e, index) => {
    e.addEventListener("click", () => {
      x = index + 1;
      items.forEach(function (l) {
        l.classList.remove("active");
      });
      e.classList.add("active");
      sortData(x);
    });
  });

  function sortData(x) {
    switch (x) {
      case 1:
        products.sort(compareByNameAscending);
        break;
      case 2:
        products.sort(compareByNameDescending);
        break;
      case 3:
        products.sort(compareByPriceAscending);
        break;
      case 4:
        products.sort(compareByPriceDescending);
        break;
      default:
    }
    updatePoduct();
    updatePagination();
  }
}

function compareByNameAscending(a, b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}
function compareByNameDescending(a, b) {
  return compareByNameAscending(b, a);
}
function compareByPriceAscending(a, b) {
  return a.price - b.price;
}
function compareByPriceDescending(a, b) {
  return b.price - a.price;
}
//CATEGORIES
let categories = document.querySelectorAll(".categories .cat");
let tit = document.querySelector(".col-2 .sort-menu .categ");
let main_cat = document.querySelector(".col-2 .sort-menu .main-cat");
//
const checkboxes = document.querySelectorAll(".checkbox");
const checkboxeslab = document.querySelectorAll("label .lab");
let type_nums = document.querySelectorAll(".bcat .num");
categories.forEach((e, index) => {
  categorProd(0, index, e.children[0].innerHTML);
  e.addEventListener("click", () => {
    checkboxes.forEach((e) => {
      e.checked = false;
    });
    categories.forEach((l) => {
      l.classList.remove("active");
    });
    tit.innerHTML = e.children[0].innerHTML;
    e.classList.add("active");
    categorProd(0, index, e.children[0].innerHTML);
  });
});
main_cat.addEventListener("click", (e) => {
  tit.innerHTML = "All";
  categories.forEach((l) => {
    l.classList.remove("active");
  });
  categorProd(1);
});

function categorProd(x, y, s) {
  switch (x) {
    case 0:
      temp = MainProducts.filter(
        (p) => p.categories.toLowerCase() === s.toLowerCase()
      );

      categories[y].children[1].innerHTML = `(${temp.length})`;
      break;
    case 1:
      temp = [...MainProducts];
      tit.innerHTML = `All  (${temp.length})`;
      break;
    default:
  }
  numsT();
  displayProduct(temp);
}
categorProd(1);
//BOOKS BY TYPE
function numsT() {
  console.log(temp);
  checkboxeslab.forEach((e, index) => {
    let tt;
    tt = temp.filter((p) => p.type == e.textContent.trim());

    type_nums[index].innerHTML = ` (${tt.length})`;
  });
}

checkboxes.forEach((e) => {
  e.addEventListener("change", updateSelectedChoices);
});

function updateSelectedChoices() {
  let selectedChoices = [];
  checkboxes.forEach((e, index) => {
    if (e.checked) {
      selectedChoices.push(checkboxeslab[index].textContent.trim());
    }
  });
  console.log(selectedChoices);

  const filteredProducts = temp.filter((p) => {
    return selectedChoices.includes(p.type);
  });
  console.log(filteredProducts);

  if (selectedChoices.length == 0) displayProduct(temp);
  else displayProduct(filteredProducts);
}
