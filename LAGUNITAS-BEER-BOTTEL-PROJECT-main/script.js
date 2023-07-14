function code() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
code();

var tl = gsap.timeline();
tl.to("#bottel", {
  scrollTrigger: {
    trigger: "#bottel",
    scroller: "#main",
    start: "top 15.5%",
    pin: true,
    end: "top -400%",
    // markers: true,
    scrub: 2,
  },
  rotate: "-15deg",
  ease: Expo.easeInOut,
  // stagger:0.05
})

  .to("#bottel", {
    scrollTrigger: {
      trigger: "#bottel",
      scroller: "#main",
      start: "top 15%",
      pin: true,
      end: "top 25%",
      // markers: true,
      scrub: 2,
      pinSpacing: false,
    },
    scale: 0.55,
    opacity: 0,
  })

  .to("#top-nav", {
    scrollTrigger: {
      trigger: "#top-nav",
      scroller: "#main",
      pin: true,
      start: "top 0%",
      end: "top -900%",
    },
  })

  .to("#line", {
    scrollTrigger: {
      trigger: "#line",
      scroller: "#main",
      pin: true,
      start: "top -10%",
    },
  })
  .to("#search", {
    scrollTrigger: {
      trigger: "#search",
      scroller: "#main",
      pin: true,
      start: "top -5%",
    },
  });
