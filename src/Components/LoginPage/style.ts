import React from "react";
import styled from "styled-components";

export const Formbox = styled.div`
/* 
width: 80%;
height: 100%; 
position: relative;
margin: 6% auto; */
display: flex;
justify-content: center;
margin-top:10%;
background-color:#e6f2ff ;
padding: 5px;
border-radius:6px ;
`
export const Box = styled.div`
justify-content: center;
width: 50%;
height: 80%;
margin-left:5%  ;
position: relative;
background-color: #80bfff;
border-radius: 30px;
`

export const PageDiv = styled.div`
justify-content: left;
height: 400px;
border: 2px solid  #003366;
margin: 10%;
position: relative;
box-shadow: rgba(255, 255, 128, .5);
border-radius: 30px;
`
export const LoppyTitle = styled.p`
color:  #003366;
margin-top: 5%;
margin-left: 5%;
display: flex;
align-items: center;
font-size: xX-large;
font-weight: bolder;
`
export const List = styled.div`
margin: 5%;
display: flex;
justify-content: center;
flex-direction: column;
`

export const BtnList = styled.button`
 background-color: white; 
  color: black; 
  border: 2px solid #ff9633;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`
export const EmailBtn = styled.button`
 background-color: white; 
  color: black; 
  width: 150px;
  border: 2px solid #004d99;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
`
export const Elements =styled.div`
margin-top: 5%;
`

export const ButtonBox = styled.div`
margin-left:10%;
margin-top: 5%;
display: inline-flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
position: relative;
border-radius: 30px;
transition: .5s; 
`

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: xx-large;
font-weight: bolder;
`

export const Student = styled.button`
width: 100px;
height: 30px;
cursor: pointer;
background: transparent;
background-color: #e6f2ff;
border-radius: 6px ;
border: 2;
outline: none;
position: relative;
`

export const Mentor = styled.button`
width: 100px;
height: 30px;
cursor: pointer;
background: transparent;
background-color: #e6f2ff;
border: 2;
border-radius: 6px ;
outline: none;
position: relative;
`

export const LogBox = styled.div`


`

export const EmailIn = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 27%;
`
export const PasswordIn = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 27%;

`
export const ID = styled.div`
`

export const Input = styled.input`
width: 50%;
height: 50%;
`

export const SubmitBtn =styled.button`
cursor: pointer;
margin-left: 40%;
align-items: center;
width: 100px;
height: 30px;
background-color:  rgb(77, 77, 218);
color:white;
border-radius: 6px ;
`
export const ListDiv =styled.div`
margin-left: 35%;
/* margin-top: 6%; */
width: 200px;
height: 180px;
position:absolute;
display:inline-block;
justify-content: center;
flex-direction: column;
background-color: #cce6ff;
`