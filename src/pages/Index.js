import React, { useState } from 'react'
import Navbar from '../components/Navbar/Index'
import Sidebar from '../components/Sidebar/Index'
import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection/Index'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'


const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          {/* <ProjectsSection/>
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/> */}
        </>
    )
}

export default Home
