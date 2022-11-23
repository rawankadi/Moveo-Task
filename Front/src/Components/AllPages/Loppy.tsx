import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StudentsList from './StudentsList';
import ShowStudentsList from './StudentsList';
import { PageDiv,BtnList, LoppyTitle, List } from './style'

export default function Loppy() {

  const [studentsList, setStudentList] = useState(false);
  const showStudentList =() => {
    setStudentList(!studentsList);
  }
  

  return (
      <PageDiv>
        <LoppyTitle>Choose code block</LoppyTitle>
        <List>
          <BtnList onClick={showStudentList} ><p>
          def num_even():<br/>
              count = 0 index = 0 <br/>
              while index &lt; 10:<br/>
                  num = int(input("Enter an integer number"))<br/>
                  if num &lt;= 99 and num &gt;= 10:<br/>
                          count= count +1<br/>
                  index = index+1<br/>
              print "count",count
              </p></BtnList><br/>
          <BtnList onClick={showStudentList}> <p>
          def num_even():<br/>
              count = 0 index = 0 <br/>
              while index &lt; 10:<br/>
                  num = int(input("Enter an integer number"))<br/>
                  if num &lt;= 99 and num &gt;= 10:<br/>
                          count= count +1<br/>
                  index = index+1<br/>
              print "count",count
              </p></BtnList><br/>
          <BtnList onClick={showStudentList}><p>
          def num_even():<br/>
              count = 0 index = 0 <br/>
              while index &lt; 10:<br/>
                  num = int(input("Enter an integer number"))<br/>
                  if num &lt;= 99 and num &gt;= 10:<br/>
                          count= count +1<br/>
                  index = index+1<br/>
              print "count",count
              </p></BtnList><br/>
          <BtnList onClick={showStudentList}><p>
          def num_even():<br/>
              count = 0 index = 0 <br/>
              while index &lt; 10:<br/>
                  num = int(input("Enter an integer number"))<br/>
                  if num &lt;= 99 and num &gt;= 10:<br/>
                          count= count +1<br/>
                  index = index+1<br/>
              print "count",count
              </p> </BtnList>
              {studentsList && <StudentsList/>}

        </List>

      </PageDiv>
  )
}
