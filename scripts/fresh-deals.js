function ChangeSelectedTab(id){
    const elements = document.querySelectorAll(".fresh_deals__main__tabs__element");
    Array.from(elements).map(el => {
        if (el.id === id){
            el.classList.add("selected");
            ChangeTab(el.id)
        } else {
            el.classList.remove("selected");
        }
    })
}
function ChangeTab(id){
    const tab_id = "tab_" + id.split("-")[1];
    const elements = document.querySelectorAll(".fresh_deals__tab");
    Array.from(elements).map(el => {
        if (el.id === tab_id){
            el.style.display = "block";
        } else {
            el.style.display = "None";
        }
    })
}

function Secret(){
    document.querySelector("body").innerHTML = `
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/YRvOePz2OqQ?si=NY-0gjiraXoHKFk7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay="1" controls="0"></iframe>
    `
}
//          █▀▀▀▄            █▀▀▀▄
//    █     █   █    ▄▀▀▀▄   █   █      █
//   █ █    █▀▀▀▄    █   █   █▀▀▀▄     █ █
//  █===█   █   █    █   █   █   █    █===█
// █     █  █▄▄▄█    ▀▄▄▄▀   █▄▄▄█   █     █

