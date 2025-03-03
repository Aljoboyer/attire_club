import React from 'react'
import DasboardLayout from '../../components/Dasboard/DasboardLayout/DasboardLayout'
import { MdProductionQuantityLimits } from "react-icons/md";

const Dashboard = () => {
  return (
    <DasboardLayout>
        <div className='pl-[200px] py-4  flex flex-row justify-center'>
            <div className='w-full add_form flex flex-row justify-between items-center'>
                <div className='w-[250px] bg-[#673ab7] flex flex-row items-center p-4 rounded-md'>
                    <MdProductionQuantityLimits color='white' size={40}/>
                   
                    <div className='ms-4'>
                        <p className='text-[22px] font-medium text-white m-0'>2000 Items</p>
                        <p className='text-[18px] font-medium text-white'>Total Items</p>
                    </div>
                </div>

                <div className='w-[250px] bg-[#673ab7] flex flex-row items-center p-4 rounded-md'>
                    <MdProductionQuantityLimits color='white' size={40}/>
                   
                    <div className='ms-4'>
                        <p className='text-[22px] font-medium text-white m-0'>$2000</p>
                        <p className='text-[18px] font-medium text-white'>Total Sells</p>
                    </div>
                </div>

                <div className='w-[250px] bg-[#673ab7] flex flex-row items-center p-4 rounded-md'>
                    <MdProductionQuantityLimits color='white' size={40}/>
                   
                    <div className='ms-4'>
                        <p className='text-[22px] font-medium text-white m-0'>2000 Items</p>
                        <p className='text-[18px] font-medium text-white'>Total Items</p>
                    </div>
                </div>
            </div>
        </div>
    </DasboardLayout>
  
  )
}

export default Dashboard