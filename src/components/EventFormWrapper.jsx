"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import Script from "next/script";
import { useAppContext } from "@/app/context/ContextProvider";
import events from "@/data/events.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EventFormWrapper({ eventId }) {
  // const ammount = 100;
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAppContext();
  const [rId, setRId] = useState(undefined);
  const [members, setMembers] = useState([]);
  const [maxSize, setMaxSize] = useState(events[eventId].maxSize || 0);
  const [minSize, setMinSize] = useState(events[eventId].minSize || 0);
  const [teamName, setTeamName] = useState(undefined);
  const [type, setType] = useState(events[eventId].type);

  useEffect(() => {
    const team = [];
    for (let i = 0; i < maxSize; i++) {
      if (i == 0) team.push({ name: "", rollNum: "" });
      else team.push({ name: "", rollNum: "" });
    }
    setMembers(team);
  }, [maxSize]);
  const handlePayment = async () => {
    let isValid = true;
    if (events[eventId].type == "Team") isValid = validateDetails();
    if (isValid) {
      setIsProcessing(true);
      try {
        // create order
        const response = await fetch("/api/payment/createOrderId", {
          method: "POST",
          body: JSON.stringify({
            fee: events[eventId].fee,
          }),
        });
        const data = await response.json();
        const orderId = data.orderId;
        console.log(orderId);

        // initialize razprpay
        const options = {
          key: process.env.NEXT_PUBLIC_RPAY_KEY,
          amount: events[eventId].fee * 100,
          currency: "INR",
          name: "Momentum 2024",
          description: `Payment for ` + events[eventId].name,
          order_id: orderId,
          handler: async function (response) {
            setIsProcessing(true);
            console.log("razorpay_payment_id", response.razorpay_payment_id);
            console.log("razorpay_order_id", response.razorpay_order_id);
            console.log("razorpay_signature", response.razorpay_signature);
            try {
              const rsp = await fetch("/api/payment/verify", {
                method: "POST",
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  teamName: teamName,
                  teamMembers: members,
                  type: type,
                  eventName: events[eventId].name,
                  eventId: eventId,
                  userId: user._id,
                  userTag: user.tag,
                  referral: rId,
                  email: user.email,
                  fname: user.fname,
                  waLink: events[eventId].waLink,
                  amount: events[eventId].fee,
                }),
              });
              if (rsp.status == 200) {
                console.log("Payment verified!");
              }
              setIsProcessing(false);
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
            setIsProcessing(false);
          },
          prefill: {
            name: user.fname + " " + user.lname,
            email: user.email,
            contact: user.pNumber,
          },
          theme: {
            color: "#e75a54",
          },
        };

        let rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.log("Payment Failed", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const myToast = (msg) => {
    toast(msg, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };

  function validateDetails() {
    if (!teamName) {
      // toast
      myToast("Team name is required");
      return false;
    } else if (teamName.length < 3) {
      // toast
      myToast("Please enter a longer team name");
      return false;
    } else if (maxSize != 0 && minSize != 0) {
      // toast
      for (let i = 0; i < minSize; i++) {
        const member = members[i];
        if (member.name == "" || member.rollNum == "") {
          myToast("Please Enter atleast " + minSize + " members details!");
          return false;
        }
      }
    }
    return true;
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="text-white flex md:w-[90%] sm:space-x-5 justify-evenly ">
        <Image
          src={events[eventId].imgUrl}
          height={200}
          width={200}
          alt="p1"
          className="z-20 rounded-sm h-60 w-60 md:w-fit md:h-fit hidden sm:block"
        />
        <div className="flex flex-col space-y-2 w-full md:w-3/5">
          <div className="bg-[#030919ae] rounded-md p-3 sm:p-5 max-h-[480px] overflow-y-scroll">
            <EventForm
              rId={rId}
              setRId={setRId}
              members={members}
              setMembers={setMembers}
              teamName={teamName}
              setTeamName={setTeamName}
              type={type}
            />
          </div>
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="hover:bg-green-700 bg-green-600 px-6 py-2 rounded-md w-full"
          >
            {isProcessing ? "Processing..." : "Proceed To Pay!"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default EventFormWrapper;
