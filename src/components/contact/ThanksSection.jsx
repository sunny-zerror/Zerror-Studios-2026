import React from 'react'

const ThanksSection = () => {
  return (
   <div className="w-full h-full flex flex-col ">
      <div className="w-full h-fit  text-white gap-8 flex flex-col">
        <h1 className="text-[2.5rem] leading-[3rem] capitalize">
          Thank you
        </h1>

        <p className='text-[1.1rem] leading-[1.5rem] capitalize'>Your message is with us. We’ll get back <br/> to you soon.</p>
      </div>
    </div>
  )
}

export default ThanksSection