const card = {
    "fruits": [
        {
            "name": "Fresh Figs",
            "image": "img/fresh-deals/figs.png",
            "price": "5.00",
            "product_page": "#",
            "alt": "figs"
        },
        {
            "name": "Lime",
            "image": "img/fresh-deals/lime.png",
            "price": "1.00",
            "product_page": "#",
            "alt": "lime"
        },
        {
            "name": "Peaches",
            "image": "img/fresh-deals/peaches.png",
            "price": "3.00",
            "product_page": "#",
            "alt": "peaches"
        },
        {
            "name": "Tangerines",
            "image": "img/fresh-deals/tangerines.png",
            "price": "2.00",
            "product_page": "#",
            "alt": "tangerines"
        }
    ],
    "vegetables": [
        {
            "name": "Bell Paper",
            "image": "img/fresh-deals/bell-peppers.png",
            "price": "8.00",
            "product_page": "#",
            "alt": "bell-peppers"
        },
        {
            "name": "Tomatoes",
            "image": "img/fresh-deals/tomatoes.png",
            "price": "4.00",
            "product_page": "#",
            "alt": "tomatoes"
        },
        {
            "name": "Carrots",
            "image": "img/fresh-deals/carrot.png",
            "price": "1.60",
            "product_page": "#",
            "alt": "Carrots"
        },
        {
            "name": "Pumpkin",
            "image": "img/fresh-deals/pumpkin.png",
            "price": "1.50",
            "product_page": "#",
            "alt": "figs"
        }
    ],
    "berries": [
        {
            "name": "Blueberries",
            "image": "img/fresh-deals/blueberries.png",
            "price": "5.00",
            "product_page": "#",
            "alt": "Blueberries"
        },
        {
            "name": "Red grapes",
            "image": "img/fresh-deals/red-grapes.png",
            "price": "3.00",
            "product_page": "#",
            "alt": "Red grapes"
        },
        {
            "name": "Watermelon",
            "image": "img/fresh-deals/watermelon.png",
            "price": "6.00",
            "product_page": "#",
            "alt": "Watermelon"
        },
        {
            "name": "Raspberries",
            "image": "img/fresh-deals/raspberrys.png",
            "price": "3.00",
            "product_page": "#",
            "alt": "Raspberries"
        }],
    "nuts": [
        {
            "name": "Cashew Nuts",
            "image": "img/fresh-deals/cashew.png",
            "price": "13.00",
            "product_page": "#",
            "alt": "Cashew Nuts"
        },
        {
            "name": "Macadamia Nuts",
            "image": "img/fresh-deals/macadami.png",
            "price": "16.00",
            "product_page": "#",
            "alt": "Macadamia Nuts"
        },
        {
            "name": "Raw Walnuts",
            "image": "img/fresh-deals/raw-walnut.png",
            "price": "9.00",
            "product_page": "#",
            "alt": "Raw Walnuts"
        },
        {
            "name": "Pistachios",
            "image": "img/fresh-deals/pistachios.png",
            "price": "12.00",
            "product_page": "#",
            "alt": "Pistachios"
        }]
}

function addTabListener() {
    Array.from(document.querySelectorAll(".fresh_deals__main__tabs__element")).map(
        el => {
            el.addEventListener("click", function (e) {
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
    element.innerHTML= '';
    card[tab_id].forEach(data => {
        element.innerHTML += `
<div class="fresh_deals__main__cards__card p-2 d-flex flex-column align-items-center">
  <img class="fresh_deals__main__card__img mb-2" src="${data.image}" alt="${data.alt}">
  <div class="fresh_deals__main__card_header">
    <h5 class="fresh_deals__card__title">${data.name}</h5>
    <p class="fresh_deals__card__price">${data.price + "USD"}</p>
    <button onclick="window.location.href = '${data.product_page}';" class="fresh_deals__card__button mb-4">Buy Now</button>
  </div>
</div>
`
    })
}
changeTab("tab-fruits");
addTabListener();