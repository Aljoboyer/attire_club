import React from 'react'
import DasboardNav from './DasboardNav'
import DashboardSidebar from './DashboardSidebar'

const DashboardLayout = ({children}) => {
  return (
    <div className='w-full'>
        <DasboardNav/>
        <div className='flex flex-row justify-start'>
            <DashboardSidebar/>
            <div className='w-5/6 '>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout