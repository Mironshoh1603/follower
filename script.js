"use strict";
document.querySelector(".youtube").textContent = "0";
document.querySelector(".twitters").textContent = "0";
document.querySelector(".facebook").textContent = "0";
let i = 0,
  j = 0,
  k = 0;
let twiterInterval = setInterval(function () {
  k++;
  document.querySelector(".twitters").textContent = k;
  if (k == 12000) {
    clearInterval(twiterInterval);
  }
}, 2);
let youtubeInterval = setInterval(function () {
  i++;
  document.querySelector(".youtube").textContent = i;
  if (i == 5000) {
    clearInterval(youtubeInterval);
  }
}, 4.8);
let facebookInterval = setInterval(function () {
  j++;
  document.querySelector(".facebook").textContent = j;
  if (j == 7500) {
    clearInterval(facebookInterval);
  }
}, 3.2);
