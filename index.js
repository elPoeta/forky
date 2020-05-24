const express = require('express');
const app = express();
const { PORT } = require('./config/key');
app.listen(PORT, error => {
  if (error) {
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});