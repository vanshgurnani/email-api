const express = require('express');
const emailRouter = require('./router/emailRouter');

const app = express();

app.use(express.json());

// Use the email router
app.use('/api/email', emailRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
