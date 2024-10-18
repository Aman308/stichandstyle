import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
      <div className='flex flex-col justify-center  items-start gap-6'>
      <p className='font-semibold text-xl text-gray-600'>Our Store</p>
      <p className='text-gray-500'>1234, Fashion Street, MG Road, Camp, Pune, <br />Maharashtra, 411001, India</p>
      <p className='text-gray-500'>Tel: 987-653-2545 <br /> Email: stichandstyle@gmail.com </p>
      <p className='font-semibold text-xl text-gray-600'>Careers at Stich & Style</p>
      <p className='text-gray-500'>Join Stitch & Style and be part of a dynamic team shaping the future of fashion. We offer a collaborative, creative environment with opportunities for growth, professional development, and a commitment to work-life balance.</p>
      <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
