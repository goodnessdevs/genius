const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET;

const createToken = (_id) => {
    jwt.sign({ _id }, secretKey, { expiresIn: '3d' })
}

// get all user data
const getUsers = async (req, res) => {

    const users = await User.find({ }).sort({ createdAt: -1 });
  
    res.status(200).json(users);
};

const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);
        
        // create a token
        const token = createToken(user._id);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        // create a token
        const token = createToken(user._id);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getUsers, 
    signupUser,
    loginUser
}