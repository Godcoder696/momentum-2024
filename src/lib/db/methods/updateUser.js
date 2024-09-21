import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';

const updateUser= async ()=>{
    await dbConnect();

    const updateUser= await User.findOneAndUpdate(
        {
            fname: "Lakshay"
        },
        {
            lname: "kumar"
        }
    )

    console.log(updateUser);
    
    return "user updated";
}

export default updateUser