import dbConnect from "./mongodb";
import User from '../../../mongo/models/User';
export default async function getAllUsers(){
    try{
        await dbConnect();

        const payments= await User.find({});

        return payments;
    }
    catch(error){
        console.log(error);
        return "Unable to fetch registrations";
    }
}