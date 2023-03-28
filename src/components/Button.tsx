import React from 'react'

interface props {
  title: string,
  onClick: () => void,
  width?: string,
  loading?: boolean,
  padding?: string,
  noIcon?: boolean,
}

const Button = ({title, onClick, width, loading, padding, noIcon}: props) => {
  return (
    <button className={`ease group relative inline-flex  z-30 box-border
    ${width? width : "w-auto"} ${padding} cursor-pointer items-center justify-center overflow-hidden
    rounded bg-gradient-to-r from-pink-500 to-violet-500 py-1.5 sm:py-3 px-4 sm:font-bold sm:text-sm text-[12px] font-normal
    text-white transition-all duration-200 focus:outline-none`}
    onClick={onClick}
    
    >
        <span className='absolute bottom-0 right-0 mb-8 mr-5 h-20 w-8 transition-x-1
        rotate-45 transform bg-white opacity-10 transition-all duration-300
        ease-out group-hover:translate-x-0 '></span>
        <span className='absolute top-0 left-0 mt-8 ml-5 h-8 w-20 transition-x-1
        rotate-45 transform bg-white opacity-10 transition-all duration-300
        ease-out group-hover:translate-x-0 '></span>

        <span className='relative z-20 items-center sm:font-semibold font-medium'>
            {noIcon && (
                <svg 
                  className='relative mr-2 h-5 w-5 flex-shrink-0 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='https://www.w3.org/2000/svg'>
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7vl9-11h-7z'
                    ></path>
                  </svg>
            )}
            {loading? "loading..." : title}
        </span>
        
    </button>
  )
}

export default Button