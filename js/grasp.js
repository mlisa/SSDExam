function graspConstructive(candListSize) {

    var dist = new Array(m);
    var capLeft = new Array(m);
    var cost = 0
    var capLeft = cap.slice();
    
    for (i = 0; i < m; i++) {
        dist[i] = new Array(2);
    }

    for (j = 0; j < n; j++) {
        for (i = 0; i < m; i++) {
            dist[i][0] = req[i][j];
            dist[i][1] = i;
        }

        dist.sort(function (a, b) { return a[0] - b[0] });

        icand = Math.floor(Math.random()*candListSize + 0.5)
        for (ii = 0; ii < m; ii++) {
            i = dist[(ii + icand)%m][1];
            if (capLeft[i] >= req[i][j]) {
                capLeft[i] -= req[i][j]
                sol[j] = i
                cost += c[i][j]
                break;
            }                    
        }               
    }

    if (cost < zub) {
        zub = cost;
        solbest = sol.slice();
    }

    return cost       

}

function grasp(candListSize) {
    var z;
    if (zub === undefined) {
        zub = Number.MAX_VALUE
    }
    console.log("Sol prima del while" + sol)
    while (!expired()) {
        z = graspConstructive(candListSize)
        if (z < zub && z == checkSol(sol)) {
            zub = z
            solbest = sol.slice()
        }
        z = onezero(c)

        if (z < zub && z == checkSol(sol)) {
            zub = z
            solbest = sol.slice()
        }
    }
    console.log("Sol dopo il while " + sol)
    document.getElementById("solution").innerHTML = solbest
    document.getElementById("finalCost").innerHTML = zub 

}

function runGrasp() {+
    startTimer()
    var cand = parseInt(document.getElementById("cand").value)
    grasp(cand);
}