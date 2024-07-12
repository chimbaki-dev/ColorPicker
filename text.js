const colorPicker = document.getElementById('colorPicker');
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const hexInput = document.getElementById('hex');

function updateColorInfo(color) {
    hexInput.value = color;

    const rgb = hexToRgb(color);
    redInput.value = rgb.r;
    greenInput.value = rgb.g;
    blueInput.value = rgb.b;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

colorPicker.addEventListener('input', (event) => {
    updateColorInfo(event.target.value);
});

// Initialize with the default color
updateColorInfo(colorPicker.value);
