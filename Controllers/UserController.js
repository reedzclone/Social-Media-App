import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

//Get a user
export const getUser =  async(req, res) => {
    const id = req.params.id;

    //checking if user exist
    try {
        const user = await UserModel.findById(id)
        if (user) {
            //to hide the password and get other info
            const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails)
        }
        else {
            res.status(404).json("user not found")
        }
        
    } catch (error) {
        res.send(500).json(error)
    }
    
}


//Update User
export const updateUser = async(req, res) => {
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus, password} = req.body

    if(id === currentUserId || currentUserAdminStatus) {
        try {

            if(password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("Acess denied! You are only allowed to update your own profile")
    }
}

//Delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus, password} = req.body;
    
    if (currentUserId === id || currentUserAdminStatus) {
        try {
            
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User Deleted");

        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("You are unauthorized to perform this operation");
    }
}

// Follow a User
export const followUser = async (req, res) => {
    const id = req.params.id;

    const {currentUserId} = req.body;

    if (currentUserId === id) {
        
        res.status(403).json("Action Invalid");
    }
    else {
        try {
            //User to be Followed
            const followUser = await UserModel.findById(id);
            // User who is doing the following
            const followingUser = await UserModel.findById(currentUserId);

            if (!followUser.followers.includes(currentUserId)) {

                await followUser.updateOne({$push: {followers: currentUserId}});
                await followingUser.updateOne({$push: {following: id}});

                res.status(200).json("user followed");
            }
            else {
                res.status(403).json("You Already Followed this User");
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
}


// UnFollow a User
export const unFollowUser = async (req, res) => {
    const id = req.params.id;

    const {currentUserId} = req.body;

    if (currentUserId === id) {
        
        res.status(403).json("Action Invalid");
    }
    else {
        try {
            //User to be Followed
            const followUser = await UserModel.findById(id);
            // User who is doing the following
            const followingUser = await UserModel.findById(currentUserId);

            if (followUser.followers.includes(currentUserId)) {

                await followUser.updateOne({$pull: {followers: currentUserId}});
                await followingUser.updateOne({$pull: {following: id}});

                res.status(200).json("user Unfollowed");
            }
            else {
                res.status(403).json("You Already UnFollowed this User");
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
}