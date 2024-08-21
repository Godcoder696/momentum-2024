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
        createdAt:{
            type: Date,
            default: Date.now()
        },
        modifiedAt:{
            type: Date,
        },
        role:{
            default: "particpant"
        },
        tag:{

        },
        campusAmbassador:{
            type: Object,
            default: {
                "applied": false,
                "count": 0,
            }
        },
        pNumber:{
            type: Number
        },
        events:[
            {
                type: Array,
            },
        ],
    }
)

const Users= mongoose.model("Users",userModel)
module.exports= Users;

export {};