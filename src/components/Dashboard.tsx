'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import { useEffect, useState } from "react"
import Options from "./Options";
import Overview from "./Overview";
import Registrations from "./Registrations";
import Teams from "./Teams";
import Users from "./Users";


function Dashboard({panel}) {

  const {setData}= useAppContext();
  const [loading, setLoading]= useState(true);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    handleRequest();
  },[panel, refresh])
  async function handleRequest() {
    setLoading(true);
    if(panel==0){
      await handleResponse("/api/admin/overview");
    }
    else if(panel==1){
      await handleResponse("/api/admin/payments");
    }
    else if(panel==2){
      await handleResponse("/api/admin/teams");
    }
    else if(panel==3){
      await handleResponse("/api/admin/users");
    }
    setLoading(false);
  }
  async function handleResponse(url){
    try {

      const resp= await fetch(
        url,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data= await resp.json();

      setData(data);

    } catch (error) {
      console.log(error);
    }
  }
  const heading=["Overview","Registrations","Teams","Users"]
  return (
    <>
      <div className='h-full w-[95%] p-5 text-white space-y-5'>
        <div className='text-3xl'>{heading[panel]}</div>
        <hr />
        {/* {
          panel!==0? */}
          <Options loading={loading} panel={panel} refresh={refresh} setRefresh={setRefresh} setSearch={setSearch} search={search}/>
          {/* :
          <></>
        } */}
        {
          panel==0?
          <Overview loading={loading}/>
          :
          loading?
          <>Loading...</>
          :
          (
            panel==1?
            <Registrations search={search}/>
            :
            (
              panel==2?
              <Teams search={search}/>
              :
              (
                panel==3?
                <Users search={search}/>
                :
                <></>
              )
            )
          )
        }
      </div>
    </>
  )
}

export default Dashboard
