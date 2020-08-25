const BookAPIs = require('./book');

// Combine various API routes
module.exports = function(app) {
	BookAPIs(app);
}