import React from 'react'
import WebsiteIcon from '../../../assets/attire_icon.png'
const Footers = () => {
  return (
    <div className='w-full p-8 grid grid-cols-4 gap-4 border-t-2 border-black'>
        <div className='p-4'>
            <img className='h-[60px] w-[100px]' src={WebsiteIcon} alt="" />
            <p className='mt-4'><b>Fulfilling your ideas on demand</b><br />Trusted to deliver 99.6M items
since 2013</p>
        </div>
        <div>
            <p><b>Sell with Printful</b></p>
            <p className='cursor-pointer mt-2'>Print on demand</p>
            <p className='cursor-pointer mt-2'>Sell online without inventory</p>
        </div>

        <div>
            <p><b>Sell with Printful</b></p>
            <p className='cursor-pointer mt-2'>Print on demand</p>
            <p className='cursor-pointer mt-2'>Sell online without inventory</p>
        </div>
        <div>
            <p><b>Sell with Printful</b></p>
            <p className='cursor-pointer mt-2'>Print on demand</p>
            <p className='cursor-pointer mt-2'>Sell online without inventory</p>
        </div>
    </div>
  )
}

export default Footers