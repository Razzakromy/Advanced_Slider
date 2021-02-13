$(".slider").slick({
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Typed

  const options = {
    strings: [' <strong>Advanced Slider</strong>  - Abdur Razzak Romy'],
    typeSpeed: 0,
    backSpeed: 0,
    cursorChar: ' *_*',
    shuffle: true,
    smartBackspace: true,
    loop: false
  };

  const typed = new Typed(".type", options);