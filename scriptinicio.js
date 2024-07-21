            document.addEventListener("DOMContentLoaded", function () {
                function startLoader() {
                    let counterElement = document.querySelector('.count p');
                    let currentValue = 0;
    
                    function updateCounter() {
                        if (currentValue < 100) {
                            let increment = Math.min(100 - currentValue, Math.floor(Math.random() * 10) + 1);
                            currentValue = currentValue + increment;
                            counterElement.textContent = currentValue;

    
                            let delay = Math.floor(Math.random() * 200) + 25;
                            setTimeout(updateCounter, delay);
                        }
                    }
                    updateCounter();
                    updateCounter();
                        setTimeout(function () {
            gsap.to(".count", { opacity: 0, duration: 0.3 });
            gsap.to(".pre-loader", { scale: 0.5, ease: "power4.inOut", duration: 1 });
            gsap.to(".loader", { height: "0", ease: "expo.inOut", duration: 1, delay: 0.25 });
            gsap.to(".loader-bg", { height: "0", ease: "power4.inOut", duration: 1, delay: 0.5 });
            gsap.to('.loader-2', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", ease: "power4.inOut", duration: 1, delay: 0.25 });
    setTimeout(function () {
        document.querySelector('.container-loader').style.display = 'none';
    }); 
}, 1500); 
}
                startLoader();
                let textWrapper = document.querySelector('.ml16');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                anime.timeline({ loop: false })
                    .add({
                        targets: '.ml16 .letter',
                        translateY: [-100, 0],
                        easing: "easeOutExpo",
                        duration: 1500,
                        delay: (el, i) => 30 * i
                    })
                    .add({
                        targets: '.ml16 .letter',
                        translateY: [0, 100],
                        easing: "easeOutExpo",
                        duration: 3000,
                        delay: (el, i) => 30 * i
                    });
            });




                let items = document.querySelectorAll('.slider .list .item');
                let next = document.getElementById('next');
                let prev = document.getElementById('prev');
                let thumbnails = document.querySelectorAll('.thumbnail .item');
            
                    let countItem = items.length;
                    let itemActive = 0;
            // event next click
            next.onclick = function(){
                itemActive = itemActive + 1;
                if(itemActive >= countItem){
                    itemActive = 0;
                }
                showSlider();
            }
            //event prev click
            prev.onclick = function(){
                itemActive = itemActive - 1;
                if(itemActive < 0){
                    itemActive = countItem - 1;
                }
                showSlider();
            }
            // auto run slider
            let refreshInterval = setInterval(() => {
                next.click();
            }, 5000)
            function showSlider(){
                // remove item active old
                let itemActiveOld = document.querySelector('.slider .list .item.active');
                let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
                itemActiveOld.classList.remove('active');
                thumbnailActiveOld.classList.remove('active');
                // active new item
                items[itemActive].classList.add('active');
                thumbnails[itemActive].classList.add('active');
                // clear auto time run slider
                clearInterval(refreshInterval);
                refreshInterval = setInterval(() => {
                    next.click();
                }, 5000)
            }
            // click thumbnail
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.addEventListener('click', () => {
                    itemActive = index;
                    showSlider();
                })
            })




    var slides = document.querySelectorAll('.img-slider .slide');
    var btns = document.querySelectorAll('.img-slider .navigation .btn');
    let currentSlide = 0;
    // Función para navegación Manual
    function manualNav(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
        currentSlide = manual;
    }
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
        });
    });
    // Asociar evento click a los botones de navegación
    var repeat = function () {
        let i = 0;
        var repeater = () => {
            setTimeout(function () {
                slides[i].classList.remove('active');
                btns[i].classList.remove('active');
                i++;
                if (i >= slides.length) {
                    i = 0;
                }
                slides[i].classList.add('active');
                btns[i].classList.add('active');
                repeater();
            }, 10000);
        }
        repeater();
    }
    repeat();



    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        }
    })




    document.addEventListener("DOMContentLoaded", function() {
    });



    