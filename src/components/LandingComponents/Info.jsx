import React from 'react'
import { RiPaintBrushFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Info = () => {
  return (
    <div className='w-full p-4 flex flex-row justify-between items-center h-48'>
        <div className='flex flex-row justify-center items-center p-4'>
            <RiPaintBrushFill size={50}/>
            <p className='text-medium text-[16px] ms-2'>Make clothing designs with our free and easy-to-use <b>Design Maker</b></p>
        </div>

        <div className='flex flex-row justify-center items-center p-4'>
            <GiClothes size={50}/>
            <p className='text-medium text-[16px] ms-2'>Start selling under your own brand with <b>no inventory and no monthly fees</b></p>
        </div>

        <div className='flex flex-row justify-center items-center p-4'>
            <FaLocationDot size={35}/>
            <p className='text-medium text-[16px] ms-2'>Latest order from: <b>guangzhou, CN</b>
            51 min ago</p>
        </div>
    </div>
  )
}

export default Info