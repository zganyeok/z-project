$(function(){
// 비디오 재생 
const pptLi = document.querySelectorAll('ul.ppt_list>li>a');
const video = document.querySelector('#video');
const videoSrc = document.querySelector('#video_src');

video.load();
$(pptLi).click(function(){

    $(videoSrc).attr("src",$(this).attr("value"));

    video.load();
    video.play();
$(this).addClass('on');
$(pptLi).not(this).removeClass('on');

});

// 텍스트

$(pptLi).click(function(){

    var x = $(this).parent('li').index();
    
    $('.text>li').eq(x).addClass('on').siblings().removeClass('on');
});

// 썸네일 좌우 버튼
$('.r_btn').click(function(){
    $('ul.ppt_list').addClass('on');
    $(this).fadeOut(300);
    $('.l_btn').fadeIn(300);
   
});
$('.l_btn').click(function(){
    $('ul.ppt_list').removeClass('on');
    $(this).fadeOut(300);
    $('.r_btn').fadeIn(300);
   
});






});