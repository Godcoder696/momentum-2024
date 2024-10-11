import { NextResponse } from 'next/server';
import getAllTeams from '../../../../lib/db/methods/getAllTeams';

export async function GET(){
    try{
        const teams= await getAllTeams();
        return NextResponse.json({teams: teams},{status: 200});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({msg:"Unable to fetch records!"},{status: 500});
    }
}