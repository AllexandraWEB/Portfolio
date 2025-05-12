import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/" className='logo'>
                Alexandra
            </Link>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(( { link, name } ) => (
                        <li key={name} className='group'>
                            <Link to={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </Link>
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