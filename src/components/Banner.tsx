import React from 'react'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Button from './Button'



const Banner = () => {
  return (
    <section className='w-full flex max-w[1350px] mx-auto items-center justify-start flex-col 
    md:flex-row md:items-center md:justify-between text-center sm:text-start h-screen sticky top-0 px-8'>
        <div className='space-y-8 sm:space-y-8 sm:max-w=[90%] mx-auto py6 sm:py-0'>
        <h1 className='text-3xl sm:text-5xl font-semibold tracking-wide lg:text-6xl xl:7xl 
            mt-6 sm:mt-4 md:mt-0'>
            <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text
            text-transparent'>Powered
            </span>
            <span className=''>By Intellect</span>
            <br /><span>Driven By Values</span>
            </h1>
            <div className='flex space-x-4 sm:items-center sm:justify-start items-center justify-center'>
                <Button title='Buy Now' 
                onClick={() => {}}/>
                <a href='/' className='text-sm sm:text-lg sm:w-[55%] sm:link text-blue-600 flex items-center justify-center sm:justify-start'>Learn More <ChevronRightIcon className='w-3 h-3 sm:h-5 sm:w-5 transform hover:translate-x-2 duration-75 ml-1'/></a>
            </div>
        </div>
        <div className='relative h-[300px] w-[300px] sm:h-[450px] sm:w-[459px] transition-all duration-100 
          md:line lg:h-650px lg:650px md:block mt-8 md:mt-0' >
            <Image 
            src='/iphone3.png'
            alt="iphone 14 pro max"
            className='object-contain' fill/>
        </div>
    </section>
  )
}

export default Banner