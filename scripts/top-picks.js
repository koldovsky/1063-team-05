// Kravchuk Dmytro
const products = [
    {
        id: 1,
        name: "Granny Smith Apples",
        imageUrl: "img/product/granny-smith.png",
        price: "2,00",
        curency: "USD"
    },
    {
        id: 2,
        name: "Strawberries",
        imageUrl: "img/product/strawberries.png",
        price: "8,00",
        curency: "USD"
    },
    {
        id: 3,
        name: "Blackberries",
        imageUrl: "img/product/blackberries.png",
        price: "4,00",
        curency: "USD"
    },
    {
        id: 4,
        name: "Mango",
        imageUrl: "img/product/mango.png",
        price: "2,50",
        curency: "USD"
    },
    {
        id: 5,
        name: "Organic Lemons",
        imageUrl: "img/product/organic-lemons.png",
        price: "1,33",
        curency: "USD"
    }
];

function renderProducts(products) {
    let productsHtml = "";
    for(const product of products) {
        productsHtml += 
        `<li class="top-picks__item">
        <article class="top-picks__card">
            <img class="top-picks__card-img" src="${product.imageUrl}" alt="${product.name}">
            <a class="top-picks__card-link" href="#">${product.name}</a>
            <p class="top-picks__card-price">${product.price}<span class="top-picks__product-currency">${product.curency}</span></p>
            <div class="top-picks__card-button-button-wrapper">
                <button class="top-picks__card-button">Buy Now</button>
            </div>
        </article>
    </li>`
        
    }
    document.querySelector(".top-picks__list").innerHTML = productsHtml;
}
renderProducts(products);
            
            