   $(function(){
    const cursor_txt = document.querySelector(".cursor_text");
   // ==============drag==============
    $(function(){

        $(".draggable").draggable();
    
     
            // ==============z-index==============
        var plusZ=0;
        $(".draggable").mousedown(function(){
        plusZ+=1;
        this.style.zIndex=plusZ;
        $(cursor_txt).fadeOut(200);
    
        });
    
        const close = document.querySelector(".close");
        const exp = document.querySelectorAll(".exp");
    
        // 설명
        $(".draggable").dblclick(function(){
            close.style.display="block";
            var x = $(this).index();
    
        $(exp).eq(x).fadeIn(300);
       
        });
        // 닫기
        $(close).click(function(){
        $(exp).fadeOut(300);
        this.style.display="none";
        });
    
        document.addEventListener('mousemove',function(e){
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            cursor_txt.style.left = mouseX + "px";
            cursor_txt.style.top = mouseY + "px";
          });
          
    
    
    });





        });