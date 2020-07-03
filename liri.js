var Spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios")
console.log(process.argv)
var command = process.argv[2]
var input = process.argv.slice(3).join(" ")

console.log(command)
console.log(input)

if (command === "concert-this") {
    console.log("this is the concert test")
    axios({

        url: "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp",
        method: "get"
    }).then(function (response) {

        console.log(response.data)

    })
} else if (command === "movie-this") {
    console.log("this is a movie test")

    axios({

        url: "http://www.omdbapi.com/?apikey=trilogy&t=" + input,

        method: "get"
    }).then(function (response) {

        console.log(response.data)

    })

} else if (command === "spotify-this-song") {
    console.log("this is a song test")

    spotify.search({
        type: 'track',
        query: input
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks);
    });
}