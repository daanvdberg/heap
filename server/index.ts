import express from 'express';
import cors from 'cors';
import initAPI from './api';

require('dotenv').config();

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true
};

app.use(cors(corsOptions));

const port = process.env.PORT || 5000;
initAPI(app);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
