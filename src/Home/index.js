import React from 'react'
import NavbarHome from '../components/Navbar'
import Main from '../components/Main'
import AboutUs from '../About_Us'
import OurProduct from '../Our_Product'
import OurDelivery from '../Our_Delivery'
import Testimoni from '../Testimoni'
import Footers from '../components/Footer'


export default function Home() {
  return (
    <div>
        <NavbarHome  expand='xl' container='xl' />
        <Main/>
        <AboutUs/>
        <OurProduct/>
        <OurDelivery/>
        <Testimoni/>
        <Footers/>

    </div>
  )
} 
