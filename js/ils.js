function perturbation(alpha) {
    var i, j;
    var newcost = new Array(m)

    for (i = 0; i < m; i++) {
        newcost[i] = new Array(n)
    }

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            newcost[i][j] = (1 - alpha / 2) * c[i][j] + Math.random()*alpha* c[i][j]
        }
    }

    return newcost
}

function ils(alpha) {
    startTimer()
    constructive()
    onezero(c)

    while (!expired()) {
        onezero(perturbation(alpha));
        var z = onezero(c);

        if (z < zlbBest && checkSol(sol) == z) {
            zlbBest = z
            solbest = sol.slice()
        } 

    }

    document.getElementById("solution").innerHTML = solbest
    document.getElementById("finalCost").innerHTML = zlbBest
    
}

function runIls(){
    var alpha = parseFloat(document.getElementById("alpha").value);
    ils(0.45)
}