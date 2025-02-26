import React from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { useForm } from "react-hook-form"
import LoginImg from '../../assets/login_img.jpg'
import { useNavigate } from 'react-router'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit= (data) => {
    errors.password.message = 'Password is wrong'
  }
  const navigate = useNavigate()
console.log(errors)
  return (
    <VisitorLayout>
        <div className='flex flex-row justify-evenly items-center p-7'>
            <div className='w-2/5 '>
            <h1 className='font-bold text-5xl text-[#e40f0a]'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] w-2/3' placeholder='Enter Your Email' {...register("email", { required: true })} />
                {errors.password && <span>{errors.email.message}</span>}
                
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder='Enter Your password' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] my-4 w-2/3' {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>{errors.password.message}</span>}

                <input className='bg-blue-800 text-white px-4 py-2 rounded-md block' type="submit" />
            </form>
            <p onClick={() => navigate('/registration')} className='mt-4 underline italic font-medium text-blue-400 cursor-pointer'>If you don't have an account ? Register please</p>
            </div>

            <div className='w-2/5 '>
                <img src={LoginImg} className='w-full h-full rounded-md' alt="" />
            </div>
        </div>
    </VisitorLayout>
  )
}

export default Login