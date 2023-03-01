import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import HeroImg4 from '../components/HeroImg4'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg4 heading='WHO I AM.' text='A little about me.'/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About