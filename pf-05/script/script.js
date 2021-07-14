$(function(){

// 개별메뉴
$('nav>ul>li').mouseenter(function(){
    $('nav>ul>li>ul>li').slideDown(100);
});

$('nav>ul>li').mouseleave(function(){
    $('nav>ul>li>ul>li').slideUp(100);
});

var x = 0;
setInterval(function(){if(x<2){x++;}
    else{x = 0;}
    
    var sliderPosition = x*(-300)+"px";
    $(".sliderList").animate({top:sliderPosition})
    console.log(x);
}, 3000);
});