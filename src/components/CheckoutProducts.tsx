import React from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { urlFor } from '../../sanity'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '@/redux/cartSlice'
import { toast } from 'react-hot-toast'

interface Props {
    items: Product[],
    id: string,
    

}
const CheckoutProducts = ({id, items}: Props) => {
    const dispatch = useDispatch();
   const removeItemFromCart = () => {
    dispatch(removeFromCart({id}));

     toast.error(`${items[0].title} removed from cart`, {
        position: 'bottom-center',
     });
   }
   const addItemToCart = () => {
    dispatch(addToCart(items[0]));

     toast.success(`${items[0].title} added cart`, {
        position: 'bottom-center',
     });
   }

    // Shorten long string
    const trunc = (str: string, n: number) =>{
        return str.length > n ? str.substring(0, n) + '...': str;
    }
  return (
    <tbody className='w-full gap-y-3 space-y-4 mt-3 divide-y text-[12px] border-b-2'>
    <tr className='my-3'>
      <td className='inline-flex'>
        <Image src={urlFor(items[0].image[0]).url()} alt='image' width={40} height={40} className='h-24 w-24 object-contain border border-black mr-2'/>
        <div className='flex flex-col items-start'> 
         <h2 className='sm:text-lg text-sm font-medium'>{items[0].title}</h2>
         <h3>{trunc(items[0].description, 50)}</h3></div>
          </td>
      <td><h2 className='sm:text-[16px] text-sm font-medium'>
        
        <Currency quantity={items.reduce((total, item) => total + item.price, 0)}
        currency="USD"/>
       </h2></td>
      <td className='text-[16px] font-medium flex items-center gap-x-3'>
        <span  onClick={removeItemFromCart} className='w-6 h-6 bg-gray-100 items-center flex justify-center cursor-pointer'><MinusIcon className='w-3'
        /></span>

        {items.length}
        <span onClick={addItemToCart} className='w-6 h-6 bg-gray-100 items-center flex justify-center cursor-pointer'><PlusIcon className='w-3'
        /></span>
        </td>
      <td><TrashIcon className='w-6 h-6 text-gray-800 cursor-pointer' onClick={removeItemFromCart}/></td>

    </tr>
    
  </tbody>
    
  )
}

export default CheckoutProducts