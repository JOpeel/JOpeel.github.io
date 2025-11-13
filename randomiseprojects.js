
const projects = document.querySelectorAll('.project');

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

projects.forEach(project => {

    const rotation = getRandomValue(-4,4)

    const margin = getRandomValue(convertRemToPixels(1), convertRemToPixels(3))

    project.style.setProperty('--random-rotation', `${rotation}deg`);
    project.style.margin = `${margin}px`;

})