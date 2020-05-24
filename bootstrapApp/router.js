const auth = require('../route/api/auth');
const errorHandler = require('../middleware/errorHandler');
module.exports = app => {
    app.use('/api/v1/auth', auth)
    app.use(errorHandler);
}