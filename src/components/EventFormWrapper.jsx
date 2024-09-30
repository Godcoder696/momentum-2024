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
  const ammount = 100;
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAppContext();
  const [rId, setRId] = useState(undefined);
  const [members, setMembers] = useState([
    { name: "", rollNum: "" },
    { name: "", rollNum: "" },
    { name: "", rollNum: "" },
    { name: "", rollNum: "" },
  ]);
  const [minSize, setMinSize] = useState(4);
  const [teamName, setTeamName] = useState(undefined);

  useEffect(() => {
    const team = [];
    for (let i = 0; i < minSize; i++) {
      team.push({ name: "", rollNum: "" });
    }
    setMembers(team);
  }, [minSize]);
  const handlePayment = async () => {
    const isValid = validateDetails();
    if (isValid) {
      setIsProcessing(true);
      try {
        // create order
        const response = await fetch("/api/payment/createOrderId", {
          method: "POST",
        });
        const data = await response.json();
        const orderId = data.orderId;
        console.log(orderId);

        // initialize razprpay
        const options = {
          key: process.env.NEXT_PUBLIC_RPAY_KEY,
          amount: ammount,
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
                  teamName: "",
                  eventName: events[eventId].name,
                  eventId: eventId,
                  userId: user._id,
                  userTag: user.tag,
                  referral: rId,
                  email: user.email,
                  fname: user.fname,
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
    } else if (!members) {
      // toast
      myToast("Members can't be null");
      return false;
    }
    return true;
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="text-white flex w-[80%] space-x-5">
        <Image
          src="/event-poster.png"
          height={200}
          width={200}
          alt="p1"
          className="z-20 rounded-sm h-72"
        />
        <div className="flex flex-col space-y-2 items-end w-full">
          <div className="bg-[#030919ae] rounded-md p-5 h-[480px] overflow-y-scroll w-full">
            <EventForm
              rId={rId}
              setRId={setRId}
              members={members}
              setMembers={setMembers}
              teamName={teamName}
              setTeamName={setTeamName}
            />
          </div>
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="hover:bg-green-700 bg-green-600 px-6 py-2 rounded-md"
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
