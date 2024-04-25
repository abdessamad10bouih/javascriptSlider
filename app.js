const sliderContainer = document.querySelector(".container");
const slides = sliderContainer.querySelectorAll(".image");
let currentSlide = 0;

function slider(n) {
    gsap.from(slides[currentSlide].querySelector("h1"), { y: 50, opacity: 0, duration: 0.5 });
    gsap.from(slides[currentSlide].querySelector("p"), { y: 50, opacity: 0, duration: 0.5 });
    gsap.from(slides[currentSlide].querySelector(".show-button"), { y: 50, opacity: 0, duration: 0.5 });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[n].classList.add("active");
    gsap.to(slides[n].querySelector("h1"), { y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
    gsap.to(slides[n].querySelector("p"), { y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
    gsap.to(slides[n].querySelector(".show-button"), { y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
    currentSlide = n;
}
function autoplay() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slider(currentSlide);
}

const intervalId = setInterval(autoplay, 3000);

