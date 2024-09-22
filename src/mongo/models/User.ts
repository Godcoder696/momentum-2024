const mongoose = require('mongoose');

const userModel= mongoose.Schema(
    {
        name:{
            type: String,
            isRequired: true
        },
        email:{
            type: String,
            isRequired: true,
            unique: true
        },
        collegeName:{
            type: String
        },
        fname:{
            type: String
        },
        lname:{
            type: String
        },
        createdAt:{
            type: Date,
            default: Date.now()
        },
        modifiedAt:{
            type: Date,
            default: Date.now()
        },
        role:{
            type: "String",
            default: "participant"
        },
        tag:{
            type: String
        },
        pNumber:{
            type: Number
        },
        events:[
            {
                type: String
            },
        ],
        userVerified:{
            type: Boolean,
            default: false
        }
    }
)

const Users= mongoose.models.Users || mongoose.model("Users",userModel)
module.exports= Users;
