
/* slick */
  $(document).on('ready', function() {
    $(".c-slick__slider").slick({
      arrows:true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 980, //PC
          settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          },
        },
        {
          breakpoint: 769, //SP
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          },
        },
      ],
    });
  });
/* slick */
/* navigation */
  $(document).ready(function(){
    $('.menu').on('click',function(){
      $('.c-navSP__wrap').addClass('open');
      $('body').addClass('noscroll');
    });
    $('.closeButton').on('click',function(){
      $('.c-navSP__wrap').removeClass('open');
      $('body').removeClass('noscroll');
    });
  });
/* navigation */
/* floatingBanner */
$(function () {
  var display = function () {
  if ($(this).scrollTop() > 150) {
          $(".c-floatingBanner").fadeIn();
      } else {
          $(".c-floatingBanner").fadeOut();
      }
  };
  $(window).on("scroll", display);
  //close>click
  $(".c-floatingBanner__closeButton").on('click',function(){
    $('.c-floatingBanner').toggleClass('__close');
  });
});
/* floatingBanner */