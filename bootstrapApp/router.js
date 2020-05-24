const auth = require('../route/api/auth');

module.exports = app => {
    app.use('/api/v1/auth', auth)
}