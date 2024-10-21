import React, { useEffect } from 'react'
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTrophy } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdModeStandby } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { IoIosContact } from "react-icons/io";

function EventDetails({event}) {
  useEffect(()=>{
    console.log(event);
  },[])
  return (
    <div className='space-y-2 md:space-y-4'>
        <div className='text-3xl font-bold'>{event.name}</div>
          <div className=' text-sm'>
            {
              event.desc
            }
          </div>
          <div className='space-y-1 md:space-y-2'>
            {/* <div className='text-sm flex items-center space-x-3'>
              <MdDateRange size={15}/>
              <span>Date: {event.dayTime}</span>
            </div> */}
            {/* <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <IoIosTime size={15}/>
              <span>Day/Time: {event.dayTime}</span>
            </div> */}
            {/* <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <FaLocationDot size={15}/>
              <span>Venue: {event.venue}</span>
            </div> */}
            {/* <div className='text-sm flex items-center space-x-3 mt-5'>
              <IoIosTrophy/>
              <span>Prize: Rs. 1000</span>
            </div> */}
            <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <FaMoneyBillWave/>
              <span>Entry Fees: Rs. {event.fee}</span>
            </div>
            <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <RiTeamFill/>
              <span>Team Size: 
                {
                  event.type=="Solo"?
                  " Solo"
                  :
                  (
                    event.type=="Solo/Team"?
                    " "+event.type
                    :
                    " "+(event.minSize==event.maxSize?`${event.maxSize} members`:`${event.minSize} - ${event.maxSize} members`)
                  )
                }
              </span>
            </div>
            {/* <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <RiTeamFill/>
              <span>Team : 1 - 5 persons</span>
            </div> */}
            <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <RiTeamFill/>
              <span>Coordinators: {event.coordinators}</span>
            </div>
            <div className='text-xs md:text-sm flex items-center space-x-1 md:space-x-3'>
              <IoIosContact/>
              <span>Contact: +91 {event.contact}</span>
            </div>
            {/* <div className='text-sm flex items-center space-x-3'>
              <MdModeStandby/>
              <span>Mode: Offline</span>
            </div> */}
          </div>
          {event.rule.length>0 && <div className='space-y-2'>
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
                  {
                    event.rule.map((rule, index)=>{
                      return (<li key={index}>{rule}</li>)
                    })
                  }
                  <li>The decision of the judges shall be final and binding.</li>
                  <li>In the event of any disputes that may arise during the competition, the decision made by the organizers will be final and binding.</li>
                  <li>Participants found under the influence of cigarettes, alcohol, or narcotics, or using unfair means, regardless of the event they are participating in or the institution they represent, will be prohibited from participating and asked to leave the premises of the organizing institute.
                  </li>
                  <li>Once registered for an event, under no circumstances the registration fees shall be refunded to the participants in case of absence/ disqualification.</li>
                </ul>
            </div>
          </div> }
        {event.criteria.length>0 && <div className='space-y-2'>
            <div className='text-xl font-semibold flex items-center space-x-2'>
              <TiTick />
              <span>Judging Criteria</span>
            </div>
            <div className=' text-sm'>
                <ul className='ml-10 ' style={
                {
                  "listStyleType":"disc"
                }
                } >
                  {
                    event.criteria.map((rule, index)=>{
                      return (<li key={index}>{rule}</li>)
                    })
                  }
                </ul>
            </div>
        </div> }
        { event.elimination.length>0 && <div className='space-y-2'>
            <div className='text-xl font-semibold flex items-center space-x-2'>
              <TiTick />
              <span>Elimination Criteria</span>
            </div>
            <div className=' text-sm'>
                <ul className='ml-10 ' style={
                {
                  "listStyleType":"disc"
                }
                } >
                  {
                    event.elimination.map((rule, index)=>{
                      return (<li key={index}>{rule}</li>)
                    })
                  }
                </ul>
            </div>
        </div> }
        { event.TC && event.TC.length>0 && <div className='space-y-2'>
            <div className='text-xl font-semibold flex items-center space-x-2'>
              <TiTick />
              <span>Terms & Conditions</span>
            </div>
            <div className=' text-sm'>
                <ul className='ml-10 ' style={
                {
                  "listStyleType":"disc"
                }
                } >
                  {
                    event.TC.map((rule, index)=>{
                      return (<li key={index}>{rule}</li>)
                    })
                  }
                </ul>
            </div>
        </div> }
    </div>
  )
}

export default EventDetails
