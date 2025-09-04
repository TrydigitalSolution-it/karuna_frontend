import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Component/Dashboard'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SigninEmail from './Component/SigninEmail'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/signin' element={<SigninEmail/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
