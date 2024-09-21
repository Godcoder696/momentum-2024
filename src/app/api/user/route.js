import { NextRequest, NextResponse } from "next/server";
import createUser from '../../../lib/db/methods/createUser';
import updateUser from '../../../lib/db/methods/updateUser';

export async function POST(req){
    // const msg= NextRequest.msg;
    try {
        const res= await createUser();
        return NextResponse.json({msg:"Hello from post", response: res});
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({msg:"error", errMsg: error});
    }
}

export async function GET(){
    try {
        return NextResponse.json({msg:"Hello from get"});
    } catch (error) {
        return NextResponse.json({msg:"error"});
    }
}

export async function PUT(){
    try {
        const res= await updateUser();
        return NextResponse.json({msg:"Hello from put",response: res});
    } catch (error) {
        return NextResponse.json({msg:"error"});
    }
}