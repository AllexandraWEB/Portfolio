import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { navLinksMobile } from "../constants";
import NavButton from "./NavButton";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "notscrolled"}`}>
      <div className="inner flex justify-between items-center px-4 py-2">
        <Link to="/" className="logo">
          Alexandra
        </Link>

        {/* Hamburger Button - visible only on mobile */}
        <button
          className="md:hidden z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {showMenu ? (
            <img src="/images/Close.svg" alt="Close" width={25} height={25} />
          ) : (
            <img
              src="/images/Hamburger.svg"
              alt="Menu"
              width={25}
              height={25}
            />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            {navLinks.map(({ link, name, target }) => (
              <li key={name} className="group">
                {target ? (
                  <a href={link} onClick={toggleMenu} target={target} rel="noopener noreferrer">
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                ) : (
                  <Link to={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Nav Button - show on desktop only */}
        <div className="hidden sm:inline-block">
          <NavButton />
        </div>

        {/* Mobile Menu Overlay */}
        {showMenu && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex justify-center items-center">
            <ul className="p-4 flex flex-col items-center font-sans tracking-wide space-y-10 text-[25px] uppercase">
              {navLinksMobile.map(({ link, name, target }) => (
              <li key={name} className="group">
                {target ? (
                  <a 
                  href={link} 
                  target={target} 
                  onClick={toggleMenu} 
                  rel="noopener noreferrer">
                    <span>{name}</span>
                  </a>
                ) : (
                  <Link 
                  to={link}
                  onClick={closeMenu}>
                    <span>{name}</span>
                  </Link>
                )}
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
