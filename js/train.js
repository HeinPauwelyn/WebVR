var box = document.getElementById("thebox");

box.addEventListener("mouseenter", function () {

    box.setAttribute("scale", {
        x: 0.5,
        y: 2,
        z: 2
    });
});