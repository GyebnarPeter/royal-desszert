let headerWrapper = document.querySelector(".header-wrapper");

window.onscroll = () => {
    headerWrapper.style.background = document.documentElement.scrollTop > 200 ? "#fdf9f2" : "transparent";
}