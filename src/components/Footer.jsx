import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-fill md:w-2/3 text-gray-600'>"Welcome to Stich & Style, where style meets sustainability! We’re a fresh clothing brand dedicated to creating high-quality, eco-friendly apparel that empowers individuals to express their unique style. With a focus on innovative designs and ethical production, we aim to redefine fashion for the modern world. Join us on our journey to make fashion more sustainable and stylish!"</p>
        </div>

        <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
        </ul>
        </div>

        <div>
            <p className='text-xl font-medium  mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9967539407</li>
                    <li>stichandstyle@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 Stich & Style. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
