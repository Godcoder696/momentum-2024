import About from './About'
import EventsMarquee from './EventsMarquee'
import Faqs from './Faqs'
import Footer from './Footer'
import LandingPage from './LandingPage'
import TopEvents from './TopEvents'

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
