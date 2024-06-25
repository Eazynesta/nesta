var typed = new Typed(".text",{
    strings:["Frontend Developer","Youtuber","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var projectSlider = new Swiper('.projects-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500, // Delay between slides in milliseconds
      disableOnInteraction: false, // Keep autoplay running after user interactions
    },
  });

  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const filter = this.getAttribute('data-filter');
      const slides = document.querySelectorAll('.swiper-slide');
  
      slides.forEach(slide => {
        if (filter === 'all' || slide.getAttribute('data-category') === filter) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
  
      // Update Swiper after filtering
      projectSlider.update();
    });
  });
  

