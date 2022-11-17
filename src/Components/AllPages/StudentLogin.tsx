import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { EmailIn, Formbox, Input, Title, PasswordIn, Box, ID, SubmitBtn, Student } from './style'


export default function StudentLogin() {

  const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Code, setCode] = useState('');
    const [Students, setStudent] = useState([]);


  const userData = {
    "Email":Email,
    "Password":Password,
    "ID":Code,
}

  const ValidateUser = () => {
    axios.get("http://localhost:3001/api/Student/getStudent").then((response:any) => {setStudent(response.data)});
    const filter:any = Students.filter((Student:any) => Student.Email === userData.Email && Student.Password === userData.Password && Student.ID === userData.ID);
    if(filter.length >= 1){
      Navigate('/Code-Page');
    }
    else{
        toast.error('something wrong in your email/password/Code!', {
        position: toast.POSITION.TOP_CENTER
        })
    }
  }
  const Navigate= useNavigate();


  const handleChangeEmail = (event:any) => {
    setEmail(event.target.value);
  };
const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  };
  const handleChangeCode = (event:any) => {
    setCode(event.target.value);
  };



  const [student, setStudentIn] = useState('Student Login');

  return (
    <Formbox>
    <Box>
       
    <Title>Student Login</Title><br/>
  
  <br/>
  <EmailIn> Email
        <Input required  onChange={handleChangeEmail} value={Email} placeholder='Enter your email'/>
    </EmailIn><br/>
    <PasswordIn>Password
        <Input required type="password" onChange={handleChangePassword} value={Password} placeholder='Enter your password'/>
    </PasswordIn><br/>
    <ID>Please Enter Your Code
        <Input placeholder='Enter your ID'/>
    </ID><br/>
    <SubmitBtn onClick={ValidateUser}>{student}</SubmitBtn>
</Box>
</Formbox>
  )
}
