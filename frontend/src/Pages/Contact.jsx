import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2x1 pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'} />

    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-x1 text-gray-600'> Our Store</p>
        <p className='text-gray-500'>23444 willms station <br /> suite 245 road gra</p>
        <p className='text-gray-500'>Tel:(234) 8160609012 <br/> Email:charles.com </p>
        <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
        <p className='text-gray-500'>Learn more about our teams and job openings. </p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        

      </div>

    </div>
    <NewsletterBox/>

    </div>
  )
}

export default Contact