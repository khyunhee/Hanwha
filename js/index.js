var visual = new Swiper('.visual_container', {
    slidesPerView: 1,
    loop: 'true',
    allowTouchMove : false,
    navigation: {
      nextEl: '.next',
      prevEl: '.previous',
    },
    autoplay: {
       delay: 5000,
       disableOnInteraction: 'false',
    },
})

//const change = document.getElementById('toggle');
//change.onclick = function(){
//  change.classList.toggle('active');
//}

var play = document.querySelector('.play');
var pause = document.querySelector('.pause');

pause.addEventListener('click', function(e){
  e.preventDefault();
  visual.autoplay.stop();
  return false;
});

pause.addEventListener('click', () => {
  if(play.classList.contains('active')){
     play.classList.remove('active')
     pause.classList.add('active')
  }
  else{
     pause.classList.remove('active')
     play.classList.add('active')
  }
})

play.addEventListener('click', function(){
  visual.autoplay.start();
  return false;
});



