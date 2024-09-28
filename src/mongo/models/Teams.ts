const mongoose = require('mongoose');

const teamsModel= mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true
        },
        teamName: {
            type: String,
            required: true
        },
        teamSize: {
            type: Number,
            required: true,
        },
        teamLeader: {
            type: Object,
            required: true
        },
        teamMembers:[
            {
                type: Object
            }
        ],
    }
)

const Teams= mongoose.models.Teams || mongoose.model("Teams",teamsModel)
module.exports= Teams;