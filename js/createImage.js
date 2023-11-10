const canvas = document.getElementById("pixelCanvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clearButton");
const exportButton = document.getElementById("exportButton");
const gridSizeSlider = document.getElementById("gridSizeSlider");
const gridSizeOutput = document.getElementById("gridSizeOutput");
const colorPicker = document.getElementById("colorPicker");

// Set canvas size
canvas.width = 500;
canvas.height = 500;

// Initialize drawing settings for pixel art
context.lineWidth = 1;
context.lineCap = "square";
context.strokeStyle = "black";
context.fillStyle = colorPicker.value; // Set the fill color initially

let drawing = false;

let pixelSize = 50; // Default pixel size

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

    const gridSize = parseInt(gridSizeSlider.value) || 1;
    pixelSize = gridSize;

    const x = Math.floor((e.clientX - canvas.offsetLeft) / pixelSize) * pixelSize;
    const y = Math.floor((e.clientY - canvas.offsetTop) / pixelSize) * pixelSize;

    context.fillStyle = colorPicker.value; // Update fill color
    context.fillRect(x, y, pixelSize, pixelSize);
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

// Color picker input event listener
colorPicker.addEventListener("input", () => {
    context.fillStyle = colorPicker.value; // Update fill color when the user selects a new color
});

// Grid size slider input event listener
gridSizeSlider.addEventListener("input", () => {
    const gridSize = parseInt(gridSizeSlider.value) || 1;
    pixelSize = gridSize;
    gridSizeOutput.textContent = gridSize; // Update the output element
});
