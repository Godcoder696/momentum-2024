import React, { useState } from 'react'
import college from '../data/college.json';

function UserProfile() {
  const [fname, setFname]= useState("");
  const [lname, setLname]= useState("");
  const [phNum, setPhNum]= useState("");
  const [clgName, setClgName]= useState("");

  return (
    <div className='w-full p-1 flex flex-col space-y-4'>
      <div className='flex flex-col'>
        <span className='text-sm font-extralight'>Name</span>
        <div className='space-x-3 space-y-1'>
          <input 
            type="text" 
            className='bg-[#41454d] h-10 px-2 w-[49%] rounded-md' 
            placeholder='First Name'
            value={fname}
            onChange={(event)=>{setFname(event.target.value);}}
          />
          <input 
            type="text" 
            className='bg-[#41454d] h-10 px-2 w-[49%] rounded-md' 
            placeholder='Last Name'
            value={lname}
            onChange={(event)=>{setLname(event.target.value);}}
          />
        </div>
      </div>
      <div className='flex flex-col space-y-1'>
        <span className='text-sm font-extralight'>Phone Number</span>
        <div className='space-x-3 space-y-1'>
          <input 
            value={phNum || ""}
            type="tel" 
            className='bg-[#41454d] h-10 px-2 w-[49%] rounded-md' 
            placeholder='99999-99999'
            onChange={(event)=>{setPhNum(event.target.value);}}
          />
        </div>
      </div>
      <div className='flex flex-col space-y-1'>
        <span className='text-sm font-extralight'>College Name</span>
        <select 
          name="" id="" 
          className='bg-[#41454d] h-10 px-2 w-[49%] rounded-md'
          value={clgName}
          onChange={(event)=>{setClgName(event.target.value);}}
        >
          {
            college.collegeList.map((clg, index)=>{
              return (
                <option value={clg} key={index}>{clg}</option>
              )
            })
          }
        </select>
      </div>
      <div className='flex flex-col space-y-1'>
        <span className='text-sm font-extralight'>Year of study</span>
        <div className='space-x-3 space-y-1'>
          <input 
            type="tel" 
            className='bg-[#41454d] h-10 px-2 w-[49%] rounded-md' 
            placeholder='1st Year'
          />
        </div>
      </div>
      <button className='bg-purple-600 hover:bg-purple-800 py-3 rounded-md w-[49%]'>Save Changes</button>
    </div>
  )
}

export default UserProfile
