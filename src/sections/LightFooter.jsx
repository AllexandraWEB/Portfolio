import React from "react";
import ContactButton from "../components/ContactButton";

const LightFooter = () => {
  return (
    <div className="w-full bg-black">
      <footer className="w-full light-background rounded-t-[55px]">
        <div className="w-full h-full md:px-20 px-5 xl:pt-40 md:pt-25 pt-25 pb-20">
          <div className="flex-col-center footer-text">
            <span className="span">Are you interested?</span>
            <div></div>
            Let's create <br /> great things
            <span className="italic">together.</span>
          </div>
          <ContactButton text="Contact me" />
        </div>
      </footer>
    </div>
  );
};

export default LightFooter;
