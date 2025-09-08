import React from 'react';
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-3 md:mx-10 bg-blue-50 p-3 rounded'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            {/* ----left section */}
            <div>
            <p className=' flex items-center gap-2 text-4xl font-bold bg-gradient-to-tr from-cyan-500 to-emerald-600 text-transparent bg-clip-text mb-6'><img src={assets.LogoDoc} alt="" className='w-16 h-16' /> CarePoint</p>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat doloribus laudantium quae, inventore natus tenetur vel culpa doloremque nostrum, modi, harum qui.</p>
            </div>

            {/* ----center section  */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* -----right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-443-2433</li>
                    <li>Sourabhsingh22112003@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* ----Copyright Text----- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ CarePoint - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer