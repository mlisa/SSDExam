function runOnezero() {
    if(jInstance != null){
        startTimer()
        constructive()
        zub = onezero(c);
        var zcheck = checkSol(sol)

        if(zub == zcheck){
            document.getElementById("solution").innerHTML = sol + "<h5>Size: " + sol.length + " </h5> "
            document.getElementById("finalCost").innerHTML = zub
        } else {
            alert("[Local Search 1-0] Soluzione trovata non ammissibile")
        }
    } else {
        alert("Errore: nessuna istanza caricata")
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
        return 0
    }
}


