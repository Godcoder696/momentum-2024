
const mongoose = require('mongoose');

const paymentModel= mongoose.Schema(
    {
        status: {
            type: String,
            isRequired: true,
            default: "failed"
        },
        eventName: {
            type: String,
        },
        amount: {
            type: Number
        },
        currency: {
            type: String,
            default: "INR"
        },
        createdAt:{
            type: Date,
            default: Date.now()
        },
        team_name: {
            type: String,
            default: "Single Player"
        },
        user: {
            type: String
        },
        userId: {
            type: String
        }
    }
)

const Payments= mongoose.model("Payments", paymentModel);
module.exports= Payments;

export { };
