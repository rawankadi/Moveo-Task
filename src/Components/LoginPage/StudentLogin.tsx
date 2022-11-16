import React from 'react'
import { ButtonBox, EmailIn, Formbox, Input, Title, PasswordIn, Student, Mentor, Box, ID, SubmitBtn } from './style'


export default function StudentLogin() {
  return (
    <Formbox>
    <Box>
       
    <Title>Student Login</Title><br/>
  
  <br/>
  <EmailIn> Email
        <Input placeholder='Enter your email'/>
    </EmailIn><br/>
    <PasswordIn>Password
        <Input placeholder='Enter your password'/>
    </PasswordIn>
    <ID>
        <Input placeholder='Enter your ID'/>
    </ID>
    <SubmitBtn>Login</SubmitBtn>
</Box>
</Formbox>
  )
}
