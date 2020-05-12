const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
        
    burger.addEventListener('click', ()=>{
    //Togle Nav
        nav.classList.toggle('nav-active');


    //Animate Links
    navLinks.forEach((link, index)=>{
        if (link.style.animation) {
            link.style.animation = '';
        }   else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
        }
    });

    //Burger animation
    burger.classList.toggle('toggle');

    });

}

const carouselSlide = document.querySelector('.carousel-slide')
const carosuelImages = document.querySelectorAll('.carousel-slide img')

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carosuelImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'


//Button Listners

nextBtn.addEventListener('click',()=>{
    if (counter >= carosuelImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'

});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
    
});

carouselSlide.addEventListener('transitionend', ()=>{
   if (carosuelImages[counter].id === 'lastClone'){
       carouselSlide.style.transition = "none";
       counter = carosuelImages.length -2 ;
       carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
       
   } 

   if (carosuelImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carosuelImages.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
    
} 


});

navSlide(); 