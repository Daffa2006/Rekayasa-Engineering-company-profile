 // Navbar Logic
 const hamburger = document.querySelector('#hamburger');
 const navItems = document.querySelector('.nav-items');
 const bodyOverlay = document.querySelector('.body-overlay')
 hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('hamburger-active');
   navItems.classList.toggle('show-sidebar-nav');
   bodyOverlay.classList.toggle('hidden');
 })

 const navDropdown = document.querySelector('.nav-dropdown');
 const dropdownList = document.querySelector('.dropdown-list')
 const navArrow = document.querySelector('.nav-arrow');
 navDropdown.addEventListener('click', function () {
   navArrow.classList.toggle('arrow-expand')
   dropdownList.classList.toggle('dropdown-list-show')
 })

 // Video Player 
 const videoContainer = document.querySelector('.video-container');
 const video = document.querySelector('.video-player');
 const videoOverlay = document.querySelector('.video-overlay');

 videoContainer.addEventListener('mouseover', (e) => {
  if (video.paused === false) {
    video.setAttribute('controls', "");
  }
 })
 videoContainer.addEventListener('mouseout', (e) => {
  if (video.paused === false) {
    video.removeAttribute('controls', "");
  }
 })
 videoContainer.addEventListener('click', () => {

   if (video.paused) {
    
     video.toggleAttribute('controls','')
     video.play()
   } else {
    
     video.setAttribute('controls', '')
     video.pause()
   }
 })

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