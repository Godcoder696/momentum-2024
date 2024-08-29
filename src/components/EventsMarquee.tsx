import React from 'react'
import Marquee from 'react-fast-marquee'

function EventsMarquee() {
  return (
    <>
        <Marquee autoFill={true} style={
            {
                color:"black",
            }
        }>
            <div className='space-x-2 text-xl font-extralight py-1'>
                <span className='px-1'>●</span>
                <span className='px-[2px]'>EVENTS</span>
                <span className='px-[2px]'>COMING</span>
                <span className='px-[2px]'>SOON </span>
            </div>
        </Marquee>
    </>
  )
}

export default EventsMarquee
