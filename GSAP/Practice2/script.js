var tl=gsap.timeline();



tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-110,
    duratyion:1,
    delay:1,
    opacity:0,
    stagger:0.22,


})

tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.28,
})

tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.7,
    
})

tl.from("h5",{
    scale:0,
    opacity:0,

})


tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.777,
    yoyo:true,
})