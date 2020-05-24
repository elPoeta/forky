const express = require('express');
const app = express();
const { PORT } = require('./config/key');

require('./bootstrapApp/parser')(app);

app.listen(PORT, error => {
  if (error) {
    console.log(`Error to start server ${error}`);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});