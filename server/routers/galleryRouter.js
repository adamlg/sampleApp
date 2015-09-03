var galleryController = require('../controllers/galleryController.js')

module.exports = function(app) {
	app.get('/',galleryController.fetch)
	app.put('/',galleryController.rate)
}