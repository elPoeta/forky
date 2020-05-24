const async = require('../middleware/async');

exports.login = async((req, res, next) => {
    res.status(200).json({
        succes: true,
        status: 200,
        data: { test: "ok" }
    })
});