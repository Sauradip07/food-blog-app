import React from 'react';
import truck from "../assets/foodTruck.png";
import {FiInstagram} from "react-icons/fi";
import {FaTwitter, FaFacebookF} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] px-10 py-24 flex flex-col lg:flex-row justify-around text-[#646874] text-sm gap-20 lg:gap-0'>
      <div className='flex items-center lg:w-2/12 justify-center'>
        <img src={truck} className='lg:w-4/6'></img>  
      </div>
      <div className='lg:w-8/12 flex flex-col lg:flex-row justify-around gap-10 lg:gap-0'>
        <div className='lg:w-3/12'>
          <h3 className='font-source font-semibold text-xl text-azureBlue'>Contact Us</h3>
          <ul className='flex flex-col gap-4 mt-3 text-xs lg:text-sm'>
            <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
            <li><a href='#'>example2020@gmail.com</a></li>
            <li>(904) 443-0343</li>
          </ul>
        </div>
        <div className='lg:w-1/6'>
          <h3 className='font-source font-semibold text-xl text-azureBlue'>More</h3>
          <ul className='flex flex-col gap-4 mt-3 text-xs lg:text-sm'>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Career</a></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
        </div>
        <div className='lg:w-3/12 flex flex-col lg:items-end'>
          <h3 className='font-source font-semibold text-xl text-azureBlue w-[51%] hidden lg:block'>Social Links</h3>
          <ul className='mt-3 flex flex-col gap-5 lg:gap-24 items-center lg:items-end'>
            <p className='lg:hidden'>© 2022 Food Truck Example</p>
            <div className='flex justify-between text-azureBlue w-6/12 lg:w-10/12'>
              <a href='#'><FiInstagram className='text-xl'/></a>
              <a href='#'><FaTwitter className='text-xl'/></a>
              <a href='#'><FaFacebookF className='text-xl'/></a>
            </div>
            <p className='hidden lg:block'>© 2022 Food Truck Example</p>
          </ul>
        </div>
      </div>

    </footer>
  )
}