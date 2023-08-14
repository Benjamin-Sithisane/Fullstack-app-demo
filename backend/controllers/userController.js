import asyncHandler from 'express-async-handler'

//@desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User'})
})

//@desc Register a new user/set token
// route POST /api/users/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User registered'})
})

//@desc Logout User/set token
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User logged out'})
})

//@desc Get User profile/set token
// route GET /api/users/logout
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User registered'})
})

//@desc Update User profile/set token
// route GET /api/users/logout
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User updated'})
})

export { 
        authUser,
        registerUser, 
        logoutUser,
        getUserProfile,
        updateUserProfile
    }