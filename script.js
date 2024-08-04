const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const prev = () => {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImg();
};

const next = () => {
    counter = (counter + 1) % slides.length;
    slideImg();
};

const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    
    document.getElementById('currentSlide').textContent = counter + 1;
};

document.getElementById('totalSlides').textContent = slides.length;
slideImg();