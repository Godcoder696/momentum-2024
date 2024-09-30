import {NextRequest, NextResponse} from 'next/server';
import crypto from 'crypto';
import addPayment from '../../../../lib/db/methods/addPayment';

export async function POST(req){
    try {
        const body= await req.json();
        console.log(body);
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature}= body;

        const pmntString= razorpay_order_id +"|" +razorpay_payment_id;
        const secret= process.env.RPAY_SECRET;

        const expectedSignature= crypto.createHmac('sha256', secret).update(pmntString.toString()).digest("hex");

        console.log("Expected Signature: ", expectedSignature);
        console.log("Received Signature: ", razorpay_signature);

        if(expectedSignature===razorpay_signature) {
            await addPayment(body);
            return NextResponse.json({msg:"verified"},{status: 200})
        }
        else return NextResponse.json({"msg":"unverified"},{status: 500})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error"},{status: 500})
    }
}