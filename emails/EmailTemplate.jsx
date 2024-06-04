import React from 'react'
// React Email Components
import { Html, Text, Head, Body, Container, Section, Row, Column, Button } from '@react-email/components'

import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineDesktopComputer } from "react-icons/hi";


export default function EmailTemplate({ name, email, subject, message }) {

  return (
    <Html>
      <Head />
      <Body style={emailContainer}>
        <Container>
          <Row align='center' style={{}}>
            <Text style={{ textAlign: 'left', fontSize: '30px', color: '#2663eb' }}>
              Will Koenig
            </Text>
          </Row>


          <Row>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

              <Row>
                <Button
                  style={linkButton}
                  href={'https://www.linkedin.com/in/will-koenig/'}>
                  <FaLinkedinIn size={45} color='#87efad' />
                </Button>

                <Button style={linkButton}
                  href={'https://github.com/willk0814'}>
                  <AiFillGithub size={45} color='#87efad' />
                </Button>
              </Row>

              <Row>
                <Button style={linkButton}
                  href={'https://www.willkoenig.info/KoenigResume.pdf'}>
                  <HiOutlineDocumentText size={45} color='#87efad' />
                </Button>

                <Button style={linkButton}
                  href={'https://www.willkoenig.info'}>
                  <HiOutlineDesktopComputer size={45} color='#87efad' />
                </Button>
              </Row>
            </Container>
          </Row>

          <Row>
            <Container
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', borderBottom: '2px solid #2663eb' }}>
              <Text style={subjectText}>{subject}</Text>
            </Container>
          </Row>

          <Row >
            <Container
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
              <Text style={messageText}>{message}</Text>
            </Container>
          </Row>

          <Row >
            <Container
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
              <Text style={messageText}>{name}</Text>
              <Text style={emailText}>{email}</Text>
            </Container>
          </Row>

        </Container>
      </Body>
    </Html>
  )
}

const emailContainer = {
  backgroundColor: '#E8E8E8',
}

const linkButton = {
  backgroundColor: '#2663eb',
  borderRadius: '15px',
  padding: '7px 20px',
  margin: '3px',
}

const subjectText = {
  fontSize: '25px',
  color: '#2663eb'
}

const messageText = {
  fontSize: '20px',
  color: '#000'
}

const emailText = {
  fontSize: '17px',
  color: '#000',
  lineHeight: '10px',
  fontStyle: 'italic'
}