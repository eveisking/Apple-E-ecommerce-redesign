import { selectCartTotal } from '@/redux/cartSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import Button from './Button';
import Link from 'next/link';

interface Props{
    items: Product[]
}

const OrderSummary = ({items}: Props) => {
    const totalPrice = () => {
       const sum = items.reduce((total, items) => (total + items.price), 0);
       return sum;
    }
    const discount = () =>{
        const amount = 50;
        if (items.length >= 2){
          return amount;
        }else return 0
    }

    const cartTotal = useSelector(selectCartTotal);
  return (
    <div className='flex flex-1 flex-col bg-white items-start w-full h-[100%] rounded-md p-3
        shadow-sm'>
             <div className='pb-6'>
                    <h2 className='text-2xl font-semibold'>Order Summary</h2>
                </div>
                 <div className='w-full flex items-center justify-between space-y-3 mb-2'>
                    <h2 className='text-slate-500'>Total Quantity</h2>
                    <h2 className='font-semibold'>{items.length}</h2>
                 </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Subtotal</h2>
                    <h2 className='font-semibold'><Currency quantity={totalPrice()} currency="USD"/></h2>
                 </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Discount</h2>
                    <h2 className='font-semibold'>-${discount()}</h2>
                 </div>
                 <div className='w-full flex items-center justify-between'>
                    <h2 className='text-slate-500'>Shipping & Handling</h2>
                    <h2 className='font-semibold'>$54.30</h2>
                 </div>
                 <div className='divide-y-2 divide-solid h-2 w-full flex border-b'></div>
                 <div className='w-full flex items-center justify-between mt-3'>
                    <h2 className='text-black mt-4 font-semibold'>Total to Pay</h2>
                    <h2 className='font-semibold text-2xl'>
                        <Currency quantity={totalPrice() - discount()} currency="USD"/>
                        </h2>
                 </div>
                 
                <Link href='/' className='w-full flex mt-8'>
                    <Button title='Checkout'
                     onClick={() => {}} width='w-[100%]'/>
                    </Link> 
                 
            </div>
  )
}

export default OrderSummary