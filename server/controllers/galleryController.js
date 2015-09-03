var pieces = require('../models/pieceModel.js')

module.exports = {
	rate: function(req, res) {
		var id = req.body.id
		var rating = req.body.rating
		pieces.update(id,rating)
		console.log(pieces.update(id)[0])

		res.status(200).send('Successfully updated '+ id +'.')
	},

	fetch: function(req, res) {
		var beginning = +req.query.start
		var fetched = pieces.find(beginning)
		console.log('fetched',fetched[0])

		res.status(200).send({fetched:fetched})
	}
}