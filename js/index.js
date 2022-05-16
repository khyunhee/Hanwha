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


// ** 정지 기능 & 버튼 모양 변경

// 버튼 클릭 시
$('.visual_slide .btn_box').click( () => {

  // 1. 상태 변수 설정

  var $state =$(this).hasClass('stop');   // this = 버튼(stop 클래스 부여)
  //console.log("현재 stop 클래스의 유무 : " + $state);  //false :재생상태
  
  // 2. 조건문 설정

  // 버튼을 클릭하면
  if($state == false){
    // stop 클래스 설정
    $(this).addClass('stop');
    // 버튼의 이미지는 재생 이미지로 변경
    $(this).find('img').attr({'src':'./img/btn_play.png', 'alt':'start'});
    // 슬라이드 멈춤
    visual.autoplay.stop();
  }
  else { // 아닐경우
    // stop 클래스 해제
    $(this).removeClass('stop');
    // 슬라이드 재생
    visual.autoplay.start();
    // 버튼 이미지는 일시정지 이미지로 변경
    $(this).find('img').attr({'src':'./img/btn_stop.png', 'alt':'stop'});
  }
  
});






