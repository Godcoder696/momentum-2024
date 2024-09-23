import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';
import generateTag from '../../../utils/generateTag'

const updateUser= async (userData)=>{

    const {email,fname,lname,tag,collegeName,events,pNumber,_id,dob,gender, address,year}= userData;

    console.log("user updated: ",userData);

    await dbConnect();

    console.log("id: ",_id);
    
    const updateUser= await User.findOneAndUpdate(
        {
            email: email
        },
        {
            fname: fname,
            lname: lname,
            tag: await generateTag(userData),
            collegeName: collegeName,
            events: events,
            pNumber: pNumber,
            modifiedAt: Date.now(),
            address: address,
            dob: dob,
            gender: gender,
            year: year,
            userVerified: true
        }
    )

    console.log(updateUser);
    
    return "user updated";
}

export default updateUser 