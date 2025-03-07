import React, { useEffect, useState } from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { useParams } from 'react-router'

const ProdDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
      fetch(`http://localhost:5000/singleprod/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
    }
  
    useEffect(() => {
      fetchProduct()
    },[])
  
  return (
   <VisitorLayout>
        <div className='p-17 flex flex-row justify-evenly '>
            <div className='h-[500px] w-[500px]'>
            <img className='h-full w-full rounded-md'  src={`data:image/jpeg;base64,${product?.img}`} alt="" />

            </div>
            <div className='w-1/2'>
                <div className='flex flex-row justify-evenly'>
                    <button  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-bold p-2  text-[#e40f0a] block text-xl w-[100px]'>+</button>
                    <button  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-bold p-2  text-[#e40f0a] block text-xl w-[100px]'>-</button>
                </div>
                <h2 className='font-bold text-blue-800 mt-2'>{product?.name}</h2>
                <h3 className='mt-2'>$ {product?.price}</h3>
                <h3 className='mt-2'>Size {product?.size}</h3>
                <h3 className='mt-2'>Audience For {product?.gender}</h3>
                <p className='mt-4'>{product?.description}</p>
            </div>
        </div>
   </VisitorLayout>
  )
}

export default ProdDetails