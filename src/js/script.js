"use strict";

// set button click sound
const audio = new Audio();
audio.src = "/src/assets/click.mp3";

document.querySelector(".btnSound").addEventListener("click", () => {
  audio.play();
});
