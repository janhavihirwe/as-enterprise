import React, { useRef } from 'react'
import Navbar from '../components/navbarcomponent/Navbar'
import FirstSection from '../components/firstsection/FirstSection'
import Services from '../components/Servicessection/Services'
import Clients from '../components/clientsection/Clients'
import Warrenty from '../components/warrentysection/Warrenty'
import Aboutus from '../components/aboutussection/Aboutus'
import Feedback from '../components/feedbacksection/Feedback'
import ContactUs from '../components/contactsection/ContactUs'
import Footer from '../components/footer/Footer'

function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
      <Navbar
        onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onServicesClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onClientsClick={() => clientsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <FirstSection />
      <div ref={servicesRef}><Services /></div>
      <div ref={clientsRef}><Clients /></div>
      <Warrenty onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}/>
      <div ref={aboutRef}><Aboutus /></div>
      <div ref={contactRef}><ContactUs /></div>
      <Footer 
      onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
      onServicesClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
      onClientsClick={() => clientsRef.current?.scrollIntoView({ behavior: 'smooth' })}
      onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}/>
    </div>
  )
}

export default Home