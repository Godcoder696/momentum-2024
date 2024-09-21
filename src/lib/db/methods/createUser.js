import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';

const createUser= async ()=>{
    await dbConnect();

    const user= new User({
        name: "lakshay",
        email: "lakshay21csu342@ncuindia.edu",
        collegeName: "The Northcap University",
        fname: "Lakshay",
        lname: "Yadav",
        tag: "12345",
        pNumber: "9650368568",
    });

    await user.save();

    return "user created";
}

export default createUser