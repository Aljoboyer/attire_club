import React from 'react'
import { MdDashboard, MdAddBox, MdManageHistory, MdBorderStyle,MdOutlineChat  } from "react-icons/md";
import { useNavigate } from 'react-router';

const DashboardSidebar = () => {
    const navigate = useNavigate()

    return (
    <div className='bg-black w-40 h-screen fixed z-10 p-2'>
        <div onClick={() => navigate('/dashboard')} className='text-white font-medium w-full sidebar_link flex flex-row justify-start mt-2 items-center rounded-md cursor-pointer'>
            <MdDashboard color='white' size={20}/>
            <p className='m-0 p-2 text-[14px]'>Dasboard Home</p>
        </div>

        <div onClick={() => navigate('/dashboard/AddProduct')} className='text-white font-medium w-full sidebar_link flex flex-row justify-start mt-2 items-center rounded-md cursor-pointer'>
            <MdAddBox  color='white' size={20} />
            <p className='m-0 p-2 text-[14px]'>Add Product</p>
        </div>

        <div  onClick={() => navigate('/dashboard/ManageProduct')} className='text-white font-medium w-full sidebar_link flex flex-row justify-start mt-2 items-center rounded-md cursor-pointer'>
            <MdManageHistory color='white' size={20} />
            <p className='m-0 p-2 text-[14px]'>Manage Products</p>
        </div>

        <div onClick={() => navigate('/dashboard/ManageOrders')} className='text-white font-medium w-full sidebar_link flex flex-row justify-start mt-2 items-center rounded-md cursor-pointer'>
            <MdBorderStyle color='white' size={20}/>
            <p className='m-0 p-2 text-[14px]'>Manage Orders</p>
        </div>

        <div className='text-white font-medium w-full sidebar_link flex flex-row justify-start mt-2 items-center rounded-md cursor-pointer'>
            <MdOutlineChat color='white' size={20}/>
            <p className='m-0 p-2 text-[14px]'>Customer Messages</p>
        </div>
    </div>
  )
}

export default DashboardSidebar