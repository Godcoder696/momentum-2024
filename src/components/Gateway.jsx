"use client";
import Script from "next/script";
import { useState } from "react";

function Gateway() {
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
            console.log(rsp);
          } catch (error) {
            console.log(error);
          }
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
      console.log(rzp1);

      rzp1.open();
    } catch (error) {
      console.log("Payment Failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className=" h-full w-full">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button onClick={handlePayment} disabled={isProcessing}>
        {isProcessing ? "Processing" : "Pay Rs. 1"}
      </button>
    </div>
  );
}

export default Gateway;
