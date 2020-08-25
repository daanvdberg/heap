import * as mongoose from 'mongoose';

const connectionURL = 'mongodb://127.0.0.1:27017/heap';

mongoose.connect(connectionURL, {
	useNewUrlParser: true,
	useCreateIndex: true
});


// (error, client) => {
// 	if (error) throw error;
//
// 	const db = client.db(databaseName);
//
// 	db.collection('books').insertOne({
// 		title: 'Ship of Magic',
// 		author: 'Robin Hobb',
// 		collection: 'The Liveship Traders',
// 		image: ''
// 	}, (error, result) => {
// 		if (error) {
// 			return console.log('Error adding book');
// 		}
//
// 		console.log(result.ops);
// 	})
// }
