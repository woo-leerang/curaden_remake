// 스크롤부드럽게
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// _________________________________

// 배너
var swiper = new Swiper(".banner_in", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
});

$(function () {
    $('.open').click(function () {
        $('.mobile_menu').attr('class', 'show_menu')
    });

    $('.close').click(function () {
        $('.show_menu').attr('class', 'mobile_menu')
    });
    $('.mobile_nav ul a').click(function () {
        $('.show_menu').attr('class', 'mobile_menu')
    });
});


//__________________________________________

// 신념
// 위에꺼
const mind = gsap.timeline();
mind
    .from('.mind_txt_01', {
        opacity: 0,
        y: -50,
        duration: 1
    },)
    .from('.mind_txt_03', {
        opacity: 0,
        y: -50,
        duration: 1
    },)
    .from('.mind_txt_04', {
        opacity: 0,
        duration: 1
    },)
    .from('.mind_txt_05', {
        opacity: 0,
        y: 50,
        duration: 1
    },)
    .from('.mind_txt_07', {
        opacity: 0,
        y: 50,
        duration: 1
    },)
ScrollTrigger.create({
    animation: mind,
    trigger: '.mind .wrap',
    start: 'top 50%',
    end: 'bottom bottom',
    // scrub: true,
    // pin: true, //스크롤 따라 애니메이션 따라 옴
    // anticipatePin: 1, //핀효과 부드럽게
    markers: false
});

// 밑에거
const mind02 = gsap.timeline();
mind02
    .from('.bold01', {
        xPercent: innerWidth * 0.5,
        duration: 2
    },)
    .from('.bold02', {
        xPercent: innerWidth * -0.5,
        duration: 2
    },)
ScrollTrigger.create({
    animation: mind02,
    trigger: '.mind .bottom_in',
    start: 'bottom bottom',
    end: 'bottom bottom',
    // scrub: true,
    // pin: true, //스크롤 따라 애니메이션 따라 옴
    // anticipatePin: 1, //핀효과 부드럽게
    markers: false
});

$(function () {
    $('.work_first').click(function () {
        $('.show').attr('class', 'blue02')
    });

    $('.work_sec').click(function () {
        $('.blue02').attr('class', 'show')
    });
});

// 뉴스레터
var swiper = new Swiper(".letter", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});