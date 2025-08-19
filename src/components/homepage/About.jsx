import { useEffect, useRef } from "react";
// import profileImg from "/src/assets/images/profile.webp";
import profileImg from "/src/assets/images/Om_1.jpeg";
// import profileImg from "/src/assets/images/Om_2.jpeg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center md:flex-row lg:gap-8">
        <div className="top-28 w-full max-w-md overflow-hidden rounded-md md:sticky md:w-2/5 lg:w-1/3">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-contain object-center md:aspect-auto"
            src={profileImg}
            width="400"
            height="600"
            alt="portrait image of Om"
          />
        </div>
        <div className="top-10 sm:sticky md:top-20 md:w-3/5 lg:w-2/3 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 opacity-0 2xl:text-4xl"
            >
              I’m Om Sharma—an independent developer from India crafting end-to-end solutions with clarity, purpose, and precision. 
              I navigate the realms of Backend, Cloud Infrastructure, and Frontend Integration, ensuring each system is scalable, resilient, and elegantly simple.
              <br></br>
              <br></br>
              I’m driven by a clear vision: technology should be accessible, impactful, and rooted in ethics. 
              That means crafting infrastructure that performs under pressure and interfaces that feel intuitive — without overcomplication.
              <br />
              <br />
              I build with intentionality and integrity, continually refining my craft so that what I create endures and elevates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}