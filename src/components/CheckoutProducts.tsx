import React from 'react'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { urlFor } from '../../sanity'


interface Props {
    items: Product[],
    id: string
}
const CheckoutProducts = ({id, items}: Props) => {
  return (
    <tbody className='w-full py-3 space-y-4 mt-3 divide-y text-[12px]'>
    <tr className='my-3'>
      <td className='inline-flex'>
        <Image src={urlFor(items[0].image[0]).url()} alt='image' width={40} height={40} className='h-24 w-24 object-contain border border-black mr-2'/>
        <div className='flex flex-col items-start'> 
         <h2 className='text-[18px] font-medium'>{items[0].title}</h2>
         <h3>{items[0].description}</h3></div>
          </td>
      <td><h2 className='text-[16px] font-medium'>${items[0].price}</h2></td>
      <td className='text-[16px] font-medium'>1</td>
      <td><TrashIcon className='w-6 h-6 text-gray-800 cursor-pointer'/></td>

    </tr>
    
  </tbody>
    
  )
}

export default CheckoutProducts