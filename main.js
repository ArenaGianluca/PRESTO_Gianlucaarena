let navbar_= document.querySelector("#navbar_")
let nav_link = document.querySelectorAll("#nav-link")
let nav_logo = document.querySelector("#nav-logo")

window.addEventListener("scroll", ()=> {

    let scrolled = window.scrollY;

    // console.log(scrolled);

    if(scrolled > 0){
        changeNavbar("navbar-custom", "navbar-custom2", "logoverde", "rgb(118, 133, 76)", "rgb(200, 148, 108)");
    }else{
        changeNavbar("navbar-custom2", "navbar-custom1", "logomarrone", "rgb(200, 148, 108)", "rgb(118, 133, 76)");
    }


})

function changeNavbar(navbar, navbar2, imglogo, linkColore1, linkColore2){


}