import {fetchAll} from "../utils/postgres.js";


const getAllUser = async () => {
    try{
        const users = await fetchAll('SELECT * FROM users WHERE deleted_at is null')
        return users;
    } catch ( error) { 
        console.log(error)
    }
}

const getUserById = async ({userId}) => {
    try{
        const user = await fetchAll('SELECT * FROM users WHERE user_id = $1', [userId]);
        return user;
    } catch ( error) { 
        console.log(error)
    }
}

const createUser = async ({username}) => {
    try{
        const user = await fetchAll('INSERT INTO users (username) VALUES ($1) RETURNING *', [username]);
        return user;
    } catch (error) {
        console.log(error)
    }
} 

const updateUser = async ({userId}, {username }) => {
    try{
        const user = await fetchAll(
            `
            UPDATE 
            users
             SET username = $2, 
             updated_at = current_timestamp
            WHERE user_id = $1
            RETURNING *
            `,
            [userId, username]
        );
        return user;
    } catch (error) {
        console.log(error)
    }
} 

const deleteUser = async ({userId}) => {
    try{
        const user = await fetchAll(
            `
            UPDATE 
            users
             SET 
              deleted_at = current_timestamp
              WHERE user_id = $1
            RETURNING *
            `,
            [userId]
        );
        return user;
    } catch (error) {
        console.log(error)
    }
} 

export default {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}