const express = require('express');
const emailRouter = require('./router/emailRouter');
const locationRouter = require('./router/locationRouter');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Use the email router
app.use('/api/email', emailRouter);
app.use('/api/locate' , locationRouter)

app.get('/' , (req,res) => {
  res.send('Welcome to the API');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
