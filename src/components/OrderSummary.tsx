import React from 'react';

interface Props{
    items: Product[]
}

const OrderSummary = ({items}: Props) => {
  return (
    <div className='flex flex-1 flex-col bg-white items-start w-full h-[100%] rounded-md p-3
        shadow-sm'>
             <div className='pb-6'>
                    <h2 className='text-2xl font-medium'>Order Summary</h2>
                </div>
                 <div className='w-full flex items-center justify-between space-y-3 mb-2'>
                    <h2 className='text-slate-500'>Total Quantity</h2>
                    <h2 className='font-medium'>{items.length}</h2>
                 </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Subtotal</h2>
                    <h2 className='font-medium'>$250.59</h2>
                 </div>
                 <div className='w-full flex items-center justify-between mb-2'>
                    <h2 className='text-slate-500'>Discount</h2>
                    <h2 className='font-medium'>-$54.30</h2>
                 </div>
                 <div className='w-full flex items-center justify-between'>
                    <h2 className='text-slate-500'>Shipping & Handling</h2>
                    <h2 className='font-medium'>-$54.30</h2>
                 </div>
                 <div className='divide-y-2 divide-solid h-2 w-full flex border-b'></div>
                 <div className='w-full flex items-center justify-between mt-3'>
                    <h2 className='text-black mt-4'>Total to Pay</h2>
                    <h2 className='font-medium text-2xl'>-$254.30</h2>
                 </div>
                 
                    {/* <Link href='/' className='w-full flex mt-8'>
                    <Button title='Checkout'
                     onClick={() => router.push("/")} width='w-[100%]'/>
                    </Link> */}
                 
            </div>
  )
}

export default OrderSummary