const mongoose = require('mongoose');

const adminModel= mongoose.Schema(
    {
        name: {
            type: String,
            default: "Admin"
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
)


const Admin= mongoose.model("Admin",adminModel);
module.exports= Admin;

export {};