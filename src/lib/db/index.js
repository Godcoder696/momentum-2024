import createUser from '../methods/createUser';
import mongodb from '../methods/mongodb';
import updateUser from '../methods/updateUser'
import getUserDetail from '../methods/getUserDetail'

const DB = {
    createUser,
    mongodb,
    updateUser,
    getUserDetail
}

export default DB;