import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Electronics was born out of a passion for innovation and a vision to transform the way people shop for technology. Our journey began with a simple idea: to create a platform where customers can easily explore, compare, and purchase the latest electronics—all from the comfort of their homes.</p>
              <p>Since our inception, we’ve been committed to curating a wide range of high-quality gadgets and devices that fit every lifestyle. From smartphones, laptops, and wearables to home appliances and accessories, we source products only from trusted brands and verified suppliers.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Electronics, our mission is to empower customers with choice, convenience, and confidence when buying technology. We are dedicated to delivering a seamless shopping experience that goes beyond expectations—from browsing and product discovery to ordering, delivery, and after-sales support.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      
      
    </div>
  )
}

export default About
