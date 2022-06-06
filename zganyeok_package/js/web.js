$(function(){
    const webLi = document.querySelectorAll(".web_list li");
    const close = document.querySelector(".close");
    const iframe = document.querySelector("#the_iframe");
    const blur = document.querySelector(".blur");

$(webLi).click(function(){

  $(iframe).removeClass('off');
  close.style.display="block";
  // $(webLi).not(this).style.zIndex=-1;
  $(blur).fadeIn(400);
});
$(close).click(function(){
  $(iframe).addClass('off');
this.style.display="none";
$(blur).fadeOut(400);
});


});