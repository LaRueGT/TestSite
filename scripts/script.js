const navBar = document.querySelector("nav");
const navTop = navBar.offsetTop;

function stickyNavBar(){
    if (window.scrollY >= navTop){
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", stickyNavBar);
