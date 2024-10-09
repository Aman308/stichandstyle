import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const OurPolicy = () => {
  return (
    <>
           <div className='text-center text-3xl py-8'>
            <Title text1={'Our'} text2={'Policy'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            "Our clear and customer-friendly policy ensures a smooth and worry-free shopping experience!"
            </p>
      </div>
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-sm sm:text-sm md:text-base text-gray-700'>
 
    <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> Easy Exchange Policy </p>
        <p className='text-gray-400'>"Enjoy hassle-free shopping with our easy exchange policy, ensuring a perfect fit every time!"</p>
    </div>
    <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> 7 Days Return Policy </p>
        <p className='text-gray-400'>"Shop confidently with our 7-day return policy for a worry-free experience!"</p>
    </div>
    <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> Best Customer Support </p>
        <p className='text-gray-400'>"Experience top-notch service with our best-in-class customer support, always here to help!"</p>
    </div>
      
    </div>
    </>
  )
}

export default OurPolicy
