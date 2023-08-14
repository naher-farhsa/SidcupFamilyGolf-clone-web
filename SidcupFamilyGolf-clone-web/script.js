var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
       crsr.style.left = dets.x+20+"px"  //  10/175--cursor dimension(25h,25w/300h,300w) half to point at center.
       crsr.style.top = dets.y+20+"px" 
       blur.style.left = dets.x-175 +"px"
       blur.style.top = dets.y-175 +"px"
           
})
var c=document.querySelectorAll("#nav h5,img")
c.forEach(function(elem){
     elem.addEventListener("mouseenter", function() {
              crsr.style.scale = 4
              crsr.style.border = "0.1px solid #fff"
              crsr.style.backgroundColor = "transparent"
      })
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #7dba03f5 "
        crsr.style.backgroundColor = "#7dba03f5"
      })
})
var c=document.querySelectorAll("#arrow")
c.forEach(function(elem){
     elem.addEventListener("mouseenter", function() {
              crsr.style.scale = 4
              crsr.style.border = "0.1px solid #fff"
              crsr.style.backgroundColor = "transparent"
      })
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #7dba03f5 "
        crsr.style.backgroundColor = "#7dba03f5"
      })
})

var c=document.querySelectorAll(".cards")
c.forEach(function(elem){
     elem.addEventListener("mouseenter", function() {
              crsr.style.scale = 4
              crsr.style.border = "0.2px solid #fff"
              crsr.style.backgroundColor = "transparent"
              elem.style.transform="rotate3d(-1,1,0,15deg)"
      })
     elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #7dba03f5 "
        crsr.style.backgroundColor = "#7dba03f5"
        elem.style.transform="rotate3d(1,1,0,0deg)"
      })
}) 
var c=document.querySelectorAll(".elem")
c.forEach(function(elem){
     elem.addEventListener("mouseenter", function() {
              crsr.style.scale = 4
              crsr.style.border = "0.2px solid #fff"
              crsr.style.backgroundColor = "transparent"
      })
     elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #7dba03f5 "
        crsr.style.backgroundColor = "#7dba03f5"
      })
}) 
var c=document.querySelectorAll("#footer")
c.forEach(function(elem){
     elem.addEventListener("mouseenter", function() {
              crsr.style.scale = 4
              crsr.style.border = "0.2px solid #fff"
              crsr.style.backgroundColor = "transparent"
      })
     elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #7dba03f5 "
        crsr.style.backgroundColor = "#7dba03f5"
      })
})  

gsap.to("#nav",{
    backgroundColor:"black",
    duration:1,
    height:"100px",
    scrollTrigger:{     /*provide (nav) div transparent to black and vice versa as we scroll*/
    trigger:"#nav",
    scroller:"body",
    //markers:"true",
    start:"top -10%",
    end:"top -11%", 
    scrub:1
}

})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
       // markers:"true"
       scroller:"body",
       start:"top -30%",
       end:"top -80%",
       scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:3,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        /*markers:true,*/
        start:"top 50%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from(".cards",{
    y:90,
    opacity:0,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards ",
        scroller:"body",
        /*markers:true,*/
        start:"top 80%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-30,
    x:-30,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:30,
    x:30,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#green-div",{
    y:50,
    scrollTrigger:{
        trigger:"#green-div",
        scroller:"body",
        start:"top 50%",
        end:"top 50%",
        scrub:4,
    }
})
gsap.from("#page3",{
    y:70,
    scrollTrigger:{
        trigger:"#green-div",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:4,
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:4,
    }
})

  