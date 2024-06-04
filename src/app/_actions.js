'use server'

import { Resend } from 'resend'
import { render } from '@react-email/render'
import EmailTemplate from '../../emails/EmailTemplate'

require('dotenv').config()

export async function sendEmail(data) {
    
    const { name, email, subject, message } = data
    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const response = await resend.emails.send({
            from:'contactForm@willkoenig.info',
            to: 'wkoenig0814@gmail.com',
            cc: `${email}`,
            subject: `${subject}`,
            html: render(
                <EmailTemplate 
                    name={name}
                    email={email}
                    subject={subject}
                    message={message}/>)
        })
        return { success: true, data: response}
    } catch (error) {
        console.log(error)
        return { success: false, data: null }
    }
}