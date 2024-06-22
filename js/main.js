var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  var currentIndex = 0;

  function showNextSlide() {
      var slides = document.querySelector('.slides');
      var totalSlides = document.querySelectorAll('.slide').length;
  
      currentIndex++;
      if (currentIndex >= totalSlides) {
          currentIndex = 0;
      }
  
      var offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }
  
  
  setInterval(showNextSlide, 3000);




  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}
