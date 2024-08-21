import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import CustomDrawer from './CustomDrawer';

function EventsSearchBar({eventFilter, setEventFilter}) {
    const [drawerOpen, setDrawerOpen]= useState(false);
  return (
    <>
        <div className='pt-[100px] sticky top-0 '>
            <div className='flex items-center space-x-3 '>
                <div className="w-[40%] bg-[#374151] h-11 flex items-center px-3 py-2 rounded-md">
                    <IoMdSearch size={25}/>
                    <input type="text" name="" id="" 
                        className='bg-transparent w-full outline-none px-2'
                        placeholder='Search events'
                    />
                    <button
                        className=" bg-green-500 px-5 py-1 rounded-md hover:bg-green-600"
                    >
                        Search
                    </button>    
                </div>
                <button
                    className=" bg-purple-500 h-10 px-5 rounded-md hover:bg-purple-600 flex items-center space-x-3"
                    onClick={()=>{
                        setDrawerOpen(true);
                    }}
                >
                    <FaFilter size={12}/>
                    <span>Categories</span>
                </button>  
            </div>
            <hr className="mt-7 opacity-[0.3] pb-4"/>
        </div>
        <CustomDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} eventFilter={eventFilter} setEventFilter={setEventFilter}/>
    </>
  )
}

export default EventsSearchBar
