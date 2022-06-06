$(function(){

// ==============loading==============
const open_btn = document.querySelector(".open_btn");
const cursor_txt = document.querySelector(".cursor_text");

open_btn.addEventListener('click',function(){
    var exp=document.querySelector("#charge");
    var exp2=document.querySelector("#charge2");
    var bar=document.querySelector(".gauge_bar");
    var width = 5;
    var id = setInterval(frame,50);
    var link = "menu.html";
    // cursor_txt.style.display = "none";
  $(this).fadeOut(200);
  $(cursor_txt).fadeOut(200);
    bar.style.display="block";
    function frame(){
      if(width>=100){
        clearInterval(id);
        setTimeout(function(){
            location.href=link;},700);
      }else{
        width+=2.5;
        exp.style.width=width+"%";
        exp2.style.width=width+"%";
        exp.innerHTML=width+"%";
      }
    }

});


document.addEventListener('mousemove',function(e){
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  cursor_txt.style.left = mouseX + "px";
  cursor_txt.style.top = mouseY + "px";
});



});