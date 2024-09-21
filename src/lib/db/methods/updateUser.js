import dbConnect from "../../methods/mongodb"


const updateUser= async ()=>{
    await dbConnect();
}

export default updateUser