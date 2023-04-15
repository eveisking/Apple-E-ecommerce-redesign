import { selectCartTotal } from '@/redux/cartSlice';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import Button from './Button';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface Props{
    items: Product[]
}

const OrderSummary = ({items}: Props) => {
    const [ loading, setLoading ] = useState(false);
     const [ show, setShow ] = useState<boolean>(false);

     const showAppleCard = () => {
      setShow(!show);
     }
     
     const createCheckoutSession = async () => {
      setLoading(true);

      
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
        shadow-sm space-y-3'>
             <div className='pb-6'>
                    <h2 className='text-2xl font-semibold'>Order Summary</h2>
                </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Total Quantity</h2>
                    <h2 className='font-semibold'>{items.length}</h2>
                 </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Subtotal</h2>
                    <h2 className='font-semibold'><Currency quantity={cartTotal} currency="USD"/></h2>
                 </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Discount</h2>
                    <h2 className='font-semibold'>-${discount()}</h2>
                 </div>
                 <div className='w-full flex items-center justify-between'>
                    <h2 className='text-slate-500'>Shipping & Handling</h2>
                    <h2 className='font-semibold'>FREE</h2>
                 </div>
                 <div className='w-full flex justify-between'>
                    <div className='flex flex-col gap-x-1 lg:flex-row items-center'>
                    <p> Estimated Tax For:{" "} </p>
                     <p className='text-sm flex cursor-pointer items-end text-blue-500 hover:underline'>
                        Enter zip code
                        <ChevronDownIcon className='h-6 w-6'/>
                     </p>
                    </div>
                    <p className='font-semibold'>$ -</p>
                 </div>
                 <div className='divide-y-2 divide-solid h-2 w-full flex border-b'></div>
                 <div className='w-full flex items-center justify-between mt-3'>
                    <h2 className='text-black mt-4 font-semibold'>Total to pay</h2>
                    <h2 className='font-semibold text-2xl'>
                        <Currency quantity={cartTotal - discount()} currency="USD"/>
                        </h2>
                 </div>
                 <div className='flex w-full flex-col '>
                  <div className='flex mb-3'>
                     <p className='font-medium'>How would you like to check out?</p>
                  </div>
                  <div className='flex flex-col bg-slate-100'>
                     <div className='flex flex-col items-center justify-center'>
                        <p>Pay in full</p>
                        <p className='font-semibold'><Currency quantity={cartTotal - discount()} currency="USD"/></p>

                     </div>
                  <Link href='/' className='w-full flex mt-8'>
                    <Button title='Check out'
                     onClick={() => {}} width='w-[100%] text-[18px]'/>
                    </Link> 
                 </div>
                     <div className='flex justify-between items-center w-full cursor-pointer text-blue-500 mt-4 text-sm' 
                     >
                        <p>Other payment options</p>
                        <ChevronDownIcon  className='h-6 w-6' onClick={showAppleCard}/>
                     </div>
                    <div className={`hidden h-0 flex-col mt-3 ${show && "flex h-max w-full"}`}>
                    <div className='flex flex-col items-center justify-center'>
                        <p>Pay monthly</p>
                        <p>with Apple Card</p>
                     
                        <p className='font-semibold'><Currency quantity={cartTotal / 6} currency="USD"/>/mo. at 0% APR</p>

                     </div>
                  <Link href='/' className='w-full flex mt-8'>
                    <Button title='Check out with Apple Card monthly installment'
                     onClick={() => {}} width='w-[100%] text-[18px]'/>
                    </Link> 
                  </div>
                 
                 </div>
                
                 
            </div>
  )
}

export default OrderSummary