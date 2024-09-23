import { NextResponse } from "next/server";
import createUser from '../../../lib/db/methods/createUser';
import updateUser from '../../../lib/db/methods/updateUser';

export async function POST(req){
    const params= await req.json();
    console.log("user created: ",params);
    
    try {
        const res= await createUser(params);
        return NextResponse.json({data: res});
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"error", errMsg: error});
    }
}

export async function PUT(req){
    const params= await req.json();
    console.log("PUT request: ",params);
    try {
        const res= await updateUser(params);
        return NextResponse.json({data:res});
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"error",errMsg: error});
    }
}