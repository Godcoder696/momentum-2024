import createUser from '../methods/createUser';
import mongodb from '../methods/mongodb';
import updateUser from '../methods/updateUser';

const DB = {
    createUser,
    mongodb,
    updateUser,
}

export default DB;