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
app.use('/static', express.static(__dirname + '/node_modules'));
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


var stream = twitter.stream('statuses/filter', { track: "#trump", language: 'en'});

stream.on('tweet', function (tweet) {
	tone_analyzer.tone({ text: tweet.text },
	function(err, tone) {
		if (err) {
  			console.log(err);
		} else {
			/*console.log(tweet.text+":");
			console.log("\tEmotions:");
  			console.log("\t\tAnger: "+Math.round(tone.document_tone.tone_categories[0].tones[0].score*100));
  			console.log("\t\tDisgust: "+Math.round(tone.document_tone.tone_categories[0].tones[1].score*100));
  			console.log("\t\tFear: "+Math.round(tone.document_tone.tone_categories[0].tones[2].score*100));
  			console.log("\t\tJoy: "+Math.round(tone.document_tone.tone_categories[0].tones[3].score*100));
  			console.log("\t\tSadness: "+Math.round(tone.document_tone.tone_categories[0].tones[4].score*100));
  			console.log("\tLanguage:");
  			console.log("\t\tAnalytical: "+Math.round(tone.document_tone.tone_categories[1].tones[0].score*100));
  			console.log("\t\tConfident: "+Math.round(tone.document_tone.tone_categories[1].tones[1].score*100));
  			console.log("\t\tTentative: "+Math.round(tone.document_tone.tone_categories[1].tones[2].score*100));
  			console.log("\tSocial:");
  			console.log("\t\tOpenness: "+Math.round(tone.document_tone.tone_categories[2].tones[0].score*100));
  			console.log("\t\tConscientiousness: "+Math.round(tone.document_tone.tone_categories[2].tones[1].score*100));
  			console.log("\t\tExtraversion: "+Math.round(tone.document_tone.tone_categories[2].tones[2].score*100));
  			console.log("\t\tAgreeableness: "+Math.round(tone.document_tone.tone_categories[2].tones[3].score*100));
  			console.log("\t\tEmotional Range: "+Math.round(tone.document_tone.tone_categories[2].tones[4].score*100));*/
  			io.emit('test', tweet.text);
		}
	});
});