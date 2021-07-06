function snowFlakes() {
    let section = document.getElementById("section");
    let i = 0;
    let count = 1500;
    while(i<count){
        let snowFlakes = document.createElement("i");
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight - 700;
        let height = Math.random() * 8;
        let width =  Math.random() * 8;
        let duration = Math.random() * 10;
        snowFlakes.style.height = height + "px";
        snowFlakes.style.width = width + "px";
        snowFlakes.style.top = y + "px";
        snowFlakes.style.left = x + "px";
        snowFlakes.style.animationDuration = duration + "s";
        section.appendChild(snowFlakes);
        i++;
    }
}
function animate() {
    let sun = document.querySelector(".sun");
    let id = setInterval(frame);
    let left = 10;
    let top = 200;
    let dtop = 1.4;
    let dleft = 4.9;
    function frame() {
        if(left>1300){
            clearInterval(id);
        }
        if(top < 10){
            dtop = -dtop;
        }
        sun.style.left = left + "px";
        sun.style.top = top + "px";
        left += dleft;
        top -= dtop;

    }
}
animate();
snowFlakes();