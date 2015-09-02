var gallery = require('../controllers/gallery.js')

module.exports = function(app) {
	app.get('/',gallery.fetch)
	app.put('/',gallery.rate)
}