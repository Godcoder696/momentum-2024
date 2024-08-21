const mongoose = require('mongoose');

const connectDB= async ()=>{
    try {
        const connectToDB= await mongoose.connect();
        console.log("Connecteed to DB Successfully: "+connectToDB.connection.host);
        
    } catch (error) {
        console.log("Error Connecting to DB!: "+error);
    }
}

module.exports= connectDB

export {};