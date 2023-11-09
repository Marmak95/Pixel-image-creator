const canvas = document.getElementById("pixelCanvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clearButton");
const exportButton = document.getElementById("exportButton");

// Set canvas size
canvas.width = 500;
canvas.height = 500;

// Initialize drawing settings for pixel art
context.lineWidth = 1;
context.lineCap = "square";
context.strokeStyle = "black";

let drawing = false;

const pixelSize = 50; // Adjust this value to control the pixel size when drawing

// Event listeners for drawing
canvas.addEventListener("mousedown", () => {
    drawing = true;
    context.beginPath();
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    context.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    // Round coordinates to the nearest pixel grid
    const x = Math.floor((e.clientX - canvas.offsetLeft) / pixelSize) * pixelSize;
    const y = Math.floor((e.clientY - canvas.offsetTop) / pixelSize) * pixelSize;

    context.lineTo(x, y);
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
