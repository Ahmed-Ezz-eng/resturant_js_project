/*global document,window,setTimeout*/

var img = document.querySelector(".home-img");

var i = 0,
    images = ["images/slider/bg1.jpg", "images/slider/bg2.jpg", "images/slider/bg3.jpg", " images/slider/bg4.jpg"];

function changeImg() {
    "use strict";
    img.src = images[i];
    if (i < images.length - 1) {
        i += 1;
    } else {
        i = 0;
    }
    setTimeout(changeImg, 3000);
}

/*  Chat box */

document.querySelector(".chat-icon").addEventListener("click", () => {
    document.querySelector(".chatbox").classList.toggle("activeComment");
});

window.onload = function () {
    setTimeout(function () {
        document.querySelector(".chatbox").classList.add("activeComment");
    }, 3000);
    
     /*  slider images function */
    changeImg();
    
//    if(menuMobile.hasAttribute("class")){
//        document.querySelector(".chatbox").style.display = "none";
//    }
   
}

/*  Sticky Navbar */

var menuMobile = document.querySelector("nav ul");
var goTop = document.getElementsByClassName("goup");
window.onscroll = () => {
    var nav = document.querySelector("nav");
    
    if (window.scrollY) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
    menuMobile.classList.remove("showMobileMenu");
    
//    Go top button
    
    if (scrollY >= 800) {
        goTop[0].classList.add("showGoUp");
    } else {
        goTop[0].classList.remove("showGoUp");
    }
}

goTop[0].addEventListener("click", function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

/*  Show Mobile Menu */

var bars = document.querySelector(".fa-bars");
bars.addEventListener("click", () =>{
    menuMobile.classList.toggle("showMobileMenu");
})

/* Hide Mobile Menu on click Link */

var links = document.querySelectorAll("nav a");

links.forEach((link) =>{
    link.addEventListener("click", ()=>{
        menuMobile.classList.toggle("showMobileMenu");
    });
});

/* Show Color Menu */

var cog = document.querySelector(".icon-cog");
cog.addEventListener("click", () =>{
    var colorMenu = document.querySelector(".colorMenu");
    colorMenu.classList.toggle("showColorMenu");
})

/*   change color Menu */

function setColor(colorName) {
    $(".alter").attr("disabled", "true");
    $(".alter[title = "+colorName+"]").removeAttr("disabled");
}

 /*  Modal */

var model = document.querySelector(".model");
var modelDescImg = document.querySelectorAll(".modalDescImage");
var closeModel = document.querySelector(".closeModel");
var modelImg = document.querySelector(".model img");

modelDescImg.forEach((img) =>{
    img.addEventListener("click", ()=>{
        model.classList.add("showModel");
        modelImg.src = img.src;
    })
})
closeModel.onclick = () =>{
     model.classList.remove("showModel");
}


/*  Scroll to section */

var links = document.querySelectorAll(".nav-link");

links.forEach((link) => {

    link.addEventListener("click", () => {
        var el = document.querySelector('.' + link.getAttribute("data-link"));
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/*  swiper slider product images */

 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
     loop: true,
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
     },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
    });


$(function(){
    
    /* circle progress*/
    
  $('.circlechart').circlechart();
    
    /* image gallery */
    $('.menu .menu-list li').click(function () {
        var value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.imgFilter').show(1000);
        } else {
            $('.imgFilter').not('.'+value).hide(1000);
            $('.imgFilter').filter('.'+value).show(1000);
        }
    });
    
    $('.menu .menu-list li').click(function () {
        $(this).addClass('active-menu').siblings().removeClass('active-menu');
    });

}); 