let player1 = {
    totalpts: 0,
    turnpts: 0
    ,id: "p1"
}

let player2 = {
    totalpts: 0,
    turnpts: 0
    ,id: "p2"
}


document.getElementById("p1-roll").addEventListener("click", function() {playerRoll(player1);});
document.getElementById("p1-hold").addEventListener("click", function() {playerRoll(player1);});
document.getElementById("p2-roll").addEventListener("click", function() {playerRoll(player2);});
document.getElementById("p2-hold").addEventListener("click", function() {playerHold(player2);});


function playerRoll(aPlayer) {
    let rollnum = Math.randomInt(1, 7)
    document.getElementById(aPlayer.id + "-roll-img").src = "images/dice" + rollnum + ".png";

    if (rollnum != 1) {

        aPlayer.turnpts += rollnum;
        document.getElementById(aPlayer.id + "-turn-points").innerHTML = aPlayer.turnpts;
    } else {
        aPlayer.turnpts = 0;
        document.getElementById(aPlayer.id + "-turn-points").innerHTML = player1.turnpts;

        if (aPlayer.id == "p1") {
            switchturn("p1", "p2");
        } else {
            switchturn("p2", "p1");
        }

    }
}

function playerhold(aPlayer) {
    aPlayer.totalpts += aPlayer.turnpts;
    document.getElementById(aPlayer.id + "-points").innerHTML = aPlayer.totalpts;

    if (aPlayer.totalpts >= 100) {
        alert(aPlayer.id + " voittaja!!")
        document.location.reload();

    } else {
    // reset
    aPlayer.turnpts = 0;
    document.getElementById(aPlayer.id + "-turn-points").innerHTML = 0;


    if (aPlayer.id == "p1") {
        switchturn("p1", "p2");
    } else {
        switchturn("p2", "p1");
        }

    }

}

function switchturn(id1, id2) {
        document.getElementById(id1 + "-header").classList.remove("activate");
        document.getElementById(id2 + "-header").classList.add("activate");
        document.getElementById(id1 + "-roll").disabled = true;
        document.getElementById(id1 + "-roll").disabled = true;
        document.getElementById(id2 + "-roll").disabled = false;
        document.getElementById(id2 + "-roll").disabled = false;
}
