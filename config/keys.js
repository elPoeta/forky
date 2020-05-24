if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod.js');
} else if (process.env.NODE_ENV === 'test') {
  console.log('TEST ENV');
} else {
  module.exports = require('./keys_dev.js');
}
