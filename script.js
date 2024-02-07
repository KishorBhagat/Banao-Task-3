const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelectorAll('.item');

function dotClick(page, event) {
    console.log(event)
    owl.trigger("to.owl.carousel", page-1)
}


var owl = $(".owl-carousel");
owl.owlCarousel({
    loop: !1,
    nav: !1,
    dots: !1,
    mouseDrag: !1,
    touchDrag: !0,
    margin: 20,
    stagePadding: 0,
    transitionStyle: "ease",
    animateIn: "easeIn",
    slideTransition: "linear",
    responsive: {
        0: { items: 1 },
        800: { items: 1 },
        1200: { items: 1 }
    }
})
owl.on("mousewheel", (function (e) {
    e.deltaY < 0 ? owl.trigger("next.owl") : owl.trigger("prev.owl")
    e.preventDefault()
}))
owl.on("to.owl.carousel", (function (e) {
    // console.log("hii")
}))


const sections = gsap.utils.toArray('.carousel section');
// console.log(sections)

// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".carousel",
//         pin: true,
//         scrub: 1,
//         end: () => "+=" + document.querySelector(".carousel").offsetWidth
//     }
// })

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".carousel",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".carousel").offsetWidth
    }
})
sections.forEach(section => {
    let up = section.querySelectorAll('.up');

    gsap.from(up, {
        y: -130,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            markers: true
        }
    })
})