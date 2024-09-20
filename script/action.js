document.addEventListener('DOMContentLoaded', function() {
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // 초기 테마 설정
    document.documentElement.setAttribute('data-theme', currentTheme);

    // 다크 모드 아이콘 클릭 이벤트 핸들러
    darkModeIcon.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    });

    // 라이트 모드 아이콘 클릭 이벤트 핸들러
    lightModeIcon.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    });
});






$(document).ready(function() {
    const slider = $('.slider');
    const slides = $('.slide');
    const slideCount = 8;
    let currentSlide = 0;

    // 첫 슬라이드와 마지막 슬라이드를 복제
    const firstClone = slides.first().clone();
    const lastClone = slides.last().clone();

    slider.append(firstClone); // 첫 슬라이드 복제본을 맨 뒤에 추가
    slider.prepend(lastClone); // 마지막 슬라이드 복제본을 맨 앞에 추가

    const totalSlides = slideCount + 2; // 복제된 슬라이드를 포함한 총 슬라이드 수
    const slideWidth = 100 / 4; // 슬라이드 너비 (4개 슬라이드 기준)
    let slideIndex = 1; // 복제된 첫 슬라이드를 보정하기 위해 초기 인덱스를 1로 설정

    // 초기 위치 설정
    slider.css('transform', 'translateX(-' + slideWidth + '%)');

    // 슬라이드를 보여주는 함수
    function showSlide(index) {
        slider.css('transition', 'transform 0.3s ease-in-out'); // 속도 조절 (0.3초로 설정)
        slider.css('transform', 'translateX(-' + (index * slideWidth) + '%)');
    }

    // 다음 슬라이드로 자동 이동하는 함수
    function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);

        // 마지막 슬라이드에서 첫 슬라이드로 순간 이동
        if (slideIndex === totalSlides - 1) {
            setTimeout(function() {
                slider.css('transition', 'none');
                slideIndex = 1;
                slider.css('transform', 'translateX(-' + slideWidth + '%)');
            }, 300);
        }
    }

    // 자동 슬라이드 실행
    const slideInterval = setInterval(autoSlide, 3000); // 3초마다 자동으로 슬라이드 전환

    // 이전 슬라이드 버튼 클릭
    $('.prev').click(function() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlide(slideIndex);
        }

        // 첫 슬라이드에서 마지막 슬라이드로 순간 이동
        if (slideIndex === 0) {
            setTimeout(function() {
                slider.css('transition', 'none');
                slideIndex = totalSlides - 2;
                slider.css('transform', 'translateX(-' + (slideIndex * slideWidth) + '%)');
            }, 300);
        }

        clearInterval(slideInterval); // 버튼 클릭 시 자동 슬라이드 멈춤
    });

    // 다음 슬라이드 버튼 클릭
    $('.next').click(function() {
        if (slideIndex < totalSlides - 1) {
            slideIndex++;
            showSlide(slideIndex);
        }

        // 마지막 슬라이드에서 첫 슬라이드로 순간 이동
        if (slideIndex === totalSlides - 1) {
            setTimeout(function() {
                slider.css('transition', 'none');
                slideIndex = 1;
                slider.css('transform', 'translateX(-' + slideWidth + '%)');
            }, 300);
        }

        clearInterval(slideInterval); // 버튼 클릭 시 자동 슬라이드 멈춤
    });
});

// 확대/축소 방지 코드
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});

// 페이지 로드 시 기본 배율로 설정
document.body.style.zoom = "100%"; // 일부 브라우저에서 배율을 강제 설정

$('a[href="#"]').click(function(event) {
    event.preventDefault();
});

$('.lnb a').click(function(event) {
    event.preventDefault(); // 기본 동작 막기 (필요에 따라 제거 가능)
    
    // 모든 a 태그에서 on 클래스 제거
    $('.lnb a').removeClass('on');
    
    // 클릭한 a 태그에 on 클래스 추가
    $(this).addClass('on');
});




