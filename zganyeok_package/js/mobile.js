$(function(){

var mHtml = $("html");
var page = 1;
var bb = document.querySelector(".bg_blue");
var bw = document.querySelector(".bg_white");
var bc = document.querySelector(".bg_cross");
var up1 = document.querySelector("#overview .left .up");
var up2 = document.querySelector("#overview .center .up");
var up3 = document.querySelector("#overview .right .up");
var up4 = document.querySelector("#motive .logo .up");
var up5 = document.querySelector("#motive .text .up");
var up6 = document.querySelector("#check .icon .up");
var up7 = document.querySelector("#color .up");
var up8 = document.querySelector("#ending .up1");
var up9 = document.querySelector("#ending .up2");
var up10 = document.querySelector("#ending .up3");
var up11 = document.querySelector("#ending .up4");
var move = document.querySelectorAll("#process ul li");
var gif = document.querySelector(".bgOn");
var whyH1 = document.querySelector("#why h1");
var whyP = document.querySelector("#why p");
var img1 = document.querySelector("#before .img");
var img2 = document.querySelector("#after .img");
var img3 = document.querySelectorAll("#menu .fadein");
var img4 = document.querySelector("#cabinet .img");

mHtml.animate({scrollTop :0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 13) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }

    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop},700);

    if(page == 1){$(bb).fadeIn(700);
                $(bw).fadeOut(700);
                $(gif).fadeOut();
                $(whyH1).removeClass("colorOn");
                $(whyP).removeClass("colorOn");
     
                };
    if(page == 2){
                $(bw).fadeIn(700);
                 $(bb).fadeOut(700);
                function fade(){
                    $(gif).fadeIn(700);
                    $(whyH1).addClass("colorOn");
                    $(whyP).addClass("colorOn");
                }
                fadeVar = setTimeout(fade,5000);
                }else{
                    clearTimeout(fadeVar);};
    if(page == 3){
                $(gif).fadeOut();
                $(whyH1).removeClass("colorOn");
                $(whyP).removeClass("colorOn");
                $(bb).fadeIn(700);
                $(bw).fadeOut(700);
                $(bc).fadeOut(700);
                
                setTimeout(function(){
                    $(up1).addClass("iconup1");
                },700);
                setTimeout(function(){
                    $(up2).addClass("iconup2");
                },1100);
                setTimeout(function(){
                    $(up3).addClass("iconup3");
                },1500);
                
            };
    if(page == 4){$(bw).fadeIn(700);
                  $(bc).fadeIn(700);
                $(bb).fadeOut(700);
                setTimeout(function(){
                    $(up4).addClass("logoup");
                },700);
                setTimeout(function(){
                    $(up5).addClass("nameup");
                },1100);
            };
    if(page == 5){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
                $(bc).fadeOut(700);};
    if(page == 6){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
                setTimeout(function(){
                    $(move).addClass("move");
                },500);
            };
    if(page == 7){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
                setTimeout(function(){
                    $(img1).fadeIn(700);
                },500);};
    if(page == 8){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
                setTimeout(function(){
                    $(img2).fadeIn(700);
                },500);};
    if(page == 9){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
                setTimeout(function(){
                    $(img3).fadeIn(700);
                },500);};
    if(page == 10){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
            setTimeout(function(){
                    $(img4).fadeIn(700);
                },500);};
    if(page == 11){$(bw).fadeIn(700);
                $(bb).fadeOut(700);
                setTimeout(function(){
                    $(up6).addClass("thumbsup");
                },700);};
            
    if(page == 12){$(bb).fadeIn(700);
                $(bw).fadeOut(700);
                setTimeout(function(){
                    $(up7).addClass("colorup");
                },700);};
    if(page == 13){$(bb).fadeIn(700);
                $(bw).fadeOut(700);
                setTimeout(function(){
                    $(up8).addClass("colorup");
                },700);
                setTimeout(function(){
                    $(up9).addClass("colorup");
                },1100);
                setTimeout(function(){
                    $(up10).addClass("colorup");
                },1500);
                setTimeout(function(){
                    $(up11).addClass("colorup");
                },1900);
            };

  

})



});
