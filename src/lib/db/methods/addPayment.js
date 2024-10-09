import dbConnect from "./mongodb";
import Payment from '../../../mongo/models/Payment';
import Team from '../../../mongo/models/Team';
import newUserTicket from "./newUserTicket";
import sendEmail from '../../mail/index'

export default async function addPayment({teamName,eventName, eventId, userId, userTag, referral, email, fname, type, teamMembers, waLink,amount}){
    try {
        await dbConnect();

        // Step 1: Add payment to payments schema
        const payment= new Payment({
            status: "success",
            eventName: eventName,
            amount: amount,
            team_name: teamName,
            userId: userId,
            userTag: userTag,
            referral: referral
        })

        await payment.save();

        // console.log(payment);

        // Step 2: If its a team then store it in team's schema
        if(type!=="Solo"){
            await dbConnect();
            const team= new Team({
                eventName: eventName,
                teamName: teamName,
                teamMembers: teamMembers
            })

            await team.save();
        }

        // Step 3: Add event id to user's schema
        await dbConnect();
        await newUserTicket(email, eventId);

        // Step 4: Send ticket mail
        await sendEmail(email, fname, waLink, eventName);

        return "success";

    } catch (error) {
        console.log(error);
        return "error";
    }    
}