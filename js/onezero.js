function runOnezero() {
    startTimer()
    constructive()
    zub = onezero(c);
    var zcheck = checkSol(sol)

    if(z == zcheck){
        document.getElementById("solution").innerHTML = sol
        document.getElementById("finalCost").innerHTML = zub
    } else {
        console.log("non ammissibile")
    }
    
}

function onezero(cost) {

    var capLeft = cap.slice()
    var z = 0;
    for (j = 0; j < n; j++) {
        capLeft[sol[j]] -= req[sol[j]][j]
        z += cost[sol[j]][j];
    }
    var isImproved = false
    do {
        isImproved = false
        for (j = 0; j < n; j++) {
            for (i = 0; i < m; i++) {
                if (cost[i][j] < cost[sol[j]][j] && capLeft[i] >= req[i][j]) {
                    capLeft[sol[j]] += req[sol[j]][j];
                    capLeft[i] -= req[i][j];
                    z -= cost[sol[j]][j];
                    sol[j] = i;
                    z += cost[sol[j]][j];
                    isImproved = true;
                    break;
                }
            }
            if (isImproved) break;
        }
    } while (!expired() && isImproved);

    if(z == checkSol(sol)){
        return z
    } else {
        return Number.MAX_VALUE
    }
}


