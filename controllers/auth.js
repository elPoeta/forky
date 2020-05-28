const async = require('../middleware/async');
const isEmpty = require('../utils/isEmpty');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/user');

exports.register = async(async (req, res, next) => {
    const { name, alias, email, role, password, confirmPassword } = req.body;
    if (!isEmpty(password) || !isEmpty(confirmPassword) || password != confirmPassword) {
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
    res.status(200).json({
        succes: true,
        status: 200,
        data: user
    })
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
    console.log('user', user)
    if (password != user.password) {
        return next(new ErrorResponse("Invalid password", 401));
    }
    user.password = undefined;
    res.status(200).json({
        succes: true,
        status: 200,
        data: user
    })
});

exports.logout = async((req, res, next) => {
    res.status(200).json({
        succes: true,
        status: 200,
        data: { test: "ok" }
    })
});