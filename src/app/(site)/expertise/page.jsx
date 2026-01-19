import Exp_HeroSection from '@/components/expertise/Exp_HeroSection'
import Our_Services from '@/components/expertise/Our_Services'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Exp_HeroSection />
        <Our_Services/>
    </div>
  )
}

export default page