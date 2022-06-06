$(function(){
    //  plus, minus
    
    var current = 1;
    var $window = $(window);
    var $body=$("html, body");
    var $btnZoomIn = $(".zoomIn");
    var $btnZoomOut = $(".zoomOut");    
    $btnZoomIn.on("click",function(){
        current += 0.1; zoom();
    });
    $btnZoomOut.on("click",function(){
        current += -0.1; zoom();
    });
  function zoom(){
      if (current > 1.5){
          alert('더이상 화면을 확대 하실 수 없습니다.');
          return false;
      }
      if (current < 1.0){
          alert('더이상 화면을 축소 하실 수 없습니다.');
          return false;
      }
      $body.css({
        zoom:current,
        '-moz-transform':'scale('+current+')'
      });
  }  


  

 });
