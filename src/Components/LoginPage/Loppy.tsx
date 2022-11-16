import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StudentsList from './StudentsList';
import ShowStudentsList from './StudentsList';
import { PageDiv,BtnList, LoppyTitle, List } from './style'

export default function Loppy() {

  const [studentsList, setEmptyBag] = useState(false);
  const showEmptyBag =() => {
    setEmptyBag(!studentsList);
  }

  return (
      <PageDiv>
        <LoppyTitle>Choose code block</LoppyTitle>
        
        <List>
          <BtnList onClick={showEmptyBag} >async</BtnList><br/>
          <BtnList onClick={showEmptyBag}>async </BtnList><br/>
          <BtnList onClick={showEmptyBag}>async </BtnList><br/>
          <BtnList onClick={showEmptyBag}>async </BtnList>
        </List>
        {studentsList && <StudentsList/>}
      </PageDiv>
  )
}
