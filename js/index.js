/*-------------------메인 슬라이드--------------------*/ 
var visual = new Swiper('.visual_container', {
  slidesPerView: 1,
  loop: 'true',
  allowTouchMove : false,
  navigation: {
    nextEl: '.next',
    prevEl: '.previous',
  },
  autoplay: {
     delay: 4000,
     disableOnInteraction: 'true',
  },
});

$(document).ready(function(){

//일시정지 & 버튼 모양 변경
$(".visual_slide .btn_box").click(function(){
  var $state =$(this).hasClass("stop");
  console.log("현재 stop 클래스의 유무 : " + $state);  //false :재생상태
  if($state == false){
    $(this).addClass("stop");
    $(this).find("img").attr({"src":"./img/btn_play.png", "alt":"start"});
    visual.autoplay.stop();
  }else{
    $(this).removeClass("stop");
    visual.autoplay.start();
    
    $(this).find("img").attr({"src":"./img/btn_stop.png", "alt":"stop"});
  }
});

});





