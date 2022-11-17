import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlockCode from '../AllPages/BlockCode'
import HomePage from '../AllPages/HomePage'
import Loppy from '../AllPages/Loppy'
import StudentLogin from '../AllPages/StudentLogin'

export default function Layout() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='/Loppy' element={<Loppy/>}/>
            <Route path='/Student-Login' element={<StudentLogin/>}/>
            <Route path='/Code-Page' element={<BlockCode/>}/>
        </Routes>
    </BrowserRouter>
  )
}
