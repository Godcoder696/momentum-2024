import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';

const createUser= async (userData)=>{
    await dbConnect();
    
    const {email}= userData;

    const userField= await User.findOne({email: email})
    
    if(userField) return userField;

    const user= new User({
        email: email
    });

    await user.save();
    console.log(user);
    
    return user;
}

export default createUser