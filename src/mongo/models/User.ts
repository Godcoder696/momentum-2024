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
            default: "participant"
        },
        tag:{
            type: String,
            unique: true,
            isRequired: true
        },
        pNumber:{
            type: Number
        },
        events:[
            {
                type: Array,
            },
        ],
        useVerified:{
            type: Boolean,
            default: false
        }
    }
)

const Users= mongoose.model("Users",userModel)
module.exports= Users;
