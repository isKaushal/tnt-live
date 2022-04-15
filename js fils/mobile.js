

gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
  scrollTrigger:{
    trigger: "#p1",
    markers:true,
    scrub : true,
    start:"top 75%",
    end:"top 65%"
  }
})

.to("#n1",{display:"block"})



gsap.timeline({
  scrollTrigger:{
    trigger: "#p2",
    markers:true,
    scrub : true,
    start:"top 75%",
    end:"top 65%"
  }
})

.to("#n1",{display:"none"})
.to("#n2",{display:"block"})


gsap.timeline({
  scrollTrigger:{
    trigger: "#p3",
    markers:true,
    scrub : true,
    start:"top 75%",
    end:"top 65%"
  }
})


.to("#n2",{display:"none"})
.to("#n3",{display:"block"})


gsap.timeline({
  scrollTrigger:{
    trigger: "#p4",
    markers:true,
    scrub : true,
    start:"top 75%",
    end:"top 65%"
  }
})


.to("#n3",{display:"none"})
.to("#n4",{display:"block"})


gsap.timeline({
  scrollTrigger:{
    trigger: "#p5",
    markers:true,
    scrub : true,
    start:"top 75%",
    end:"top 65%"
  }
})


.to("#n4",{display:"none"})
.to("#n5",{display:"block"})


gsap.timeline({
  scrollTrigger:{
    trigger: "#p6",
    markers:true,
    scrub : true,
    start:"top 75%",
    end:"top 65%"
  }
})

.to("#n5",{display:"none"})
.to("#n6",{display:"block"})



