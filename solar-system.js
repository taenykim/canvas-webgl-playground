const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const EARTH_RADIUS = 12;
const MOON_RADIUS = 3.5;

const EARTH_ORBIT_RADIUS = 105;
const MOON_ORBIT_RADIUS = 28.5;
const ANOTHER_PLANET_RADIUS = 10;

const EARTH_ORBIT_COLOR = "yellow";
const MOON_ORBIT_COLOR = "blue";
const ANOTHER_PLANET_ORBIT_COLOR = "red";

const SHADOW_COLOR = "rgba(0, 0, 0, 0.4)";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const sun = new Image();
const moon = new Image();
const earth = new Image();

init();

function init() {
  sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
  moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
  earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
  setInterval(draw, 100);
}

function draw() {
  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = SHADOW_COLOR;
  ctx.strokeStyle = EARTH_ORBIT_COLOR;
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);

  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(EARTH_ORBIT_RADIUS, 0);
  ctx.fillRect(0, -EARTH_RADIUS, 50, 2 * EARTH_RADIUS);
  ctx.drawImage(earth, -EARTH_RADIUS, -EARTH_RADIUS);

  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, MOON_ORBIT_RADIUS);

  ctx.beginPath();
  ctx.strokeStyle = ANOTHER_PLANET_ORBIT_COLOR;
  ctx.arc(0, 0, ANOTHER_PLANET_RADIUS, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.drawImage(moon, -MOON_RADIUS, -MOON_RADIUS);
  ctx.restore();

  ctx.beginPath();
  ctx.strokeStyle = MOON_ORBIT_COLOR;
  ctx.arc(0, 0, MOON_ORBIT_RADIUS, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    EARTH_ORBIT_RADIUS,
    0,
    Math.PI * 2,
    false,
  );
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, canvas.width, canvas.height);
}
