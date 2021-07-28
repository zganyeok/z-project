
// header 영역
$(function(){
	var $input=$("input#lang");// input 상자
	var $arrow=$(".opt span.arrow");// 화살표
	var $langlist=$(".langlist");
	
	$langlist.find("a").on("click",function(){
		$input.val($(this).text());// 언어선택시 입력상자 내용 변경
		$(this).parent().addClass("on").siblings().removeClass("on");
		$langlist.toggle();// 언어목록 숨김처리
	});
	
	// $("input#lang,.opt span.arrow).on("click",function(){
	// $($input,$arrow).on("click",function(){
	$input.add($arrow).on("click",function(){
		$langlist.toggle();
		$arrow.toggleClass("arrow-up");
	});
	
	$(".opt").on("mouseleave",function(){
		$langlist.hide();
		$arrow.removeClass("arrow-up");
	});
	
});// 약식 준비핸들러


// 서로 독립적으로 작용. 그래서 위의 변수를 활용 못함.
// footer 영역
$(function(){
	// 푸터의 언어선택 select 박스에 옵션리스트 동적삽입
	$(window).one("load",function(){// 딱 한번만 실행되는 .one() 메소드
		var strForm='<form action="#" name="frmLang" method="post"><fieldset><legend>다국어서비스</legend><label for="langsrv" class="blind">언어선택</label><select name="langsrv" id="langsrv"></select></fieldset></form>';// str : 문자열변수라는 뜻.
		
		$("footer>.container>address").before(strForm);
		
		$(".langlist>li>a").each(function(idx){
			var optCont='<option value="'+idx+'">'+$(this).text()+'</option>';
			
			$("#langsrv").append(optCont);
		});
	});
});


// 메인배너 구현
$(function(){
	
	// var $mainbanrSwipe=$("#mainbanr-swipe");
	var $mainbanrSwipe=document.getElementById("mainbanr-swipe");// swipe 영역 - swipe.js를 쓰려면 원래 방식대로 써줘야함(이거 하나만)
	// 스와입영역을 반드시 아래오 같이 순수자바스크립트 방식으로 셀렉팅 해야한다.
	var $indicator=$("#mainbanr-swipe~.mainbanr-pagination>li>a");// 인디케이터
	var nowIdx=Math.floor(Math.random()*4);// 현재 보이는 슬라이드의 index 번호
	var oldIdx=nowIdx;
	var intervalID=null;// 현재 값을 알 수 없다.
	
	var noEventTime=0;// 이벤트가 없는 시간(초)을 체크하는 변수
	
	var $btnAuto=$("#mainbanr-swipe~.btn_auto");// 시작정지버튼
	$btnAuto.data("state","on");// 버튼에 내부데이터 설정 - on : 재생중, off : 정지상태
	
	// 11단계 - 일체형 재생정지 버튼에 대한 클릭이벤트 설정
	$btnAuto.on("click",function(evt){
		// console.log("재생정지 버튼이 클릭되었습니다.");
		var stateVal=null;
		
		if($(this).data("state")=="on"){
			$(this).removeClass("pause").text("재생시작");// .pause 클래스를 삭제한다.
			stateVal="off";// 내부데이터의 값을 off로 한다.
			autoStop();// 자동재생 정지
			noEventTime=0;// 이벤트 시간체크 변수 초기화
		}else{
			$(this).addClass("pause").text("일시정지");// .pause 클래스를 추가한다.
			stateVal="on";// 내부데이터의 값을 on으로 한다.
			autoPlay();// 자동재생 함수 호출
		}
		
		$(this).data("state",stateVal);
		evt.preventDefault();
	});
	
	// 1단계-인디케이터에 대한 클릭 이벤트 설정
	$indicator.on("click",function(evt){
		nowIdx=$indicator.index($(this));
		console.log("nowIdx=",nowIdx);
		
		if(oldIdx != nowIdx){
			move();// 슬라이드 애니메이트(swipe) 함수 호출
		}
		autoStateChange();// 자동재생 상태변환 함수 호출
		
		evt.preventDefault();
	});
	
	// 2단계 - swipe.JS 플러그인을 이용한 슬라이드 이동(플러그인 사용 문법) /* 중요!!  이 플러그인을 쓰는 이유*/
	window.swipeArea=Swipe($mainbanrSwipe,{
		callback:function(idx){
			setIndicator(idx);// 인디케이터 활성화 함수 호출
		}// swipeArea.slide() 메소드가 실행 완료된 시점에 작동할 콜백함수 등록
	});
	
	// 3단계 - 슬라이드 애니메이트(swipe) /* 중요!! */
	function move(){
		swipeArea.slide(nowIdx,400);// swipe.JS 플러그인의 옵션 메소드인 .slide(슬라이드인덱스, 속도시간)를 활용하여 배너 이동
		setIndicator(nowIdx);// 인디케이터 활성화 함수 호출
		console.log("oldIdx=",oldIdx);
		oldIdx=nowIdx;
	}
	
	// 4단계 - 인디케이터 활성화 표시
	function setIndicator(idx){
		$indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
	}
	
	// 5단계 - DOM Tree를 지나 텍스트와 이미지까지 메모리에 로드했을 때...
	$(window).on("load",function(){
		setIndicator(nowIdx);// 인디케이터 활성화 표시 함수 호출
		swipeArea.slide(nowIdx,400);
		autoPlay();
		timeCheck();// 10초 간격의 시간체크 함수 호출
	});
	
	// 6단계 - 이전버튼
	$(".mainbanr-prev").on("click",function(evt){
		autoStateChange();
		// swipeArea.prev();// 자동재생 재시작시 두칸으로 뛰는 부작용 발생(아래와 같은 방법으로 보완)
		prevIdx();
		move();
		autoStop();
		$btnAuto.data("state","on").trigger("click");// 강제로 특정 이벤트를 발생시키는 trigger()메소드
		evt.preventDefault();
	});
	
	// 7단계 - 다음버튼
	$(".mainbanr-next").on("click",function(evt){
		autoStateChange();
		// swipeArea.next();
		nextIdx();
		move();
		autoStop();
		$btnAuto.data("state","on").trigger("click");// 강제로 특정 이벤트를 발생시키는 trigger()메소드
		evt.preventDefault();
	});
	
	// 8단계 - 다음 인덱스 번호 설정 함수
	function nextIdx(){
		if(nowIdx>=$indicator.size()-1){
			nowIdx=0;
		}else{
			nowIdx++;
		}
		return nowIdx;
	}
	
	// 8단계 - 이전 인덱스 번호 설정 함수
	function prevIdx(){
		if(nowIdx<1){
			nowIdx=$indicator.size()-1;
		}else{
			nowIdx--;
		}
	}
	
	// 9단계 - 자동재생 함수
	function autoPlay(){
		intervalID=setInterval(function(){
			swipeArea.slide(nextIdx(),400);
		},3000);
	}
	
	// 10단계 - 재생정지 함수
	function autoStop(){
		clearInterval(intervalID);
		$btnAuto.removeClass("pause").text("재생시작").data("state","off");
	}
	
	// 12단계 - 4초 간격의 시간체크 함수
	function timeCheck(){
		setInterval(function(){
			noEventTime++;
			// console.log("noEventTime =",noEventTime);
			
			if(noEventTime>4&&$btnAuto.data("state")=="off"){
				$btnAuto.trigger("click");
			}
		},1000);
	}
	
	// 13단계 - 자동재생 상태변환 함수
	function autoStateChange(){
		noEventTime=0;// 이벤트 시간체크 변수 초기화
		autoStop();// 자동재생 정지 함수 호출
	}
	
});

// 메인메뉴 - scroll 이벤트와 scrollTop()을 이용한 원페이지 구현
$(function(){
	
	var $topmenu=$(".gnb>li>a");
	var gapH=0;// 가로폭에 따른 탑메뉴 높이값 저장 변수 70 or 50
	
	// 1단계 - 메인배너와 article의 탑값을 배열에 저장
	var arrContH=new Array();// 빈 배열 선언. or var arrContH=[]; 배열을 선언하면서 값을 넣을 때 씀
	
	function setPosArticle(){
		arrContH=[];// 배열을 비운다 - 혹여 어떤 값이 들어갔을까봐....
		arrContH.push($("header+hr+section").offset().top);// 메인배너의 높이값 추가
		$("#mainsrv>article").each(function(idx){
			arrContH.push($(this).offset().top);
		});// article이 시작하는 y좌표값을 동적으로 배열에 저장, article의 높이가 나중에 변하더라도 정확하게 시작점으로 스크롤한다.
		
		
		// console.log("arrContH=",arrContH);
	}
	
	// 2단계 - 스크롤 높이값에 따른 메뉴의 롤오버 색상 변화
	$(window).on("scroll",function(){
		var scrollH=$(this).scrollTop();// 현재 스크롤 탑의 값
		// console.log("현재 scrollH = ",scrollH);
		
		for(var i=0;i<$topmenu.size();i++){
			if(scrollH>=arrContH[i+1]-gapH){
				$topmenu.eq(i).parent().addClass("on").siblings().removeClass("on")// 해당메뉴에 on 클래스를 추가한다.
			}else if(scrollH<arrContH[1]-gapH){
				$topmenu.parent().removeClass("on");
			}
		}
	});
	
	// 3단계 - 메뉴에 대응하는 article 영역으로 애니메이트
	$topmenu.on("click",function(evt){
		var nowIdx=$topmenu.index($(this));
		
		$("html,body").stop().animate({
			scrollTop : arrContH[nowIdx+1]-gapH+1
		},400,"easeInOutCubic");
		
		if($(window).width()<=640){			
			$btnGnb.trigger("click");
		}
		evt.preventDefault();
	});
	
	// 4단계 - 로고 클릭하면 최상단 이동
	$(".logo").on("click",function(evt){
		$("html,body").stop().animate({
			scrollTop : 0
		},400,"easeInOutCubic");
		
		evt.preventDefault();
	});
	
	//PC 버전과 Mobile 버전의 artiel 제목과 본문 출력 내용
   var $msgH3 = $("#mainsrv>article.line_msg>div>.explain>h3");
   var $telH3 = $("#mainsrv>article.line_tel>div>.explain>h3");
   var $stickerH3 = $("#mainsrv>article.line_sticker>div>.explain>h3");
   var $shareH3 = $("#mainsrv>article.line_share>div>.explain>h3");
   var $couponH3 = $("#mainsrv>article.line_coupon>div>.explain>h3");
   
   //PC버전의 메인서비스 제목
   var msgH3_PC = $msgH3.html();
   var telH3_PC = $telH3.html();
   var stickerH3_PC = $stickerH3.html();
   var shareH3_PC = $shareH3.html();
   var couponH3_PC = $couponH3.html();
   
   //PC버전의 메인서비스 내용      
   var msgText_PC = $msgH3.next().html();
   var telText_PC = $telH3.next().html();
   var stickerText_PC = $stickerH3.next().html();
   var shareText_PC = $shareH3.next().html();
   var couponText_PC = $couponH3.next().html();
   
   //Mobile버전의 메인서비스 제목
   var msgH3_MO = "무료 메시지";
   var telH3_MO = "무료 영상/음성 통화";
   var stickerH3_MO = "스티커로 더 즐거운 대화";
   var shareH3_MO = "무엇이든 공유";
   var couponH3_MO = "인기브랜드 쿠폰";
   
   //Mobile버전의 메인서비스 내용
   var msgText_MO = "1:1 대화는 물론 그룹 대화까지<br />무제한 무료로 즐겨보세요.";
   var telText_MO = "듣고 싶은 목소리, 보고 싶은 얼굴이<br />있다면 망설이지 마세요.";
   var stickerText_MO = "10,000개가 넘는 스티커와 이모티콘으로<br />미묘한 감정까지 표현해 보세요.";
   var shareText_MO = "사진, 동영상은 물론 음성 메시지와<br />연락처, 위치 정보까지 손쉽게 보낼 수<br />있습니다.";
   var couponText_MO = "인기 아티스트, 브랜드의 최신소식과<br />쿠폰이 기다리고 있습니다.";
   
   
	
	// 5단계 - 브라우저 가로폭에 따른 설정
	$(window).on("load resize",function(){
		if($(this).width()>640){// PC 모드
			gapH=70;// +200....
			$nav.show();
			
			$msgH3.html(msgH3_PC);
		    $telH3.html(telH3_PC);
		    $stickerH3.html(stickerH3_PC);
		    $shareH3.html(shareH3_PC);
		    $couponH3.html(couponH3_PC);
		    
		    $msgH3.next().html(msgText_PC);
		    $telH3.next().html(telText_PC);
		    $stickerH3.next().html(stickerText_PC);
		    $shareH3.next().html(shareText_PC);
		    $couponH3.next().html(couponText_PC);
			
		}else{// 모바일 모드
			gapH=50;
			$btnGnb.removeClass("clse").next().hide();
			
			$msgH3.html(msgH3_MO);
		    $telH3.html(telH3_MO);
		    $stickerH3.html(stickerH3_MO);
		    $shareH3.html(shareH3_MO);
		    $couponH3.html(couponH3_MO);
		    
		    $msgH3.next().html(msgText_MO);
		    $telH3.next().html(telText_MO);
		    $stickerH3.next().html(stickerText_MO);
		    $shareH3.next().html(shareText_MO);
		    $couponH3.next().html(couponText_MO);
		    
		}
		
		setPosArticle();

	});
	
	// 반응형 header 영역
	var $btnGnb=$("header>.container>.btn-gnb");// 640px 이하에서만 나타나는 메뉴버튼
	var $nav=$("header>.container>nav");// 메인메뉴
	
	$btnGnb.on("click",function(){
		$(this).toggleClass("clse");
		$nav.toggle();
	});// 모바일 메뉴버튼에 대한 클릭이벤트
});