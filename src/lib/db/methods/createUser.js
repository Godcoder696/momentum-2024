import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';

const createUser= async (userData)=>{
    await dbConnect();
    
    const {email,name,fname,lname,tag,collegeName,events,pNumber}= userData;

    const userField= await User.findOne({email: email})
    
    if(userField) return userField;

    const user= new User({
        name: name,
        email: email,
        fname: fname,
        lname: lname,
        tag: tag,
        collegeName: collegeName,
        events: events,
        pNumber: pNumber
    });

    await user.save();
    console.log(user);
    
    return user;
}

export default createUser