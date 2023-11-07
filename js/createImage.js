const canvas = document.getElementById("pixelCanvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clearButton");
const exportButton = document.getElementById("exportButton");

// Set canvas size
canvas.width = 400;
canvas.height = 400;

// Initialize drawing settings
context.lineWidth = 10;
context.lineCap = "round";
context.strokeStyle = "black";

let drawing = false;

// Event listeners for drawing
canvas.addEventListener("mousedown", () => {
    drawing = true;
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    context.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
});

// Clear button functionality
clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

// Export button functionality
exportButton.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("images/png");
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "pixel_art.png";
    a.click();
});
