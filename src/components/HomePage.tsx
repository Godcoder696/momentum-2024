import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import About from './About'
import TopEvents from './TopEvents'
import Faqs from './Faqs'
import Sponsors from './Sponsors'
import EventsMarquee from './EventsMarquee'

function HomePage() {
  return (
    <div className='h-screen w-screen bg-[#030919]'>
      <LandingPage/>
      <EventsMarquee/>
      <About/>
      <TopEvents/>
      {/* <Sponsors/> */}
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default HomePage
