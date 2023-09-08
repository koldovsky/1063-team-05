function ChangeSelectedTab(id){
    const elements = document.querySelectorAll(".fresh_deals__main__tabs__element");
    Array.from(elements).map(el => {
        if (el.id === id){
            el.classList.add("selected")
        } else {
            el.classList.remove("selected")
        }
    })
}

