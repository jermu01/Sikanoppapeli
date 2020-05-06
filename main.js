let player1 = {
    totalPts: 0,
    turnPts: 0
    ,id: "p1"

}

let player2 = {
    totalPts: 0,
    turnPts: 0
    ,id: "p2"
}


document.getElementById("p1-roll").addEventListener("click", function() {playerRoll(player1);});
document.getElementById("p1-hold").addEventListener("click", function() {playerHold(player1);});
document.getElementById("p2-roll").addEventListener("click", function() {playerRoll(player2);});
document.getElementById("p2-hold").addEventListener("click", function() {playerHold(player2);});


function playerRoll(aPlayer) {
    let rollNum = Math.randomInt(1, 7)
    document.getElementById(aPlayer.id + "-roll-img").src = "images/dice" + rollNum + ".png";

    if (rollNum != 1) {
        aPlayer.turnPts += rollNum;
        document.getElementById(aPlayer.id + "-turn-points").innerHTML = aPlayer.turnPts;
    } else {
        aPlayer.turnPts = 0;
        document.getElementById(aPlayer.id + "-turn-points").innerHTML = aPlayer.turnPts;

        if (aPlayer.id == "p1") {
            switchturn("p1", "p2");
        } else {
            switchturn("p2", "p1");
        }

    }
}

function playerHold(aPlayer) {
    aPlayer.totalPts += aPlayer.turnPts;
    document.getElementById(aPlayer.id + "-points").innerHTML = aPlayer.totalPts;

    if (aPlayer.totalPts >= 100) {
        alert(" voittaja!!")
        document.location.reload();
        document.getElementById(aPlayer.id + "-turn-points").innerHTML = aPlayer.totalPts;

    } else {
    // reset
    aPlayer.turnPts = 0;
    document.getElementById(aPlayer.id + "-turn-points").innerHTML = 0;


    if (aPlayer.id == "p1") {
        switchturn("p1", "p2");
    } else {
        switchturn("p2", "p1");
        }

    }

}

function switchturn(id1, id2) {
        document.getElementById(id1 + "-header").classList.remove("active");
        document.getElementById(id2 + "-header").classList.add("active");
        document.getElementById(id1 + "-roll").disabled = true;
        document.getElementById(id1 + "-hold").disabled = true;
        document.getElementById(id2 + "-roll").disabled = false;
        document.getElementById(id2 + "-hold").disabled = false;
}
