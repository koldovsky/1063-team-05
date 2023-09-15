
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
    const tab_id = "tab_" + id.split("-")[1];
    const elements = document.querySelectorAll(".fresh_deals__tab");
    Array.from(elements).map(el => {
        if (el.id === tab_id) {
            el.classList.remove('fresh_deals__hidden_tab');
        } else {
            el.classList.add('fresh_deals__hidden_tab');
        }
    })
}