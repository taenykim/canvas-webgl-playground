(function () {
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 500;

  const canvas = document.getElementById("canvas4");
  const ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const img = new Image();
  img.src = "./images/taeeun.JPG";
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    draw(this);
  };

  function draw(img) {
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
    let imageData;
    let data;

    const invert = function () {
      ctx.filter = "none";
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
      imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i]; // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const grayscale = function () {
      ctx.filter = "none";
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
      imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const blur = function () {
      ctx.filter = "none";
      ctx.filter = "blur(4px)";
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
    };

    const original = function () {
      ctx.filter = "none";
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
    };

    const invertButton = document.getElementById("invert-button");
    invertButton.addEventListener("click", invert);
    const grayscaleButton = document.getElementById("grayscale-button");
    grayscaleButton.addEventListener("click", grayscale);
    const blurButton = document.getElementById("blur-button");
    blurButton.addEventListener("click", blur);
    const originalButton = document.getElementById("original-button");
    originalButton.addEventListener("click", original);
  }
})();
