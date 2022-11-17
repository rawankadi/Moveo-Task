import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Elements, EmailBtn, ListDiv} from './style'

export default function StudentsList() {

    const [student, setStudent] = useState([])
 
        const getAllstudents =()=> {
            axios.get("http://localhost:3001/api/Student/getStudent")
                .then((res => {
                //   console.log(res)
                setStudent(res.data);
                })
        )}

        const Navigate= useNavigate();
        const onEmailBtnClicked =()=>{ 
            Navigate('/Code-Page');
        }
    

  const [studentIn, setStudentIn] = useState('Student Login');

        
  return (
    // <Page>
        <ListDiv>
            <button onClick={getAllstudents}>Click here To Choose Student Email!!<br/></button>
            <Elements >
                {student.map((content:any, key:number)=> 
                <div>
                <EmailBtn onClick={onEmailBtnClicked}> {content.Email}</EmailBtn>
                </div>
                )}
            </Elements>
        </ListDiv>
    // </Page>
  )
}
