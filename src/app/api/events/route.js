import { NextRequest, NextResponse } from "next/server";


export async function POST(req){
    try{
        const params= req.body;
        console.log(req);
        console.log(params);
        return NextResponse.json({msg: "Hey",params: params}, {status: 200})
    }
    catch(error){
        return NextResponse.json({msg: "error",params: params},{status: 500})
    }
}

export async function GET(){

}