import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) =>{
        e.preventDefault()
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl mt-5 font-medium text-gray-800'>Subscribe now and enjoy up to 20% off on your next purchase!</p>
      <p className='text-gray-400 mt-3'>"Subscribe to receive exclusive offers, updates, and discounts straight to your inbox."</p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" name="email" id="" placeholder='Enter your email' required/>
       <button className='bg-black text-white text-xs px-10 py-4' type="submit">Subscribe</button>
    </form>
    </div>
  )
}

export default NewsletterBox
