let navbar_= document.querySelector("#navbar_")
let nav_link = document.querySelectorAll("#nav-link")
let nav_logo = document.querySelector("#nav-logo")
let icon_link = document.querySelectorAll(".icon-link")



window.addEventListener("scroll", ()=> {

    let scrolled = window.scrollY;

    // console.log(scrolled);

    if(scrolled > 0){
        
        changeNavbar("navbar-custom2", "navbar-custom", "logomarrone", "rgb(200, 148, 108)", "rgb(118, 133, 76)");
    }else{
        
        changeNavbar("navbar-custom", "navbar-custom2", "logoverde", "rgb(118, 133, 76)", "rgb(200, 148, 108)");
    }


})

function changeNavbar(navbar1, navbar2, imglogo, linkColore1, linkColore2){

    navbar_.classList.add(navbar1);
    navbar_.classList.remove(navbar2);

    nav_logo.src= `./media/${imglogo}.png`

    nav_link.forEach( (link)=>{
        link.style.color = linkColore1
        link.addEventListener("mouseover", () => {
            link.style.color = linkColore2
        })
        link.addEventListener("mouseleave", ()=> {
            link.style.color= linkColore1
        })
    })
    icon_link.forEach( (link)=>{
        link.style.color = linkColore1
        link.addEventListener("mouseover", () => {
            link.style.color = linkColore2
        })
        link.addEventListener("mouseleave", ()=> {
            link.style.color= linkColore1
        })
    })
}
