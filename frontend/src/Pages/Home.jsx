import React from 'react'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import Content from '../Components/Content/Content'
import Consultant from '../Components/Consultant/Consultant'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <Content />
        <Consultant />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
