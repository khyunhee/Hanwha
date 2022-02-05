/*=============HEADER==============*/
var headerSpace = document.querySelector("#header");
var headerCont = `
<header>
<div class="container">
    <div class="logo">
        <a href="./"><img src="./img/logo.png" alt=""></a>
    </div>
    <nav>
        <ul class="fix_menu">
            <li class="gnb">
                <div class="line"></div>
                <a href="sub1.html">Hanwha E&C</a>
                <ul class="lnb">
                    <li><a href="">경영이념</a></li>
                    <li><a href="">연혁</a></li>
                    <li><a href="">조직도</a></li>
                    <li><a href="">재무정보</a></li>
                    <li><a href="">CI</a></li>
                    <li><a href="">BI</a></li>
                    <li><a href="">찾아오시는 길</a></li>
                </ul>
            </li>
            <li class="gnb">
                <div class="line"></div>
                <a href="sub2.html">BUSINESS</a>
                <ul class="lnb">
                    <li><a href="">토목 사업</a></li>
                    <li><a href="">건축 사업</a></li>
                    <li><a href="">주택 사업</a></li>
                    <li><a href="">플랜트 사업</a></li>
                    <li><a href="">기술연구소</a></li>
                </ul>
            </li>
            <li class="gnb">
                <div class="line"></div>
                <a href="sub3.html">PR CENTER</a>
                <ul class="lnb">
                    <li><a href="">사회공헌</a></li>
                    <li><a href="">공익사업</a></li>
                    <li><a href="">활동내용</a></li>
                    <li><a href="">윤리경영</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">사내소식</a></li>
                    <li><a href="">홍보자료실</a></li>
                </ul>
            </li>
            <li class="gnb">
                <div class="line"></div>
                <a href="sub4.html">CAREERS</a>
                <ul class="lnb">
                    <li><a href="">인재개발</a></li>
                    <li><a href="">인사제도</a></li>
                    <li><a href="">직무소개</a></li>
                    <li><a href="">채용공고</a></li>
                    <li><a href="">채용FAQ</a></li>
                </ul>
            </li>
            <li class="gnb">
                <div class="line"></div>
                <a href="sub5.html">CUSTOMER</a>
                <ul class="lnb">
                    <li><a href="">고객문의</a></li>
                    <li><a href="">고객문의확인</a></li>
                    <li><a href="">사이버신문고</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </li>
        </ul>
    </nav>        
    <div class="menu_icon">
        <div class="lang_box">
            <a href="" class="eng"></a>
            <a href="" class="kor"></a>
        </div>
        <div class="hamburger_box">
            <a href="#" class="hamburger"></a>
        </div>
    </div>
    <div class="drop_menu">
        <div class="drop_menu_container">
            <div class="logo">
                <a href="./"><img src="./img/logo.png" alt=""></a>
            </div>
                <div class="inner_menu">
                    <ul class="clearfix">
                        <li class="inner_gnb">
                            <a href="">Hanwha E&C</a>
                            <ul class="inner_lnb clearfix">
                                <li><a href="">경영이념</a></li>  
                                <li><a href="">연혁</a></li>
                                <li><a href="">조직도</a></li>
                                <li><a href="">재무정보</a></li>
                                <li><a href="">CI</a></li>
                                <li><a href="">BI</a></li>
                                <li><a href="">찾아오시는 길</a></li>
                            </ul>
                        </li>
                        <li class="inner_gnb">
                            <a href="">BUSINESS</a>
                            <ul class="inner_lnb clearfix">  
                                <li><a href="">토목 사업</a></li>
                                <li><a href="">건축 사업</a></li>
                                <li><a href="">주택 사업</a></li>
                                <li><a href="">플랜트 사업</a></li>
                                <li><a href="">기술연구소</a></li>
                            </ul>
                        </li>
                        <li class="inner_gnb">
                            <a href="">PR CENTER</a>
                            <ul class="inner_lnb clearfix">  
                                <li><a href="">사회공헌</a></li>
                                <li><a href="">공익사업</a></li>
                                <li><a href="">활동내용</a></li>
                                <li><a href="">윤리경영</a></li>
                                <li><a href="">공지사항</a></li>
                                <li><a href="">사내소식</a></li>
                                <li><a href="">홍보자료실</a></li>
                            </ul>
                        </li>
                        <li class="inner_gnb">
                            <a href="">CAREERS</a>
                            <ul class="inner_lnb clearfix">  
                                <li><a href="">인재개발</a></li>
                                <li><a href="">인사제도</a></li>
                                <li><a href="">직무소개</a></li>
                                <li><a href="">채용공고</a></li>
                                <li><a href="">채용FAQ</a></li>
                            </ul>
                        </li>
                        <li class="inner_gnb">
                            <a href="">CUSTOMER</a>
                            <ul class="inner_lnb clearfix">  
                                <li><a href="">고객문의</a></li>
                                <li><a href="">고객문의확인</a></li>
                                <li><a href="">사이버신문고</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="close_btn"></div>
        </div><!--drop_menu_container-->
    </div><!--drop_menu -->
</div>
</header>
`;
headerSpace.innerHTML = headerCont;


/*=============HEADER_ MEGA MENU==============*/
var dropMenu = document.querySelector(".drop_menu");
var openMenu = document.querySelector(".hamburger");
var closeMenu = document.querySelector(".close_btn");

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(e){
    e.preventDefault();
    dropMenu.style.top = '0';
}
function close(){
    dropMenu.style.top = '-500px';
}


/*=============FOOTER==============*/
var footerSpace = document.querySelector("#footer");
var footerCont = `
<footer>
<div class="footer_inner clearfix">
    <img src="./img/footer_logo.png" alt="">
    <div class="footer_l">
        <ul>
            <li><a href="./index.html">해외현장 임직원가족</a></li>
            <li><a href="./index.html">개인정보 처리방침</a></li>
            <li><a href="./index.html">공정거래 사업지침</a></li>
            <li><a href="./index.html"><span>협력업체 시스템</span></a></li>
        </ul>
        <p>
            서울시 영등포구 여의대로 24 전경련회관<br> TEL 02.2055.6000 080.729.2400<br> 
            Copyright 2022 Hanwha Engineering & Construction corp.
        </p>
    </div>
    <div class="footer_r">
        <div class="sns">
            <a href="./index.html"></a>
            <a href="./index.html"></a>
            <a href="./index.html"></a>
            <a href="./index.html"></a>
        </div>
        <div class="family">
            <img src="./img/site_head.jpg" alt="" class="family_site">
            <img src="./img/site_body.jpg" alt="" class="family_body">
        </div>
    </div>
</div>
</footer>
`;
footerSpace.innerHTML = footerCont;


/*=============FOOTER_ FAMILY SITE==============*/
let click = document.querySelector(".family_site");
let appear = document.querySelector(".family_body");

click.addEventListener('click', () => {
    if(appear.style.display === 'none'){
        appear.style.display = 'block';
    }else{
        appear.style.display= 'none';
    }
})

/*=============SCROLL TOP==============*/
var scrollTopBtn = document.querySelector("#top_btn");

scrollTopBtn.addEventListener("click", function(){
    $("html, body").animate({ scrollTop: 0}, "slow");
});


