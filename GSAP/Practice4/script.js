var tl = gsap.timeline();

tl.from("#nav",{
  
    opacity:0,
    delay:0.1
})
tl.from("#nav h1,h4,h3",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.1,
    stagger:0.22
})


tl.from("#left h1",{
    x:-500,
    opacity:0,
    duration:0.55,
    stagger:0.78,
})
tl.from("#left img",{
    
    opacity:0,
    duration:0.55,
    stagger:0.48,
})
tl.from("#right img",{
    scale:2.4,
      opacity:0,
      duration:0.54
  })

tl.from("#btm h5",{
    
    opacity:0,
    duration:0.22,
    stagger:0.78,
})
tl.from("#btmrt",{
  
    opacity:0,
    delay:0.1
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,

    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
       markers:true,
        start:"top 87%",
        end:"top 10%",
        toggleActions:"restart none none reverse"
    }
})