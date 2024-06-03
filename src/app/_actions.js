'use server'

import { z } from 'zod'
import { FormDataSchema } from './components/pageComponents/contactPage/ContactFormTest'

import { Resend } from 'resend'

require('dotenv').config()



export async function sendEmail(data) {
    
    const { name, email, message } = data
    
    console.log(`Sending an email w/ : ${name}, ${email}, ${message}`)
    // console.log(`API KEY: ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`)
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

    try {
        const response = await resend.emails.send({
            from:'contactForm@willkoenig.info',
            to: `${process.env.NEXT_PUBLIC_DEST_EMAIL}`,
            subject: 'test',
            html: `<h1>Email from ${name}</h1> <p>${message}</p> <h3>Return Email: ${email}</h3>`
        })

        return { success: true, data: response}
    } catch (error) {
        console.log(error)

        return { success: false, data: null }
    }
}