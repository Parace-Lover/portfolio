let blend = 50;
let deley = -10;
let ws = window.innerWidth
const section = document.getElementById('section')

document.onmousemove = function(e){
    mouseX = Math.round(e.pageX / ws * 100 - deley)
    c1 = mouseX - blend
    c2 = mouseX + blend

    section.style.background = `linear-gradient(to right, green ${c1}%, #fffd6d ${c2}%)`;
}