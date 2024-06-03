'use client'

import React, { useState } from 'react'
import { useForm, submitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormatData = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Please enter a valid email address'),
    message: z.string().min(10, "Please enter at least 10 characters")
})


export default function ContactFormTest() {

    const [data, setData] = useState()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(FormatData)
    })

    const processForm = async (data) => {
        // setData(data)

        // const formDataObject = Object.fromEntries(data)

        const tmpData = await fetch('api/send', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())

        setData(tmpData)
        reset()
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const form = e.currentTarget
    //     const formData = new FormData(form)

    //     console.log(formData)
    //     const formDataObject = Object.fromEntries(formData)

    //     const tmpData = await fetch('/api/send', {
    //         method: 'POST',
    //         body: JSON.stringify(formDataObject)
    //     }).then(res => res.json())
        

    //     console.log(tmpData)
    //     setData(tmpData)
    //     form.reset()
    // }


  return (
    <div className='flex flex-row space-x-2 items-center justify-center w-[100vw] h-[100vw]'>
        <div className='bg-blue-600 flex flex-col p-3 w-[40vw] h-fit rounded-lg'>
            <h1 className='text-2xl text-[#E8E8E8]'>Form:</h1>
        
            <form
                onSubmit={handleSubmit(processForm)}
                className='flex flex-col space-y-2 mt-3'
                noValidate>
                
                <input 
                    className='rounded-lg bg-[#E8E8E8] text-lg p-2 text-blue-600 placeholder:text-blue-400'
                    placeholder='Name'
                    {...register('name')}/>
                {errors.name?.message &&
                    <p className='text-sm text-red-400'>{errors.name.message}</p>}

                <input 
                    className='rounded-lg bg-[#E8E8E8] text-lg p-2 text-blue-600 placeholder:text-blue-400'
                    placeholder='Email'
                    type='email'
                    {...register('email')}/>
                {errors.email &&
                    <p className='text-sm text-red-400'>{errors.email.message}</p>}

                <textarea 
                    className='rounded-lg bg-[#E8E8E8] text-lg p-2 text-blue-600 placeholder:text-blue-400 h-[200px] text-wrap flex items-start justify-start'
                    placeholder='Email'
                    {...register('message')}/>
                {errors.message?.message &&
                    <p className='text-sm text-red-400'>{errors.message.message}</p>}

                <button className='m-6 p-4 rounded-lg text-xl bg-green-300'>Submit</button>

            </form>
        </div> 


        <div className='bg-blue-600 flex flex-col p-3 w-[30vw] h-[40vw] rounded-lg'>
            <h1 className='text-2xl text-[#E8E8E8]'>Return Data:</h1>

            <div className='text-[#E8E8E8] flex flex-col w-full h-full items-start justify-center'>
                {data && 
                <>
                    <h1>{`Name: ${data["name"]}`}</h1>
                    <h1>{`Email: ${data["email"]}`}</h1>
                    <h1>{`Message: ${data["message"]}`}</h1>
                </>}
            </div>
        </div>       
    </div>
  )
}
