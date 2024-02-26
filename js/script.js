// 메인 배너 슬라이드
$('.main_bn_slick').slick({
    prevArrow : '.m_left',
    nextArrow : '.m_right',
    dots : true,
    appendDots : '.m_pager',
    autoplay : true,
    autoplaySpeed : 4000
});

$('.m_pause').click(function(){
    $(this).hide();
    $('.m_play').show();
    $('.main_bn_slick').slick('slickPause');
})

$('.m_play').click(function(){
    $(this).hide();
    $('.m_pause').show();
    $('.main_bn_slick').slick('slickPlay');
})

// 아이템 slick
$('.view_card').slick({
    arrows : false,
    mobileFist : true,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1439,
            settings: {
              slidesToShow: 5
            }
        }
    ]
});


