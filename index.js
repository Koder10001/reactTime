var timeOut;

var arr = [];
var min = Infinity;
var max = -1;
var ended = 1;
var showTime;

function start() {
    document.body.classList.add("change");
    showTime = Date.now();
    ended = 0;
}

document.body.onclick = ()=>{
    if(!ended){
        ended = 1;
        let ms = Date.now() - showTime;
        showResult(ms);
        document.body.classList.remove("change");
        timeOut = setTimeout(start,randomTime());
    }
};

function showResult(ms){
    arr.push(ms)
    if(ms < min){
        min = ms;
    }

    if (ms > max){
        max = ms;
    }

    let average = Math.round((arr.reduce((last,cur)=>{ return last + cur },0) / arr.length));

    let result = `Time: ${ms} ms\n
                Count: ${arr.length}\n
                Min: ${min} ms\n
                Max: ${max} ms\n
                Average: ${average} ms`;
    document.getElementById("result").innerText = result;
}

function randomTime() {
    return Math.floor(Math.random() * (7000 - 2000) ) + 2000; // 2000ms to 7000ms
}

window.onload = ()=>{
    timeOut = setTimeout(start,randomTime());
}