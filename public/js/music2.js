var socket = io.connect();

var major = new Tone.CtrlMarkov({
  "A": [{"value": "A", "probability": 0.21},
        {"value": "B", "probability": 0.23},
        {"value": "C", "probability": 0.21},
        {"value": "D", "probability": 0.1},
        {"value": "E", "probability": 0.1},
        {"value": "F", "probability": 0.1},
        {"value": "G", "probability": 0.05}],
  "B": [{"value": "A", "probability": 0.11},
        {"value": "B", "probability": 0.15},
        {"value": "C", "probability": 0.46},
        {"value": "D", "probability": 0.07},
        {"value": "E", "probability": 0.07},
        {"value": "F", "probability": 0.07},
        {"value": "G", "probability": 0.07}],
    "C": [{"value": "A", "probability": 0.1},
        {"value": "B", "probability": 0.15},
        {"value": "C", "probability": 0.25},
        {"value": "D", "probability": 0.20},
            {"value": "E", "probability": 0.1},
            {"value": "F", "probability": 0.1},
        {"value": "G", "probability": 0.1}],
    "D": [{"value": "A", "probability": 0.09},
           {"value": "B", "probability": 0.09},
           {"value": "C", "probability": 0.25},
       {"value": "D", "probability": 0.20},
       {"value": "E", "probability": 0.1},
       {"value": "F", "probability": 0.1},
       {"value": "G", "probability": 0.1}],
  "E": [{"value": "A", "probability": 0.08},
          {"value": "B", "probability": 0.08},
            {"value": "C", "probability": 0.12},
        {"value": "D", "probability": 0.20},
        {"value": "E", "probability": 0.20},
        {"value": "F", "probability": 0.20},
        {"value": "G", "probability": 0.12}],
  "F": [{"value": "A", "probability": 0.11},
        {"value": "B", "probability": 0.07},
        {"value": "C", "probability": 0.11},
        {"value": "D", "probability": 0.11},
        {"value": "E", "probability": 0.15},
        {"value": "F", "probability": 0.20},
        {"value": "G", "probability": 0.25}],
  "G": [{"value": "A", "probability": 0.05},
        {"value": "B", "probability": 0.11},
        {"value": "C", "probability": 0.11},
        {"value": "D", "probability": 0.11},
        {"value": "E", "probability": 0.11},
        {"value": "F", "probability": 0.26},
        {"value": "G", "probability": 0.25}]
});

var minor = new Tone.CtrlMarkov({
  "Ab": [{"value": "Ab", "probability": 0.21},
        {"value": "Bb", "probability": 0.23},
        {"value": "C", "probability": 0.21},
        {"value": "D", "probability": 0.1},
        {"value": "Eb", "probability": 0.1},
        {"value": "F", "probability": 0.1},
        {"value": "G", "probability": 0.05}],
  "Bb": [{"value": "Ab", "probability": 0.11},
        {"value": "Bb", "probability": 0.15},
        {"value": "C", "probability": 0.46},
        {"value": "D", "probability": 0.07},
        {"value": "Eb", "probability": 0.07},
        {"value": "F", "probability": 0.07},
        {"value": "G", "probability": 0.07}],
    "C": [{"value": "Ab", "probability": 0.1},
        {"value": "Bb", "probability": 0.15},
        {"value": "C", "probability": 0.25},
        {"value": "D", "probability": 0.20},
            {"value": "Eb", "probability": 0.1},
            {"value": "F", "probability": 0.1},
        {"value": "G", "probability": 0.1}],
    "D": [{"value": "Ab", "probability": 0.09},
           {"value": "Bb", "probability": 0.09},
           {"value": "C", "probability": 0.25},
       {"value": "D", "probability": 0.20},
       {"value": "Eb", "probability": 0.1},
       {"value": "F", "probability": 0.1},
       {"value": "G", "probability": 0.1}],
  "Eb": [{"value": "Ab", "probability": 0.08},
          {"value": "Bb", "probability": 0.08},
            {"value": "C", "probability": 0.12},
        {"value": "D", "probability": 0.20},
        {"value": "Eb", "probability": 0.20},
        {"value": "F", "probability": 0.20},
        {"value": "G", "probability": 0.12}],
  "F": [{"value": "Ab", "probability": 0.11},
        {"value": "Bb", "probability": 0.07},
        {"value": "C", "probability": 0.11},
        {"value": "D", "probability": 0.11},
        {"value": "Eb", "probability": 0.15},
        {"value": "F", "probability": 0.20},
        {"value": "G", "probability": 0.25}],
  "G": [{"value": "Ab", "probability": 0.05},
        {"value": "Bb", "probability": 0.11},
        {"value": "C", "probability": 0.11},
        {"value": "D", "probability": 0.11},
        {"value": "Eb", "probability": 0.11},
        {"value": "F", "probability": 0.26},
        {"value": "G", "probability": 0.25}]
});

var low_octave = "2";
var octave = "3";
var high_octave = "4";

var eighth_notes = [];

var quarter_notes = [];

var half_notes = [];

var synth = new Tone.Synth().toMaster();
var synth2 = new Tone.Synth().toMaster();
var synth3 = new Tone.Synth().toMaster();

var eighth_loop = new Tone.Loop(function(time) {
  //triggered every eighth note.
  if (eighth_notes.length != 0) {
    synth.triggerAttack(eighth_notes.pop());
  } else {
    synth.triggerRelease();
  }
  console.log(eighth_notes.length+quarter_notes.length+half_notes.length)
}, "8n").start(0);

var quarter_loop = new Tone.Loop(function(time) {
  //triggered every eighth note.
  if (quarter_notes.length != 0) {
    synth2.triggerAttack(quarter_notes.pop());
  } else {
    synth2.triggerRelease();
  }
}, "4n").start(0);

var half_loop = new Tone.Loop(function(time) {
  //triggered every eighth note.
  if (half_notes.length != 0) {
    synth3.triggerAttack(half_notes.pop());
  } else {
    synth3.triggerRelease();
  }
}, "2n").start(0);

Tone.Transport.start();

socket.on('tweet', function (data) {
  console.log(data.tone);
  generate_song(data);
  $("#empty").remove();
  $("#tweets").prepend(
    '<li class="list-group-item">' +
      '<div class="post">' +
        '<div class="post-heading">' +
          '<div class="pull-left image">' +
            '<img src="'+data.tweet.user.profile_image_url+'" class="img-circle avatar" alt="user profile image">' +
          '</div>' +
          '<div class="pull-left meta">' +
            '<div class="title h5">' +
              '<a href="https://twitter.com/'+data.tweet.user.screen_name+'"><b>'+data.tweet.user.name +' (@'+data.tweet.user.screen_name+')</b></a>' +
            '</div>' +
            '<h6 class="text-muted time">'+data.tweet.created_at+'</h6>' +
          '</div>' +
        '</div>' +
        '<div class="post-description">' +
          '<p>'+data.tweet.text+'</p>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
});

function generate_song(data) {
  var character_count = data.tweet.text.length;


  for (var i = 0; i < 8; i++) {
    eighth_notes.push(major.next()+high_octave);
  }
  for (var i = 0; i < 4; i++) {
    quarter_notes.push(major.next()+octave);
  }
  for (var i = 0; i < 2; i++) {
    half_notes.push(major.next()+low_octave);
  }
}

/*
var test = Tone.Transport.scheduleOnce(function() {
  var melody_eighth = eighth_notes.pop();
  var melody_quarter = quarter_notes.pop();
  var melody_half = half_notes.pop();

  var seq = new Tone.Sequence(function(time, note) {
      synth3.triggerAttackRelease(note);
  }, melody_eighth, "8n");
  seq.loop = false;

  var seq2 = new Tone.Sequence(function(time, note) {
      synth2.triggerAttackRelease(note);
  }, melody_quarter, "4n");
  seq2.loop = false;
  

  var seq3 = new Tone.Sequence(function(time, note) {
      synth3.triggerAttackRelease(note);
  }, melody_half, "2n");
  seq3.loop = false;

  seq.start(0);
  seq2.start(0);
  seq3.start(0);

}, 0);

/*
var eighth_notes = [];
var quarter_notes = [];
var half_notes = [];

/*
// get notes
for (var x = 0; x < 16; x++) {
    var note = minor.next();
    eighth_notes.push(note+high_octave);
}
// get notes
for (var x = 0; x < 8; x++) {
    var note = minor.next();
    quarter_notes.push(note+octave);
}
for (var x = 0; x < 4; x++) {
    var note = minor.next();
    half_notes.push(note+low_octave);
}

var synth = new Tone.Synth().toMaster();
var synth2 = new Tone.Synth().toMaster();
var synth3 = new Tone.Synth().toMaster();

var seq = new Tone.Sequence(function(time, note){
    synth3.triggerAttackRelease(note);
}, eighth_notes, "8n").start(0);

var seq2 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note);
}, quarter_notes, "4n").start(0);

var seq3 = new Tone.Sequence(function(time, note){
    synth2.triggerAttackRelease(note);
}, half_notes, "2n").start(0);

Tone.Transport.bpm.value = 80;
Tone.Transport.start();
*/