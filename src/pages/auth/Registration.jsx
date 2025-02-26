import React, { useState } from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { useForm } from "react-hook-form"
import RegistrationImg from '../../assets/reg_img.jpg'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const Registration = () => {
  const [emailError, setEmailError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit= async (data) => {
    console.log('register data ==>', data)
    
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(data => {
      console.log('res data', data)
      if(!data.token){
        setEmailError('This email already exists')
      }
      else{
        Swal.fire({
          title: "Success!",
          text: "Succcessfully Registered",
          icon: "success"
        })
        localStorage.setItem('attireclubtoken', data.token)
        navigate('/')
      }
    })
    
  }

  const navigate = useNavigate()
  
  return (
    <VisitorLayout>
        <div className='flex flex-row justify-evenly items-center p-7'>
            <div className='w-2/5 '>
            <h1 className='font-bold text-5xl text-[#e40f0a]'>Create Your Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>

                <input placeholder='Enter Your Name' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] my-4 w-2/3' {...register("name", { required: true })} />
                {errors.name && <span className='text-red-500 text-[12px] block'>This field is required</span>}

                  <input placeholder='Enter Your Phone ' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-4 w-2/3' {...register("phone", { required: true })} />
                {errors.phone && <span className='text-red-500 text-[12px] block mt-2'>This field is required</span>}

                
                <input className='block border border-2 border-blue-600 px-2 mt-4 rounded-md h-[40px] w-2/3' placeholder='Enter Your Email' {...register("email",{pattern: /\S+@\S+\.\S+/, required: true})} /> 
                {errors.email ? <span className='text-red-500 text-[12px] block mt-2'>Enter Valid Email</span> : <span className='text-red-500 text-[12px] block mt-2'>{emailError}</span>}

                <input type='password' placeholder='Enter Your password' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] mt-4 w-2/3' {...register("password", { required: true })} />

                {errors.password && <span className='text-red-500 text-[12px] block mt-2'>This field is required</span>}
                

                <input className='bg-blue-800 text-white px-4 py-2 rounded-md block mt-4' type="submit" />
            </form>

            <p onClick={() => navigate('/login')} className='mt-4 underline italic font-medium text-blue-400 cursor-pointer'>If you already have an account ? Login please</p>

            </div>

            <div className='w-2/5 '>
                <img src={RegistrationImg} className='w-full h-full rounded-md' alt="" />
            </div>
        </div>
    </VisitorLayout>
  )
}

export default Registration