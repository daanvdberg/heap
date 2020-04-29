const express = require('express');
const path = require('path');
const axios = require('axios').default;
const get = require('lodash').get;

const app = express();
const port = process.env.PORT || 5000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// create a GET route
app.get('/api/book', (req, res) => {
	if (!req.query.title && !req.query.author) {
		res.send({ express: 'Book search term missing' });
	}
	let query = '';
	if (req.query.title) {
		query = `title=${encodeURIComponent(req.query.title)}`;
	}
	if (req.query.author) {
		query = `author=${encodeURIComponent(req.query.author)}`;
	}
	axios.get(`https://openlibrary.org/search.json?${query}`)
		.then(function (response) {
			// handle success
			const result = get(response, 'data.docs', []).map((i) => ({
				id: i.key,
				title: i.title,
				author: get(i, 'author_name[0]', ''),
				image: i.cover_edition_key
			}));
			res.send(result);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
			res.status(error.status).send(new Error(error.data));
		})
		.finally(function () {
			// always executed
		});
});