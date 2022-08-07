const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer=document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    
}


burguerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    

}


menuCarrito.addEventListener("click", togglecarritoAside);

function togglecarritoAside() {
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

const productList=[];

productList.push({
    name:"Bike", 
    Price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:"Computer", 
    Price: 1220,
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:"Phone", 
    Price: 320,
    image: "https://images.pexels.com/photos/12339129/pexels-photo-12339129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:"Phone", 
    Price: 320,
    image: "https://images.pexels.com/photos/12339129/pexels-photo-12339129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});


function renderProducts(array){
    for(product of array){
        const productCard= document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg=document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo= document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv  = document.createElement("div");
    
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText= "$" + product.Price;
    
        const productInfoName=document.createElement("p");
        productInfoName.innerText=product.name;
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
    
    
        const productInfoFigure=document.createElement("figure");
        const productInfoImgCart = document.createElement("img");
        productInfoImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
       
        productInfoFigure.appendChild(productInfoImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
