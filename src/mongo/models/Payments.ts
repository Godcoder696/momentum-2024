
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
        t_verify_user: {
            type: Boolean,
            default: false
        },
        t_verify_user_at: {
            type: Date,
            default: Date.now()
        },
        t_verify_rpay: {
            type: Boolean,
            default: false
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
