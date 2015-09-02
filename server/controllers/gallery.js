//small array of 50 objects representing different pieces
var allTheThings = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}].map(function(item,ind){
	return {id:ind,img:'',desc:'This is the description for item '+ ind +'.',rating:0}
})

console.log(allTheThings[0])

module.exports = {
	rate: function(req, res) {
		var id = req.body.id
		var rating = req.body.rating
		allTheThings[id].rating = rating

		res.status(200).send('Successfully updated '+ id +'.')
	},


	fetch: function(req, res) {
		var beginning = +req.query.start

		res.status(200).send({fetched:allTheThings.slice(beginning,beginning+5)})
	}
}