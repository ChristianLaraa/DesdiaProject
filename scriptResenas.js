const btn = document.querySelector(".btn");
const galleryContainer = document.querySelector(".gallery-container");

function runLargeScreenAnimations() {
    btn.addEventListener("click", function() {
        gsap.to(".btn", 1, {
            opacity: 0,
            y: -40,
            ease: Expo.easeInOut,
        });
        gsap.to(".text-wrapper > div", 1, {
            x: "500",
            ease: Expo.easeInOut,
            delay: 1,
            stagger: 0.1,
        });
        gsap.to(".text-wrapper", 3, {
            y: -600,
            scale: 4.5,
            rotate: -90,
            ease: Expo.easeInOut,
            delay: 1.5,
        });

        gsap.to(".text", 1, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 3,
        });

        gsap.to(".text-wrapper > div", 4, {
            x: "-3500",
            ease: Expo.easeInOut,
            delay: 3.5,
            stagger: 0.05,
        });

        gsap.to(".text-container", 2, {
            bottom: "-100%",
            ease: Expo.easeInOut,
            delay: 6,
            onComplete: showGalleryContainer,
        });

        let textWrapper = document.querySelector(".header-container");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\s/g,
            "<span class='letter'>$&</span>"
        );
        anime.timeline().add({
            targets: ".header-container .letter",
            opacity: [0, 1],
            translateY: [200, 0],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 7000 + 40 + i,
        });

        const positions = calculatePositions();
        const imgs = document.querySelectorAll(".img");

        gsap.set(".img", {
            top: "50%",
            left: "44.5%",
            transform: "translate(-50%, -50%) scale(0)",
        });

        gsap.to(".img", {
            scale: 1.15,
            width: "320px",
            height: "400px",
            stagger: 0.15,
            duration: 0.87,
            ease: "power2.out",
            delay: 1,
            onComplete: scatterAndShrink,
        });

        function scatterAndShrink() {
            gsap.to(".img", {
                top: (i) => positions[i].top + 'px',
                left: (i) => positions[i].left + 'px',
                transform: "none",
                width: "100px",
                height: "120px",
                stagger: 0.070,
                duration: 0.75,
                ease: "power2.out",
            });
        }

        function applyBlurEffect() {
            const elementsToBlur = document.querySelectorAll('.img:not([data-enlarged="true"])');
            gsap.to(elementsToBlur, {
                filter: 'blur(20px)',
                duration: 0.75,
                ease: "power2.out",
            });
        }

        function removeBlurEffect() {
            const elementsToBlur = document.querySelectorAll('.img:not([data-enlarged="true"])');
            gsap.to(elementsToBlur, {
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
            });
        }

        function toggleImageSize(event) {
            const img = event.currentTarget;
            const isEnlarged = img.getAttribute('data-enlarged') === 'true';
            const originalPosition = JSON.parse(img.getAttribute('data-original-position'));
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (!isEnlarged) {
                const enlargedWidth = 500;
                const enlargedHeight = 600;
                const centeredLeft = (viewportWidth - enlargedWidth) / 2;
                const centeredTop = (viewportHeight - enlargedHeight) / 2;
                const topCorrection = 75;
                const correctedTop = centeredTop - topCorrection;

                gsap.to(img, {
                    zIndex: 1000,
                    top: `${correctedTop}px`,
                    left: `${centeredLeft}px`,
                    width: `${enlargedWidth}px`,
                    height: `${enlargedHeight}px`,
                    ease: "power4.out",
                    duration: 1,
                });
                img.setAttribute('data-enlarged', 'true');
                applyBlurEffect();
            } else {
                setTimeout(() => removeBlurEffect(), 100);

                gsap.to(img, {
                    zIndex: 1,
                    top: originalPosition.top + 'px',
                    left: originalPosition.left + 'px',
                    width: '75px',
                    height: '100px',
                    ease: "power4.out",
                    duration: 1,
                });
                img.setAttribute('data-enlarged', 'false');
            }
        }

        imgs.forEach((img, i) => {
            img.setAttribute('data-original-position', JSON.stringify(positions[i]));
            img.setAttribute('data-enlarged', 'false');
            img.addEventListener('click', toggleImageSize);
        });
    });

    function showGalleryContainer() {
        galleryContainer.style.display = "block";
        gsap.from(".gallery-container", { opacity: 0, duration: 1, ease: Expo.easeInOut });
    }

    function calculatePositions() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        return [
            /* Fila 1 */
            { top: viewportHeight * 0.02, left: viewportWidth * 0.05 },
            { top: viewportHeight * 0.10, left: viewportWidth * 0.20 },
            { top: viewportHeight * 0.02, left: viewportWidth * 0.35 },
            { top: viewportHeight * 0.10, left: viewportWidth * 0.50 },
            { top: viewportHeight * 0.02, left: viewportWidth * 0.65 },
            { top: viewportHeight * 0.10, left: viewportWidth * 0.80 },
            /* Fila 2 */
            { top: viewportHeight * 0.25, left: viewportWidth * 0.05 },
            { top: viewportHeight * 0.33, left: viewportWidth * 0.20 },
            { top: viewportHeight * 0.25, left: viewportWidth * 0.35 },
            { top: viewportHeight * 0.33, left: viewportWidth * 0.50 },
            { top: viewportHeight * 0.25, left: viewportWidth * 0.65 },
            { top: viewportHeight * 0.33, left: viewportWidth * 0.80 },
            /* Fila 3 */
            { top: viewportHeight * 0.48, left: viewportWidth * 0.05 },
            { top: viewportHeight * 0.56, left: viewportWidth * 0.20 },
            { top: viewportHeight * 0.48, left: viewportWidth * 0.35 },
            { top: viewportHeight * 0.56, left: viewportWidth * 0.50 },
            { top: viewportHeight * 0.48, left: viewportWidth * 0.65 },
            { top: viewportHeight * 0.56, left: viewportWidth * 0.80 },
            /* Fila 4 */
            { top: viewportHeight * 0.71, left: viewportWidth * 0.05 },
            { top: viewportHeight * 0.79, left: viewportWidth * 0.20 },
            { top: viewportHeight * 0.71, left: viewportWidth * 0.35 },
            { top: viewportHeight * 0.79, left: viewportWidth * 0.50 },
            { top: viewportHeight * 0.71, left: viewportWidth * 0.65 },
            { top: viewportHeight * 0.79, left: viewportWidth * 0.80 },
            /* Reserva */
            { top: viewportHeight * 0.85, left: viewportWidth * 0.85 },
            { top: viewportHeight * 0.50, left: viewportWidth * 0.85 },
            { top: viewportHeight * 0.55, left: viewportWidth * 0.15 },
        ];
    }
}

function runSmallScreenAnimations() {
    btn.addEventListener("click", function() {
        gsap.to(".btn", 1, {
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut,
        });
        gsap.to(".text-wrapper > div", 1, {
            x: "200",
            ease: Expo.easeInOut,
            delay: 1,
            stagger: 0.1,
        });
        gsap.to(".text-wrapper", 3, {
            y: -300,
            scale: 2.5,
            rotate: -90,
            ease: Expo.easeInOut,
            delay: 1.5,
        });

        gsap.to(".text", 1, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 3,
        });

        gsap.to(".text-wrapper > div", 4, {
            x: "-1500",
            ease: Expo.easeInOut,
            delay: 3.5,
            stagger: 0.05,
        });

        gsap.to(".text-container", 2, {
            bottom: "-100%",
            ease: Expo.easeInOut,
            delay: 6,
            onComplete: showGalleryContainer,
        });

        let textWrapper = document.querySelector(".header-container");
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\s/g,
            "<span class='letter'>$&</span>"
        );
        anime.timeline().add({
            targets: ".header-container .letter",
            opacity: [0, 1],
            translateY: [200, 0],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 7000 + 40 + i,
        });

        const positions = calculateMobilePositions();
        const imgs = document.querySelectorAll(".img");

        gsap.set(".img", {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0)",
        });

        gsap.to(".img", {
            scale: 1.15,
            width: "160px",
            height: "200px",
            stagger: 0.15,
            duration: 0.87,
            ease: "power2.out",
            delay: 1,
            onComplete: scatterAndShrink,
        });

        function scatterAndShrink() {
            gsap.to(".img", {
                top: (i) => positions[i].top + 'px',
                left: (i) => positions[i].left + 'px',
                transform: "none",
                width: "75px",
                height: "100px",
                stagger: 0.070,
                duration: 0.75,
                ease: "power2.out",
            });
        }

        function applyBlurEffect() {
            const elementsToBlur = document.querySelectorAll('.img:not([data-enlarged="true"])');
            gsap.to(elementsToBlur, {
                filter: 'blur(20px)',
                duration: 0.75,
                ease: "power2.out",
            });
        }

        function removeBlurEffect() {
            const elementsToBlur = document.querySelectorAll('.img:not([data-enlarged="true"])');
            gsap.to(elementsToBlur, {
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.out",
            });
        }

        function toggleImageSize(event) {
            const img = event.currentTarget;
            const isEnlarged = img.getAttribute('data-enlarged') === 'true';
            const originalPosition = JSON.parse(img.getAttribute('data-original-position'));
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (!isEnlarged) {
                const enlargedWidth = 300;
                const enlargedHeight = 400;
                const centeredLeft = (viewportWidth - enlargedWidth) / 2;
                const centeredTop = (viewportHeight - enlargedHeight) / 2;
                const topCorrection = 75;
                const correctedTop = centeredTop - topCorrection;

                gsap.to(img, {
                    zIndex: 1000,
                    top: `${correctedTop}px`,
                    left: `${centeredLeft}px`,
                    width: `${enlargedWidth}px`,
                    height: `${enlargedHeight}px`,
                    ease: "power4.out",
                    duration: 1,
                });
                img.setAttribute('data-enlarged', 'true');
                applyBlurEffect();
            } else {
                setTimeout(() => removeBlurEffect(), 100);

                gsap.to(img, {
                    zIndex: 1,
                    top: originalPosition.top + 'px',
                    left: originalPosition.left + 'px',
                    width: '75px',
                    height: '100px',
                    ease: "power4.out",
                    duration: 1,
                });
                img.setAttribute('data-enlarged', 'false');
            }
        }

        imgs.forEach((img, i) => {
            img.setAttribute('data-original-position', JSON.stringify(positions[i]));
            img.setAttribute('data-enlarged', 'false');
            img.addEventListener('click', toggleImageSize);
        });
    });

    function showGalleryContainer() {
        galleryContainer.style.display = "block";
        gsap.from(".gallery-container", { opacity: 0, duration: 1, ease: Expo.easeInOut });
    }

    function calculateMobilePositions() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const positions = [];
        const imgWidth = 75;
        const imgHeight = 80;
        const margin = 30;

        const numCols = Math.floor(viewportWidth / (imgWidth + margin));
        const numRows = Math.floor(viewportHeight / (imgHeight + margin));

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                if (positions.length >= 26) break;
                positions.push({
                    top: row * (imgHeight + margin),
                    left: col * (imgWidth + margin)
                });
            }
        }

        return positions;
    }
}

// Detecta el tamaño de la pantalla y ejecuta el código correspondiente
if (window.innerWidth <= 768) {
    runSmallScreenAnimations();
} else {
    runLargeScreenAnimations();
}
