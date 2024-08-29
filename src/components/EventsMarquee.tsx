import React from 'react'
import Marquee from 'react-fast-marquee'

function EventsMarquee() {
  return (
    <>
        <Marquee autoFill={true} style={
            {
                color:"black",
                marginTop: "-40px",
                backgroundColor: "whitesmoke"
            }
        }>
            <div className='text-xl font-extralight py-1'>
                <span className='px-1'>●</span>
                <span className='px-[3px]'>COMING</span>
                <span className='px-[3px]'>SOON </span>
            </div>
        </Marquee>
    </>
  )
}

export default EventsMarquee
