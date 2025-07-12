import React from 'react'
import Navbar from '../Components/Landingpage/Navbar'
import HeroSection from '../Components/Landingpage/HeroSection'
import AboutSection from '../Components/Landingpage/AboutSection'
import FAQSection from '../Components/Landingpage/FAQSection'
import ContactSection from '../Components/Landingpage/ContactSection'
import Footer from '../Components/Landingpage/Footer'
import ServicesSection from '../Components/Landingpage/ServicesSection'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <FAQSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage
