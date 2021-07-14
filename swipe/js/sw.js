$(function(){

// swipe
window.mySwipe = $('#mySwipe').Swipe({
    startSlide:0, //초기 첫 배너 노출
    auto:3000, //3초 후 슬라이딩
    continuous:true, //배너 반복 롤링
    stopPropagation:true, //하위 요소에 이벤트 전달 차단
    disableScroll:true, //슬라이드 배너에 스크롤바 생성 차단
    callback:function(index, element){}, //이벤트 완료시 콜백함수 실행
    transitionEnd:function(index,element) {} //화면 전환시 익명함수 실행

}).data('Swipe');
// 버튼실행
$('.prevBtn').on('click',function(){ //이전 버튼 클릭시
    mySwipe.prev(); //이전 배너로 이동
});
$('.nextBtn').on('click',function(){ //다음 버튼 클릭시
    mySwipe.next(); //다음 배너로 이동
});
});