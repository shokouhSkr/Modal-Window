"use strict";

// set button click sound
const audio = new Audio();
audio.src = "/src/assets/click.mp3";

const btnsSound = document.querySelectorAll(".btn-sound");

for (let i = 0; i < btnsSound.length; i++) {
  btnsSound[i].addEventListener("click", () => {
    audio.play();
    // console.log("clicked!");
  });
}

/*********************************************************************/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModaL = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// functions
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// show modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// hide modal by close button
btnCloseModaL.addEventListener("click", closeModal);

// hide modal by click on somewhere
overlay.addEventListener("click", closeModal);
