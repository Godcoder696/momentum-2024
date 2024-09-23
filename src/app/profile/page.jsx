"use client";
import MyEvents from "@/components/MyEvents";
import UserProfile from "@/components/UserProfile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function Profile() {
  const { data: session } = useSession();
  const [sideBar, setSideBar] = useState(0);
  const [usrDetails, setUsrDetails] = useState("");

  useEffect(() => {
    const email = session?.user?.email;
    if (email) getUser(email);
  }, [session?.user?.email]);

  const getUser = async (email) => {
    const user = await fetch("/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const details = await user.json();
    const { data } = details;

    await setUsrDetails(data);
  };

  return (
    <div className="h-screen bg-[#030919] text-white pt-[110px] pb-10 px-24 flex gap-3">
      {/* <img src={session?.user?.image || ""} alt="" className="rounded-md h-44 w-44 cursor-pointer" /> */}
      <div className="h-full w-2/6 bg-[#2123279d] rounded-sm px-5 py-8 flex flex-col items-center ">
        <div className="w-full flex gap-4">
          <img
            src={session?.user?.image || ""}
            alt=""
            className="rounded-md h-28 w-28 cursor-pointer"
          />
          <div className="flex flex-col h-full space-y-1 py-4">
            <div className="text-2xl font-semibold">{usrDetails.tag}</div>
            <div className="text-lg">{session?.user?.name}</div>
            <div className="text-sm font-thin">{session?.user?.email}</div>
          </div>
        </div>
        <hr className="w-full bg-white h-[1px] mt-4 opacity-[0.5]" />
        <div
          className={`w-full h-10 px-6 py-8 rounded-md mt-4 flex space-x-4 items-center text-lg cursor-pointer border-[1px] border-[#41454d] ${
            +sideBar == 0 ? "bg-[#41454d]" : "hover:bg-[#41454d]"
          }`}
          onClick={() => {
            setSideBar(0);
          }}
        >
          Profile
        </div>
        <div
          className={`w-full h-10 px-6 py-8 rounded-md mt-4 flex space-x-4 items-center text-lg cursor-pointer border-[1px] border-[#41454d] ${
            +sideBar == 1 ? "bg-[#41454d]" : "hover:bg-[#41454d]"
          }`}
          onClick={() => {
            setSideBar(1);
          }}
        >
          Tickets
        </div>
      </div>
      <div className="h-full w-4/6 bg-[#2123279d] rounded-sm p-6 space-y-6 overflow-y-scroll">
        <div className="text-2xl font-semibold">
          {sideBar == 0 ? "Profile" : "Tickets"}
        </div>
        <hr className="w-full bg-white h-[1px] opacity-[0.5]" />
        {sideBar == 0 ? (
          <UserProfile usrDetails={usrDetails} />
        ) : (
          <MyEvents events={usrDetails.events} />
        )}
      </div>
    </div>
  );
}

export default Profile;
