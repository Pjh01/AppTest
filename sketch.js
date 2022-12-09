// var wave;
// var button;
// var playing = false;

// function setup() {
//   //createCanvas(displayWidth, displayHeight);
//   createCanvas(720, 256);
//   wave = new p5.Oscillator();
//   wave.setType('sine');
//   //wave.start();
//   wave.freq(440);   //Hz
//   wave.amp(0);      //볼륨

//   button = createButton('play/pause');
//   button.mousePressed(toggle);
// }

// function draw() {
//   //background(220);
// }

// function toggle() {
//   if(!playing){
//     wave.start();
//     wave.amp(0.5, 1); //0.5크기의 소리, 1초간 감소하며 끝
//     playing = true;
//   }else{
//     wave.amp(0, 1);
//     playing = false;
//   }
// }

/////

// let r, g, b;
// function setup(){
//   createCanvas(displayWidth, displayHeight);
//   r = random(50, 255);
//   g = random(0, 200);
//   b = random(50, 255);
// }

// function draw() {
//   background(r, g, b);
//   console.log('draw');
// }

// function deviceMoved(){
//   // r = map(accelerationX, -90, 90, 100, 175);
//   // g = map(accelerationY, -90, 90, 100, 200);
//   // b = map(accelerationZ, -90, 90, 100, 200);
//   r = accelerationX*122;
//   g = accelerationY*122;
//   b = accelerationZ*122;
// }

/////

var wave;
var button;
var playing = false;
var ampValue = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  //createCanvas(720, 256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.start();
  //wave.freq(440);   //Hz
  wave.amp(0);      //볼륨

  button = createButton('play/pause');
  button.mousePressed(toggle);
}

function draw() {
  background(220);
  wave.freq(ampValue);
}

function toggle() {
  if(!playing){
    wave.start();
    wave.amp(0.3, 1); //0.5크기의 소리, 1초간 감소하며 끝
    playing = true;
  }else{
    wave.amp(0, 1);
    playing = false;
  }
}

function deviceMoved(){
  ampValue=accelerationX*1000;
  background(255,255,255);
  Text(accelerationX, 10, 10);
}

/////

// function setup(){
//   createCanvas(displayWidth, displayHeight);
// }

// function draw(){
//  clear();
//  let display = touches.length + 'touches';
//  text(display, 5, 10);
// }