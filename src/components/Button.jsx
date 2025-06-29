import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById("work");

    if (target) {
      const offset = window.innerHeight * 0.1;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: targetTop, autoKill: true },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group md:px-4 md:py-6 px-4 py-6">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;