import { COLOR } from "../constants/emotion.js";

const emotion = localStorage.getItem("emotion");
const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const PI2 = Math.PI * 2;
const randomX = () => Math.random() * canvas.width;
const randomY = () => Math.random() * canvas.height;
const randomRadius = () => Math.random() * (maxRadius - minRadius) + minRadius;
const maxRadius = 900;
const minRadius = 500;
let radiusValue = 0.5;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function genCircles() {
  const circleArray = [];
  const randomNum = () => Math.floor(Math.random() * 5);

  for (let i = 0; i < 10; i++) {
    circleArray[i] = {
      x: randomX(),
      y: randomY(),
      r: randomRadius(),
      color: COLOR[emotion][randomNum()],
      vx: 5,
      vy: 5,
    };
  }

  return circleArray;
}

const circles = genCircles();

function createCircle() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < circles.length; i++) {
    circles[i].r = circles[i].r + radiusValue;

    if (circles[i].r >= maxRadius || circles[i].r <= minRadius) {
      radiusValue = radiusValue * -1;
    }

    if (circles[i].x > canvas.width || circles[i].x < 0) {
      circles[i].vx = -circles[i].vx;
    }
    if (circles[i].y > canvas.height || circles[i].y < 0) {
      circles[i].vy = -circles[i].vy;
    }

    circles[i].x = circles[i].x + circles[i].vx;
    circles[i].y = circles[i].y + circles[i].vy;

    context.beginPath();
    const radialGradient = context.createRadialGradient(
      circles[i].x,
      circles[i].y,
      circles[i].r * 0.01,
      circles[i].x,
      circles[i].y,
      circles[i].r
    );

    radialGradient.addColorStop(0, circles[i].color);
    radialGradient.addColorStop(1, circles[i].color + "00");
    context.arc(circles[i].x, circles[i].y, circles[i].r, 0, PI2, false);
    context.fillStyle = radialGradient;
    context.fill();
  }

  requestAnimationFrame(createCircle);
}

requestAnimationFrame(createCircle);
