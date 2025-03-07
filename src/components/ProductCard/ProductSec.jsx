import React from 'react'
import ProductCard from './ProductCard'

const ProductSec = ({allProduct}) => {
  return (
    <div className='w-full mt-7'>
     <h1 className='font-bold text-[25px] text-center'> Design any of these {allProduct?.length} products in your brand style</h1>
      <p className='font-medium text-[18px] mt-4 text-center'>Choose from a wide selection of clothes, accessories, and so much more</p>

      <div className='grid grid-cols-3 gap-4 ml-7 mt-4'>
        {
            allProduct?.slice(0, 6)?.map((item) => (
                <ProductCard item={item}/>
            ))
        }
      </div>
      <div className='flex flex-row justify-center'>
      <button className='flex flex-row items-center bg-[#e40f0a] text-white h-[50px] w-42 pl-4 font-bold text-xl mt-4'>See All Products</button>
      </div>
    </div>
  )
}

export default ProductSec