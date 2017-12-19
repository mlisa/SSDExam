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
    
}

function runIls(){
    if(jInstance != null){
        var alpha = parseFloat(document.getElementById("alpha").value);
        ils(0.45)
        if(solbest != undefined && checkSol(solbest) == zlbBest){
            document.getElementById("solution").innerHTML =  solbest + "<h5>Size: " + solbest.length + " </h5> "
            document.getElementById("finalCost").innerHTML = zlbBest
        } else {
            alert("[Iterative Local Search] Soluzione trovata non ammissibile")
        }
    } else {
        alert("Errore: nessuna istanza caricata")
    }
    
}