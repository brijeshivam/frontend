var canvas;
var ctx;
var color = "#00ffff";
var strokeWidth;
var slider;
var colorWell;

window.addEventListener("load", () => {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");

  //Resizing the canvas
  canvas.height = window.innerHeight - 100;
  canvas.width = window.innerWidth - 100;
  //setting stroke width
  slider = document.getElementById("myRange");
  strokeWidth = slider.value;
  slider.oninput = function () {
    strokeWidth = this.value;
  };

  //variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  //EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  colorWell = document.getElementById("picker");
  colorWell.addEventListener("change", updateAll, false);
  colorWell.addEventListener("input", updateAll, false);
  colorWell.select();

  function updateAll(event) {
    color = event.target.value;
  }
});
//Clear Canvas
function getClear() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
}

//Setting Color
function setWhite() {
  color = "#ffffff";
}
