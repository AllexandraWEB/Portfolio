import React from 'react'

const TitleHeader = ( { title, sub } ) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='hero-career-text'>
            <p>{sub}</p>
        </div>
        <div className='text-center font-main uppercase md:text-[96px] text-[45px] font-thin'>
            {title}
        </div>
    </div>
  )
}

export default TitleHeader