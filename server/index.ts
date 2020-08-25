const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
require('./api')(app);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});