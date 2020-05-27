const async = require('../middleware/async');
const isEmpty = require('../utils/isEmpty');

exports.register = async((req, res, next) => {
    const { name, alias, email, role, password } = req.body;

    res.status(200).json({
        succes: true,
        status: 200,
        data: { test: "ok" }
    })
});

exports.login = async((req, res, next) => {
    res.status(200).json({
        succes: true,
        status: 200,
        data: { test: "ok" }
    })
});

exports.logout = async((req, res, next) => {
    res.status(200).json({
        succes: true,
        status: 200,
        data: { test: "ok" }
    })
});