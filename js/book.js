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
let MainProducts;
//CATEGORIES
let categories = document.querySelectorAll(".categories .cat");
let tit = document.querySelector(".col-2 .sort-menu .categ");
let main_cat = document.querySelector(".col-2 .sort-menu .main-cat");
//
const checkboxes = document.querySelectorAll(".checkbox");
const checkboxeslab = document.querySelectorAll("label .lab");
let type_nums = document.querySelectorAll(".bcat .num");
//
const queryString = window.location.href;
var givenId = queryString.split("=")[1];
console.log(givenId);
fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    MainProducts = data.Products;
  })
  .then(() => waitData());

function waitData() {
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
  checkboxes.forEach((e) => {
    e.addEventListener("change", updateSelectedChoices);
  });
  waitt();
  function waitt() {
    if (givenId == undefined) {
      categorProd(1);
    } else {
      if (givenId[0] == "c") {
        categorProd(
          0,
          givenId[1],
          categories[givenId[1]].children[0].textContent
        );

        categories.forEach((l) => {
          l.classList.remove("active");
        });
        categories[givenId[1]].classList.add("active");
        tit.innerHTML = categories[givenId[1]].children[0].innerHTML;
      } else if (givenId[0] == "t") {
        checkboxes[givenId[1]].checked = true;
        updateSelectedChoices();
      }
    }
  }
}

//BOOKS BY TYPE
function numsT() {
  checkboxeslab.forEach((e, index) => {
    let tt;
    tt = temp.filter((p) => p.type == e.textContent.trim());
    type_nums[index].innerHTML = ` (${tt.length})`;
  });
}
function updateSelectedChoices() {
  let selectedChoices = [];
  checkboxes.forEach((e, index) => {
    if (e.checked) {
      selectedChoices.push(checkboxeslab[index].textContent.trim());
    }
  });
  const filteredProducts = temp.filter((p) => {
    return selectedChoices.includes(p.type);
  });
  if (selectedChoices.length == 0) displayProduct(temp);
  else displayProduct(filteredProducts);
}
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
        products[i].id,
        products[i].imageUrl,
        products[i].title,
        products[i].price,
        products[i].discountPrice
      );
    }
  }
  function addCard(id, imageUrl, title, price, discountPrice) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
            <img width="210px"  decoding="async" src="${imageUrl}" alt="" />
            <div class="content">
            <input type="hidden" value="${id}">
              <h6>${title}</h6>
              <div class="pri">
                <h6>$${price}</h6>
                <h6><del>$${discountPrice}</del></h6>
              </div>
            </div>
            <div class="info">
              <a href="" class="btn"><i class="icon fas fa-heart"></i></a>
              <a href="" class="btn"><i class="icon fas fa-shopping-cart"></i></a>
              <a href="../html/product-page.html#pdp/?id=${id}" class="btn eye"><i class="icon fas fa-eye"></i></a>
            </div>
          `;
    productsD.appendChild(newCard);

    newCard.addEventListener("click", () => {
      console.log(newCard);
      var hiddenInputValue = newCard.querySelector(
        'input[type="hidden"]'
      ).value;
      window.location.href = `../html/product-page.html#pdp/?id=${hiddenInputValue}`;
    });
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
//
let cat = document.querySelector(".categories h3");
cat.addEventListener("click", () => {
  window.location.href = "../html/categories.html#byAge";
});
let bcat = document.querySelector(".bcat h3");
bcat.addEventListener("click", () => {
  window.location.href = "../html/categories.html#byType";
});
