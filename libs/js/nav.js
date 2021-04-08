// Sticky header
let headerWrapper = document.querySelector(".header-wrapper");

window.onscroll = () => {
    headerWrapper.style.background = document.documentElement.scrollTop > 50 ? "#311c0f" : "transparent";
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