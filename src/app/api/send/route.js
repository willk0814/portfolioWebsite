import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend'

// export async function POST( request ) {

//     // deconstruct requeset 
//     const { data } = await request.json()
//     const { name, email, subject, content } = data

//     // console.log(`Sending Email with 
//     // Name: ${name}, 
//     // Email: ${email}, 
//     // Subject" ${subject}, 
//     // Content: ${content}`)

//     const resend = new Resend(process.env.RESEND_API_KEY)
    
//     try {
//     // construct and send a new email
//         const { data } = await resend.emails.send({
//             from: 'contactForm@willkoenig.info',
//             to: `${process.env.DEST_EMAIL}`,
//             subject: `${subject}`,
//             html: `<h1>Email from ${name}</h1> <p>${content}</p> <h3>Return Email: ${email}</h3>`,

//         })
//         return NextResponse.json({ data: data })
//     } catch (error) {
//         return NextResponse.json({ error: error.message })
//     }
// }

export async function POST(request) {
    const data = await request.json()

    // Display data
    console.log(data)

    return NextResponse.json(data)
}