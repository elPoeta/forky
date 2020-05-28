const async = require('../middleware/async');
const isEmpty = require('../utils/isEmpty');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/user');

exports.register = async(async (req, res, next) => {
    const { name, alias, email, role, password, confirmPassword } = req.body;
    if (isEmpty(password) || isEmpty(confirmPassword) || password != confirmPassword) {
        return next(new ErrorResponse("password and confirm password not equals or empty", 404));
    }
    const user = new User({
        name,
        alias,
        email,
        role,
        password
    });
    await user.save();
    sendTokenResponse(user, 200, res);
});

exports.login = async(async (req, res, next) => {
    const { email, password } = req.body;
    if (isEmpty(email) || isEmpty(password)) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        return next(new ErrorResponse("Invalid email", 400));
    }
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
        return next(new ErrorResponse("Invalid password", 401));
    }
    user.password = undefined;
    sendTokenResponse(user, 200, res);
});

exports.logout = async((req, res, next) => {
    res.status(200).json({
        success: true,
        data: {}
    });
});

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode)
        .json({
            success: true,
            token
        });
};