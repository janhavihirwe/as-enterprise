import React from 'react'
import Navbar from '../components/navbarcomponent/Navbar'
import ContactUs from '../components/contactsection/ContactUs'
import Footer from '../components/footer/Footer'
import Content from '../components/contentsection/Content'
import { useParams } from 'react-router-dom'

function AllServices() {
    const {name}=useParams();
  return (
    <div>
        <Navbar/>
        <Content serviceName={name}/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default AllServices