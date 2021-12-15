const init = function(){
    const ongoing = document.querySelector(".booking_ongoing");
    const bookingColumnHover = document.querySelector(".booking_column-hover");

    // bookingColumnHover.addEventListener("mouseover",()=>{
    //     ongoing.classList.toggle("is-show");
    // })

    window.addEventListener("scroll", function(){
       let scroll = window.scrollY;
       
       if(scroll > 1330) {
           ongoing.classList.toggle("is-show");
           document.querySelector(".booking_ongoing-range").style.transform = "translateX(0)";
       }
    })
    // const animationStart = function (){
    //     let style = window.getComputedStyle(ongoing);
    //     let opacity = style.getPropertyValue("opacity");
    //     if
    //      console.log(opacity);
    // }
    // animationStart();

    document.addEventListener("click", function(e){
        
        if(e.target.id == "dislike") fillHeart();
        if(e.target.id == "like") fillHeart();
    })

    const fillHeart = function(){
        document.querySelector(".heart-notfill").classList.toggle("active");
        document.querySelector(".heart-fill").classList.toggle("active");
    }
}
init();