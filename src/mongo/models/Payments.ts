const mongoose = require('mongoose');

const paymentModel= mongoose.Schema(
    {

    }
)

const Payments= mongoose.model("Payments", paymentModel);
module.exports= Payments;

export {};