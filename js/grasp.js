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
    return cost       
}

function grasp(candListSize) {
    var z;

    while (!expired()) {
        z = graspConstructive(candListSize)
        if(z == checkSol(sol)){       
            if (z < zub) {
                zub = z
                solbest = sol.slice()
            }
            z = onezero(c)

            if (z < zub && z == checkSol(sol)) {
                zub = z
                solbest = sol.slice()
            }
        }
    }
}

function runGrasp() {
    if(jInstance != null){      
        startTimer()
        var cand = parseInt(document.getElementById("cand").value)
        grasp(cand);
        if(solbest != undefined && checkSol(solbest) == zub){
            document.getElementById("solution").innerHTML = solbest + "<h5>Size: " + solbest.length + " </h5> "
            document.getElementById("finalCost").innerHTML = zub
        } else {
            alert("[GRASP] Soluzione trovata non ammissibile")
            console.log(sol)
        }
    } else {
        alert("Errore: nessuna istanza caricata")
    }
}