const axios = require('axios').default;
const get = require('lodash').get;
const Book = require('../models/book');

module.exports = function(app) {

	app.get('/api/book/search', (req, res) => {
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
		axios.get(`${process.env.GOOGLE_BOOKS_URL}/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}&q=${query}&printType=books&langRestrict=en`)
			.then(function (response) {
				console.log(response.data.items[0]);
				// handle success
				const result = get(response, 'data.items', []).map((i) => ({
					bookID: i.id,
					etag: i.etag,
					title: i.volumeInfo.title,
					subtitle: i.volumeInfo.subtitle,
					description: i.volumeInfo.description,
					author: get(i, 'volumeInfo.authors[0]', ''),
					authors: i.volumeInfo.authors,
					publisher: i.volumeInfo.publisher,
					publishDate: i.volumeInfo.publishedDate,
					pageCount: i.volumeInfo.pageCount,
					categories: i.volumeInfo.categories,
					images: i.volumeInfo.imageLinks,
					rating: i.volumeInfo.averageRating,
					ratingCount: i.volumeInfo.ratingsCount
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

	app.post('/api/book', (req, res) => {
		const book = new Book(req.body)

		book.save().then(() => {
			res.status(201).send(book)
		}).catch((e) => {
			res.status(400).send(e)
		});
	});

}
