/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'
import Navbar from './components/navbar'
import LandingPage from './components/landingpage'

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App