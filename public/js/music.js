var wordCount = 0;
var isHappy = false;
var isSad = true;
var isAngry = false;
var isAfraid = false;

var bpm = 80;
var OctaveLow = "4";
var OctaveMel = "3";

if (isHappy) {
	OctaveLow = "4";
	OctaveMel = "5";
	bpm = 80;
} else if(isSad) {
	OctaveLow = "2";
	OctaveMel = "3";
	bpm = 50;
} else if(isAngry) {
	OctaveLow = "2";
	OctaveMel = "4";
	bpm = 100;
} else if(isAfraid) {
	OctaveLow = "1";
	OctaveMel =  "3";
	bpm = 75;
}

Tone.Transport.bpm.value = bpm;

function CGenerator() {
	var melNotes = [];
	//var Octave = "4";
	for (var i = 0; i < 4; i++) {
		rand = Math.floor((Math.random() * 10) + 1);

		if (rand > 5) {
			melNotes.push("C" + OctaveMel);
		} else if(rand > 3) {
			melNotes.push("E" + OctaveMel);
		} else if(rand > 1) {
			melNotes.push("F" + OctaveMel);
		} else {
			melNotes.push("G" + OctaveMel);
		}
	}
	
	return melNotes;
}


function GGenerator() {
	var melNotes = [];
	//var Octave = "4";
	for (var i = 0; i < 4; i++) {
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand > 5) {
			melNotes.push("G" + OctaveMel);
		} else if(rand > 3) {
			melNotes.push("B" + OctaveMel);
		} else if(rand > 1) {
			melNotes.push("D" + OctaveMel);
		} else {
			melNotes.push("C" + OctaveMel);
		}
	}

	return melNotes;
}

function FGenerator() {
	var melNotes = [];
	//var Octave = "4";
	for (var i = 0; i < 4; i++) {
		rand = Math.floor((Math.random() * 10) + 1);
		if(rand > 5){
			melNotes.push("F" + OctaveMel);
		}
		else if(rand > 3){
			melNotes.push("A" + OctaveMel);
		}
		else if(rand > 1){
			melNotes.push("C" + OctaveMel);
		}
		else{
			melNotes.push("B" + OctaveMel);
		}
	}
	return melNotes;
}

function amGenerator() {
	var melNotes = [];
	//var Octave = "4";
	for (var i = 0; i < 4; i++) {
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand > 7) {
			melNotes.push("A" + OctaveMel);
		} else if(rand > 4) {
			melNotes.push("C" + OctaveMel);
		} else if(rand > 2) {
			melNotes.push("E" + OctaveMel);
		} else {
			melNotes.push("D" + OctaveMel);
		}
	}	
	return melNotes;
}

function dmGenerator() {
	var melNotes = [];
	//var Octave = "4";
	for (var i = 0; i < 4; i++) {
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand > 5) {
			melNotes.push("D" + OctaveMel);
		} else if(rand > 3) {
			melNotes.push("F" + OctaveMel);
		} else if(rand > 1) {
			melNotes.push("A" + OctaveMel);
		} else {
			melNotes.push("G" + OctaveMel);
		}
	}
	return melNotes;
}

function emGenerator() {
	var melNotes = [];
	//var Octave = "4";
	for (var i = 0; i < 4; i++) {
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand > 5) {
			melNotes.push("D" + OctaveMel);
		} else if(rand > 3) {
			melNotes.push("F" + OctaveMel);
		} else if(rand > 1) {
			melNotes.push("A" + OctaveMel);
		} else {
			melNotes.push("G" + OctaveMel);
		}
	}
	return melNotes;
}


var Octave = "3";
var ccChord = ["C" + OctaveLow, "E" + OctaveLow, "G" + OctaveLow];
var cfChord = ["F" + OctaveLow, "A" + OctaveLow, "G" + OctaveLow];
var cgChord = ["G" + OctaveLow, "B" + OctaveLow, "D" + OctaveLow];
var camChord = ["A" + Octave, "C" + Octave, "E" + Octave];
var cemChord = ["E" + OctaveLow, "G" + OctaveLow, "B" + OctaveLow];
//Code all chords
//Key C
var c4 = [ccChord, cfChord, cgChord, camChord, cemChord];
//Key C
Octave = "3";
var lowccChord = ["C" + OctaveLow, "E" + OctaveLow, "G" + OctaveLow];
var lowcfChord = ["F" + OctaveLow, "A" + OctaveLow, "G" + OctaveLow];
var lowcgChord = ["G" + OctaveLow, "B" + OctaveLow, "D" + OctaveLow];
var lowcamChord = ["A" + OctaveLow, "C" + OctaveLow, "E" + OctaveLow];
var lowcemChord = ["E" + OctaveLow, "G" + OctaveLow, "B" + OctaveLow];
var amcChord = ["C" + OctaveLow, "E" + OctaveLow, "G" + OctaveLow];
var amfChord = ["F" + OctaveLow, "A" + OctaveLow, "G" + OctaveLow];
var amgChord = ["G" + OctaveLow, "B" + OctaveLow, "D" + OctaveLow]; 
var amChord = ["A" + OctaveLow, "C" + OctaveLow, "E" + OctaveLow];
var amemChord = ["E" + OctaveLow, "G" + OctaveLow, "B" + OctaveLow];
var amdmChord = ["D" + OctaveLow, "F" + OctaveLow, "A" + OctaveLow];
var high = [];
var low = [];
var mel = [];

var majmin = true;
var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
var vol = new Tone.Volume(-12);
synth.chain(vol, Tone.Master);
//low synth
var synth1 = new Tone.PluckSynth().toMaster();
var vol = new Tone.Volume(-12);
synth1.chain(vol, Tone.Master);

Tone.Transport.stop();
var minor = [];
var minorMel = [];

for (var i = 0; i < 2; i++) {
	minor.push(amChord);
	minorMel.push(amGenerator());

	rand = Math.floor((Math.random() * 10) + 1);
	if (rand % 2 == 0) {
		minor.push(amdmChord);
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand % 2 == 0) {
			minor.push(amemChord);
		} else {
			minor.push(amgChord);
		}
	} else {
		minor.push(amfChord);
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand%2 == 0) {
			minor.push(amcChord);
		}
		minor.push(amgChord);
	}

	mel.push(CGenerator());

	//2nd sequence
	low.push(lowccChord);
	rand = Math.floor((Math.random() * 10) + 1);
	if (rand % 2 == 1) {
		low.push(cfChord);
		mel.push(FGenerator());
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand % 2 == 0) {
			low.push(lowcgChord);
			mel.push(GGenerator());
		}
	} else {
		low.push(lowcgChord);
		mel.push(GGenerator());
	}

	low.push(lowcamChord);
	mel.push(amGenerator());
	rand = Math.floor((Math.random() * 10) + 1);
	if (rand % 3 == 0) {
		low.push(lowcfChord);
		mel.push(FGenerator());
		low.push(lowcgChord);
		mel.push(GGenerator());
	} else if (rand % 3 == 1) {
		low.push(lowcemChord);
		mel.push(emGenerator());
		low.push(lowcfChord);
		mel.push(FGenerator());
	} else {
		low.push(lowcgChord);
		mel.push(GGenerator());
		low.push(lowcfChord);
		mel.push(FGenerator());
		low.push(lowcgChord);
		mel.push(GGenerator());
	}
}


// SECOND TIME

var minor2 = [];
var minorMel2 = [];
var low2 = [];
var mel2 = [];

for (var i = 0; i < 2; i++) {
	minor2.push(amChord);
	minorMel2.push(amGenerator());

	rand = Math.floor((Math.random() * 10) + 1);
	if (rand % 2 == 0) {
		minor2.push(amdmChord);
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand % 2 == 0) {
			minor2.push(amemChord);
		} else {
			minor2.push(amgChord);
		}
	} else {
		minor2.push(amfChord);
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand%2 == 0) {
			minor2.push(amcChord);
		}
		minor2.push(amgChord);
	}

	mel2.push(CGenerator());

	//2nd sequence
	low2.push(lowccChord);
	rand = Math.floor((Math.random() * 10) + 1);
	if (rand % 2 == 1) {
		low2.push(cfChord);
		mel2.push(FGenerator());
		rand = Math.floor((Math.random() * 10) + 1);
		if (rand % 2 == 0) {
			low2.push(lowcgChord);
			mel2.push(GGenerator());
		}
	} else {
		low2.push(lowcgChord);
		mel2.push(GGenerator());
	}
	low2.push(lowcamChord);
	mel2.push(amGenerator());
	rand = Math.floor((Math.random() * 10) + 1);
	if (rand % 3 == 0) {
		low2.push(lowcfChord);
		mel2.push(FGenerator());
		low2.push(lowcgChord);
		mel2.push(GGenerator());
	} else if (rand % 3 == 1) {
		low2.push(lowcemChord);
		mel2.push(emGenerator());
		low2.push(lowcfChord);
		mel2.push(FGenerator());
	} else {
		low2.push(lowcgChord);
		mel2.push(GGenerator());
		low2.push(lowcfChord);
		mel2.push(FGenerator());
		low2.push(lowcgChord);
		mel2.push(GGenerator());
	}
}

var LowFinal = [];
var lowlength = low.length;
var low2length = low2.length;

for (var i = 0; i < lowlength; i++) {
	LowFinal.push(low[i]);
}

for (var i = 0; i < low2length; i++) {
	LowFinal.push(low2[i]);
}

for (var i = 0; i < low2length; i++) {
	LowFinal.push(low2[i]);
}

for (var i = 0; i < lowlength; i++) {
	LowFinal.push(low[i]);
}

melFinal = [];
var mellength = mel.length;
var mel2length = mel2.length;

for (var i = 0; i < mellength; i++) {
	melFinal.push(mel[i]);
}

for (var i = 0; i < mel2length; i++) {
	melFinal.push(mel2[i]);
}

for (var i = 0; i < low2length; i++) {
	melFinal.push(mel2[i]);
}

for (var i = 0; i < lowlength; i++) {
	melFinal.push(mel[i]);
}

if (majmin == true) {
	var seq = new Tone.Sequence(function(time, note) {
		console.log(note);
		//straight quater notes
		synth.triggerAttackRelease(note);
	}, LowFinal, "4n").start(0);


	var seq = new Tone.Sequence(function(time, note) {
		console.log(note);
		//straight quater notes
			synth.triggerAttackRelease(note);
		}, melFinal, "4n").start(0);

	Tone.Transport.start();
} else {
	var seq = new Tone.Sequence(function(time, note) {
		console.log(note);
		//straight quater notes
		synth.triggerAttackRelease(note, "1n", time);
	}, minor, "1n").start(0);

	var seq = new Tone.Sequence(function(time, note) {
		console.log(note);
		//straight quater notes
		synth.triggerAttackRelease(note, "4n", time);
	}, minorMel, "4n").start(0);

	Tone.Transport.start();
}



		//Tone.Transport.bpm.value=10;
		//Tone.Transport.start();
			/*
			//create a synth and connect it to the master output (your speakers)
			var synth = new Tone.Synth().toMaster();
			//play a middle 'C' for the duration of an 8th note
			synth.triggerAttackRelease("C4", "8n");
			Tone.Transport.start();
			*/