/* Kravchuk Dmytro */
const response = await fetch('api/products.json');
const products = await response.json();

let currentIndex = 0;

function renderProducts(startIndex) {
    // Wrap the product list so that the first and last products are adjacent
    const wrappedProducts = [...products, ...products.slice(0, startIndex)];

    let productsHtml = '';
    for (let i = startIndex; i < startIndex + 5; i++) {
        const product = wrappedProducts[i];
        productsHtml += `
            <li class="top-picks__item">
                <article class="top-picks__card">
                    <img class="top-picks__card-img" src="img/product/${product.image}" alt="${product.title}">
                    <a class="top-picks__card-link" href="#">${product.title}</a>
                    <p class="top-picks__card-price">${product.price.toFixed(2)}<span class="top-picks__product-currency">${product.currency}</span></p>
                    <div class="top-picks__card-button-button-wrapper">
                        <button type="button" class="top-picks__card-button btn-buy" data-id=${product.id}>Buy Now</button>
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
