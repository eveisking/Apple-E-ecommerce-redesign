import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const contact = () => {
  return (
    <>
    <Head>
        <title>Contact us</title>
    </Head>
    <header className='w-full fixed left-0 top-0 z-20 h-16 shadow-xl'>
        <div className='flex items-center justify-between h-16 px-8 max-w-[95%] mx-auto w-full'>
            <div className=''><h3 className='text-md font-medium text-gray-800'>Robin</h3></div>
        <nav className='flex items-center justify-center '>
            <ul className='gap-x-4 flex items-center text-xl font-[200] uppercase'>
                <li className='list-none hover:text-blue-600 transition-all transform tracking-wider'><Link href='#' className=''>About</Link></li>
                <li className='list-none hover:text-blue-600 transition-all transform tracking-wider'><Link href='#'>Hire</Link></li>
                <li className='list-none hover:text-blue-600 transition-all transform tracking-wider'><Link href='#'>Blog</Link></li>
                <li className='list-none hover:text-blue-600 transition-all transform tracking-wider'><Link href='#'>Courses</Link></li>
                <li className='list-none hover:text-blue-600 transition-all transform tracking-wider'><Link href='#'>Rss</Link></li>
            </ul>
        </nav>
        </div>
    
    </header>
    </>
  )
}

export default contact