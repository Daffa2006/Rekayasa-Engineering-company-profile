const projects = [...document.querySelectorAll('.projects > *')].filter(item => !item.classList.contains('line-between-swiper'))

console.log(projects)
for (let i = 1; i <= projects.length; i++) {
  new Swiper(`.swiper-re-${i}`, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    navigation: false,
    breakpoints: {
      1024: {
        navigation: {
          nextEl: `.chevron-button-next-${i}`,
          prevEl: `.chevron-button-prev-${i}`,
        },
      }
    }
  });
  console.log(i)
}
