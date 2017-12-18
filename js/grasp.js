function graspConstructive(candListSize) {

    var dist = new Array(m);
    var capLeft = new Array(m);
    var cost = 0
    sol = new Array(n)
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

function grasp(maxiter, candListSize) {
    var iter = 0, z;

    if (zub === undefined) {
        zub = Number.MAX_VALUE
    }

    while (iter < maxiter) {
        z = graspConstructive(candListSize)
        if (z < zub) {
            zub = z
            solbest = sol.slice()
        }

        z = onezero(c)

        if (z < zub) {
            zub = z
            solbest = sol.slice()
        }
        iter++;
    }
}

function runGrasp() {
    grasp(2, 3);
}