import React from "react";
import ContactButton from "../components/ContactButton";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {

    // Animation: Main title is being shown
    useGSAP(() => {
            gsap.fromTo('.hero-header-text h1', 
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power2.inOut'
                }
            )
        })

  return (
    <section id="hero" className="relative overflow-hidden section">
      <div className="hero-layout">
        <div>
          <img src="/public/images/hero-lotus.png" alt="Lotus" className="animate-[spin_50s_linear_infinite]" />
        </div>
        <div className="hero-header-text padding-x">
          <h1>Aleksandra</h1>
        </div>

        <div className="hero-arrow">
          <img
            src="public/images/arrow.png"
            alt="Down Arrow"
            className="animate-bounce"
          />
        </div>
      </div>

      <div className="flex-col w-full m-auto text-center padding-x">
        <p className="md:text-[15px] text-[13px] py-6">
          Hi, I'm Alexandra! A passionate web developer with colossal dreams
          about the future, set in Plovdiv, Bulgaria.
        </p>
        <ContactButton text="My education" variant="light" />
      </div>
    </section>
  );
};

export default HeroSection;
