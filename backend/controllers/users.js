import userModel from '../models/user.js'

export const fetchUsers = async(req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
};

export const fetchUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await userModel.findById(id);
        if(!user){
            return res.status(404).json({message: 'User Not Found'});
        }

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
};

export const addUsers = async(req,res) => {
    const user = req.body;
    const newUser = new userModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
};

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const userUpdates = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, userUpdates, {new: true});

    if(!updatedUser){
        return res.status(404).json({message: 'user Not Found'});
    }

    res.json(updatedUser);
   } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server Error'});
   }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({message: 'User Not Found'})
        }

        res.json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
};