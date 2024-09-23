document.addEventListener("DOMContentLoaded", () => {
    const object = document.getElementById("object");
    const zoomInput = document.getElementById("zoom");
    const moveXInput = document.getElementById("move_x");
    const moveYInput = document.getElementById("move_y");

    
    let zoom = 0.5; //default value 
    let translateX = 0; 
    let translateY = 0;

    function imagePositionHandler() {
        object.style.transform = `scale(${zoom}) translate(${translateX * 100}%, ${translateY * 100}%)`;
    }

    zoomInput.addEventListener("input", () => {
        zoom = zoomInput.value;
        console.log({zoom})
        zoomInput.previousElementSibling.querySelector("div:nth-child(2)").textContent = `${Math.round(zoom * 100)}%`;
        imagePositionHandler();
    });

    moveXInput.addEventListener("input", () => {
        translateX = moveXInput.value;
        console.log({translateX})
        moveXInput.previousElementSibling.querySelector("div:nth-child(2)").textContent = `${Math.round(translateX * -100)}%`; // Left label
        moveXInput.previousElementSibling.querySelector("div:nth-child(3)").textContent = `${Math.round(translateX * 100)}%`; // Right label
        imagePositionHandler();
    });

    moveYInput.addEventListener("input", () => {
        translateY = moveYInput.value;
        console.log(translateY)
        moveYInput.previousElementSibling.querySelector("div:nth-child(2)").textContent = `${Math.round(translateY * -100)}%`; // Up label
        moveYInput.previousElementSibling.querySelector("div:nth-child(3)").textContent = `${Math.round(translateY * 100)}%`; // Down label
        imagePositionHandler();
    });

    imagePositionHandler();
});
