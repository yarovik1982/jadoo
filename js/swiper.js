    
    
    
//    document.querySelectorAll(".swiper-container").forEach(function(index, value){

    
const swiper = new Swiper(".swiper", {
    
    direction: 'vertical',
    loop: true,
    autoplay:true,
  
    
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class= ${className} ></span>`;
        },
      el: '.swiper-pagination-castom',
    
    },
  
    
    navigation: {
        clickable: true,
    nextEl: `<div class="btn-next"><img src="/images/icons/arrow-up.svg" alt=""></div>`,
    prevEl: `<div class="btn-prev "><img src="/images/icons/arrow-down.svg" alt=""></div>`,
    
    },


  });
// })