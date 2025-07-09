import React from "react";
import { gsap } from "gsap";
import { handleCursorEnter, handleCursorLeave } from "../utils/cursorHandlers";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me overflow-hidden">
      <div className="w-full h-full md:px-20 px-5 xl:pt-40 md:pt-25 pt-25 pb-20">
        <div className="flex-col-center about-container">
          <span className="span">About me</span>
          <h1 
          className="about-header"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          >
            <span className="about-italic">l explore</span> my interests{" "}
            <span className="about-italic">
              with the
              <img
                src="/images/logos/tailwind.svg"
                alt="Tailwind logo"
                className="tailwind"
              />
            </span>
          </h1>
          <h1 
          className="about-header"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          >same spirit I bring to design:</h1>
          <h1 
          className="about-header"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}>
            a blend{" "}
            <span className="about-italic">
              of curiosity, minimalism, & joy.
            </span>
          </h1>
          <p className="about-p">I'm Alexandra Tsimentarova - Frontend Developer in my third year of my Informatics Degree, while also pursuing a JavaScript Developer qualification at Software University<br /> <br />Blending technical precision with visual harmony, I'm drawn to elegant code, and to the beauty of thoughtful details and meaningful simplicity.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
