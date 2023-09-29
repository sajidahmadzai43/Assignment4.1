// Variables to store intervals for moving objects
let birdInterval, planeInterval, memeInterval;

// Audios for start and stop actions
let startAudio = new Audio('start.wav');
let stopAudio = new Audio('stop.wav');

// Function to handle the start button click
function start() {
  // Playing the start audio
  startAudio.play();

  // Setting up intervals for moving objects
  birdInterval = setInterval(moveBird, 10);
  planeInterval = setInterval(movePlane, 10);
  memeInterval = setInterval(moveMeme, 10);

  // Disabling the start button and enabling the stop button
  document.getElementById('startBtn').disabled = true;
  document.getElementById('stopBtn').disabled = false;
}

// Function to handle the stop button click
function stop() {
  // Playing the stop audio
  stopAudio.play();

  // Clearing intervals to stop moving objects
  clearInterval(birdInterval);
  clearInterval(planeInterval);
  clearInterval(memeInterval);

  // Disabling the stop button and enabling the start button
  document.getElementById('startBtn').disabled = false;
  document.getElementById('stopBtn').disabled = true;
}

// Function to move the bird in horizontal direction
function moveBird() {
  let bird = document.getElementById('bird');
  let birdRect = bird.getBoundingClientRect();
  bird.style.left = (birdRect.left - 1) + 'px';

  if (birdRect.left + birdRect.width < 0) {
    bird.style.left = window.innerWidth + 'px';
  }
}

// Function to move the plane in horizontal direction
function movePlane() {
  let plane = document.getElementById('plane');
  let planeRect = plane.getBoundingClientRect();
  plane.style.left = (planeRect.left + 1) + 'px';

  if (planeRect.left > window.innerWidth) {
    plane.style.left = (0 - planeRect.width) + 'px';
  }
}

// Function to move the meme in circular pattern
function moveMeme() {
  let meme = document.getElementById('meme');
  let memeRect = meme.getBoundingClientRect();
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  let time = new Date();
  meme.style.left = (centerX + Math.sin(time.getTime() / 1000) * 100) - (memeRect.width / 2) + 'px';
  meme.style.top = (centerY + Math.cos(time.getTime() / 1000) * 100) - (memeRect.height / 2) + 'px';
}
