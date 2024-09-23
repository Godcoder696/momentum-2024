const mongoose = require('mongoose');

const userModel= mongoose.Schema(
    {
        email:{
            type: String,
            isRequired: true,
            unique: true
        },
        collegeName:{
            type: String,
            default: ""
        },
        fname:{
            type: String,
            default: ""
        },
        lname:{
            type: String,
            default: ""
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
        },
        address:{
            type: String
        },
        dob:{
            type: String
        },
        gender:{
            type:String,
            default: "male"
        },
        year:{
            type: String
        }
    }
)

const Users= mongoose.models.Users || mongoose.model("Users",userModel)
module.exports= Users;
