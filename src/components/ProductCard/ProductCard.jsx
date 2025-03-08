import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setProductCount, setProductToCart } from '../../redux/slices/productSlice'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const prodCart = useSelector((state) => state.prodstore.cart)
  const dispatch = useDispatch()

  const addProdHandler = (id) => {
   
    const isExistProd = prodCart?.find((item) => item.id == id)
    
    if(isExistProd?.id){
      const removeProd = prodCart?.filter((item) => item?.id !== id)

      const newObj = {id: id, count: isExistProd?.count + 1}

      const newCart = [...removeProd, newObj]

      let sum = 0

      for (const item of newCart) {
        sum = sum + item?.count
      }
      dispatch(setProductCount(sum))
      dispatch(setProductToCart(newCart))
    }
    else{
      const newObj = {id: id, count: 1 }

      const newCart = [...prodCart, newObj]

      let sum = 0

      for (const item of newCart) {
        sum = sum + item?.count
      }
      dispatch(setProductCount(sum))

      dispatch(setProductToCart(newCart))
    }
  }

  const minusProdHandler = (id) => {
    const isExistProd = prodCart?.find((item) => item.id == id)
    
    if(isExistProd?.id){
      const removeProd = prodCart?.filter((item) => item?.id !== id)

      const reducCount = isExistProd?.count - 1

      if(reducCount == 0){
          const removeProd = prodCart?.filter((item) => item?.id !== id)

          let sum = 0

          for (const item of removeProd) {
            sum = sum + item?.count
          }
          dispatch(setProductCount(sum))
          dispatch(setProductToCart(removeProd))

      }
      else{
      const newObj = {id: id, count: reducCount}

      const newCart = [...removeProd, newObj]

          let sum = 0

          for (const item of newCart) {
            sum = sum + item?.count
          }
          
          dispatch(setProductCount(sum))
          dispatch(setProductToCart(newCart))
      }
    }
  }

  return (
    <div className='product_card rounded p-4 w-[300px] border-1 border-gray-200'>
        <img className='h-[250px] w-[250px] rounded-md'  src={`data:image/jpeg;base64,${item?.img}`} alt="" />
        <p className='font-bold text-blue-800'>{item.name}</p>
        <p>$ {item.price}</p>
        <p>Size: {item.size}</p>
        <div className='flex flex-row justify-evenly'>
            <button onClick={() => addProdHandler(item?._id)} className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-bold p-2  text-[#e40f0a] block text-xl w-[50px]'>+</button>
            <button  onClick={() => minusProdHandler(item?._id)}  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-bold p-2  text-[#e40f0a] block text-xl w-[50px]'>-</button>
        </div>
        <button  onClick={() => navigate(`/ProdDetails/${item?._id}`)}  className='cursor-pointer border border-2 border-[#e40f0a] rounded-md font-medium p-2 w-48 mx-4 mt-4 bg-[#e40f0a] text-white'>View Details</button>
    </div>
  )
}

export default ProductCard