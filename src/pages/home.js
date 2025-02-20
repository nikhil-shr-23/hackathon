import React from 'react'
import Hero from '../components/Hero'
import Resources from '../components/Resources';
import FAQ from '../components/FAQ';
import PartnerHospitals from '../components/Partners';
// import ChatComponent from '../components/ChatComponent';
import ScrollingFooter from '../components/ScrollingFooter';

const home = () => {
  return (
    <div>
        
    <Hero/>
    <Resources/>
    <PartnerHospitals/>
    <FAQ/>
    <ScrollingFooter/>

    
    </div>
  )
}

export default home
