import Wheel from 'wheel-of-balance/js';

 var config = {};

    config.radius = 200;
    config.levels = 10;
    config.fontSize = 25;

    // Function to update the config based on user input
    function updateConfig() {
        const numSections = document.getElementById("numSections").value;
        const sectionNames = document.getElementById("sectionNames").value.split(",");

        config.segments = [];

        for (let i = 0; i < numSections; i++) {
            config.segments.push({
                color: getContrastColor(i, numSections), // Random color for each section
                text: sectionNames[i] || `Section ${i + 1}`, // Use provided name or default
                level: config.levels
            });
        }

        // Reinitialize the wheel with the new config
        wheel = new Wheel(canvas, config);
        wheel.clear();
        wheel.draw();
    }

    function getContrastColor(index, total) {
        // Use chroma.js to generate colors with good contrast
        const hue = (360 / total) * index; // Spread hues evenly
        return chroma.hsl(hue, 0.8, 0.6).hex(); // Adjust saturation and lightness for distinct colors
    }

    let canvas = document.getElementById("canvas");

    var wheel;
    updateConfig();

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', function (e) {
        wheel.clear();
    });

    const downloadButton = document.getElementById("download");
    downloadButton.addEventListener('click', function (e) {
        wheel.download();
    });

    const updateConfigButton = document.getElementById("updateConfig");
    updateConfigButton.addEventListener('click', function (e) {
        updateConfig();
    });

    const numSections = document.getElementById("numSections");
    numSections.addEventListener('change', function (e) {
        updateConfig();
    });
