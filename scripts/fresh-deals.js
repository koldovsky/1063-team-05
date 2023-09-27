let card;

async function prepareCards() {
    const res = await fetch('https://api.npoint.io/6e3f87b46aa07989b83f', {
        headers: {
            "Access-Control-Allow-Origin": "api.npoint.io",
        },
    });
    card = await res.json();
}

function addTabListener() {
    Array.from(document.querySelectorAll(".fresh_deals__main__tabs__element")).map(
        el => {
            el.addEventListener("click", function () {
                changeSelectedTab(this.id);
            });
        }
    );
}


function changeSelectedTab(id) {
    const elements = document.querySelectorAll(".fresh_deals__main__tabs__element");
    Array.from(elements).map(el => {
        if (el.id === id) {
            el.classList.add("selected");
            changeTab(el.id)
        } else {
            el.classList.remove("selected");
        }
    })
}

function changeTab(id) {
    const tab_id = id.split("-")[1];
    const element = document.querySelector(".fresh_deals__main__cards");
    element.innerHTML = '';
    card[tab_id].forEach(data => {
        element.innerHTML += `
<div class="fresh_deals__main__cards__card p-2 d-flex flex-column align-items-center">
  <img class="fresh_deals__main__card__img mb-2" src="${data.image}" alt="${data.alt}">
  <div class="fresh_deals__main__card_header">
    <a href="${data.productPage}" class="fresh_deals__card__title">${data.name}</a>
    <p class="fresh_deals__card__price">${data.price.toFixed(2) + data.currency}</p>
    <button onclick="window.location.href = '${data.productPage}'" class="fresh_deals__card__button mb-4">Buy Now</button>
  </div>
</div>
`
    })
}

prepareCards().then(() => {
    changeTab("tab-fruits");
    addTabListener();
});

