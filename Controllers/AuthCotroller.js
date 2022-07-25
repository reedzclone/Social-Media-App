import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";


//Registering a new user
export const registerUser = async(req, res) => {
    //Rrevieving the data from the user
    const {username, password, firstname, lastname} = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt) 

    //Mapping the data into the usermodel
    const newUser = new UserModel({username, password: hashedPass, firstname, lastname})

    try {
        await newUser. save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    //After this connect it to the authRoute
}

// Login User
export const loginUser = async(req, res) => {
    const {username, password} = req.body;

    try {
        const user = await UserModel.findOne({username: username});

        if(user) {
            const validity = await bcrypt.compare(password, user.password)

            validity ? res.status(200).json(user) : res.status(400).json("Wrong Password")
        }
        //if user doesnt exist
        else {
            res.status(404).json("User does not exist")
        }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}