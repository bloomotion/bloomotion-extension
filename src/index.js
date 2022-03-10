import { FLOWERS } from "../constants/emotion.js";
import { NO_EMOTION, EXPRESS_YOUR_FEELINGS } from "../constants/interaction.js";

const $description = document.querySelector(".description");
const currentEmotion = localStorage.getItem("emotion");

$description.addEventListener("mouseover", (e) => {
  e.target.innerHTML = currentEmotion
    ? `${currentEmotion}<br />${FLOWERS[currentEmotion]}`
    : NO_EMOTION;
});

$description.addEventListener("mouseout", (e) => {
  e.target.textContent = EXPRESS_YOUR_FEELINGS;
});
