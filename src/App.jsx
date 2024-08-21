/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'
import Navbar from './components/navbar'
import LandingPage from './components/landingpage'
import Marqee from './components/marqee'
import About from './components/about'
import Eyes from './components/eyes'
import Featured from './components/featured'
import Clientreviews from './components/clientreviews'
import Cards from './components/cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen">
      <h1>We well come soon</h1>
      {/* <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Clientreviews/>
      <Cards/>
      <Footer/> */}
    </div>
  )
}

export default App