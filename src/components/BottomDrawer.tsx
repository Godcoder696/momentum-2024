import React, { useState } from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosTime, IoIosTrophy, IoMdClose } from 'react-icons/io'
import { MdDateRange, MdModeStandby } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'
import Drawer from 'react-modern-drawer'

function BottomDrawer({drawerOpen, setDrawerOpen}) {
    
  return (
    <>
      <Drawer
          open={drawerOpen}
          onClose={()=>{setDrawerOpen(false)}}
          direction='left'
          className='xl:hidden'>
        <div className='bg-[#140a10] h-screen w-screen p-5 flex flex-col space-y-5 '>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg'>
              Event Details
            </span>
            <IoMdClose size={20} className='cursor-pointer' onClick={()=>{setDrawerOpen(false)}}/>
          </div>
          <hr className='opacity-[0.3]'/>
          <div className='overflow-y-scroll space-y-3'>
            <div className=' text-xs'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo corporis earum inventore dolorum vel, est natus nemo dolore praesentium veniam consequatur aperiam mollitia impedit dolores quae blanditiis magni illum tempora eius culpa! Temporibus velit non necessitatibus, laborum id deleniti sapiente reprehenderit iusto nesciunt nulla explicabo earum, neque iste. Consequuntur fugiat sed ullam laboriosam harum nam cumque perspiciatis illo labore molestias cum nihil voluptatem quos quaerat dignissimos est magni, iste voluptates omnis animi. Fuga, cum!
            </div>
            <div className='space-y-2'>
              <div className='text-xs flex items-center space-x-3'>
                <MdDateRange size={15}/>
                <span>Date: 3rd November, 2024</span>
              </div>
              <div className='text-xs flex items-center space-x-3'>
                <IoIosTime size={15}/>
                <span>Time: 12:00 PM</span>
              </div>
              <div className='text-xs flex items-center space-x-3'>
                <FaLocationDot size={15}/>
                <span>Venue: RN 117</span>
              </div>
              <div className='text-xs flex items-center space-x-3 mt-5'>
                <IoIosTrophy/>
                <span>Prize: Rs. 1000</span>
              </div>
              <div className='text-xs flex items-center space-x-3'>
                <FaMoneyBillWave/>
                <span>Entry Fees: Rs. 100</span>
              </div>
              <div className='text-xs flex items-center space-x-3'>
                <RiTeamFill/>
                <span>Team Size: 1 - 5 persons</span>
              </div>
              <div className='text-xs flex items-center space-x-3'>
                <MdModeStandby/>
                <span>Mode: Offline</span>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='text-lg font-semibold flex items-center space-x-2'>
                <TiTick />
                <span>Rules</span>
              </div>
              <div className=' text-xs'>
                  <ul className='ml-10 ' style={
                  {
                    "listStyleType":"disc"
                  }
                  } >
                  <li>Rule 1</li>
                  <li>Rule 2</li>
                  <li>Rule 3</li>
                  <li>Rule 4</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </Drawer> 
    </>
  )
}

export default BottomDrawer
