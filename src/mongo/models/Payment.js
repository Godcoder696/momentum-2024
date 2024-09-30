
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
        referral: {
            type: String,
            default: "none"
        },
        createdAt:{
            type: Date,
            default: Date.now()
        },
        team_name: {
            type: String,
            default: "Individual"
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        userTag: {
            type: String
        }
    }
)

const Payments= mongoose.models.Payments || mongoose.model("Payments", paymentModel);
module.exports= Payments;

// export { };
