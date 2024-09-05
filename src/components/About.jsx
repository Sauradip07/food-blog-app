import React from 'react'
import '../index.css'
import aboutImg from "../assets/aboutImg.png"

export const About = () => {
  return (
    <section className='flex justify-between text-center my-20 lg:my-40 gray-gradient lg:px-64 lg:text-left py-32 px-10'>
      <img src={aboutImg} className='hidden lg:block'></img>
      <div className='flex flex-col justify-center items-center w-full lg:w-[48%] gap-10 lg:gap-6'>
        <h2 className='font-poppins font-medium text-4xl'>About Us</h2>
        <p className='text-sm lg:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
        <button className="w-32 lg:w-40 h-10 lg:h-12 font-bold text-sm lg:text-base bg-rosePink text-white rounded-3xl z-50">Read More</button>
      </div>
    </section>
  )
}