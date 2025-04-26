import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > 10; // If the user scrolled more than 10px
        setScrolled(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'notscrolled'}`}> 
        <div className='inner'>
            <a href="#hero" className='logo'>
                Alexandra
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(( { link, name } ) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#content" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar