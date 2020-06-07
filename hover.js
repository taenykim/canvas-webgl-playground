(function () {
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 500;

  const INTERVAL = 10;
  const RECTANGLE_WIDTH = CANVAS_WIDTH - 2 * INTERVAL;
  const RECTANGLE_HEIGHT = 50;

  const DEFAULT_COLOR = "blue";
  const HOVERED_COLOR = "red";

  const canvas = document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  for (let i = 0; i < CANVAS_HEIGHT; i += RECTANGLE_HEIGHT + INTERVAL) {
    ctx.rect(INTERVAL, i + INTERVAL, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
    ctx.fillStyle = DEFAULT_COLOR;
    ctx.fill();
  }

  canvas.onmousemove = function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < CANVAS_HEIGHT; i += RECTANGLE_HEIGHT + INTERVAL) {
      ctx.beginPath();
      ctx.rect(INTERVAL, i + INTERVAL, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
      ctx.fillStyle = ctx.isPointInPath(x, y) ? HOVERED_COLOR : DEFAULT_COLOR;
      ctx.fill();
    }
  };
})();
