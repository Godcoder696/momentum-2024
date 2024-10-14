import Image from 'next/image';
import { GrOverview } from "react-icons/gr";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiTeamLine, RiUserSearchLine } from "react-icons/ri";
function SidePanel({setPanel, panel}) {
  return (
    <div className='h-full hover:shadow-2xl py-9 px-4 bg-[#0f0f0f] w-fit flex flex-col items-center justify-between'>
        <Image height={50} width={50} src="/Logo.png" alt='MMT'></Image>
        <div className='flex flex-col space-y-10 items-center '>
            <span onClick={()=>{
                setPanel(0);
            }}
            className='cursor-pointer'
            >
                <GrOverview size={25} color={`${panel==0?'purple':'white'}`}/>
            </span>
            <span onClick={()=>{
                setPanel(1);
            }}
            className='cursor-pointer'
            >
                <MdOutlineAppRegistration size={25} color={`${panel==1?'purple':'white'}`}/>
            </span>
            <span onClick={()=>{
                setPanel(2);
            }}
            className='cursor-pointer'
            >
                <RiTeamLine size={25} color={`${panel==2?'purple':'white'}`}/>
            </span>
            <span onClick={()=>{
                setPanel(3);
            }}
            className='cursor-pointer'
            >
                <RiUserSearchLine size={25} color={`${panel==3?'purple':'white'}`}/>
            </span>
        </div>
    </div>
  )
}

export default SidePanel
