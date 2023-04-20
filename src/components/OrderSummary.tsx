import { selectCartTotal } from '@/redux/cartSlice';
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import Button from './Button';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Stripe from 'stripe';
import { fetchPostJSON } from '../../utils/api-helpers'
import getStripe from '../../utils/get-stripejs'



interface Props{
    items: Product[]
}

//const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const OrderSummary = ({items}: Props) => {
    const [ loading, setLoading ] = useState(false);
     const [ show, setShow ] = useState(false);

    const handleSetshow = () => {
      setShow(!show)
    }
     console.log(show)
    const discount = () =>{
        const amount = 50;
        if (items.length >= 2){
          return amount;
        }else return 0
    }

    const cartTotal = useSelector(selectCartTotal);

    const createCheckoutSession = async () => {
      setLoading(true);
     
     const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON("/api/checkout_session",
     {
      items: items }
      );
      
      //Internal Server Error
      if ((checkoutSession as any).statusCode === 500) {
          console.error((checkoutSession as any).message);
          return;
        }

        //Redirect to Checkout
        const stripe = await getStripe();

        const { error } = await stripe!.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: checkoutSession.id,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        console.warn(error.message);
        setLoading(false);
     }

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
                  <div className='w-full flex mt-8'>
                    <Button title={loading ? 'loading...' : 'Check Out'}
                     onClick={createCheckoutSession} width='w-[100%] text-[18px]'/>
                    </div> 
                 </div>
                     <div className='flex justify-between items-center w-full cursor-pointer text-blue-500 mt-4 text-sm' 
                     >
                        <button onClick={handleSetshow}>Other payment options</button>
                        {show ? (
                           <ChevronDownIcon  className='h-6 w-6' />
                        ) : (
                           <ChevronUpIcon  className='h-6 w-6' />
                        )}
                        
                     </div>
                    <div className={`${show ? "flex flex-col h-max w-full transition transform delay-75" : "hidden"}`}>
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