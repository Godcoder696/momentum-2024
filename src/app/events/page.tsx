'use client'

import EventsSearchBar from "@/components/EventsSearchBar";
import Image from "next/image";
import Link from "next/link";
// import { getEvents } from "lib/eventList";
// import EventCard from "@/components/newUI/eventCard";
// import PageWrapper from "@/components/PageWrapper";
import { useRef, useState } from "react";

export default function Events({ }) {
  const [eventFilter, setEventFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div>
      <div  className="h-screen min-h-screen bg-[#030919] text-white px-10 events-bg z-30 " >
        <EventsSearchBar eventFilter={eventFilter} setEventFilter={setEventFilter}/>
        <div className="h-max mt-5 overflow-y-scroll grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-10">  
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
          <Link href="/events/1"><Image src="/event-poster.png" alt='p1' height={200} width={200} className="event-card "/></Link>
        </div>  
      </div>
    </div>
  );
}