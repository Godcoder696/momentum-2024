import dbConnect from "./mongodb"
import User from '../../../mongo/models/User';

export default async function newUserTicket(email, eventId){
    try{
        await dbConnect();

        // find user email and add the event id
        const user= await User.findOne({
            email: email
        })

        const {_id, events}= user;
        console.log(_id);
        
        if(events.includes(eventId)) return "event already added";

        events.push(eventId);
        console.log(events);
        
        await dbConnect();
        await User.findOneAndUpdate(
            {
                email: email
            },
            {
                events: events
            }
        )
    }
    catch(error){
        console.log(error);
        return "error occurred";
    }

    return "event added";
}