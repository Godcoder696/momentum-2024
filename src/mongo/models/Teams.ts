const mongoose = require('mongoose');

const teamsModel= mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true
        },
        teamSize: {
            type: Number,
            required: true,
        },
        teamLeader: {
            type: String,
            required: true
        },
        teamMembers:[
            
        ],
    }
)

const Teams= mongoose.models.Teams || mongoose.model("Teams",teamsModel)
module.exports= Teams;