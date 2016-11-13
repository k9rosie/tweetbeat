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
var notes = [];
var notes2 = [];
var notes3 = [];

// get notes
for (var x = 0; x < 32; x++) {
    var note = minor.next();
    notes.push(note+low_octave);
}
// get notes
for (var x = 0; x < 16; x++) {
    var note = minor.next();
    notes2.push(note+octave);
}
for (var x = 0; x < 16; x++) {
    var note = minor.next();
    notes3.push(note+high_octave);
}
var synth = new Tone.Synth().toMaster();
var synth2 = new Tone.Synth().toMaster();
var synth3 = new Tone.Synth().toMaster();

var seq = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note);
}, notes, "4n").start(0);

var seq2 = new Tone.Sequence(function(time, note){
    synth2.triggerAttackRelease(note);
}, notes2, "2n").start(0);

var seq3 = new Tone.Sequence(function(time, note){
    synth3.triggerAttackRelease(note);
}, notes3, "8n").start(0);
Tone.Transport.bpm.value = 80;
Tone.Transport.start();