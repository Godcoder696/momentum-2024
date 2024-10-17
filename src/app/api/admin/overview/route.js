import { NextResponse } from 'next/server';
import getOverview from '../../../../lib/db/methods/getOverview';

export async function POST(){
    try{
        const data= await getOverview()
        return NextResponse.json( data,{status: 200});
    }
    catch(error){
        console.log(error);
        return NextResponse.json({msg:"Unable to fetch records!"},{status: 500});
    }
}