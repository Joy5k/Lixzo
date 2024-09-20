document.addEventListener("DOMContentLoaded", () => {
    const windowElement = document.getElementById("window");
    const object = document.getElementById("object");
    const zoomInput = document.getElementById("zoom");
    const moveXInput = document.getElementById("move_x");
    const moveYInput = document.getElementById("move_y");

    
    let zoom = 1; 
    let translateX = 0; 
    let translateY = 0;

    // Function to update object transform
    function imagePositionHandler() {
        object.style.transform = `scale(${zoom}) translate(${translateX * 100}%, ${translateY * 100}%)`;
    }

    // Event listener for zoom input
    zoomInput.addEventListener("input", () => {
        zoom = zoomInput.value;
        // Update the size label (25% to 200%)
        zoomInput.previousElementSibling.querySelector("div:nth-child(2)").textContent = `${Math.round(zoom * 100)}%`;
        imagePositionHandler();
    });

    // Event listener for move X (horizontal movement)
    moveXInput.addEventListener("input", () => {
        translateX = moveXInput.value;
        // Update the left-right percentage labels
        moveXInput.previousElementSibling.querySelector("div:nth-child(2)").textContent = `${Math.round(translateX * -100)}%`; // Left label
        moveXInput.previousElementSibling.querySelector("div:nth-child(3)").textContent = `${Math.round(translateX * 100)}%`; // Right label
        imagePositionHandler();
    });

    // Event listener for move Y (vertical movement)
    moveYInput.addEventListener("input", () => {
        translateY = moveYInput.value;
        // Update the up-down percentage labels
        moveYInput.previousElementSibling.querySelector("div:nth-child(2)").textContent = `${Math.round(translateY * -100)}%`; // Up label
        moveYInput.previousElementSibling.querySelector("div:nth-child(3)").textContent = `${Math.round(translateY * 100)}%`; // Down label
        imagePositionHandler();
    });

    // Initialize the transform when the page loads
    imagePositionHandler();
});
