// * 모바일 사이드 열기
$('.icon_more a').click(function(e){
    e.preventDefault();
    $('#mo_side').stop().animate({right : 0});
    $('.mside_close').stop().animate({right : 0});
    $('body').css({overflow : 'hidden'});
});

// * 모바일 사이드 닫기
$('.mside_close a').click(function(e){
    e.preventDefault();
    $('#mo_side').stop().animate({right : '100%'});
    $('.mside_close').stop().animate({right : '100%'});
    $('body').css({overflow : 'visible'});
});

// 모바일 - gnb 아코디언
$('.mo_gnb .d1 button').click(function(e){
    e.preventDefault();
    let dis = $(this).parent('.d1').siblings('.depth2').css('display');
    if(dis == 'none'){
        $('.mo_gnb .d1 button').removeClass('active');
        $('.mo_gnb .depth2').stop().slideUp();
        $(this).addClass('active');
        $(this).parent('.d1').siblings('.depth2').slideDown(function(){
        });
    } else {
        $('.mo_gnb .d1 button').removeClass('active');
        $('.mo_gnb .depth2').stop().slideUp(function(){
        });
    }
});

// PC - gnb
$('.top_gnb > ul > li').mouseover(function(){
    $('.top_gnb .depth2').stop().slideUp();
    $(this).find('.depth2').stop().slideDown();
}).mouseout(function(){
    $(this).find('.depth2').stop().slideUp();
})