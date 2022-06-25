"use strict";

// set button click sound
const audio = new Audio();
audio.src = "/src/assets/click.mp3";

const btnSound = document.querySelector(".btn-sound");

btnSound.addEventListener("click", () => {
  audio.play();
  console.log("clicked!");
});
/*********************************************************************/
