import { NextRequest, NextResponse } from "next/server";
import updateUser, { newUserTicket } from '../../../lib/db/methods/newUserTicket';

export async function PUT(req){
    const {email, eventId}= await req.json();
    
    try{
        const res= await newUserTicket(email, eventId);
        return NextResponse.json({msg: "Hey",params: res}, {status: 200})
    }
    catch(error){
        return NextResponse.json({msg: "error",errMsg: error},{status: 500})
    }
}

export async function GET(){

}