const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
}
$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $(".toggle-collapse");

  /* toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  })
  // owl-carousel for blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    dots: true,
    nav: true,
    responsive: responsive
    // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
  });

  // click to scroll top
  $('.move-up span').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1500);
  })

  // AOS
  AOS.init();
});