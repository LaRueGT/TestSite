const navBar = document.querySelector("nav");
const navTop = navBar.offsetTop;

const bookIndicator = document.querySelector(".book-indicator");
const dropMenu = document.querySelector(".drop-menu");

function toggleDropDown() {
    if (dropMenu.style.display === "none") {
        dropMenu.style.display = "flex";
    } else {
        dropMenu.style.display = "none";
    }
}

function stickyNavBar() {
    if (window.scrollY >= navTop) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

bookIndicator.addEventListener("click", toggleDropDown);
window.addEventListener("scroll", stickyNavBar);
