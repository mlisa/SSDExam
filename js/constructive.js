function constructive() {

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
        for (ii = 0; ii < m; ii++) {
            i = dist[ii][1];
            if (capLeft[i] >= req[i][j]) {
                capLeft[i] -= req[i][j]
                sol[j] = i
                cost += c[i][j]
                break;
            }
            if (ii == m - 1) {
                alert("non sono riuscito ad assegnare")
            }
        }
    }
    
    if(checkSol(sol) == cost){
        zub = cost;
        solbest = sol;
    
        document.getElementById("solution").innerHTML = solbest
        document.getElementById("finalCost").innerHTML = zub
    } else {
        console.log("Non ammissibile")
    }
   

}