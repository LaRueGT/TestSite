let navBar;
let navTop;

window.addEventListener("DOMContentLoaded", function(){
    navBar = document.querySelector("nav");
    navTop = navBar.offsetTop;

    window.addEventListener("scroll", stickyNavBar);
});

function stickyNavBar(){
    console.log("scrolled")
    if (window.scrollY >= navTop){
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

