import React from 'react'
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTrophy } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdModeStandby } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { TiTick } from "react-icons/ti";

function EventDetails() {
  return (
    <>
        <div className='text-3xl font-bold'>Event Name</div>
          <div className=' text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo corporis earum inventore dolorum vel, est natus nemo dolore praesentium veniam consequatur aperiam mollitia impedit dolores quae blanditiis magni illum tempora eius culpa! Temporibus velit non necessitatibus, laborum id deleniti sapiente reprehenderit iusto nesciunt nulla explicabo earum, neque iste. Consequuntur fugiat sed ullam laboriosam harum nam cumque perspiciatis illo labore molestias cum nihil voluptatem quos quaerat dignissimos est magni, iste voluptates omnis animi. Fuga, cum!
          </div>
          <div className='space-y-2'>
            <div className='text-sm flex items-center space-x-3'>
              <MdDateRange size={15}/>
              <span>Date: 3rd November, 2024</span>
            </div>
            <div className='text-sm flex items-center space-x-3'>
              <IoIosTime size={15}/>
              <span>Time: 12:00 PM</span>
            </div>
            <div className='text-sm flex items-center space-x-3'>
              <FaLocationDot size={15}/>
              <span>Venue: RN 117</span>
            </div>
            <div className='text-sm flex items-center space-x-3 mt-5'>
              <IoIosTrophy/>
              <span>Prize: Rs. 1000</span>
            </div>
            <div className='text-sm flex items-center space-x-3'>
              <FaMoneyBillWave/>
              <span>Entry Fees: Rs. 100</span>
            </div>
            <div className='text-sm flex items-center space-x-3'>
              <RiTeamFill/>
              <span>Team Size: 1 - 5 persons</span>
            </div>
            <div className='text-sm flex items-center space-x-3'>
              <MdModeStandby/>
              <span>Mode: Offline</span>
            </div>
          </div>
          <div className='space-y-2'>
            <div className='text-xl font-semibold flex items-center space-x-2'>
              <TiTick />
              <span>Rules</span>
            </div>
            <div className=' text-sm'>
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
    </>
  )
}

export default EventDetails
