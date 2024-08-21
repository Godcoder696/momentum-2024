'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { IoMdClose, IoMdPerson } from "react-icons/io";
import Link from "next/link";

function SignInButton() {
  const { data: session } = useSession();
  const [show,setShow]= useState(false);

  if (session && session.user) {
    return (
      <div className="flex flex-col  ml-auto items-center">
        <img src={session.user.image || ""} alt="" className="rounded-[50%] h-9 w-9 cursor-pointer" 
          onClick={()=>{
            setShow(!show);
          }}/>
        {
          show &&
          <div className="w-34 absolute flex flex-col mt-12 bg-white text-black rounded-sm px-1 py-2 space-y-1 text-sm font-thin"
            onMouseLeave={()=>{
              setShow(false)
            }}>
            <Link href={"/users/profile"}>
              <div className="flex  justify-start items-center px-3 py-1 space-x-3 rounded-md hover:bg-gray-200">
                <IoMdPerson size={14}/>
                <button >Profile</button> 
              </div>
            </Link>
            <Link href={"/users/profile"}>
              <div className="flex  justify-start items-center px-3 py-1 space-x-3 rounded-md hover:bg-gray-200">
                <MdOutlineEmojiEvents size={14}/>
                <button >My Events</button> 
              </div>
            </Link>
            <div className="flex  justify-start items-center px-3 py-1 space-x-3 rounded-md hover:bg-gray-200"
              onClick={()=>{
                signOut()
              }}
            >
              <LiaSignOutAltSolid size={14} color="red"/>
              <button className="text-red-500 ">Log Out</button>
            </div>
            <div className="flex  justify-start items-center px-3 py-1 space-x-3 rounded-md hover:bg-gray-200" onClick={()=>{setShow(false)}}>
              <IoMdClose size={14} className='cursor-pointer' />
              <button >Close</button> 
            </div>
          </div>
        }
      </div>
    );
  }
  return (
    <button 
      onClick={()=> signIn()} 
      className="text-white ml-auto px-6 bg-[#ffffff77] py-[7px] rounded-[2rem] hover:bg-[#ffffffa9]">
      Sign In
    </button>
  )
}

export default SignInButton;