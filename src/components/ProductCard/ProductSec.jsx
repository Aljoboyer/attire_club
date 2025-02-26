import React from 'react'
import { products } from '../../constant/productdata'
import ProductCard from './ProductCard'

const ProductSec = () => {
  return (
    <div className='w-full mt-7'>
     <h1 className='font-bold text-[25px] text-center'> Design any of these 373 products in your brand style</h1>
      <p className='font-medium text-[18px] mt-4 text-center'>Choose from a wide selection of clothes, accessories, and so much more</p>

      <div className='grid grid-cols-3 gap-4 ml-7 mt-4'>
        {
            products?.slice(0, 9)?.map((item) => (
                <ProductCard item={item}/>
            ))
        }
    </div>
    </div>
  )
}

export default ProductSec