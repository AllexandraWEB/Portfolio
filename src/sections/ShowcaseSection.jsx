import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react"; 
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * ( index + 1 ),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100"
          }
        }
      )
    });

    gsap.fromTo(
      sectionRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5 })
  }, []);

  return (
    <section id='work' className='app-showcase' ref={sectionRef}>
      <div className='w-full'>
      <h2 className='text-showcase'>Selected <span className='lowercase italic'>Projects</span></h2>
        <div className='showcaselayout'>
          {/*LEFT*/}
          <div  className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src="/images/project-one.png" alt="Ryde" />
            </div>
            <div className='text-content'>
              <h2>Fairy Forest Parallax — Enchanting Web Scroll Animation</h2>
              <p className='text-black md:text-xl'>
              A smooth and magical parallax scrolling experience of a fairy forest, powered by GSAP animations and clean web technologies.
              </p>
            </div>
          </div>
          {/*RIGHT*/}
          <div className='project-list-wrapper overflow-hidden'>
              <div  className='project' ref={project2Ref}>
                <div>
                  <img src="/images/third-project.png" alt="#" />
                </div>
                <h2>Headset Project — Modern Product Landing Page</h2>
              </div>
              <div className='project' ref={project3Ref}>
                <div>
                  <img src="/images/Project_2_Bigger.png" alt="#" />
                </div>
                <h2>Roooby — Training Project</h2>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection