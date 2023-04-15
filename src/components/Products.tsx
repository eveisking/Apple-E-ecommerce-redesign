import { ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux';
import { urlFor } from '../../sanity';
import { addToCart } from '@/redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    product: Product;
}
function Products({product}: Props) {
const dispatch = useDispatch();
  const addItemsToCart = () => {
    dispatch(addToCart(product));

    toast.success(`${product.title} has been added to the cart`, {
      position: "bottom-center"
    });
    
  }
  return (
    <>
    <div className='flex h-fit w-[300px] select-none flex-col space-y-3 rounded-xl
    bg-[#35383C] p-4 md:h-[500px] md:w-[320px] sm:h-[400px] sm:w-[230px] md:p-10 mb-4 
    shadow-lg sm:gap-'>
      <div className='relative h-64 w-full md:h-72'>
        <Image src={urlFor(product.image[0]).url()} fill alt={product.title}
               className='object-contain' />
      </div>
      <div className='flex flex-1 items-center justify-between space-x-3'>
      <div className='text-white space-y-3 text-xl md:text-2xl sm:text-sm'>
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        </div>
        <div className='cartButton'
           onClick={addItemsToCart}>
          <ShoppingCartIcon className='h-8 w-8 text-white'></ShoppingCartIcon>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products