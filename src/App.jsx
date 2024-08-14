/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'
import Navbar from './components/navbar'
import LandingPage from './components/landingpage'
import Marqee from './components/marqee'
import About from './components/about'

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
    </div>
  )
}

export default App