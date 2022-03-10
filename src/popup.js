import { getUser, getEmotion } from "../utils/user.js";
import { CANT_FIND_USER, COMPLETE } from "../constants/interaction.js";

const $registerButton = document.querySelector(".registerButton");
const $errorMessage = document.querySelector(".errorMessage");
const $confirmMessage = document.querySelector(".confirmMessage");

$registerButton.addEventListener("click", (e) => {
  chrome.identity.getAuthToken({ interactive: true }, async (token) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
      );

      const data = await res.json();
      const user = await getUser(data.email);
      const userEmotion = await getEmotion(user.id, user.accessToken);

      localStorage.setItem("emotion", userEmotion);
    } catch (err) {
      $errorMessage.textContent = CANT_FIND_USER;
    }
  });

  $confirmMessage.textContent = COMPLETE;
});
