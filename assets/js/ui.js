"use strict";

document.addEventListener("DOMContentLoaded", function(){
    
    const $mainTop = document.querySelector("aside");
    const $container = document.querySelector(".container");

    $mainTop.addEventListener('click',(event) => {
        $mainTop.classList.add('hide');
        $container.style.display = "block";
    });

    // window.addEventListener('scroll',(event) => { 
    //     if (winTop > 100) {
    //         $header.classList.add('sticky-header');
    //     } else {
    //         $header.classList.remove("sticky-header");
    //     }
    //     console.log(winTop)
    // });


    // var scrollPosition = window.scrollY || document.querySelector("main").scrollTop;
    

    
    const $header = document.querySelector("header");
    
    function scrollDone(){
        let winTop = document.querySelector('html').scrollTop;
        let introTextItem = document.querySelectorAll('.intro-text__item');
        let introWrap = document.querySelector('.intro__wrap');
        // console.log(winTop)
        if (winTop > 0) {
            $header.classList.add('sticky-header');
            introTextItem.forEach((alItem) => {
                alItem.classList.add('active');
            });
        } else {
            $header.classList.remove("sticky-header");

            if(winTop > 500) {
                introWrap.style.display = 'none';
            }
        }
    }
    // function introTextEvent() {
    //     let winTop = document.querySelector('html').scrollTop;
    //     let introWrapTop = document.querySelector('.intro__wrap').offsetTop;
    //     let introTextItem = document.querySelectorAll('.about_txt p');
    //     if (winTop > introWrapTop) {
    //         introTextItem.forEach((alItem) => {
    //             alItem.classList.add('active');
    //         });
    //     }
    // }
    window.addEventListener('scroll',(event) => { 
        scrollDone();
        // introTextEvent();
        // let timer = setTimeout(scrollDone,150);  
        // clearTimeout(timer);
        
    });



    // div 취득
    const emailAddress = document.querySelector(".email-address");
    const btnTextCopy = document.querySelector(".btn--text-copy");
    const toolTip = document.querySelector(".tooltip-layer");

    // button 클릭 이벤트
    btnTextCopy.addEventListener('click',(event) => {
        // div의 내용(textContent)을 복사한다.
        window.navigator.clipboard.writeText(emailAddress.textContent).then(() => {
            // 복사가 완료되면 호출된다.
            toolTip.style.display = 'inline-block';
            setTimeout(function() {
                toolTip.style.display = 'none';
            }, 500);
        });
    });
    
});
