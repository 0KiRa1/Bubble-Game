var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function incScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
    var clutter = "";

    for(var i=1;i<=102;i++) {
        var rn = Math.floor(Math.random()*10)
        clutter += ` <div class = "bubble">${rn}</div> `; // ` ` => backtiks
    }

    document.querySelector("#pbtm").innerHTML = clutter;
} 

function runTimer() {
    var time = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = ` <h1>Game Over</h1> `;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    // alert("Chal rha hai");
    var clickNo = Number(dets.target.textContent);
    if(clickNo === hitrn) {
        incScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();
