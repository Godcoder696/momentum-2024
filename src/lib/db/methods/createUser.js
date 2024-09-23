import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';

const createUser= async (userData)=>{
    await dbConnect();
    
    const {email,fname,lname,tag,collegeName,events,pNumber,dob,gender, address,year}= userData;

    console.log("create user:", userData);
    

    const userField= await User.findOne({email: email})
    
    if(userField) return userField;

    const user= new User({
        email: email,
        // fname: fname,
        // lname: lname,
        // tag: tag,
        // collegeName: collegeName,
        // events: events,
        // pNumber: pNumber,
        // dob: dob,
        // gender: gender,
        // address: address,
        // year: year
    });

    await user.save();
    console.log(user);
    
    return user;
}

export default createUser