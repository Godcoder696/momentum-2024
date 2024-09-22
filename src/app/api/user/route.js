import { NextRequest, NextResponse } from "next/server";
import createUser from '../../../lib/db/methods/createUser';
import updateUser from '../../../lib/db/methods/updateUser';

export async function POST(req){
    // const msg= NextRequest.msg;
    
    const params= await req.json();
    try {
        const res= await createUser(params);
        return NextResponse.json({msg:"Hello from post", response: res});
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({msg:"error", errMsg: error});
    }
}

export async function PUT(req){
    const params= await req.json();
    try {
        const res= await updateUser(params);
        return NextResponse.json({msg:"Hello from put",response: res});
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"error",errMsg: error});
    }
}