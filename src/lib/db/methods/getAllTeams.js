import dbConnect from "./mongodb";
import Team from '../../../mongo/models/Team';
export default async function getAllTeams(){
    try{
        await dbConnect();

        const teams= await Team.find({});

        return teams;
    }
    catch(error){
        console.log(error);
        return "Unable to fetch teams";
    }
}