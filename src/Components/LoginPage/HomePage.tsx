import React, { useState } from 'react'

import { Box,LogBox, ButtonBox, EmailIn, Formbox, Input, Mentor, PasswordIn, Student, SubmitBtn, Title } from './style'
import { Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';


export default function HomePage() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mentors, setMentor] = useState([]);

    const userData = {
        "Email":Email,
        "Password":Password,
    }
    const showToastMessage = () => {
        toast.warning('Student can`t login here!', {
            position: toast.POSITION.TOP_LEFT
            });
        }; 

    const ValidateUser = () => {
        axios.get("http://localhost:3001/api/Mentor/getMentor").then((response:any) => {setMentor(response.data)});
        const filter:any = Mentors.filter((Mentor:any) => Mentor.Email === userData.Email && Mentor.Password === userData.Password);
        if(filter.length >= 1){
            Navigate('/Loppy');
        }
        else{
            toast.error('something wrong in your email or password!', {
            position: toast.POSITION.TOP_CENTER
            })
        }
      }

  const Navigate= useNavigate();
  const [logIn, setLogin] = useState('Login');

const handleChangeEmail = (event:any) => {
    setEmail(event.target.value);
  };
const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  };

  
  return (
    
    <Formbox>
    <ToastContainer></ToastContainer>
        <Box>
            <ButtonBox>
                <Student onClick={showToastMessage}>Student</Student>
                <Mentor>Mentor</Mentor>
            </ButtonBox>
                <br/><br/>
            <Title>Mentor Login</Title><br/>
                <EmailIn> Email 
                    <Input required  onChange={handleChangeEmail} value={Email} placeholder='Enter your email'/>
                </EmailIn><br/>
                <PasswordIn>Password
                    <Input required type="password" onChange={handleChangePassword} value={Password} placeholder='Enter your password'/>
                </PasswordIn> <br/>
                <SubmitBtn onClick={ValidateUser}>{logIn}</SubmitBtn>
        </Box>
    </Formbox>
  )
}
