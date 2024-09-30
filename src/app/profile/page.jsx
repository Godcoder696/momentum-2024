"use client";
import MyEvents from "@/components/MyEvents";
import UserProfile from "@/components/UserProfile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/ContextProvider";

function Profile() {
  const { data: session } = useSession();
  const [sideBar, setSideBar] = useState(0);
  const [usrDetails, setUsrDetails] = useState("");
  const { user, setUser } = useAppContext();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    if (user) {
      setUsrDetails(user);
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="h-screen bg-[#030919] text-white pt-[80px] md:pt-[110px] md:pb-10 px-3 xl:px-24 flex gap-3 flex-col md:flex-row items-center">
      <div className="w-full md:h-full md:w-2/6 bg-[#2123279d] rounded-sm px-2 lg:px-7 py-3 md:py-8 flex flex-col items-center ">
        <div className="w-full flex gap-2 md:gap-4 items-center">
          <img
            src={session?.user?.image || ""}
            alt=""
            className="rounded-md h-16 w-16 lg:h-28 lg:w-28 cursor-pointer"
          />
          <div className="flex flex-col h-full lg:space-y-1 md:py-4">
            <div className="text-base lg:text-2xl font-semibold">
              {usrDetails.tag}
            </div>
            <div className="text-sm lg:text-lg">{session?.user?.name}</div>
            <div className="text-xs font-thin">{session?.user?.email}</div>
          </div>
        </div>
        <hr className="w-full bg-white h-[1px] mt-4 opacity-[0.5]" />
        <div className="flex space-x-2 md:space-x-0 md:flex-col w-full">
          <div
            className={`w-full md:h-10 md:px-6 lg:py-8 px-3 py-2 rounded-md mt-4 flex space-x-4 items-center text-sm md:text-lg cursor-pointer border-[1px] border-[#41454d] ${
              +sideBar == 0 ? "bg-[#41454d]" : "hover:bg-[#41454d]"
            }`}
            onClick={() => {
              setSideBar(0);
            }}
          >
            Profile
          </div>
          <div
            className={`w-full md:h-10 md:px-6 lg:py-8 px-3 py-2 rounded-md mt-4 flex space-x-4 items-center text-sm md:text-lg cursor-pointer border-[1px] border-[#41454d] ${
              +sideBar == 1 ? "bg-[#41454d]" : "hover:bg-[#41454d]"
            }`}
            onClick={() => {
              setSideBar(1);
            }}
          >
            Tickets
          </div>
        </div>
      </div>
      <div className="h-min md:h-full w-full md:w-4/6 bg-[#2123279d] p-3 rounded-sm md:p-6 space-y-2 md:space-y-6 overflow-y-scroll">
        {loading ? (
          <>Loading....</>
        ) : (
          <>
            <div className="text-lg md:text-2xl font-semibold">
              {sideBar == 0 ? "Profile" : "Tickets"}
            </div>
            <hr className="w-full bg-white h-[1px] opacity-[0.5]" />
            {sideBar == 0 ? (
              <UserProfile usrDetails={usrDetails} />
            ) : (
              <MyEvents events={usrDetails.events} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
