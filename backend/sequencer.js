#!/usr/bin/node
var StepSequencer = require('step-sequencer');
 
// Instantiate a new StepSequencer object
var tempo = 120;
var division = 4;
var sequence = [0, 1, 2, 3];
var stepSequencer = new StepSequencer(tempo, division, sequence);
 
// The StepSequencer emits the number of
// the step when that step is to be played
stepSequencer.on('0', function (step) {
    console.log(step);
})
.on('1', function (step) {
    console.log(step);
})
.on('2', function (step) {
    console.log(step);
})
.on('3', function (step) {
    console.log(step);
});
 
// Begin playing the sequence
stepSequencer.play();