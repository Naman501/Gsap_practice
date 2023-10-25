



gsap.to("#box",{
    x:900,
    y:400,
    duration:2,
    delay:1,
    backgroundColor:"yellow",
    rotate:360,
    scale:0.5,
    borderRadius:"20%",
    
})

// gsap.from("#box",{
//     x:900,
//     y:400,
//     duration:2,
//     delay:1,
//     backgroundColor:"yellow",
//     rotate:360,
//     scale:0.5,
//     borderRadius:"20%",
    
// })

var tl=gsap.timeline()


tl.to("h1",{
    x:670,
    color:"green",
    duration:2,
    // delay:1,
    // yoyo:true,
})

tl.to("h2",{
    x:430,
    color:"red",
    duration:2,
    // delay:3,
})

tl.to("h3",{
    x:210,
    color:"blue",
    duration:2,
    // delay:5,
})

// gsap.to("h1",{
//     x:210,
//     color:"green",
//     duration:2,
//     delay:1,
// })

// gsap.to("h2",{
//     x:430,
//     color:"red",
//     duration:2,
//     delay:3,
// })

// gsap.to("h3",{
//     x:670,
//     color:"blue",
//     duration:2,
//     delay:5,
// })


gsap.to("h4",{
    x:580,
    color:"black",
    duration:2,
    delay:1,
    stagger:2.2,
    repeat:1,
    yoyo:true,
})

// gsap.from("h4",{
//     x:580,
//     color:"black",
//     duration:2,
//     delay:1,
//     stagger:2.2,
// })