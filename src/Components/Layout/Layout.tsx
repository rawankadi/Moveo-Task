import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../LoginPage/HomePage'
import Loppy from '../LoginPage/Loppy'

export default function Layout() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='/Loppy' element={<Loppy/>}/>
        </Routes>
    </BrowserRouter>
  )
}
