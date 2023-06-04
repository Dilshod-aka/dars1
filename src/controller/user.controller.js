import userModel from '../model/user.model.js'

const getUser = async (req, res) => {
    try{
        const users = await userModel.getAllUser();
        res.status(200).json({status: 200, message: 'success', data: users})
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (req, res) => {
    try{
        const user = await userModel.getUserById(req.params);
        if(!user) {
          return  res.status(404).json({status: 404, message: 'user not found', data: null})
        }
        return res.status(200).json({status: 200, message: 'success', data: user});
    } catch(error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try{
        const users = await userModel.createUser(req.body);
        res.status(200).json({status: 200, message: 'success', data: users})
    } catch (error) {
        console.log(error)
    }
}

const putUser = async (req, res) => {
    try{
        const users = await userModel.updateUser(req.params, req.body);
        res.status(200).json({status: 200, message: 'success', data: users})
    } catch (error) {
        console.log(error)
    }
};

const deleteUser = async (req, res) => {
    try{
        const user = await userModel.deleteUser(req.params);
        res.status(200).json({status: 200, message: 'success', data: user})
    } catch (error) {
        console.log(error)
    }
};



export  default {
    getUser, getUserById, createUser, putUser, deleteUser
}