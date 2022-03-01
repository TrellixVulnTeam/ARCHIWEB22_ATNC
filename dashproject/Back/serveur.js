const express = require('express');
const cors = require('cors');

const app = express(), 
	port = 3080;

app.use(cors());

app.get("/Musiques", (req, res) => {
	res.json(
		[{
		"Titre" : "Macarena",
		"Album" : "Ipseite",
		"Artiste" : "Damso"},
		{
		"Titre" : "Megadose",
		"Album" : "Agartha",
		"Artiste" : "Vald"}
		]
	);
});

 //Connexion à spotify, récupération de l'access token
var SpotifyWebApi = require('spotify-web-api-node');

var clientId = 'd119537df82148ad80691b7349e6e31b',
  clientSecret = '46a5d2b6d4b24c8b8a917f0b48346109';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri : 'http://localhost:4200/callback/',
  scopes: [
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-read-currently-playing",
    "user-library-read",
    "user-library-modify"
  ]
});


// Retrieve an access token.

spotifyApi.clientCredentialsGrant().then(
	function(data) {
	console.log('The access token expires in ' + data.body['expires_in']);
	console.log('The access token is ' + data.body['access_token']);

	 // Save the access token so that it's used in future calls
	 spotifyApi.setAccessToken(data.body['access_token']);
	 spotifyApi.setRefreshToken(data.body['refresh_token']);
	 },
	 function(err) {
	   console.log('Something went wrong when retrieving an access token', err);
	 }
);


app.listen(port, () => {
	console.log('Server running on port 3080');
});

