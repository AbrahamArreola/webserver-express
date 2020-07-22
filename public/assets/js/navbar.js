const homeItem = document.getElementById("home-item");
const aboutItem = document.getElementById("about-item");

const currentPage = window.location.pathname;
let currentActive = homeItem;

switch(currentPage){
    case "/":
        currentActive.setAttribute("class", "nav-item");
        homeItem.setAttribute("class", "nav-item active");
        currentActive = homeItem;
    break;

    case "/about":
        currentActive.setAttribute("class", "nav-item");
        aboutItem.setAttribute("class", "nav-item active");
        currentActive = aboutItem;
    break;
}