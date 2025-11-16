document.addEventListener("DOMContentLoaded", () => {
    // Get all the elements you want to apply this to
    const titles = document.querySelectorAll(".title");
    const descriptions = document.querySelectorAll(".projectdescription");
    const lineHeight = 1;

    titles.forEach(title => {
        scaleTextToFit(2, title, lineHeight);
    });

    descriptions.forEach(description => {
        scaleTextToFit(3, description, lineHeight);
    });

});

function scaleTextToFit(linesNo, text, lineHeight) {
    // Get the computed style of the element
    const style = window.getComputedStyle(text);

    // We use a small 'step' to reduce the font size
    const step = 0.1; // in pixels
    let currentFontSize = parseFloat(style.fontSize);

    text.style.maxHeight = 'none';
    text.style.overflow = 'visible';

    let targetMaxHeight = (currentFontSize * lineHeight) * 2;

    // Loop: if the content height is taller than our 2-line max...
    while (text.scrollHeight > (targetMaxHeight + 0.5) && currentFontSize > 8) { // 8px is a reasonable minimum
        // Reduce the font size
        currentFontSize -= step;
        text.style.fontSize = currentFontSize + "px";

        targetMaxHeight = (currentFontSize * lineHeight) * linesNo;
    }

    // Hide the overflow again
    text.style.maxHeight = targetMaxHeight + 'px';
    text.style.overflow = 'hidden';
}