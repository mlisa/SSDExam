var startTime = 0;
var endTime = 0;
var timeout = 0;
function startTimer(){
    startTime = Date.now();
    timeout = parseInt(document.getElementById("time").value)
}

function expired(){
    endTime = Date.now()
    if(endTime > startTime + timeout){
        console.log("Time expired")
        return true
    }
    return false
}

function reset(){
    readWithCORS()
    sol = new Array(n)
    solbest = new Array(n)
    zub = Number.MAX_VALUE
    zlbBest = Number.MAX_VALUE
    document.getElementById("solution").innerHTML = ""
    document.getElementById("finalCost").innerHTML = ""
}