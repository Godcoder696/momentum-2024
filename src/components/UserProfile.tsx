import React, { useEffect, useState } from 'react'
import college from '../data/college.json';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

function UserProfile({usrDetails}) {
  const [fname, setFname]= useState(usrDetails.fname);
  const [lname, setLname]= useState(usrDetails.lname);
  const [phNum, setPhNum]= useState(usrDetails.pNumber);
  const [clgName, setClgName]= useState(usrDetails.collegeName);
  const [id, setId]= useState(usrDetails._id);
  const [role, setRole]= useState("");
  const [year, setYear]= useState("");
  const [dob, setDob]= useState("");
  const [addrs, setAddrs]= useState("");

  useEffect(()=>{
    if(usrDetails){
      setFname(usrDetails.fname);
      setLname(usrDetails.lname);
      setPhNum(usrDetails.pNumber);
      setClgName(usrDetails.collegeName);
      setId(usrDetails._id);
    }
  },[usrDetails])

  const validateDetails= async ()=>{
    // toast("Hey!!", {
    //   position: "top-right",
    //   autoClose: 4000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   progress: undefined,
    //   theme: "light"
    // });
    await fetch("/api/user",{
      method: "PUT",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: id,
        email: usrDetails.email,
        fname: fname,
        lname: lname,
        pNumber: phNum,
        collegeName: clgName,
        role: role
      })
    })

    window.location.reload();
  }

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
      <button 
        className='bg-purple-600 hover:bg-purple-800 py-3 rounded-md w-[49%]'
        onClick={()=>{
          validateDetails()
        }}
      >
        Save Changes
      </button>
      <ToastContainer />
    </div>
  )
}

export default UserProfile
