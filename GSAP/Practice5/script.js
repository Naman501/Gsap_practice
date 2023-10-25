var tl=gsap.timeline();


function time(){
    var a = 0
    var b=0
    setInterval(function(){
        a=Math.random()*10
        b=b+Math.floor(a)
        console.log(b)
        if(b<100){
        document.querySelector("#loader h1").innerHTML=b+"%"
 }
else{
    b=100
    document.querySelector("#loader h1").innerHTML=b+"%"
}

 },144)
}

time()

tl.to("#loader h1",{
    scale:1.7,
    delay:0.22,
    duration:2.66,
    onStart:time()
})


tl.to("#loader",{
    top:"-100vh",
    delay:1,

})












tl.to("#pg1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
// delay:1,
   scrollTrigger:
    {
        trigger:"#pg1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true,
    }
})