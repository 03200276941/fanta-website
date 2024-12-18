
// Initialize ScrollTrigger and GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Animation for Section Two
var bk = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});

// Synchronizing animations in timeline
bk.to(".fanta", { top: "120%", left: "0%", duration: 2 }, 0)
  .to(".orange-slice", { top: "160%", left: "20%", duration: 2 }, 0)
  .to(".orange", { width: "15%", top: "120%", right: "10%", duration: 2 }, 0)
  .to(".leave1", { width: "15%", top: "120%", rotate: "190deg", left: "80%", duration: 2 }, 0)
  .to(".leave2", { width: "15%", top: "120%", rotate: "250deg", left: "-3%", duration: 2 }, 0);

// Animation for Section Three
var bk2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});

// Adding animations with GSAP
bk2.from("#lemon1", { rotate: "-90deg", top: "110%", left: "-100%" }, "start")
   .from("#cocacola", { rotate: "-70deg", top: "110%", left: "-100%" }, "start")
   bk2.from("#lemon", { rotate: "90deg", top: "110%", left: "100%" }, "start")
   .from("#pepsi", { rotate: "70deg", top: "110%", left: "100%" }, "start");
   bk2.to(".orange-slice", {width: "23%" ,  top: "210%", left: "38.7%" }, "start")
   .to(".fanta", {  width: "45%" , top: "212%", left: "28%" }, "start")
