import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'
import HeroImg3 from '../components/HeroImg3'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg3 heading='PROJECTS' text='Some of my recent work '/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project