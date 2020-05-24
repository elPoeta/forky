const express = require('express');
const app = express();
const { PORT } = require('./config/keys');

require('./bootstrapApp/db')();
require('./bootstrapApp/parser')(app);
require('./bootstrapApp/router')(app);

const server = app.listen(PORT, error => {
  if (error) {
    console.log(`Error to start server ${error}`);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});