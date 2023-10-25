// gsap.to("#box",{
//     x: 400,
//     duration: 2,
//     backgroundColor: "#000",
//     borderRadius: "50%",
//     ease: "bounce"

// })

// gsap.to("#box",{
//     x:700,
//     duration:2,
//     rotate:360,
//     backgroundColor: "pink",
//     delay:1,
//     borderRadius:"22%",
// })



gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1.5,
    rotate:360,
   
})



gsap.from("#page2 #box",{
    scale:0,
    duration:1.8,
    rotate:360,
    scrollTrigger:{
        trigger:"page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true,
    }
})