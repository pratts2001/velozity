$(document).ready(function () {
    var targert = $('.nav-ham-icon i').attr('data-target');

    $('.nav-ham-icon i').click(function () {
        $('#' + targert).toggleClass(" active")
    })

    $('.nav-link-btn').click(function () {
        $('#' + targert).removeClass(" active")
    })

    setTimeout(sliding, 3000);
})

//slider

const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

$('.dot').click(function () {
    const slide = $(this).attr('data-slide')
    currSlide = slide;
    clearTimeout(toStop);
    sliding();
});

let currSlide = 0;

slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`
});



function sliding() {
    if (currSlide > (slides.length - 1))
        currSlide = 0;

    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - currSlide)}%)`
    });

    activateDot(currSlide);

    currSlide++;

    toStop = setTimeout(sliding, 3000);
}

function activateDot(slide) {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
}