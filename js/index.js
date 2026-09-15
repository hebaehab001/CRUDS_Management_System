var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productImage = document.getElementById("productImage");
var addbtn = document.getElementById("btnAdd");
var updatebtn = document.getElementById("btnupdate");
var row = document.getElementById("productDisplayRow");
var searchInput = document.getElementById("searchInput");
var indexBox;
var products = [];

if (localStorage.getItem("productsDB")) {
  products = JSON.parse(localStorage.getItem("productsDB"));
  displayProducts(products);
}
function addProduct() {
  if (
    validateInput(productName) &
    validateInput(productPrice) &
    validateInput(productCategory) &
    validateInput(productDescription) &
    validateInput(productImage)
  ) {
    var product = {
      Pname: productName.value.trim(),
      price: productPrice.value,
      Category: productCategory.value.trim(),
      Description: productDescription.value.trim(),
      pimg: productImage.files[0]?.name,
    };
    products.unshift(product);
    localStorage.setItem("productsDB", JSON.stringify(products));
    clearInput();
    displayProducts(products);
  }
}
function clearInput() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
  productImage.value = null;
  var inputs = [
    productName,
    productPrice,
    productCategory,
    productDescription,
    productImage,
  ];
  inputs.forEach(function (input) {
    input.classList.remove("is-valid", "is-invalid");
    if (
      input.nextElementSibling &&
      input.nextElementSibling.classList.contains("alert")
    ) {
      input.nextElementSibling.classList.add("d-none");
    }
  });
}
function displayProducts(arrProducts) {
  var container = "";
  var regex= new RegExp(searchInput.value,'gi')
  if (arrProducts.length < 1) {
    container += `<div class="col col-sm-12 col-md-12 col-lg-12">
                    <p class="text-center m-0 text-teal ">No Products Found</p>
                  </div>`;
  } else {
    for (let i = 0; i < arrProducts.length; i++) {
      container += `<div class="col">
                      <div  class="card h-100 border-teal">
                        <img height="150px" src="./images/${arrProducts[i].pimg}" alt="product-image " class=" w-100  object-fit-cover " > 
                        <div class="card-body p-2">
                            <p class='text-teal card-title'>Name: <span class='text-secondary card-text'>${arrProducts[i].Pname.replace(regex, (match) => `<span class='bg-teal text-black'>${match}</span>`)}</span></p>
                            <p class='text-teal card-title'>Price: <span class='text-secondary card-text'>${arrProducts[i].price}</span></p>
                            <p class='text-teal card-title'>Category: <span class='text-secondary card-text'>${arrProducts[i].Category}</span></p>
                            <p class='text-teal card-title'>Description: <span class='text-secondary card-text'>${arrProducts[i].Description}</span></p>
                            </div>
                            <div class="card-footer bg-white border-top-0 product-btns d-flex justify-content-between gap-2 ">
                              <button onclick="setformtoupdate(${i})" class="btn btn-sm btn-outline-warning w-50"><i class="fa-solid fa-pen-to-square"></i> Update</button>
                              <button onclick="deleteProduct(${i})" class="btn btn-outline-danger w-50"><i class="fa-solid fa-trash-can"></i> Delete</button>
                            </div>
                        </div>
                    </div>`;
    }
  }
  row.innerHTML = container;
}
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("productsDB", JSON.stringify(products));
  displayProducts(products);
}
function deleteAllProduct() {
  products = [];
  localStorage.setItem("productsDB", JSON.stringify(products));
  displayProducts(products);
}
function setformtoupdate(index) {
  indexBox = index;
  productName.value = products[index].Pname;
  productPrice.value = products[index].price;
  productCategory.value = products[index].Category;
  productDescription.value = products[index].Description;
  addbtn.classList.add("d-none");
  updatebtn.classList.remove("d-none");
}
function updateProduct() {
  if (
    validateInput(productName) &
    validateInput(productPrice) &
    validateInput(productCategory) &
    validateInput(productDescription)
  ) {
    products[indexBox].Pname = productName.value.trim();
    products[indexBox].price = productPrice.value;
    products[indexBox].Category = productCategory.value.trim();
    products[indexBox].Description = productDescription.value.trim();
    if (productImage.files) {
      products[indexBox].pimg = productImage.files[0]?.name;
    } else {
      products[indexBox].pimg = products[indexBox].pimg;
    }
    localStorage.setItem("productsDB", JSON.stringify(products));
    displayProducts(products);
    clearInput();
    addbtn.classList.remove("d-none");
    updatebtn.classList.add("d-none");
  }
}
function searchProducts(searchkey) {
  var searchresult = [];
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].Pname.toLowerCase().includes(searchkey.toLowerCase().trim())
    ) {
      searchresult.push(products[i]);
    }
  }
  displayProducts(searchresult);
}
function validateInput(element) {
  var InputRegex = {
    productName: /^[A-Z]([a-z]{2,8})(\s)(.{2,8})$/,
    productPrice: /^[1-9]\d*(\.\d{1,2})?$/,
    productCategory: /^TV|Mobile|Screens|Electronic$/i,
    productDescription: /^.{1,1000}$/m,
    productImage: /.{1,10}\.(jpg|jpeg|png|webp|svg)/,
  };
  if (InputRegex[element.id].test(element.value)) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    element.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
    return false;
  }
}