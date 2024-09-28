"use client";
import Image from "next/image";
import React, { useState } from "react";
import EventForm from "./EventForm";
import Script from "next/script";

function EventFormWrapper({eventId}) {
  const ammount = 100;
  const [isProcessing, setIsProcessing] = useState(false);
  const handlePayment = async () => {
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
        description: "Test payment",
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
              }),
            });

            if (rsp.status == 200) {
              console.log("Payment verified!");
            }
            setIsProcessing(false);
          } catch (error) {
            console.log(error);
          }

          setIsProcessing(false);
        },
        prefill: {
          name: "Lakshay Yadav",
          email: "lionleo110@gmail.com",
          contact: "9650368568",
        },
        theme: {
          color: "#e75a54",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.open();
    } catch (error) {
      console.log("Payment Failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

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
            <EventForm />
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
    </>
  );
}

export default EventFormWrapper;
