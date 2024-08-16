






/* const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }

}); */

/* const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext(); */

//GALLERY

// set the index of the picture in the slideshow to 1
let slideIndex = 1;
//Show the first slide
showSlides(slideIndex);


//Next/Previous controls.  This function will skip ahead n slides and show that slide.
 function plusSlides(n) {
    showSlides(slideIndex += n);
} 

//This sets slideIndex to n and then shows the nth slide. 

/*  function currentSlide(n) {
    showSlides(slideIndex = n);
}  */


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndex = 1 
    } if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
   /*  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    } */
    slides[slideIndex-1].style.display = "block";
    //  dots[slideIndex-1].className += " active";
}




  

  


