import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
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
    <section id='hero' className='relative overflow-hidden'>
        <div className='hero-layout'>
            {/*LEFT SIDE: HERO CONTENT*/}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text uppercase'>
                        <h1>Creating
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                           
                                            <span className='lowercase font-main font-normal italic'>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into digital</h1>
                        <h1 className='italic font-main'>experience</h1>
                    </div>
                        <p className='md:text-xl relative z-10 pointer-events-none'>Welcome to my virtual world</p>
                        <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my Work"
                         />
                </div>
            </header>
            {/*RIGHT SIDE: 3D MODEL*/}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero