document.addEventListener("DOMContentLoaded", () => {
    // Get all the elements you want to apply this to
    const titles = document.querySelectorAll(".title");
    const lineHeight = 1;

    titles.forEach(title => {
        scaleTextToFit(title, lineHeight);
    });
});

function scaleTextToFit(title, lineHeight) {
    // Get the computed style of the element
    const style = window.getComputedStyle(title);

    // We use a small 'step' to reduce the font size
    const step = 0.5; // in pixels
    let currentFontSize = parseFloat(style.fontSize);

    title.style.maxHeight = 'none';
    title.style.overflow = 'visible';

    let targetMaxHeight = (currentFontSize * lineHeight) * 2;

    // Loop: if the content height is taller than our 2-line max...
    while (title.scrollHeight > (targetMaxHeight + 0.5) && currentFontSize > 8) { // 8px is a reasonable minimum
        // Reduce the font size
        currentFontSize -= step;
        title.style.fontSize = currentFontSize + "px";

        targetMaxHeight = (currentFontSize * lineHeight) * 2;
    }

    // Hide the overflow again
    title.style.maxHeight = targetMaxHeight + 'px';
    title.style.overflow = 'hidden';
}