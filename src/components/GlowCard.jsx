import React, { useRef } from 'react'

const GlowCard = ( {card, children, index} ) => {
  // Glow effect that follows our mouse position
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index]; // Checking on which card we currently are
    if(!card) return; // If there is no card, exit the function

    // Get the mouse position relative to the card
    const rect = card.getBoundingClientRect(); // Getting access to the position of the card itself
    const mouseX = e.clientX - rect.left - rect.width / 2; // X position of the mouse
    const mouseY = e.clientY - rect.top - rect.height / 2; // Y position of the mouse

    // Calculating the mouse angle from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60); // Setting the angle as CSS variable
  }
  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
        <div className='glow' />
          <div className='mb-5'>
            <p className='text-white text-lg'>{card.review}</p>
        </div>
        {children}
    </div>
  )
}

export default GlowCard