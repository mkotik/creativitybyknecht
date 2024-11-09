import rachel from "../../assets/test5.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    timeline
      .to(imgRef.current, {
        scale: 3,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        heroRef.current,
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div class="hero wrapper" ref={wrapperRef}>
      <div class="content">
        <section class="section screen"></section>
        <section class="section "></section>
      </div>
      <div class="image-container" ref={heroRef}>
        <img src={rachel} alt="image" ref={imgRef} />
      </div>
    </div>
  );
};

export default Hero;
