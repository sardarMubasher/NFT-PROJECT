import React from 'react'
import Choose from './Components/Choose/Choose'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Vision from './Components/Vision/Vision'
import Work from './Components/Work/Work'
import './Land.css'
const Land = () => {
  return (
    <>
    <div className="NH-Sec">
      <Navbar/>
       <Hero/> 
    </div>
    <Work/>
    <Vision/>
    <Choose/>
    <Footer/>
    </>
  )
}

export default Land