let slideIndex = 0;
slideShow();

function slideShow() {
    let sliderPage = document.querySelectorAll(".slider-page");
    let sliderDot = document.querySelectorAll(".dot");
    for(let i = 0; i < sliderPage.length; i++) {
        sliderPage[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > sliderPage.length) {slideIndex = 1};
    for (i = 0; i < sliderDot.length; i++) {
        sliderDot[i].className = sliderDot[i].className.replace(" active-dot", "");
      }
    sliderPage[slideIndex - 1].style.display = "flex";
    sliderDot[slideIndex-1].className += " active-dot";
    setTimeout(slideShow, 10000);
};