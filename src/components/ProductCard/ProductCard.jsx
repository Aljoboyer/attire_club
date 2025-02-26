import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product_card rounded p-4 w-[300px] border-1 border-gray-200'>
        <img className='h-[250px] w-[250px] rounded-md' src={item.img} alt="" />
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>Size: {item.size}</p>
    </div>
  )
}

export default ProductCard