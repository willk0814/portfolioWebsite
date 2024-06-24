import React from 'react'
// React Email Components
import { Html, Text, Head, Body, Container, Section, Row, Column, Button } from '@react-email/components'


export default function EmailTemplate({ name, email, subject, message }) {

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#E8E8E8' }}>

        <Text style={{ color: '#121212', fontSize: '20px' }}>
          Hi, this is an automated email from Will Koenig just so you can confirm that your message has been sent!  I will get back to you shortly and I'm so glad that you have reached out and I'm excited to start our correspondence.  I have included a copy of your message below!
        </Text>

        <Text>{subject ? subject : "Craig's thoughts"}</Text>
        <Text>{message ? message : "Craig's thoughts extended"}</Text>
        <Text>{email ? email : 'Craig@email.com'}</Text>
        <Text
          style={{ color: '#121212', fontSize: '25px' }}>{name ? name : 'Craig'}</Text>


      </Body>
    </Html>
  )
}
