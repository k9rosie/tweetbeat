var http = require('http');
var https = require('https');
var express = require('express');
var twit = require('twit');
var tone_analyzer_v3 = require('watson-developer-cloud/tone-analyzer/v3');
var socketio = require('socket.io');

var host = process.env.IP || "0.0.0.0";
var port = process.env.PORT || 8080;

var app = express();
var server = http.Server(app);
var io = socketio(server);

app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/bower_components'));

var twitter = new twit({
	consumer_key: process.env.TWITTER_API_KEY, 
	consumer_secret: process.env.TWITTER_API_SECRET, 
	access_token: process.env.TWITTER_ACCESS_TOKEN, 
	access_token_secret: process.env.TWITTER_ACCESS_SECRET 
});

var tone_analyzer = new tone_analyzer_v3({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version_date: '2016-05-19'
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/html/index.html');
});

server.listen(port, host, function() {
	console.log("Listening on 8080");
});


//var stream = twitter.stream('statuses/filter', { track: '#xanthe'});

var stream = twitter.stream('statuses/filter', { track: "#tweetbeet", language: "en" });

stream.on('tweet', function (tweet) {
	tone_analyzer.tone({ text: tweet.text },
	function(err, tone) {
		if (err) {
  			console.log(err);
		} else {
  			io.emit('tweet', {tweet:tweet, tone:tone});
		}
	});
});