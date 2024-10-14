import dbConnect from "./mongodb";
import Payment from '../../../mongo/models/Payment';
export default async function getAllPayment(){
    try{
        await dbConnect();

        const data= await Payment.find({}).populate("userId");
        
        const finalData= [];
        

        for (let i = 0; i < data.length; i++) {
            const payment = data[i];
            const refinedData= new Map();

            const id= payment.get("_id");
            const eventName= payment.get("eventName");
            const status= payment.get("status");
            const amount= payment.get("amount");
            const currency= payment.get("currency");
            const referral= payment.get("referral");
            const createdAt= payment.get("createdAt");
            const teamName= payment.get("team_name");
            const email= payment.get("userId")?.get("email");
            const college= payment.get("userId")?.get("collegeName");
            const fname= payment.get("userId")?.get("fname");
            const lname= payment.get("userId")?.get("lname");
            const userVerified= payment.get("userId")?.get("userVerified");
            const gender= payment.get("userId")?.get("gender");
            const address= payment.get("userId")?.get("address");
            const dob= payment.get("userId")?.get("dob");
            const phone= payment.get("userId")?.get("pNumber");
            const year= payment.get("userId")?.get("year");
            const tag= payment.get("userId")?.get("tag");

            refinedData["id"]=id;
            refinedData["event_name"]=eventName;
            refinedData["status"]=status;
            refinedData["amount"]=amount;
            refinedData["currency"]=currency;
            refinedData["referral"]=referral;
            refinedData["created_at"]=createdAt;
            refinedData["team_name"]=teamName;
            refinedData["email"]=email;
            refinedData["college"]=college;
            refinedData["fname"]=fname;
            refinedData["lname"]=lname;
            refinedData["user_verified"]=userVerified;
            refinedData["gender"]=gender;
            refinedData["address"]=address;
            refinedData["dob"]=dob;
            refinedData["phone"]=phone;
            refinedData["year"]=year;
            refinedData["user_tag"]=tag;

            finalData.push(refinedData);
        }
        
        return finalData;
        // return data;
    }
    catch(error){
        console.log(error);
        return "Unable to fetch registrations";
    }
}