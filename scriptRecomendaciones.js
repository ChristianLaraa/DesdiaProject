const section = document.querySelectro('.section'),
    sectionListItem = section.querySelectorAll('section_list_item'),
    sectionListItemText = section.querySelectorAll("section_list_item > h1"),
    sectionListFigure = section.querySelectorAll('.section_list_item_figure'),
    sectionMedia = section.querySelectorAll('.section_media');

const clipPath = {
    top: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    full: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    bottom: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
};
gsap.set(sectionMedia, {clipPath: clipPath.top});

const initAnimation = () => {
    gsap.set(sectionListItemText, {yPercent: 100});

    const tlText = gsap.timeline({defaults: {duration: 1.48, ease: 'expo.inOut'} });
}

/* 6.06 video Youtube Clip Path Hover Animation */