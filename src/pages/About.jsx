import  Title  from '../components/Title'
import React from 'react'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>At Stich & Style , we believe fashion is more than just clothing—it's a statement, an expression of who you are, and a way to connect with the world around you. Founded in 2024, we set out to create a brand that blends timeless style with modern trends, delivering clothing that empowers you to look and feel your best, every day.</p>
                <p>We aim to inspire confidence and individuality through fashion. Every piece in our collection is thoughtfully designed, blending quality craftsmanship with effortless style, so you can make every moment your own.</p>
                <b className='text-gray-800'>Our Mission</b>  
                <p>Stich & Style is committed to creating clothing that reflects the values of sustainability, inclusivity, and innovation. We believe everyone should have access to fashion that not only looks good but also feels good—on the body, the planet, and the conscience.</p>         
                <b className='text-gray-800'>What Makes Us Different</b>
                <p>Our designs are a reflection of the vibrant, ever-evolving world we live in. From everyday essentials to statement pieces, we create collections that seamlessly transition from day to night, season to season. But what really sets us apart is our attention to detail—each stitch, fabric, and silhouette is carefully chosen to offer a perfect fit and lasting quality.
                    We are more than just a clothing brand. We're a community. A place where fashion lovers can find inspiration, discover their unique style, and feel confident in their choices</p>
            </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' mx-2 my-2 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>At Stich & Style, quality is at the heart of everything we do. We believe that great fashion is built on attention to detail, superior craftsmanship, and a commitment to durability. That’s why we go the extra mile to ensure that every piece in our collection meets the highest standards of excellence.</p>
        </div>
        <div className=' mx-2 my-2 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>At Stich & Style,we believe that shopping for the perfect outfit should be just as enjoyable and effortless as wearing it. We’re dedicated to providing a seamless, stress-free experience from the moment you browse our collections to the moment your purchase arrives at your doorstep.</p>
        </div>
        <div className=' mx-2 my-2 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>At Stich & Style,our customers are at the heart of everything we do. We believe that exceptional customer service goes beyond just answering questions—it’s about creating a personalized, seamless, and memorable experience from start to finish. Whether you’re shopping with us for the first time or you're a long-time loyal customer, we’re here to ensure your journey with Stich & Style is nothing short of extraordinary.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
