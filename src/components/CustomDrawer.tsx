import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { IoMdClose } from "react-icons/io";
import React from 'react'

function CustomDrawer({drawerOpen, setDrawerOpen,eventFilter, setEventFilter}) {
  const categories = [
    "All",
    "Music",
    "Dance",
    "Entertainment",
    "E-Gaming",
    "Quizzing",
    "Fun Activities",
    "Fashion",
    "Sports",
    "Technical",
    "Non Technical",
    "Creative",
    "Finance",
    "Literary",
  ];

  return (
    <>
      <Drawer
          open={drawerOpen}
          onClose={()=>{setDrawerOpen(false)}}
          direction='left'
      >
          <div className='bg-[#02050fde] h-screen w-screen p-5 flex flex-col space-y-5'>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg'>
                Categories
              </span>
              <IoMdClose size={20} className='cursor-pointer' onClick={()=>{setDrawerOpen(false)}}/>
            </div>
            
            <hr className='opacity-[0.3]'/>
            <div className='h-full flex flex-col space-y-4 text-gray-400'>
              {
                categories.map((item, index)=>{
                  return (
                    <div 
                      className={
                        eventFilter==item?
                          "text-sm hover:text-white cursor-pointer text-white"
                          :
                          "text-sm hover:text-white cursor-pointer"
                        }
                      key={index}
                      onClick={()=>{
                        setEventFilter(item)
                        setDrawerOpen(false)
                      }}
                    >
                      {item} 
                    </div>
                  )
                })
              }
            </div>
          </div>
      </Drawer> 
    </>
  )
}

export default CustomDrawer
