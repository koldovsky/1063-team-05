const slides = [
    '<div><img class="partner-logos" src="https://res2.weblium.site/res/603426f1a34a270022c1936a/605c1b404b57bd002104aa91_optimized_500_e549x329-24x14?nowebp" alt="Agro Chomutice Logo"></div>',
    '<div><img class="partner-logos" src="/img/partners/syngenta.png" alt="Syngenta Logo"></div>',
    '<div><img class="partner-logos" src="/img/partners/greenpointag.png" alt="GreenPoint AG Logo"></div>',
    '<div><img class="partner-logos" src="/img/partners/dairyfarm.png" alt="Dairy Farm Logo"></div>',
    '<div><img class="partner-logos" src="/img/partners/helena.png" alt="Helena Logo"></div>',
    '<div><img class="partner-logos" src="https://res2.weblium.site/res/603426f1a34a270022c1936a/605c1b3facb1ce0022ac5b7d_optimized_500_e543x325-21x12?nowebp" alt="O-BASF The Chemical Company Logo"></div>'
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.partners__carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIdx];
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

/*function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}*/

setInterval(nextSlide, 2000);

/*renderSlide();

const nextBtn = document.querySelector('.partners__carousel-btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.partners__carousel-btn-prev');
nextBtn.addEventListener('click', prevSlide);*/