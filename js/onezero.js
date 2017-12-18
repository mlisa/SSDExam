function runOnezero() {
    constructive()
    var z = onezero(c);
    var zcheck = checkSol(sol)
    console.log("zub " + z + " check " + zcheck + " sol " + sol)
}

function onezero(cost) {
    var capLeft = cap.slice()
    var z = 0;
    for (j = 0; j < n; j++) {
        //console.log(sol[j])
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
    } while (isImproved);
    return z
}


