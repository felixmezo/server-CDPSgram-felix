/* 

Modelo de datos de canciones (photo)

photo_id: {
	name: nombre de la canción,
	url: url del fichero de audio
} 

*/

var photos_url = "http://photos.cdpsgram.es"

exports.photos = {
	1: {
		name: 'Wood',
		url: photos_url + '/photos/photo1.jpg'
	},
	2: {
		name: 'Desktop',
		url: photos_url + '/photos/photo2.jpg'
	},
	3: {
		name: 'Man',
		url: photos_url + '/photos/photo3.jpg'
	},
	4: {
		name: 'Woman',
		url: photos_url + '/photos/photo4.jpg'
	},
	5: {
		name: 'People',
		url: photos_url + '/photos/photo5.jpg'
	}
};