const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const INITIAL_SIZE = 700;

let painting = false;

canvas.width = INITIAL_SIZE;
canvas.height = INITIAL_SIZE;

ctx.fillStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function handleMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
