$(function(){
var typingBool = false; 
var typingIdx=0;
var liIndex = 0;
var liLength = $(".typing-txt3 ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt3 ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true;
    var tyInt = setInterval(typing,50); // 반복동작 
} 
  
function typing(){ 
  // $(".typing3 li").removeClass("on");
  //  $(".typing3 li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
  
     $(".typing3 li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++;
     //다음문장을 타이핑하기 위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt3 ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
     clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,45);
         },100);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
         
           clearInterval(tyInt);
          //  $(".typing3 li").removeClass("on");
          
        }
    } 

}  
















});