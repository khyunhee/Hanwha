/*===========아코디언 메뉴================*/

// 1. 변수 설정

const dropDown = document.querySelectorAll('.cont_box');  // 콘텐츠 박스

// 2. 모든 박스에 반복문 적용
dropDown.forEach(dropDown => {
    // 박스를 클릭하면
    dropDown.addEventListener('click', () => {
        // 클래스 토글 활성화
        dropDown.classList.toggle('active');
        // active가 있으면 (박스 1 클릭했을 때)
        if(dropDown.classList.contains('active')){
            // 박스 높이 최대로
            dropDown.style.maxHeight = '100%';
        }
        else{ 
            // 아닐 경우 높이 0
            dropDown.style.maxHeight = '0%';
        }
    });
});