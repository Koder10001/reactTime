var timeOut;
function start() {
    document.getElementById("circle").classList.add("green");
    let showTime = new Date().getTime();
    let clickTime = null;
    document.body.addEventListener("click",()=>{
        clearTimeout(timeOut);
        clickTime = new Date().getTime();
        document.getElementById("result").innerText = (clickTime - showTime) + "ms";
        document.getElementById("circle").classList.remove("green");
        let time = randomTime();
        timeOut = setTimeout(start,time);
    })
}

function randomTime() {
    return Math.floor(Math.random() * (7000 - 2000) ) + 2000; // 2000ms to 7000ms
}

window.onload = ()=>{
    let time = randomTime();
    timeOut = setTimeout(start,time);
}