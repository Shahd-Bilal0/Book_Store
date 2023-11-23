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
//
let tbody = document.querySelector("table tbody");
let tfoot = document.querySelector("table tfoot");
let total = document.getElementById("total");
let subtotal = document.getElementById("subtotal");
let cartCount = document.getElementById("count");

let sum = 0;
//
readItems();
function readItems() {
  tbody.innerHTML = ``;
  sum = 0;
  const keys = Object.keys(localStorage);
  if (keys.length == 0) {
    tfoot.style.display = "";
    tbody.style.display = "none";
  } else {
    tfoot.style.display = "none";
    tbody.style.display = "";
  }
  keys.forEach((key) => {
    const itemString = localStorage.getItem(key);
    const item = JSON.parse(itemString);
    let tr = document.createElement("tr");
    tr.innerHTML = `      
    <td style="border-right: 1px solid #fff;">
       <img width="60" src=${item.imageUrl} alt="" /> 
    </td>
    <td style="text-align:left">  ${item.title}</td>
    <td>$${item.price}</td>
    <td>
      <div class="input-group">
        <button class="btn mi-btn">
          <i class="fa fa-minus"></i>
        </button>
        <input type="text" class="form-control" value="${item.value}" />
        <button class="btn pl-btn">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </td>
    <td>$${item.price * item.value}</td>
    <td>
      <button class="btn ti-btn">
        <i class="fa fa-times"></i>
      </button>
    </td>
  `;
    sum += item.price * item.value;
    tbody.appendChild(tr);
    // Add event listener to the "Remove-btn" button in this row
    let tiBtn = tr.querySelector(".ti-btn");
    let plBtn = tr.querySelector(".pl-btn");
    let miBtn = tr.querySelector(".mi-btn");
    const input = tr.querySelector("input");
    tiBtn.addEventListener("click", () => {
      localStorage.removeItem(item.id);
      readItems();
    });

    plBtn.addEventListener("click", () => {
      let value = parseInt(input.value);
      value++;
      input.value = value;
      miBtn.classList.remove("disabled");
      item.value = value;
      storeItem(item.id, item);
      readItems();
    });
    miBtn.addEventListener("click", () => {
      let value = parseInt(input.value);
      if (value > 1) {
        value--;
        input.value = value;
      }
      if (value == 1) {
        console.log("hi");
        miBtn.classList.add("disabled");
      }
      item.value = value;
      storeItem(item.id, item);
      readItems();
    });
  });
  total.innerHTML = `${sum}$`;
  subtotal.innerHTML = `${sum}$`;
  cartCount.innerHTML = keys.length;
}
function storeItem(id, item) {
  const productString = JSON.stringify(item);
  localStorage.setItem(id, productString);
}
