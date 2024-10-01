import {NextRequest, NextResponse} from 'next/server';
import Razorpay from 'razorpay'
import shortid from 'shortid';

const razorpay= new Razorpay({
    key_id: process.env.RPAY_KEY,
    key_secret: process.env.RPAY_SECRET
})

export async function POST(req){
    try {
        const body= await req.json();
        
        const {fee}= body;
         
        const order= await razorpay.orders.create({
            amount: fee*100,
            currency: "INR",
            receipt: shortid.generate()
        })
        // console.log(order);
        
        return NextResponse.json({orderId: order.id},{status: 200})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error creating order. :)"},{status: 500})
    }
}