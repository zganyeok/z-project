    
    $(function(){
      var $mainbanrSwipe=document.getElementById("swipe");
   // swipe영역 : swipe.js를 쓰려면 원래방식의 스크립트 문법으로 써줘야함 (이거 하나만)
      var $indicator=$(".ban_pagination>li>a");
      var nowIdx=Math.floor(Math.random()*4); 
      // 현재 보이는 슬라이드의 index번호 
      var oldIdx=nowIdx;
      var intervalID=null; // 현재의 값을 알 수 없다. 
      // null은, 변수에 지정된 데이터를 지우고자할때 사용 
      
      var noEventTime=0; // 이벤트가 없는 시간(초)을 채크하는 변수
      var $btnAuto=$(".btn_auto") // 시작, 정지버튼
      $btnAuto.data("state","on"); 
      // 버튼의 내부데이터 설정 - on : 재생, off : 정지
       
   
   
   
   // 1단계 = 인디케이터 클릭 이벤트 설정 
   
   $indicator.on("click",function(evt){
      nowIdx=$indicator.index($(this));
      if(oldIdx != nowIdx){
         move(); // 슬라이드 애니메이트 (swipe) 함수 호출
      }
      // != : 다르다
      autoStateChange(); // 자동재생 상태변환 함수호출
      evt.preventDefault(); // 링크차단
   });
   
   // 2단계 = swipe.js 플러그인을 이용한 슬라이드 이동
   window.swipeArea=Swipe($mainbanrSwipe,{
      callback:function(idx){
         setIndicator(idx); // 인디케이터 활성화 함수 호출
      } // swipeArea 슬라이드 메소드가 실행 완료된 시점에 작동할 콜백함수 등록   
   });
   
   // 3단계 = 슬라이드 애니메이트(swipe)!!!!! 중요 
   function move(){
      swipeArea.slide(nowIdx,400);
      // 클릭시 슬라이딩 이동 속도 swipe.js 플러그인의 옵션 메서드인 .slide(슬라이드인덱스, 속도시간)를 활용하여 배너 이동
      setIndicator(nowIdx); // 인디케이터 활성화 함수 호출
      oldIdx=nowIdx;
   }
   
   // 4단계 = 인디케이터 활성화 표시 
   function setIndicator(idx){
      $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
   }
   // 5단계 = 텍스트와 이미지 로드 
   $(window).on("load",function(){
      setIndicator(nowIdx); // 인디케이터 활성화 표시 함수 호출
      swipeArea.slide(nowIdx,400);
      autoPlay();
      timeCheck(); // 10초 간격의 시간채크 함수 호출
   
   });
   // 6단계 = 이전버튼설정
   $(".prev").on("click",function(evt){
      autoStateChange();
      prevIdx(); 
      move(); 
      autoStop(); 
      $btnAuto.data("state","on").trigger("click");
      // .trigger() : 강제로 특정 이벤트 발생
      evt.preventDefault();
   });
   
   // 7단계 = 다음버튼설정
   $(".next").on("click",function(evt){
      autoStateChange();
      nextIdx(); 
      move(); 
      autoStop(); 
      $btnAuto.data("state","on").trigger("click");
      // .trigger() : 강제로 특정 이벤트 발생
      evt.preventDefault();
   });
   
   // 8단계 = 이전 + 다음 인덱스번호 설정 
   
   // 이전 
   function prevIdx(){
      if(nowIdx<1){
         nowIdx=$indicator.size()-1;
      }else{
         nowIdx--;
      }
   }
   // 다음 
   function nextIdx(){
      if(nowIdx>=$indicator.size()-1){
         nowIdx=0;
      }else{
         nowIdx++;
      }
      return nowIdx;
   }
   
   // 9단계 =  자동재생
   function autoPlay(){
      intervalID=setInterval(function(){
         swipeArea.slide(nextIdx(),1000)
      },6000);
   }
   // 10단계 = 재생정지 
   function autoStop(){
      clearInterval(intervalID);
      // clearInterval : setInterval 삭제
      $btnAuto.removeClass("pause").data("state","off");
   }
   
   // 11단계 = 재생정지버튼에 클릭이벤트설정 
   $btnAuto.on("click",function(evt){
      var stateVal=null;
      if($(this).data("state")=="on"){
         $(this).removeClass("pause");
         stateVal="off"; // 내부 데이터의 값을 off 한다
         autoStop(); // 자동재생, 정지 함수 호출
         noEventTime=0; // 이벤트 시간채크 변수 초기화
      }else{
         $(this).addClass("pause");
         stateVal="on"; // 내부 데이터값 on으로 한다
         autoPlay(); // 자동재생 함수 호출
      }
      $(this).data("state",stateVal);
      evt.preventDefault();
   
      // == 같다 
   });
   
   // 12단계 = 4초 간격의 시간체크 
   function timeCheck(){
      setInterval(function(){
         noEventTime++;
         if(noEventTime>4&&$btnAuto.data("state")=="off"){
            $btnAuto.trigger("click");
         }
         // && : 그리고 (논리연산자)
      },5000);
   }
   
   
   // 13단계 = 자동재생 상태변환함수
   
   function autoStateChange(){
      noEventTime=0; // 이벤트 시간체크 변수 초기화
      autoStop(); // 자동재생 정지 함수 호출
   }

   });

   // ===========슬라이드 메뉴=====================

   $(function(){
      var mySlider=$('.slideList').bxSlider({
          mode:'horizontal', 
          speed:500, 
          pager:false,
          moveSlides:1, 
          slideWidth:150, 
          minSlides:6, 
          maxSlides:6,
          slideMargin:0,
          auto:1000, 
          autoHover:false,
          controls:false 
      });
      // 이전, 다음버튼
      $('.prevBtn').on('click',function(){
          mySlider.goToPrevSlide(); 
          return false; 
      });
      $('.nextBtn').on('click',function(){
          mySlider.goToNextSlide();
          return false; 
      });



  });