import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react"; 

import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

const Experience = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP (() => {
    // Animation: Cards slide from the left when they show up
    gsap.utils.toArray('.timeline-card').forEach((card) => {
        gsap.from(card, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: 'left left',
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%'
            }
        })
    })
    // Animation: Timeline show animation that follows the scroll
    gsap.to('.timeline', {
        transformOrigin: 'bottom bottom',
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top center',
            end: '70% center',
            onUpdate: (self) => {
                gsap.to('.timeline', {
                    scaleY: 1 - self.progress
                })
            }
        }
    })
    // Animation: Slow fade-in animation of the right text
    gsap.utils.toArray('.expText').forEach((text) => {
        gsap.from(text, {
            xPercent: 0,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: text,
                start: 'top 60%'
            }
        })
    })
    }, []);

  return (
    <section id='experience' className='w-full section-only-padding pb-50 xl:px-0 dark-background'>
        <div className='w-full h-full md:px-20 px-5 xl:pt-40 md:pt-25 pt-25 pb-20'>
        <h2 className='text-showcase md:mt-15 mt-10'>Current <span className='lowercase italic'>experience</span></h2>
            <div className='mt-10 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    {expCards.map((card, index) => (
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <GlowCard card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCard>
                            </div>

                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline' />
                                        <div className='gradient-line w-1 h-full' />
                                    </div>

                                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                        <div className='timeline-logo'>
                                            <img src={card.logoPath} alt="logo" />
                                        </div>
                                        <div>
                                            <h1 className='font-semibol text-3xl'>{card.title}</h1>
                                            <p className='my-5 text-white'>{card.date}</p>
                                            <p className='text-gray-400 italic'>Responsabilities</p>
                                            <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white'>
                                                {card.responsibilities.map((responsability) => (
                                                    <li key={responsability} className='text-lg'>{responsability}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience