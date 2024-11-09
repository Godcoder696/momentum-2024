'use client'

import EventsSearchBar from "@/components/EventsSearchBar";
import Image from "next/image";
import Link from "next/link";
// import { getEvents } from "lib/eventList";
// import EventCard from "@/components/newUI/eventCard";
// import PageWrapper from "@/components/PageWrapper";
import React, { useEffect, useRef, useState } from "react";
import events from '@/data/events.json'
import { useRouter } from 'next/navigation'

export default function Events({ }) {
  const [eventFilter, setEventFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router= useRouter();

  useEffect(()=>{
    router.push("/page-not-found");
  },[])
  
  return (
    <div>
      <div  className="h-screen min-h-screen bg-[#030919] text-white px-10 events-bg z-30 " >
        <EventsSearchBar eventFilter={eventFilter} setEventFilter={setEventFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <div className="h-max mt-5 overflow-y-scroll grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-10">  
          {
            events.map((event, index)=>{
              return (
                ( 
                  event.categories.includes(eventFilter) || eventFilter=="All"?
                  (
                    event.name.toLowerCase().includes(searchQuery.toLowerCase())?
                    <Link href={`events/${index}`} key={index}>
                      <Image src={event.imgUrl} alt='p1' height={200} width={200} className="event-card "/>
                    </Link>
                    :
                    <React.Fragment key={index}></React.Fragment>
                  )
                  :
                  <React.Fragment key={index}></React.Fragment>
                )
              )
            })
          }
        </div>  
      </div>
    </div>
  );
}