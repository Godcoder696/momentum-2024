import dbConnect from "./mongodb";
import Payments from '../../../mongo/models/Payments';
import Teams from '../../../mongo/models/Teams';
import { newUserTicket } from "./newUserTicket";

export async function addPayment(){
    try {
        await dbConnect();

        // Step 1: Add payment to payments schema
        const payment= new Payments({
            status: "success",
            eventName: "",
            amount: 100,
            team_name: "",
            userId: "",
            userTag: "",
            referral: ""
        })

        await payment.save();

        console.log(payment);

        // Step 2: If its a team then store it in team's schema
        if(team!=="Individual"){
            const team= new Teams({
                eventName: "",
                teamName: "" ,
                teamSize: "",
                teamLeader: {
                    name: "",
                    rollNum: ""
                },
                teamMembers: [
                    {
                        name: "",
                        rollNum: ""
                    }
                ]
            })

            await team.save();
            console.log();
        }

        // Step 3: Add event id to user's schema
        await newUserTicket(email, eventId);

        // Step 4: Send ticket mail
        await sendEmail("lionleo110@gmail.com", "Lakshay Yadav");

        return "success";

    } catch (error) {
        console.log(error);
        return "error";
    }    
}