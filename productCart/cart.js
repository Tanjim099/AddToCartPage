let getdata = localStorage.getItem("newProductData");

var getedNewProductData = JSON.parse(getdata);
// console.log(getedNewProductData)

let productId = localStorage.getItem("newProductId");
var getedNewProductId = JSON.parse(productId);
console.log(getedNewProductId);

let cartProductItemBox = document.getElementById("cartitem");

for (let i = 0; i < getedNewProductData.length; i++) {
  for (let j = 0; j < getedNewProductId.length; j++) {
    if (getedNewProductData[i].id == getedNewProductId[j]) {
      let newDive = document.createElement("div");
      newDive.classList.add("cartProductItem");
      newDive.innerHTML = `
        <img src="${getedNewProductData[i].productImage}">
        <h2>${getedNewProductData[i].productName}</h2>
        <p>Price: ${getedNewProductData[i].productPrice}</p>
        <div id="cartitembtnbox">
        <button onclick="cartItemRemove(${getedNewProductId[j]})">remove</button>
        <div id="item_dec_and_inc_btn">
        <button id="item_inc_btn" onclick="itemInc(this)">+</button>
        <span id="itemqtn">1</span>
        <button onclick="itemDec()">-</button>
        </div>
        </div>
      `;
      cartProductItemBox.appendChild(newDive);

      function cartItemRemove(e){
        console.log(e);
        if(getedNewProductId[j] == getedNewProductData[i].id){
          getedNewProductData=- getedNewProductData[i];
        }
      }
    }
  }
  
}

function itemInc(){
  let itemQtn = document.getElementById("itemqtn");
  itemQtn.innerText++
};

function itemDec(){
  let itemQtn = document.getElementById("itemqtn");
  if(itemQtn.innerText>0){
    itemQtn.innerText--
  }
  else{
    alert("yes")
  }
}