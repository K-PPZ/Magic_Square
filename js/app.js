let square = document.getElementById("square");
let rect = square.getBoundingClientRect();
square.addEventListener("mousemove", (e) => {
    let X = e.clientX - rect.x;
    let Y = e.clientY - rect.y;
    let millieu = {x: square.offsetWidth / 2, y: square.offsetHeight / 2}
    let diff = {x: millieu.x - X, y: millieu.y - Y}
    let pourcent = {x: diff.x / millieu.x * 100, y: diff.y / millieu.y * 100}
    let Z = (pourcent.x + pourcent.y) / 2;

    // square.style.transform = `rotate3d(${X + Z}, ${Y + Z}, ${X / Y}, ${Z * 0.2}deg)`;
    // square.style.transform = `rotate3d(${X + Y}, ${Y + X}, ${X - Y}, ${Z * -0.2}deg)`;
    square.style.transform = `rotate3d(${X}, ${Y}, 0, ${Z * -0.1}deg)`;
});