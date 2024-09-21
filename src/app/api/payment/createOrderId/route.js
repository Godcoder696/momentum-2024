import {NextRequest, NextResponse} from 'next/server';
import Razorpay from 'razorpay'
import shortid from 'shortid';

const razorpay= new Razorpay({
    key_id: process.env.RPAY_KEY,
    key_secret: process.env.RPAY_SECRET
})

export async function POST(NextRequest){
    try {
        
        const order= await razorpay.orders.create({
            amount: 100,
            currency: "INR",
            receipt: shortid.generate()
        })

        return NextResponse.json({orderId: order.id},{status: 200})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error creating order. :)"},{status: 500})
    }
}