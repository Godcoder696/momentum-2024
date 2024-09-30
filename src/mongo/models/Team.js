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
        teamMembers:[
            {
                type: Object
            }
        ],
    }
)

const Teams= mongoose.models.Teams || mongoose.model("Teams",teamsModel)
module.exports= Teams;