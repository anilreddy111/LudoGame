const constants = {
    "yellowpawn": {
        0: [6, 13],
        1: [6, 12],
        2: [6, 11],
        3: [6, 10],
        4: [6, 9],
        5: [5, 8],
        6: [4, 8],
        7: [3, 8],
        8: [2, 8],
        9: [1, 8],
        10: [0, 8],
        11: [0, 7],
        12: [0, 6],
        13: [1, 6],
        14: [2, 6],
        15: [3, 6],
        16: [4, 6],
        17: [5, 6],
        18: [6, 5],
        19: [6, 4],
        20: [6, 3],
        21: [6, 2],
        22: [6, 1],
        23: [6, 0],
        24: [7, 0],
        25: [8, 0],
        26: [8, 1],
        27: [8, 2],
        28: [8, 3],
        29: [8, 4],
        30: [8, 5],
        31: [9, 6],
        32: [10, 6],
        33: [11, 6],
        34: [12, 6],
        35: [13, 6],
        36: [14, 6],
        37: [14, 7],
        38: [14, 8],
        39: [13, 8],
        40: [12, 8],
        41: [11, 8],
        42: [10, 8],
        43: [9, 8],
        44: [8, 9],
        45: [8, 10],
        46: [8, 11],
        47: [8, 12],
        48: [8, 13],
        49: [8, 14],
        50: [7, 14],
        51: [7, 13],
        52: [7, 12],
        53: [7, 11],
        54: [7, 10],
        55: [7, 9],
        56: [7, 8],
        // 57: [7, 1],
        // 58: [7, 2],
        // 59: [7, 3],
        // 60: [7, 4],
        // 61: [7, 5]
    },
    "redpawn": {
        0: [8, 1],
        1: [8, 2],
        2: [8, 3],
        3: [8, 4],
        4: [8, 5],
        5: [9, 6],
        6: [10, 6],
        7: [11, 6],
        8: [12, 6],
        9: [13, 6],
        10: [14, 6],
        11: [14, 7],
        12: [14, 8],
        13: [13, 8],
        14: [12, 8],
        15: [11, 8],
        16: [10, 8],
        17: [9, 8],
        18: [8, 9],
        19: [8, 10],
        20: [8, 11],
        21: [8, 12],
        22: [8, 13],
        23: [8, 14],
        24: [7, 14],
        25: [6, 14],
        26: [6, 13],
        27: [6, 12],
        28: [6, 11],
        29: [6, 10],
        30: [6, 9],
        31: [5, 8],
        32: [4, 8],
        33: [3, 8],
        34: [2, 8],
        35: [1, 8],
        36: [0, 8],
        37: [0, 7],
        38: [0, 6],
        39: [1, 6],
        40: [2, 6],
        41: [3, 6],
        42: [4, 6],
        43: [5, 6],
        44: [6, 5],
        45: [6, 4],
        46: [6, 3],
        47: [6, 2],
        48: [6, 1],
        49: [6, 0],
        50: [7, 0],
        51: [7, 1],
        52: [7, 2],
        53: [7, 3],
        54: [7, 4],
        55: [7, 5],
        56: [7, 6]
    }
}
const players = ["yellowpawn", "redpawn"];
const playerpices = {
    "redpawn": [1, 2, 3, 4],
    "yellowpawn": [1, 2, 3, 4]
}

const curr_pos = {
    "redpawn": {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
    },
    "yellowpawn": {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
    }
}
const onboard = {
    "redpawn": {
        1: -1,
        2: -1,
        3: -1,
        4: -1,
    },
    "yellowpawn": {
        1: -1,
        2: -1,
        3: -1,
        4: -1,
    }
}
const homeCount ={
    "redpawn": 0,
    "yellowpawn": 0
}
let Status = false;
let NumOfPaw = 0;
let step_size = 30;
let currpawn = "";
let num = 0;
function HaveHover() {
    let count = 0;
    let killpiece = "";
    for (let i = 0; i < players.length; i++) {
        for (let n = 1; n <= 4; n++) {
            let firstPawn = document.getElementById(players[i] + n);
            let secondPawn = document.getElementById(currpawn);
            if (firstPawn.style.top == secondPawn.style.top && firstPawn.style.left == secondPawn.style.left && currcolor != players[i]) {
                count++;
                killpiece = players[i] + n;
                return killpiece;
            }
        }
    }
    return false;
}
function ResetPiece(killpiece) {
    let player = killpiece.slice(0, -1);
    let number = Number(killpiece.at(-1));
    if (player == 'redpawn')
        curr_pos[player][number] = 0;
    else {
        curr_pos[player][number] = 0;
    }
    onboard[player][number] = -1;
    let doc = document.getElementById(killpiece);
    switch (killpiece) {
        case "redpawn1": doc.style.top = 45 + "px"; doc.style.left = 313 + "px"; break;
        case "redpawn2": doc.style.top = 102 + "px"; doc.style.left = 313 + "px"; break;
        case "redpawn3": doc.style.top = 45 + "px"; doc.style.left = 375 + "px"; break;
        case "redpawn4": doc.style.top = 102 + "px"; doc.style.left = 375 + "px"; break;
        case "yellowpawn1": doc.style.top = 315 + "px"; doc.style.left = 40 + "px"; break;
        case "yellowpawn2": doc.style.top = 372 + "px"; doc.style.left = 105 + "px"; break;
        case "yellowpawn3": doc.style.top = 315 + "px"; doc.style.left = 105 + "px"; break;
        case "yellowpawn4": doc.style.top = 372 + "px"; doc.style.left = 40 + "px"; break;

    }
}
function freezepiece() {
    let player = currpawn.slice(0, -1);
    let number = Number(currpawn.at(-1));
    console.log(player);
    console.log(number);
    if (onboard[player][number] = -1 || curr_pos[player][number] + num > 56) {
        if (onBoardPiece() || curr_pos[player][number] + num > 56) {
            Status = false;
            let dice = document.getElementById('dice');
            dice.style.backgroundImage = "url(Images/dice.gif)";
            window.setTimeout(changePlayer, 1000);
        }
    }
}
function CheckForWinner(currcolor,piece) {
    if (homeCount[currcolor] == 4) {
        let dice = document.getElementById('dice');
        dice.style.visibility = "hidden";
        let player = document.getElementById("playerid");
        player.innerText = "The Winner is the "+currcolor+" player";
    }
}
function changePlayer() {
    if (num != 6) {
        let text = document.getElementById('playerid');
        switch (text.innerText) {
            case "redpawn": text.innerText = text.style.color = "yellowpawn"; break;
            case "yellowpawn": text.innerText = text.style.color = "redpawn"; break;
        }
    }
    let dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(Images/dice.gif)";
}
function onBoardPiece() {

    let text = document.getElementById('playerid');
    for (let i = 1; i <= 4; i++) {
        if (onboard[text.innerText][i] == 1  || curr_pos[text.innerText][i]+num>56) return false;
    }
    return true;

}
function randomNum() {
    if (!Status) {
        num = Math.floor((Math.random() * 6) + 1);;
        let dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(Images/" + num + ".jpg)";
        Status = true;
    }
    if (num != 6 && onBoardPiece()) {
        window.setTimeout(changePlayer, 1000);
        Status = false;
    }
}
function move(player, piece) {
    let text = document.getElementById('playerid');
    NumOfPaw = piece;
    currcolor = player;
    currpawn = player + NumOfPaw;
    console.log(curr_pos[player][NumOfPaw],num);
    if (num + curr_pos[player][NumOfPaw] > 56) {
        freezepiece();
    }
    else if (Status) {
        if (text.innerText == player) {
            if (onboard[player][NumOfPaw] == 1 || num == 6) {
                if (onboard[player][NumOfPaw] == -1) {
                    let doc = document.getElementById(currpawn);
                    curr_pos[player][NumOfPaw] = curr_pos[player][NumOfPaw];
                    const [x, y] = constants[player][curr_pos[player][NumOfPaw]];
                    doc.style.left = (x) * step_size + "px";
                    doc.style.top = (y) * step_size + "px";
                    onboard[player][NumOfPaw] = 1;
                }
                else {
                    console.log(player);
                    console.log(num);
                    let doc = document.getElementById(player + NumOfPaw);
                    curr_pos[player][NumOfPaw] = curr_pos[player][NumOfPaw] + num;
                    const [x, y] = constants[player][curr_pos[player][NumOfPaw]];
                    doc.style.left = (x) * step_size + "px";
                    doc.style.top = (y) * step_size + "px";
                    let killpiece = HaveHover();
                    if (killpiece != false) {
                        ResetPiece(killpiece);
                    }
                   
                if (curr_pos[player][NumOfPaw] == 56) {
                    homeCount[player]+=1;
                }
                 CheckForWinner(player,NumOfPaw);
                    changePlayer();
            }
                num = 0
                Status = false;
                let dice = document.getElementById('dice');
                dice.style.backgroundImage = "url(Images/dice.gif)";
            }
        }
    }
}
