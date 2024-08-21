'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

function Faq({element, toggle, setToggle, index}) {
    
  return (
    <>
        <div className='space-y-2 bg-white text-black rounded-md xl:rounded-[1.3rem] px-3 py-3 xl:px-5 cursor-pointer'
            onClick={()=>{
                setToggle(index);
            }}
        >
            <div className='text-xs xl:text-lg flex items-center justify-between' >
                <span>{element.ques}</span>
                <span><IoMdArrowDropdown style={toggle ? {
                    "rotate": "180deg",    
                }:{}
            }/></span>
            </div>
            {
                toggle==index && 
                <div className='faq-content space-y-2'>
                    <hr />
                    <div className='text-xs xl:text-sm'>
                        {element.ans}
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Faq
