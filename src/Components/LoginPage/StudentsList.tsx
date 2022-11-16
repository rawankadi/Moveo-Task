import axios from 'axios'
import React, { useState } from 'react'
import { Elements, EmailBtn, ListDiv } from './style'

export default function StudentsList() {

    const [student, setStudent] = useState([])
    // const getStudents =() => {
 
        const getAllstudents =()=> {
            axios.get("http://localhost:3001/api/Student/getStudent")
                .then((res => {
                //   console.log(res)
                setStudent(res.data);
                })
        )}
        
  return (
    <ListDiv>
        <button onClick={getAllstudents}>Click here To Choose Student Email!!<br/></button>
        <Elements >
            {student.map((content:any, key:number)=> 
            <div>
               <EmailBtn> {content.Email}</EmailBtn>
            </div>
            )}
        </Elements>
    </ListDiv>
  )
}
