import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Dasboard/DasboardLayout/DasboardLayout'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useUpdateProductMutation } from '../../../redux/features/productApi'
import Swal from 'sweetalert2'

const EditProduct = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [productUpdateTrigger, {}] = useUpdateProductMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  
  const prodWatch = watch()

  const onSubmit= async (data) => {
    if(data?.img[0]?.name){
      const formData = new FormData()

      formData.append('name', data.name)
      formData.append('price', data.price)
      formData.append('size', data.size)
      formData.append('gender', data.gender)
      formData.append('img', data.img[0])
      formData.append('description', data.description)
      const response = await productUpdateTrigger({requestBody: formData, id})

      if(response.data?.msg == "Product updated"){
            
            Swal.fire({
              title: "Success!",
              text: "Product Updated Successfully",
              icon: "success"
            })
            navigate('/dashboard/ManageProduct')
          }
          else{
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error"
            })
          }

    }
    else{
      const newObj = {
        name: data.name,
        price: data.price,
        size: data.size,
        description: data.description,
        gender: data.gender
      }
      const response = await productUpdateTrigger({requestBody: newObj, id})
      if(response.data?.msg == "Product updated"){
            
        Swal.fire({
          title: "Success!",
          text: "Product Updated Successfully",
          icon: "success"
        })
        navigate('/dashboard/ManageProduct')
      }
      else{
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error"
        })
      }
    }
  }

  const fetchProduct = async () => {
    fetch(`http://localhost:5000/singleprod/${id}`)
    .then(res => res.json())
    .then(data => {
      reset(data)
      setProduct(data)
    })
  }

  useEffect(() => {
    fetchProduct()
  },[])

  console.log(prodWatch)
  console.log(errors)
  return (
    <DashboardLayout>
        <div className='pl-[200px] py-4 flex flex-row justify-center '>
        <div className='w-4/5 add_form'>
            <h1 className='font-bold text-5xl base_text_color'>Update Clothes Item</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>

                <label className='dark_text font-medium'>Name</label>
                <input className='block border border-2 border-blue-600 px-2 mt-2 rounded-md h-[40px] w-full' placeholder='Enter Product Name' {...register("name", {required: true })} />

                {errors.name && <span className='text-red-500 text-[12px] block mt-2'>Enter Valid Name</span>}
                
                <label className='dark_text font-medium mt-4'>Price</label>
                <input  placeholder='Enter Price' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-2 w-full' {...register("price", { required: true })} />

                {errors.price && <span className='text-red-500 text-[12px] block mt-2'>Enter Price</span>}

                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='w-1/2'>
                        <label className='dark_text font-medium mt-4'>Size</label>
                      
                      <select className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-2 w-full' {...register("size")}>
                      <option value="">Select Size</option>

                      <option value="xl">XL</option>
                      <option value="m">M</option>
                      <option value="s">S</option>
                    </select>
                    </div>

                    <div className='w-1/2 ml-2'>
                        <label className='dark_text font-medium mt-4'>Target Audience</label>
                      
                      <select className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-2 w-full' {...register("gender")}>
                      <option value="">Select Audience</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="kids">Kids</option>
                    </select>
                    </div>
                </div>

                {
                  prodWatch?.img && <> {prodWatch?.img[0]?.name ? "" : <img src={`data:image/jpeg;base64,${product?.img}`} /> }</>
                }
                <label className='dark_text font-medium mt-4'>Product Image</label>
                <input type='file'  placeholder='Add Product Image' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-2 w-full' {...register("img",)} />

                <label className='dark_text font-medium mt-4'>Description</label>
                <textarea  placeholder='Write Description' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-2 w-full' {...register("description", { required: true })} />

                <button  className='bg_btn text-white px-4 py-2 rounded-md block mt-4' type="submit">Update Product</button>
            </form>

            </div>
        </div>
    </DashboardLayout>
  )
}

export default EditProduct