import {NextRequest, NextResponse} from 'next/server';

export async function POST(req){
    try {
        console.log(req);
        return NextResponse.json({msg:"kuhkuae"},{status: 200})
    } catch (error) {
        console.log("Error creating order: ", error);
        return NextResponse.json({error: "Error"},{status: 500})
    }
}