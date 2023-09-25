const products = [
    {
        id: 1,
        name: 'Granny Smith Apples',
        imageUrl: 'img/product/granny-smith.png',
        price: '2,00',
        currency: 'USD'
    },
    {
        id: 2,
        name: 'Strawberries',
        imageUrl: 'img/product/strawberries.png',
        price: '8,00',
        currency: 'USD'
    },
    {
        id: 3,
        name: 'Blackberries',
        imageUrl: 'img/product/blackberries.png',
        price: '4,00',
        currency: 'USD'
    },
    {
        id: 4,
        name: 'Mango',
        imageUrl: 'img/product/mango.png',
        price: '2,50',
        currency: 'USD'
    },
    {
        id: 5,
        name: 'Organic Lemons',
        imageUrl: 'img/product/organic-lemons.png',
        price: '1,33',
        currency: 'USD'
    }
];

let currentIndex = 0;

function renderProducts(startIndex) {
    // Wrap the product list so that the first and last products are adjacent
    const wrappedProducts = [...products, ...products.slice(0, startIndex)];

    let productsHtml = '';
    for (let i = startIndex; i < startIndex + 4; i++) {
        const product = wrappedProducts[i];
        productsHtml += `
            <li class="top-picks__item">
                <article class="top-picks__card">
                    <img class="top-picks__card-img" src="${product.imageUrl}" alt="${product.name}">
                    <a class="top-picks__card-link" href="#">${product.name}</a>
                    <p class="top-picks__card-price">${product.price}<span class="top-picks__product-currency">${product.currency}</span></p>
                    <div class="top-picks__card-button-button-wrapper">
                        <button class="top-picks__card-button">Buy Now</button>
                    </div>
                </article>
            </li>`;
    }
    document.querySelector('.top-picks__list').innerHTML = productsHtml;
}

function scrollProducts(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % products.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
    }
    renderProducts(currentIndex);
}

document.querySelector('.top-picks__button-prev').addEventListener('click', () => {
    scrollProducts('prev');
});

document.querySelector('.top-picks__button-next').addEventListener('click', () => {
    scrollProducts('next');
});

// Render the initial set of products
renderProducts(currentIndex);
