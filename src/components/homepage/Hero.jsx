import { gsap } from "gsap";
import { useRef, useEffect } from "react";


export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -100,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.15,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, {opacity: 0, duration: 1, ease:"out"}, "-=2")
  }, []);

  return (
    <section id="hero" className="hero relative flex w-full min-h-[100svh] select-none items-center justify-center pt-[var(--nav-h,72px)]" aria-label="hero">
      <div className="z-10 flex flex-col  w-full items-center text-title 2xl:text-[10vw]   text-accent-400 gap-[clamp(0.75rem,3.5vw,3rem)]">
        <div className="title ">
          {/* Learn more about useRef */}
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-[120%] font-higuen  overflow-visible">
            Hey
          </h1>
        </div>
        <div className=" title ">
        <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-[120%] font-fraunces font-light italic overflow-visible">
            hi
          </h1>
        </div>
        <div className=" title ">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-[120%] font-seriously">
            I&apos;m Om
          </h1>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute inset-0 mx-auto  w-[min(55%,900px)] overflow-hidden rounded-md pointer-events-none"
      >
      
      </div>
      <div ref={scroll} className="absolute bottom-6 right-2 flex flex-col items-center justify-center space-y-4">
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
