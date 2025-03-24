let index = 0;

function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    let offset = -index * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

setInterval(() => {
    nextSlide();
}, 3000); // Auto-slide every 3 seconds
