const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        throw new Error('Please input all the required fields');
    }

    const doesUserExist = await User.findOne({ email });
    if (doesUserExist) {
        res.status(400);
        throw new Error("user already exist");
    }

    const newUser = await User.create({
        name,
        email,
        password,
        pic
    });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            pic: newUser.pic,
            token: generateToken(newUser._id)
        })
    } else {
        res.status(400);
        throw new Error("Failed to create user");
    }

})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // if(user)
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error("Invalid Email address or password, please try again")
    }
})

module.exports = { registerUser, authUser };