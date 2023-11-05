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

// Loop through the products array and create cards
// products.forEach((product) => {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   card.classList.add("disabled");
//   card.innerHTML = `
//       <img width="210px" height="280px" decoding="async" src="${product.imageUrl}" alt="" />
//       <div class="content">
//         <h6>${product.title}</h6>
//         <div class="pri">
//           <h6>$${product.price}</h6>
//           <h6><del>$${product.discountPrice}</del></h6>
//         </div>
//       </div>
//       <div class="info">
//         <a href="" class="btn"><i class="icon fas fa-heart"></i></a>
//         <a href="" class="btn"><i class="icon fas fa-shopping-cart"></i></a>
//         <a href="" class="btn"><i class="icon fas fa-eye"></i></a>
//       </div>
//     `;

//   productsD.appendChild(card);
// });
//pagination
// let pagination = document.querySelector(".pagination");
// let cardD = document.querySelectorAll(".products .card");

// const cardsPerPage = 20;
// const totalCards = products.length * 12; //12*12

// 144/20 =7.2 || 8 total
// const totalPages = Math.ceil(totalCards / cardsPerPage);
// console.log(totalPages);
// let ulP = document.querySelector(".pagination .second-ul");
// for (var i = 0; i < totalPages; i++) {
//   var liElement = document.createElement("li");
//   if (i == 0) liElement.classList = "active";
//   liElement.setAttribute("data-index", `${i + 1}`);
//   liElement.appendChild(document.createTextNode(`${i + 1}`));
//   ulP.appendChild(liElement);
// }
// updateData(0, cardsPerPage);
// Display the cards for the selected page
// function updateData(st, end) {
//   for (let i = st; i < end; i++) {
//     console.log(productsD.children[i]);
//     // productsD.children[i].classList.remove("disabled");
//   }
// }

//Pagination
//get Data
const products = [
  {
    title: "Whats Wrong with a pet Dinosaur",
    price: 7,
    discountPrice: 20,
    imageUrl: "../assets/kids/1.jpg",
  },
  {
    title: "Silly Jokes",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/kids/2.jpg",
  },
  {
    title: "the LEAF THIEF",
    price: 10,
    discountPrice: 20,
    imageUrl: "../assets/kids/3.jpg",
  },
  {
    title: "LITTLE HOUSE AND FRIENDS",
    price: 16,
    discountPrice: 20,
    imageUrl: "../assets/kids/4.jpg",
  },
  {
    title: "My First Book of Planets",
    price: 13,
    discountPrice: 20,
    imageUrl: "../assets/kids/5.jpg",
  },
  {
    title: "The 50 States",
    price: 11,
    discountPrice: 20,
    imageUrl: "../assets/kids/6.jpg",
  },
  {
    title: "Why a Son Needs a Dad",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/kids/7.jpg",
  },
  {
    title: "8 Little Planets",
    price: 12,
    discountPrice: 20,
    imageUrl: "../assets/kids/8.jpg",
  },
  {
    title: "5,000 Awesome Facts",
    price: 15,
    discountPrice: 25,
    imageUrl: "../assets/kids/9.jpg",
  },
  {
    title: "How to Catch a Mermaid",
    price: 7,
    discountPrice: 20,
    imageUrl: "../assets/kids/10.jpg",
  },
  {
    title: "If Animals Kissed Good Night",
    price: 9,
    discountPrice: 20,
    imageUrl: "../assets/kids/11.jpg",
  },
  {
    title: "Why a Son Needs a Mom",
    price: 15,
    discountPrice: 20,
    imageUrl: "../assets/kids/12.jpg",
  },
];

const itemsPerPage = 20;
let currentPage = 1;
let productslength = products.length * 12;
const prevPage = document.querySelector(".pagination .main-ul .prevPP");
const nextPage = document.querySelector(".pagination .main-ul .nextPP");
let productsD = document.querySelector(".products");

// 144/20 =7.2 || 8 total
const totalPages = Math.ceil(productslength / itemsPerPage);
console.log(totalPages);
let ulP = document.querySelector(".pagination .second-ul");
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
updatePoduct();
updatePagination();
function updatePoduct() {
  productsD.innerHTML = ``;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  for (let i = start; i < end && i < productslength; i++) {
    addCard(
      products[i % 12].imageUrl,
      products[i % 12].title,
      products[i % 12].price,
      products[i % 12].discountPrice
    );
  }
}

function addCard(imageUrl, title, price, discountPrice) {
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = `
          <img width="210px" height="280px" decoding="async" src="${imageUrl}" alt="" />
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
  lii.forEach(function (l) {
    l.classList.remove("active");
  });

  lii[currentPage - 1].classList.add("active");
  if (currentPage === 1) {
    prevPage.disabled;
    prevPage.classList.add("disabled");
  } else {
    prevPage.classList.remove("disabled");
  }
  if (currentPage * itemsPerPage >= productslength) {
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
  if (currentPage * itemsPerPage < productslength) {
    currentPage++;
    updatePoduct();
    updatePagination();
  }
});
