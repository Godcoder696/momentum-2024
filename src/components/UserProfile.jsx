import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import college from '../data/college.json';

function UserProfile({usrDetails}) {
  const [fname, setFname]= useState();
  const [lname, setLname]= useState();
  const [phNum, setPhNum]= useState();
  const [clgName, setClgName]= useState();
  const [id, setId]= useState();
  const [role, setRole]= useState("");
  const [year, setYear]= useState("");
  const [dob, setDob]= useState("");
  const [addrs, setAddrs]= useState("");
  const [gender, setGender]= useState("");

  useEffect(()=>{
    if(usrDetails){
      setFname(usrDetails.fname);
      setLname(usrDetails.lname);
      setPhNum(usrDetails.pNumber);
      setClgName(usrDetails.collegeName);
      setId(usrDetails._id);
      setYear(usrDetails.year);
      setDob(usrDetails.dob);
      setAddrs(usrDetails.address);
      setGender(usrDetails.gender);
    }
  },[usrDetails])

  const myToast= (msg)=>{
    toast(msg, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light"
    });
  }

  const validateDetails= async ()=>{
    if(!fname || !lname) myToast("Enter full name!.")
    if(fname.length<3)myToast("Name should have atleast 3 characters.");
    if(!phNum || phNum.length!=10)myToast("Please enter valid phone number.");
    if(!year) myToast("Please select a year.")
    if(!dob) myToast("Please enter your date of birth.")
    if(!addrs) myToast("Please enter your address.")

    else if(fname && fname.length>=3 && lname && phNum && phNum.length==10 && year && dob && addrs){
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
          role: role,
          dob: dob,
          gender: gender,
          year: year,
          address: addrs
        })
      })
      window.location.reload();
    }

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
      <div className='flex w-full space-x-3'>
        <div className='flex flex-col space-y-1 w-full'>
          <span className='text-sm font-extralight'>Phone Number</span>
          <div className='space-x-3 space-y-1'>
            <input 
              value={phNum || ""}
              type="tel" 
              className='bg-[#41454d] h-10 px-2 rounded-md w-full' 
              placeholder='99999-99999'
              onChange={(event)=>{setPhNum(event.target.value);}}
            />
          </div>
        </div>
        <div className='flex flex-col space-y-1 w-full'>
          <span className='text-sm font-extralight'>Date of birth</span>
          <div className='space-x-3 space-y-1'>
            <input 
              value={dob}
              type="date" 
              className='bg-[#41454d] h-10 px-2 rounded-md w-full' 
              placeholder='99999-99999'
              onChange={(event)=>{setDob(event.target.value);}}
            />
          </div>
        </div>
      </div>
      <div className='flex w-full space-x-3'>
        <div className='flex flex-col space-y-1 w-full'>
          <span className='text-sm font-extralight'>College Name</span>
          <select 
            name="" id="" 
            className='bg-[#41454d] h-10 px-2 w-full rounded-md'
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
        <div className='flex flex-col space-y-1 w-full'>
          <span className='text-sm font-extralight'>Gender</span>
          <select 
            name="" id="" 
            className='bg-[#41454d] h-10 px-2 w-full rounded-md'
            value={gender}
            onChange={(event)=>{setGender(event.target.value);}}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer not to say">prefer not to say</option>
          </select>
        </div>
      </div>
      <div className='flex w-full space-x-3'>
        <div className='flex flex-col space-y-1 w-full'>
          <span className='text-sm font-extralight'>Year of study</span>
          <select 
            name="" id="" 
            className='bg-[#41454d] h-10 px-2 w-full rounded-md'
            value={year}
            onChange={(event)=>{setYear(event.target.value);}}
          >
            <option value="1">1<sup>st</sup> Year</option>
            <option value="2">2<sup>nd</sup> Year</option>
            <option value="3">3<sup>rd</sup> Year</option>
            <option value="4">4<sup>th</sup> Year</option>
          </select>
        </div>
        <div className='flex flex-col space-y-1 w-full'>
          <span className='text-sm font-extralight'>Address</span>
          <input
            value={addrs}
            type="text" 
            className='bg-[#41454d] h-10 px-2 rounded-md w-full' 
            placeholder='Enter full address'
            onChange={(event)=>{setAddrs(event.target.value);}}
          />
        </div>
      </div>
      <button 
        className='bg-purple-600 hover:bg-purple-800 py-3 rounded-md'
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
