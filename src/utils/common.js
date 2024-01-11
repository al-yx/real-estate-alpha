export const sliderSettings ={
    slidesPerView: 4,
    spaceBetween:50,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        400: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        600: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        750:{
            slidesPerView:3,
            spaceBetween:50
        },
        1100:{
            slidesPerView:4,
            spaceBetween:60
        }
}
}