import dbConnect from "./mongodb";
import User from '../../../mongo/models/User';
import Team from '../../../mongo/models/Team';
import Payment from '../../../mongo/models/Payment';
export default async function getOverview(){
    try{
        await dbConnect();

        const users= await User.find({});
        const payments= await Payment.find({});
        const teams= await Team.find({});

        return {
            users: users.length,
            payments: payments.length,
            teams: teams.length
        };
    }
    catch(error){
        console.log(error);
        return "Unable to fetch registrations";
    }
}