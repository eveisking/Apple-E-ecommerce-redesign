import React from 'react';
import Link from 'next/link';
import { selectCartItems } from '@/redux/cartSlice';
import { useSelector } from 'react-redux';
import { ShoppingBagIcon } from '@heroicons/react/outline';

const Cart = () => {
    const items = useSelector(selectCartItems);

    if (items.length === 0 ) return null;

    
  return (
   <Link href='/checkout'>
    <div className='fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer
    items-center justify-center rounded-full bg-gray-300 '>
        {items.length > 0 && (
            <span className='absolute -right-2 -top-2 z-50 flex items-center justify-center
            rounded-full h-7 w-7 bg-gradient-to-r from-pink-500 to-violet-500
            text-[10px] text-white'>
                {items.length}
            </span>
        )}
        <ShoppingBagIcon className='headerIcon h-8 w-8 text-black'/>
    </div>
   </Link>
  )
}

export default Cart