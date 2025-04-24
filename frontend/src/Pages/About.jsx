import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2x1 text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>

    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-ful md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, </p>
      <p>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, </p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin, </p>

      </div>

    </div>
    <div className='text-4x1 py-4'>
      <Title text1={'MY'} text2={'CHOOSE US'}/>

    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin,</p>

      </div>
      <div className='border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin,</p>

      </div>
      <div className='border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Historically, surnames evolved as a way to sort people into groups - by occupation, place of origin,</p>

      </div>

    </div>

    <NewsletterBox/>
       
       

       </div>

  )
}

export default About