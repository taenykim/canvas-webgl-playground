(function () {
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 500;

  const canvas = document.getElementById("canvas3");
  const ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = "./images/taeeun.JPG";

  img.onload = function () {
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      canvas.height,
    );
    img.style.display = "none";
  };

  const color = document.getElementById("color");
  function pick(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    const rgba =
      "rgba(" +
      data[0] +
      ", " +
      data[1] +
      ", " +
      data[2] +
      ", " +
      data[3] / 255 +
      ")";
    color.style.background = rgba;
    color.textContent = rgba;
  }
  canvas.addEventListener("mousemove", pick);
})();
