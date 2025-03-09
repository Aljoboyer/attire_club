import React, { useState } from 'react'
import VisitorLayout from '../../components/VisitorLayout/VisitorLayout'
import { useForm } from "react-hook-form"
import LoginImg from '../../assets/login_img.jpg'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const Login = () => {
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit= (data) => {
        const loginData = data
        
         fetch('https://attire-club-backend.vercel.app/login', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        }).then((res) => res.json())
        .then(data => {
          console.log('res data', data)
          if(data.msg == "Password Wrong"){
            setPasswordError('Password is wrong , please enter valid password')
          }
          else if(data.msg == 'Email is wrong'){
            setEmailError("User Doesn't exists with this email")
          }
          else{
            Swal.fire({
              title: "Success!",
              text: "Loggedin Successfull",
              icon: "success"
            })
            localStorage.setItem('attireclubemail', loginData.email)
            localStorage.setItem('attireclubtoken', data.token)
            if(loginData.email == 'admin@gmail.com'){
              navigate('/dashboard')
            }else{
            navigate('/')

            }
          }
        })
  }
  const navigate = useNavigate()


  return (
    <VisitorLayout>
        <div className='flex flex-row justify-evenly items-center p-7'>
            <div className='w-2/5 '>
            <h1 className='font-bold text-5xl text-[#e40f0a]'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-7'>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] w-2/3' placeholder='Enter Your Email' {...register("email", {pattern: /\S+@\S+\.\S+/, required: true })} />
                {errors.email ? <span className='text-red-500 text-[12px] block mt-2'>Enter Valid Email</span> : <span className='text-red-500 text-[12px] block mt-2'>{emailError}</span>}
                
                {/* include validation with required or other standard HTML validation rules */}
                <input type='password' placeholder='Enter Your password' className='block border border-2 border-blue-600 px-2 rounded-md h-[40px] my-4 w-2/3' {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password ? <span className='text-red-500 text-[12px] block mt-2'>Enter Your Password</span> : <span className='text-red-500 text-[12px] block mt-2'>{passwordError}</span>}

                <button  className='bg-blue-800 text-white px-4 py-2 rounded-md block' type="submit">Login</button>
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