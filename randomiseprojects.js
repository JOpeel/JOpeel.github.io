
const projects = document.querySelectorAll('.project');

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

let i = 0;

if(sessionStorage.getItem('randomised') === 'true'){
    i=0
    projects.forEach(project => {
        project.style.setProperty('--random-rotation', `${sessionStorage.getItem(i)}deg`);
        i+=1
        project.style.margin = `${sessionStorage.getItem(i)}px`;
        i+=1
    })
} else {
    i=0
    projects.forEach(project => {

        const rotation = getRandomValue(-4,4)
        sessionStorage.setItem(i, rotation);

        i+=1

        const margin = getRandomValue(convertRemToPixels(1), convertRemToPixels(3))
        sessionStorage.setItem(i, margin);

        project.style.setProperty('--random-rotation', `${rotation}deg`);
        project.style.margin = `${margin}px`;

        i+=1;

    })
    sessionStorage.setItem('randomised', 'true');
}

