// Sticky header
let headerWrapper = document.querySelector(".header-wrapper");

window.onscroll = () => {
    headerWrapper.style.background = document.documentElement.scrollTop > 200 ? "#fdf9f2" : "transparent";
}

// Nav toggle
$(".nav-btn").click( () => {
    $("nav").slideToggle();
});

// Opening submenu
$(".opening-item").first().click( function() {
    $(".submenu").first().slideToggle();
});

$(".opening-item").last().click( function() {
    $(".submenu").last().slideToggle();
});