import dbConnect from "./mongodb";
import Payment from '../../../mongo/models/Payment';
export default async function getAllPayment(){
    try{
        await dbConnect();

        const data= await Payment.find({}).populate("userId");

        const payments= data.allPayments;
        console.log(payments);
        
        return data;
    }
    catch(error){
        console.log(error);
        return "Unable to fetch registrations";
    }
}