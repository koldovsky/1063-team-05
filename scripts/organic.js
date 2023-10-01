const products = [
    {
        id: 1,
        image: 'img/product/sugar-snap-peas.png',
        name: 'Sugar Snap Peas',
        price: "5,00USD"
    },
    {
        id: 2,
        image: 'img/product/cherries.png',
        name: 'Cherries',
        price: "12,00USD"
    },
    {
        id: 3,
        image: 'img/product/green-cucumbers.png',
        name: 'Green Cucumbers',
        price: "1,50USD"
    },
    {
        id: 4,
        image: 'img/product/honeydew-melon.png',
        name: 'Honeydew Melon',
        price: "5,00USD"
    },
    {
        id: 5,
        image: 'img/product/raw-almonds.png',
        name: 'Raw Almonds',
        price: "9,00USD"
    },
    {
        id: 6,
        image: 'img/product/broccoli-crowns.png',
        name: 'Broccoli Crowns',
        price: "1,50USD"
    },
    {
        id: 7,
        image: 'img/product/dried-figs.png',
        name: 'Dried Figs',
        price: "7,00USD"
    },
    {
        id: 8,
        image: 'img/product/green-cabbage.png',
        name: 'Green Cabbage',
        price: "1,00USD"
    }
];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
        <div class="organic__main__cards element">
            <div class="element__info">
                <img class="element__info__picture" src="${product.image}" alt="${product.name}">
                <div class="elemt__info__main">
                    <a class="element__info__main__name" href="#">${product.name}</a>
                    <h4 class="element__info__main__price">${product.price}</h4>
                    <button class="element__info__main__button">Buy Now</button>
                </div>
            </div>
        </div>`;
    }
    document.querySelector('.organic__main').innerHTML = productsHtml;
}

renderProducts(products);