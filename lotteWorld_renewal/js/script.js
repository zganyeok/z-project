$(function(){
    // $('.quick_box').on('click',function(){
    //     $('#quick').fadeIn(200);
    //     $(this).addClass('on').children('p').hide();
    // });
    
    // $('.black_box').on('click',function(){
    //     $('#quick').fadeOut(200);
    //     $('.quick_box').removeClass('on').children('p').show();
    // });
    

// ============= Quick ==============
    var $btnQuick=$('.quick_box');
    var $quick=$('#quick');

        $btnQuick.on('click',function(){
            $(this).toggleClass('on');
            $quick.toggle();
        });
        
    $('.black_box').on('click',function(){
             $('#quick').hide();
             $btnQuick.removeClass('on');
    });

// ============= menu ==============
$('.mainmenu>li').mouseenter(function(){
    $(this).children('.submenu').stop().slideDown();
    $(this).siblings().children('.submenu').hide();
});
$('.mainmenu>li').mouseleave(function(){
    $(this).children('.submenu').slideUp();
});


// ============= tab ==============
$('.event h2').on('click',function(){
    $(this).addClass('on').siblings('h2').removeClass('on')

    var showBox=$(this).next('div');

    showBox.show().siblings('div').hide();
});

// ============= move_top ==============
$(window).scroll(function(){
    if($(this).scrollTop()>5050){
        $('.move_top').fadeIn();
    }else{
        $('.move_top').fadeOut();
    }
});

$('.move_top').on('click',function(){
 $('html,body').animate({scrollTop:0},'1000');

});

});