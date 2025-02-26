import React from 'react'
import CreativImg from '../../assets/projectimg/focus_sectionImg.webp'
import TechImg from '../../assets/projectimg/techniquesImg.webp'

const CreativeTech = ({from}) => {

  return (
    <div className='flex flex-row justify-evenly items-center w-full p-8'>
       {
        from == 'tech' ? <div className='w-1/2'>
        <img className='w-full h-full' src={TechImg} alt="" />
    </div> :
         <div className='w-1/2 p-4'>
            <h1 className='text-[20px] font-bold '>Focus on creativity</h1>
            <p className='mt-2'>Launch an online store using an ecommerce marketplace or platform and connect it to Printful. We’ll fulfill and ship your orders automatically so you can concentrate on designing clothes and marketing your fashion brand.</p>    
        </div>
       }
        {
            from == 'tech' ? <div className='w-1/2 p-4'>
            <h1 className='text-[20px] font-bold '>Mix it up with different fulfillment techniques</h1>
          <p className='my-4'>Choose the right technique and make your designs pop with a versatile product catalog.
          </p>
                <li>DTG printing</li>
                <li>Embroidery</li>
                <li>All-over printing</li>
         
        </div> : <div className='w-1/2'>
            <img className='w-full h-full' src={CreativImg} alt="" />
        </div>
        }
    </div>
  )
}

export default CreativeTech