var addRouting = require('./routers/galleryRouter.js'),
	express = require('express')

module.exports = function(app) {
	var galleryRouter = express.Router()

	addRouting(galleryRouter)

	app.use('/api/gallery',galleryRouter)
}