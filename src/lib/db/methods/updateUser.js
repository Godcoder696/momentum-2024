import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';
import generateTag from '../../../utils/generateTag'

const updateUser= async (userData)=>{

    const {email,fname,lname,tag,collegeName,events,pNumber}= userData;

    await dbConnect();


    const updateUser= await User.findOneAndUpdate(
        {
            email: email
        },
        {
            fname: fname,
            lname: lname,
            tag: tag || await generateTag(userData),
            collegeName: collegeName,
            events: events,
            pNumber: pNumber
        }
    )

    console.log(updateUser);
    
    return "user updated";
}

export default updateUser 