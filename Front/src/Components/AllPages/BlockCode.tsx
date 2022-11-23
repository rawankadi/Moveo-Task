import React from 'react'
import { CodeIn, CodePageDiv, Quis, Title3 } from './style'

export default function BlockCode() {
  return (
    <CodePageDiv>
    <Title3>BlockCode</Title3><br/><br/><br/><br/>
    <Quis> Find the problem in the code above,
        Then in this window you must write the correct code: 
    </Quis><br/>
    <CodeIn placeholder='Write Here your solution ..'>

    </CodeIn>
    </CodePageDiv>
  )
}
