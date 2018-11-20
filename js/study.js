$(function(){

    var ls = 3
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        ls = 1
    } else {
        ls = 3
    }

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: ls,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.studentRight',
        prevEl: '.studentLeft',
      },
    });
})