document.addEventListener("DOMContentLoaded", function () {
let lottieContainer = document.querySelectorAll(".animation");

if (lottieContainer) {
    LottieScrollTrigger({
        trigger: ".animation",
        start: "top center",
        endTrigger: ".end-lottie",
        end: `bottom center+=${
            document.querySelector(".animation").offsetHeight
        }`,
        renderer: "svg",
        target: ".animation",
        path: "./hero-lottie.json",
        scrub: 2,
    });
    }
});

function LottieScrollTrigger(vars) {
    let playhead = { frame: 0},
    target = gsap.utils.toArray(vars.target)[0],
    speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
    st = {
        trigger: ".trigger",
        end: speeds[vars.speed] ||  "+=1000",
        scrub: 1,
        markers: false,
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
            preserveAspectRatio: "xMidYMid slice",
        },
    });
    for (let p in vars) {
        st[p] = vars[p];
    }

    animation.addEventListener("DOMLoaded", function (){
        let createTween = function () {
            animation.frameTween = gsap.to(playhead, {
                frame: animation.totalFrames - 1,
                ease: "none",
                onUpdate: () => animation.goToAndStop(playhead.frame, true),
                scrollTrigger: st,
            });
            return () => animation.destroy && animation.destroy();
        };
        ctx && ctx.add ? ctx.add(createTween) : createTween();
    });
return animation;
}
/* SEGUNDO EFECTO JS */
const section = document.querySelector('.section'),
    sectionListItem = section.querySelectorAll('.section_list_item'),
    sectionListItemText = section.querySelectorAll('.section_list_item > h1'),
    sectionListFigure = section.querySelectorAll('.section_list_item_figure'),
    sectionMedia = section.querySelectorAll('.section_media');

const clipPath = {
    top: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    full: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    bottom: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
};
gsap.set(sectionMedia, {clipPath: clipPath.top});

const initAnimation = () => {
    gsap.set(sectionListItemText, { y: '100%'});

    const tlText = gsap.timeline({  defaults: {duration: 1.48, ease: 'expo.inOut'} });
    tlText.to(sectionListItemText, {
        y: '0%',
        stagger: 0.032, 
    }) 
    .from (
        sectionListFigure, 
        {
            width: 0,
            stagger: 0.032,
        },
        0.8
    );
    addEventListeners();
};
const addEventListeners = () => {
        sectionListItem.forEach((item, index)=> {
            const images = sectionMedia[index]?.children;

            item.addEventListener('mouseenter', () => {
                for (let i=0; i<images.length; i++) {
                    gsap.timeline({defaults: {duration: 0.64, ease: 'expo.inOut', overwrite: true},
                }).to(sectionMedia[index], {
                    clipPath: clipPath.full,
                });
                sectionListItem.forEach((otherItem)=> {
                    otherItem === item 
                    ? (otherItem.style.color = 'orange')
                    : (otherItem.style.opacity = 0.5);
                });
                }
            });
                item.addEventListener('mouseleave', ()=> {
                    for(let i = 0; i < images.length; i++){
                        gsap.timeline({defaults: {duration: 0.64, ease: 'expo.inOut', overwrite: true},
                    }).to(sectionMedia[index], {
                        clipPath: clipPath.bottom, 
                        onComplete: () => {
                            gsap.set(sectionMedia[index], {
                                clipPath: clipPath.top,
                            });
                        },
                    });
                    } 
                    sectionListItem.forEach((otherItem) => {
                        otherItem === item 
                        ? (otherItem.style.color = '#181818')
                        : (otherItem.style.opacity = 1);
                    });

                });
        });
};
initAnimation();


