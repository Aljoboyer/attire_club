import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  return (
    <div className='product_card rounded p-4 w-[300px] border-1 border-gray-200'>
        <img className='h-[250px] w-[250px] rounded-md'  src={`data:image/jpeg;base64,${item?.img}`} alt="" />
        <p className='font-bold text-blue-800'>{item.name}</p>
        <p>$ {item.price}</p>
        <p>Size: {item.size}</p>
        <div className='flex flex-row justify-evenly'>
            <button  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-bold p-2  text-[#e40f0a] block text-xl w-[50px]'>+</button>
            <button  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-bold p-2  text-[#e40f0a] block text-xl w-[50px]'>-</button>
        </div>
        <button onClick={() => navigate(`/ProdDetails/${item?._id}`)}  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-48 mx-4 mt-4 bg-[#e40f0a] text-white'>View Details</button>
    </div>
  )
}

export default ProductCard