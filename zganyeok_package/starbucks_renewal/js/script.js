$(function(){

// menu
$('.bottomMenu>ul>li>a').mouseenter(function(){
   $(this).siblings('.fullMenu').stop().slideDown(500)
});
$('.bottomMenu>ul>li').mouseleave(function(){
   $('.fullMenu',this).stop().hide()
});



$('.gnbSearch>.inputImg').click(function(){
   $('.gnbSearch>.inputTxt').show(0).animate({'width':'120px'},300)
   return false;
});
$(document).click(function(e){
   if(!$(e.target).is('.inputTxt')){
   $('.gnbSearch>.inputTxt').animate({'width':'0px'},300).hide(0)
   return false;}
});


// scroll
$(window).scroll(function(){
   var Wheight = $(window).scrollTop();
   if(Wheight>100){
      $('.scroll').fadeOut(200)}
      else if(Wheight<=100){
         $('.scroll').fadeIn(200)
      }
});


});