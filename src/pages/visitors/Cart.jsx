import React, { useEffect, useState } from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllProductQuery, useOrderSubmitMutation } from '../../redux/features/productApi'
import Swal from 'sweetalert2'
import { setProductCount, setProductToCart } from '../../redux/slices/productSlice'

const Cart = () => {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const prodCart = useSelector((state) => state.prodstore.cart)
 const {data: allProduct, refetch} = useGetAllProductQuery({
    refetchOnMountOrArgChange: true,
    });
  const [finalCart, setFinalCart] = useState([])
  const [totalPay, setTotalPay] = useState(0)
  const [orderAddTrigger, {}] = useOrderSubmitMutation()
    const dispatch = useDispatch()
  

  useEffect(() => {
    if(allProduct?.length > 0){
       const cartProduct = []
       for (const item of prodCart) {
        const findItem = allProduct?.find((prod) => prod?._id == item?.id)

        if(findItem?._id){
          const totalProdPrice =item?.count * parseInt(findItem?.price)
          const newObj = {...findItem, pieces: item?.count, status: 'Pending', totalProdPrice}
          cartProduct.push(newObj)
        }
       }
       console.log('Checking ====>', cartProduct)
       setFinalCart(cartProduct)
    }
  }, [allProduct?.length])


  useEffect(() => {
    if(finalCart?.length > 0){
       let sumPay = 0
       for (const item of finalCart) {
        sumPay = sumPay + item?.totalProdPrice
       }
       console.log('sumPay ====>', sumPay)
       setTotalPay(sumPay)
    }
  }, [finalCart?.length])
  

  const orderSubmitHandler = async() => {
    
      const finalOrder = finalCart?.map(({_id, img, ...rest}) => {
        const newobj = {...rest, location, phone, customerName: name}
        return newobj
      })

      const result = await orderAddTrigger(finalOrder)

       if(result.data?.msg == "Product Ordered Successfully"){
             dispatch(setProductCount(0))
            dispatch(setProductToCart([]))

            Swal.fire({
              title: "Success!",
              text: "Product Ordered Successfully",
              icon: "success"
            })
          }
          else{
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error"
            })
          }

      console.log('formatedOrder ===>', finalOrder)
      console.log('formatedOrder ===>', result)

  }

  return (
    <VisitorLayout>
        <h1 className='text-center my-4'>My Cart</h1>
       {
        prodCart?.length > 0 &&  <div className='p-7 flex flex-row justify-between'>
        <div className='w-1/2'>
          {
            finalCart?.map((item) => (
              <div className='flex flex-row items-center'>
                <div className='h-[200px] w-[200px] bg-gray-400'>
                <img className='h-[250px] w-[250px] rounded-md'  src={`data:image/jpeg;base64,${item?.img}`} alt="" />
                </div>
                <div className='ms-4'>
                    <h1>{item?.name}</h1>
                    <h3>Ttoal Price : {item?.totalProdPrice}</h3>
                    <h3>Total Pieces : {item?.pieces}</h3>
                </div>
              </div>
            ))
          }
        </div>

        <div className='w-1/2'>
            <h1>Total You Have to Pay : $ {totalPay}</h1>
            <label className='dark_text font-medium'>Name</label>
            <input onChange={(e) => setName(e.target.value)} className='block border border-2 border-blue-600 px-2 mt-2 rounded-md h-[40px] w-full' placeholder='Enter Your Phone'  />

            <label className='dark_text font-medium'>Phone</label>
            <input onChange={(e) => setPhone(e.target.value)} className='block border border-2 border-blue-600 px-2 mt-2 rounded-md h-[40px] w-full' placeholder='Enter Your Phone'  />

            <label className='dark_text font-medium mt-4'>Location</label>
            <textarea onChange={(e) => setLocation(e.target.value)} placeholder='Write Location' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-2 w-full'  />

            <button onClick={orderSubmitHandler} className='bg_btn text-white px-4 py-2 rounded-md block mt-4' >Submit Order</button>
        </div>
    </div>
       }
    </VisitorLayout>
  )
}

export default Cart