// 완구별 카테고리
$('.age_card').slick({
    mobileFirst : true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 5
          }
        },
        {
            breakpoint: 1439,
            settings: {
              slidesToShow: 7
            }
          }
    ]
});

$('.fl_in').slick({
    mobileFirst : true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 5
          }
        },
        {
            breakpoint: 1439,
            settings: {
              slidesToShow: 7
            }
          }
    ]
});