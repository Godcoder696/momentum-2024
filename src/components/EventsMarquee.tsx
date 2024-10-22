import React from 'react'
import Marquee from 'react-fast-marquee'

function EventsMarquee() {
  return (
    <>
        <Marquee autoFill={true} 
            style={
            {
                color:"black",
                marginTop: "-40px",
                backgroundColor: "whitesmoke"
            }
        }>
            <div className='text-xl font-extralight py-1'>
                <span className='px-1'>●</span>
                <span className='px-[3px]'>REGISTRATIONS</span>
                <span className='px-[3px]'>ARE</span>
                <span className='px-[3px]'>OPEN </span>
            </div>
        </Marquee>
    </>
  )
}

export default EventsMarquee
