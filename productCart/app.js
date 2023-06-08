const data = [
    {
        id: "1",
        productName: "Cooking Oil",
        productPrice: "200",
        productImage: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1685617902_1.jpg?im=Resize=(223,280)"
    },
    {
        id: "2",
        productName: "Dry Fruits",
        productPrice: "150",
        productImage: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1685617934_2.jpg?im=Resize=(223,280)"
    },
    {
        id: "3",
        productName: "Basmati Rice",
        productPrice: "500",
        productImage: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1685618065_3.jpg?im=Resize=(223,280)"
    },
    {
        id: "4",
        productName: "Fresh Atta",
        productPrice: "180",
        productImage: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1685618098_4.jpg?im=Resize=(223,280)"
    },
    {
        id: "5",
        productName: "Masala",
        productPrice: "130",
        productImage: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1685618163_5.jpg?im=Resize=(223,280)"
    },
    {
        id: "6",
        productName: "Clod Drinks",
        productPrice: "40",
        productImage: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1684995443_1.jpg?im=Resize=(223,280)"
    },
];

localStorage.setItem("newProductData", JSON.stringify(data));

function product() {
    data.forEach((item) => {
        const productBox = document.getElementById("product_box");
        let newDive = document.createElement("div");
        newDive.classList.add("product_box");
        newDive.innerHTML = `
    <img class="productimage" src="${item.productImage}">
    <div class="productname">${item.productName}</div>
    <div class="productprice">${item.productPrice}</div>
    <button class="addtocartbtn" id="addtocartbtn" onclick="addToCard(${item.id})">Add To Card</button>
    
    `;
        productBox.appendChild(newDive);
    });
}
product();

let productArray = [];

function addToCard(e){
    // let productArray = [];
    productArray.push(e);
    localStorage.setItem("newProductId", JSON.stringify(productArray))
    let itemCount = document.getElementById("itemcount");
    itemCount.innerText = productArray.length
    console.log(productArray);
}