const parallax = document.querySelector(".hero-section");
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
//   // DIV 1 background will move slower than other elements on scroll.
// })
var swiper = new Swiper(".review-slider", {
spaceBetween:20,
centeredSlides:true,
autoplay:{
   delay:7500,
   disableOnInteraction:false,
},
loop:true,
breakpoints: {
   0: {
       slidesPerView:1,
   },
   640:{
       slidesPerView:2,
   },
   768:{
       slidesPerView:2,
   },
   1024:{
       slidesPerView:3,
   },
},
});

window.addEventListener('load', () => {
    AOS.init({
        duration: 500,
        easing: 'fade-up',
        once: true,
        mirror: false
    })
});

const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector('.hamburger')
let scrollLength = 3
hamburger.addEventListener('click', () => {
 let val = hamburger.querySelector('i')
 val.classList.toggle('fa-remove')
 navbar.classList.toggle('active')
})