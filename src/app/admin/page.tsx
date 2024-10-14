'use client'
import Dashboard from "@/components/Dashboard";
import SidePanel from "@/components/SidePanel";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/ContextProvider";

function Admin() {
    
    const { data: session } = useSession();
    const {user}= useAppContext();
    const router= useRouter();
    useEffect(()=>{
        console.log(user);
        if(!user || !session ||  user.role!="admin"){
          router.push("/page-not-found");
        }
    },[user])

    const [panel, setPanel]= useState(0);
    return (
        <div className='h-screen w-screen bg-[#1c1c1c] flex z-50'>
            <SidePanel setPanel={setPanel} panel={panel}/>
            <Dashboard panel={panel}/>
        </div>
    )
}

export default Admin