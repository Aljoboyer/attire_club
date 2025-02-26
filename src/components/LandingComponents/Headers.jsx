import React from 'react'
import HeadrImg from '../../assets/projectimg/headerImg.webp'
import { IoIosArrowForward } from "react-icons/io";

const Headers = () => {
  return (
    <div className='w-full p-18 bg-gray-50 flex flex-row justify-evenly items-center'>
        <div className='w-1/2'>
            <h1 className='text-[48px] font-bold'>Design and sell clothes online</h1>
            <p className='text-[20px] font-regular my-2'>Become a clothing designer and business owner</p>
            <button className='flex flex-row items-center bg-[#e40f0a] text-white h-[50px] w-48 pl-4 font-bold text-xl mt-4'>Get Started <IoIosArrowForward /> </button>
        </div>

        <div className='w-1/2 '>
            <img className='w-full h-full rounded-lg' src={HeadrImg} alt="" />
        </div>
    </div>
  )
}

export default Headers