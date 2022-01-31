
<script type="text/javascript">
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
</script>