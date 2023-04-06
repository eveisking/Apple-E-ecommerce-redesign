import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'
import apple from '../../public/apple2.png';
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/redux/cartSlice';

const Header = () => {

    const signout = () => {
      const user ={
        user: ''
      }
    }
    const session = false;
    const items = useSelector(selectCartItems);
  return (
    <header className='w-full flex items-center glassMorphism justify-between top-0 z-50'>
        <div className='flex items-center justify-center md:w-1/5 mt-5 sm:ml-4 px-3'>
        <Link href='/'>
        <div className='relative p-0 h-10 w-5 sm:ml-4 object-contain cursor-pointer opacity-75 transition hover:opacity-100'>
             <Image src={apple} alt="" width={28} height={28}
             className={styles.img}/>
        </div>
        </Link>
        </div>
        <div className='hidden md:flex items-center px-2 '>
            <ul className='flex items-center px-4 text-sm gap-10'>
                <li><a href='/' className='headerLink'>Product</a></li>
                <li><a href='/' className='headerLink'>Explore</a></li>
                <li><a href='/' className='headerLink'>Support</a></li>
                <li><a href='/' className='headerLink'>Business</a></li>
            </ul> 
        </div>
        <div className='flex items-center justify-around space-x-4 md:w-1/5 px-10'>
            <SearchIcon className="headerIcon"/>
            
            <Link href="/checkout">
              <div className='relative'>
                   {items.length > 0 && (
                  <span className='absolute -right-1 -top-2 z-50 flex h-4 w-4
                      items-center justify-center rounded-[100%]  text-[10px]
                      bg-gradient-to-r from-pink-500 to-violet-500 p-2  text-white' >
                    {items.length}</span>
                )}
                
                <ShoppingBagIcon  className='headerIcon'/>
            </div>
            </Link>
            <div className=''>
                { session ? (
                    <Image 
                     src={ //session.user?.image ||
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                }
                    alt=""
                    className='cursor-pointer rounded-full'
                    width={34}
                    height={34}
                    onClick={()=> signout()}
                    />
                ) :
                (
                    <UserIcon className='headerIcon' onClick={() => signout()}/>
                )}
                
            </div>
        </div>
    </header>
  )
}

export default Header