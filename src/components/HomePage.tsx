import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import About from './About'
import TopEvents from './TopEvents'
import Faqs from './Faqs'
import Sponsors from './Sponsors'

function HomePage() {
  return (
    <div className='h-screen w-screen bg-red-300'>
      <LandingPage/>
      <About/>
      <TopEvents/>
      {/* <Sponsors/> */}
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default HomePage
