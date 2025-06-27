import React from "react";
import ContactButton from "../components/ContactButton";
import { handleCursorEnter, handleCursorLeave } from "../utils/cursorHandlers";

const Footer = () => {
  return (
    <footer className="w-full dark-background rounded-t-[55px]">
      <div className="w-full h-full md:px-20 px-5 xl:pt-40 md:pt-25 pt-25 pb-20">
        <div
          className="flex-col-center footer-text"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        >
          <span className="span">Are you interested?</span>
          Let's create <br /> great things
          <span className="italic">together.</span>
        </div>
        <ContactButton text="cimentarowa@gmail.com" />
      </div>
    </footer>
  );
};

export default Footer;
