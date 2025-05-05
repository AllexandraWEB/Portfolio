import React from 'react'

const ContactButton = ( {text} ) => {
  return (
    <div className='contact-button group w-[250px]'>
        <p className='text-button uppercase'>{text}</p>
    </div>
  )
}

export default ContactButton