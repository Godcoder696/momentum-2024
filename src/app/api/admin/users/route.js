import { NextResponse } from 'next/server';
import getAllUsers from '../../../../lib/db/methods/getAllUsers';

export async function GET(){
    try{
        const users= await getAllUsers();
        return NextResponse.json({allUsers: users},{status: 200});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({msg:"Unable to fetch records!"},{status: 500});
    }
}