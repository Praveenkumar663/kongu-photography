import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Sections/Home'
import About from '../Sections/About'
import Portfolio from '../Sections/Portfolio'
import Services from '../Sections/Services'
import Process from '../Sections/Process'
import Testimonials from '../Sections/Testimonials'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'

const Hero = () => {
  return (
    <>

    <Navbar/>

    <main>

        <section id="home">
            <Home/>
        </section>

        <section id='about'>
            <About/>
        </section>

        <section id='portfolio'>
            <Portfolio/>
        </section>

        <section id='services'>
            <Services/>
        </section>

        <section id='process'>
            <Process/>
        </section>

        <section id='testimonials'>
            <Testimonials/>
        </section>

        <section id='contact'>
            <Contact/>
        </section>

        
        
    </main>

    <Footer/>

    </>
  )
}

export default Hero



