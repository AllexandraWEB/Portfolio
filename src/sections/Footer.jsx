import React from "react";
import ContactButton from "../components/ContactButton";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const Footer = () => {

    // useGSAP(() => {
    //       gsap.fromTo('span, h1',
    //           {
    //               y: 50,
    //               opacity: 0
    //           },
    //           {
    //               y: 0,
    //               opacity: 1,
    //               stagger: 0.2,
    //               duration: 1,
    //               ease: 'power2.inOut'
    //           }
    //       )
    //   })

  return (
    <footer className="w-full dark-background rounded-t-[55px]">
      <div className="w-full h-full md:px-20 px-5 xl:pt-40 md:pt-25 pt-25 pb-20">
        <div className="flex-col-center footer-text">
          <span className="span">Are you interested?</span>
          <h1>
            Let's create <br /> great things
            <span className="italic">together.</span>
          </h1>
        </div>
        <ContactButton text="Contact me" />
      </div>
    </footer>
  );
};

export default Footer;
