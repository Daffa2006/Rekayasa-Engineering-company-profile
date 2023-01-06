 
 // Navbar Logic
 const hamburger = document.querySelector('#hamburger');
 const navItems = document.querySelector ('.nav-items');
 const bodyOverlay = document.querySelector('.body-overlay')
 hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navItems.classList.toggle('show-sidebar-nav');
  bodyOverlay.classList.toggle('hidden');
  })

  const navDropdown = document.querySelector('.nav-dropdown');
  const dropdownList = document.querySelector('.dropdown-list')
  const navArrow = document.querySelector('.nav-arrow');
  navDropdown.addEventListener('click', function() {
    navArrow.classList.toggle('arrow-expand')
    dropdownList.classList.toggle('dropdown-list-show')
  })
  // industries Gallery Logic
  // const galleries = document.querySelectorAll(".swiper-gallery-industries .swiper-slide")
  // console.log(galleries)
  // galleries.forEach(gallery => {
  //   if (gallery.classList.contains('swiper-slide-active')) {
  //     gallery
  //   }
  // })

 
 
 new Swiper(".swiper-industries", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
      });

new Swiper(".ourClient", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
      });

new Swiper(".swiper-gallery-industries", {
  
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
  
  // breakpoints: {
  //   0 : {
  //     slidesPerView: 2,
  //   },
  //   640 : {
  //     slidesPerView : 3,
  //   },
  //   1024: {
  //     slidesPerView : 4,
  //   }
  // }
      });

 new Swiper(".swiper-news", {
        slidesPerView: 'auto',
        spaceBetween: 32,
        freeMode: true,
      
      });