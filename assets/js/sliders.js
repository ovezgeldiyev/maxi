$(".slider").slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".slider2").slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/*mobile slider */
function mobileOnlySlider() {
  $(".packageSlider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if (window.innerWidth < 1025) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 1025) {
    $(".packageSlider").addClass("sliderMob");
    if (!$(".packageSlider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".packageSlider").removeClass("sliderMob");
    if ($(".packageSlider").hasClass("slick-initialized")) {
      $(".packageSlider").slick("unslick");
    }
  }
}
resizeListener();

$(window).resize(resizeListener);
