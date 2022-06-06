$(function(){


// ==============menu==============

const title = $(".pick_one");
const aboutMe = $(".about_me");
const web = $(".web");
const mobile = $(".mobile");
const ppt = $(".ppt");
const emoticon = $(".emoticon");
const drawing = $(".drawing");


$(aboutMe).hover(function(){
$(title).text("About me");
},
function(){
  $(title).text("Pick one!");
});


$(web).hover(function(){
$(title).text("Web design");
},
function(){
  $(title).text("Pick one!");
});

$(mobile).hover(function(){
$(title).text("Mobile");
},
function(){
  $(title).text("Pick one!");
});

$(ppt).hover(function(){
$(title).text("PPT templet");
},
function(){
  $(title).text("Pick one!");
});

$(emoticon).hover(function(){
$(title).text("Emoticon & Logo");
},
function(){
  $(title).text("Pick one!");
});


$(drawing).hover(function(){
$(title).text("Drawing");
},
function(){
  $(title).text("Pick one!");
});


$(aboutMe).click(function(){
  $(this).addClass('rotate');
  setTimeout(function(){
    var link1 = "about_me.html";
    location.href=link1;},500);
});
$(web).click(function(){
  $(this).addClass('rotate');
  setTimeout(function(){
    var link1 = "web.html";
    location.href=link1;},500);
});
$(mobile).click(function(){
  $(this).addClass('rotate');
  setTimeout(function(){
    var link1 = "mobile.html";
    location.href=link1;},500);
});
$(ppt).click(function(){
  $(this).addClass('rotate');
  setTimeout(function(){
    var link1 = "ppt.html";
    location.href=link1;},500);
});
$(emoticon).click(function(){
  $(this).addClass('rotate');
  setTimeout(function(){
    var link1 = "emoticon.html";
    location.href=link1;},500);
});
$(drawing).click(function(){
  $(this).addClass('rotate');
  setTimeout(function(){
    var link1 = "drawing.html";
    location.href=link1;},500);
});


// ===========about_me - dot==============

setTimeout(function(){
    var liIdx = 0;
  setInterval(function(){
  
    $(".dot>ul>li").eq(liIdx).show(0);
    liIdx++;
  },25);
  
  },5000);
  


  // ==============about_me - tool==============

  var liIdx =0;
  setInterval(function(){
  
    $(".tool>ul>li").eq(liIdx).addClass('on');
    liIdx++;
    
  },150);
  



  // ==============about_me - graph==============

  setTimeout(function(){
    $(".graph").addClass('on');
  },6400);
  

  

// ==============about_me - brochure==============

const togglingBtn = document.querySelector(".switch>input"); 
const blur = document.querySelector(".blur");

togglingBtn.addEventListener('click',function(){
  const brochure = document.querySelector(".brochure");
  brochure.classList.toggle('active'); //input에서만 토글이 작동
  blur.classList.toggle('on');
});







});