let userName;
let playerName;
let inGame;
let parentDiv;
let titleSection;

let east;
let west;
let south;
let north;
let playerNo;
let gameCount;

let eastScore;
let southScore;
let westScore;
let northScore;

let hunyiseE;
let qingyiseE;
let pengpengE;
let hunpengE;
let qingpengE;
let fengE;

let hunyiseS;
let qingyiseS;
let pengpengS;
let hunpengS;
let qingpengS;
let fengS;

let hunyiseW;
let qingyiseW;
let pengpengW;
let hunpengW;
let qingpengW;
let fengW;

let hunyiseN;
let qingyiseN;
let pengpengN;
let hunpengN;
let qingpengN;
let fengN;

let dadiaocheE;
let haidiE;
let gangkaiE;
let huangE;

let dadiaocheS;
let haidiS;
let gangkaiS;
let huangS;

let dadiaocheW;
let haidiW;
let gangkaiW;
let huangW;

let dadiaocheN;
let haidiN;
let gangkaiN;
let huangN;

let typesE;
let typesS;
let typesW;
let typesN;
let typeBoard;

let othersE;
let othersS;
let othersW;
let othersN;
let otherBoard;

let flower;
let expo;

let flowerE;
let expoE;
let flowerS;
let expoS;
let flowerW;
let expoW;
let flowerN;
let expoN;

let eastCoverNo = 0;
let southCoverNo = 0;
let westCoverNo = 0;
let northCoverNo = 0;

let eastCoverScore = 0;
let southCoverScore = 0;
let westCoverScore = 0;
let northCoverScore = 0;

let allLoseScore = 0;
let i;
let scoreBoard;

let eastTotal = 0;
let southTotal = 0;
let westTotal = 0;
let northTotal = 0;

let gameCountBoard = [];

let finalWin;
let rank = [];


// 确定人数后换页
document.getElementById("playerNoNext").onclick = function() {
    const radios = document.getElementsByName("playerNo");
    for (const element of radios) {
        if (element.checked) {
            playerNo = element.value;
            break;
        }
    }
    console.log(`Player No: ${playerNo}`);
    document.getElementById("playerNoSection").style.display = "none";
    document.getElementById("playerNoTitle").style.display = "none";
    document.getElementById("playerNoBr").style.display = "none";
    document.getElementById("playerNoNext").style.display = "none";

    if (playerNo == 4) {
        document.getElementById("userNameTitle").style.display = "block";
        document.getElementById("inputSection").style.display = "block";
        document.getElementById("startGame").style.display = "block";
    } else {
        document.getElementById("userNameTitle").style.display = "block";
        document.getElementById("inputSection").style.display = "block";
        document.getElementById("northLabel").style.display = "none";
        document.getElementById("northName").style.display = "none";
        document.getElementById("northBr-1").style.display = "none";
        document.getElementById("northBr-2").style.display = "none";
        document.getElementById("startGame").style.display = "block";
    }

}

// 获得玩家名称后换页
document.getElementById("startGame").onclick = function() {
   
    userName = document.getElementsByClassName("userName");
    for (let element of userName) {
        element.style.display = "none";
    }

    playerName = document.getElementsByClassName("playerName");
    for (let element of playerName) {
        element.style.display = "none";
    }

    inGame = document.getElementsByClassName("inGame");
    for (let element of inGame) {
        element.style.display = "inline";
    }

    parentDiv = document.getElementsByClassName("parentDiv");
    for (let element of parentDiv) {
        element.style.border = "2px solid white";
    }

    if (playerNo == 3) {
        east = document.getElementById("eastName").value;
        south = document.getElementById("southName").value;
        west = document.getElementById("westName").value;
        console.log(`East: ${east}, West: ${west}, South: ${south}`)
    } else {
        east = document.getElementById("eastName").value;
        south = document.getElementById("southName").value;
        west = document.getElementById("westName").value;
        north = document.getElementById("northName").value;
        console.log(`East: ${east}, West: ${west}, South: ${south}, North: ${north}`);
    }


    document.getElementById("finishRound").style.display = "block";

    // 显示游戏局数
    gameCount = 0;
    document.getElementById("gameCount").innerText = `第 ${gameCount + 1} 局\n`;

    // 3人麻将和4人麻将区别显示
    if (playerNo == 3) {
        // 显示赢家姓名
        document.getElementById("eastWin").innerText = `${east}`;
        document.getElementById("westWin").innerText = `${west}`;
        document.getElementById("southWin").innerText = `${south}`;

        // 显示输家姓名
        document.getElementById("eastLose").innerText = `${east}`;
        document.getElementById("westLose").innerText = `${west}`;
        document.getElementById("southLose").innerText = `${south}`;

        // 显示包家姓名
        document.getElementById("westCoverE").innerText = `${west}`;
        document.getElementById("southCoverE").innerText = `${south}`;

        document.getElementById("eastCoverW").innerText = `${east}`;
        document.getElementById("southCoverW").innerText = `${south}`;

        document.getElementById("eastCoverS").innerText = `${east}`;
        document.getElementById("westCoverS").innerText = `${west}`;

        document.getElementById("eastCoverN").innerText = `${east}`;
        document.getElementById("westCoverN").innerText = `${west}`;
        document.getElementById("southCoverN").innerText = `${south}`;

        //隐藏北家
        document.getElementById("northDiv").style.display = "none";
        document.getElementById("northCoverCheck-E").style.display = "none";
        document.getElementById("northCoverCheck-S").style.display = "none";
        document.getElementById("northCoverCheck-W").style.display = "none";
        document.getElementById("northCoverE").style.display = "none";
        document.getElementById("northCoverS").style.display = "none";
        document.getElementById("northCoverW").style.display = "none";
        document.getElementById("northLoseCheck").style.display = "none";
        document.getElementById("northLose").style.display = "none";

    } else {
        // 显示赢家姓名
        document.getElementById("eastWin").innerText = `${east}`;
        document.getElementById("westWin").innerText = `${west}`;
        document.getElementById("southWin").innerText = `${south}`;
        document.getElementById("northWin").innerText = `${north}`;
        // 显示输家姓名
        document.getElementById("eastLose").innerText = `${east}`;
        document.getElementById("westLose").innerText = `${west}`;
        document.getElementById("southLose").innerText = `${south}`;
        document.getElementById("northLose").innerText = `${north}`;
        // 显示包家姓名
        document.getElementById("westCoverE").innerText = `${west}`;
        document.getElementById("southCoverE").innerText = `${south}`;
        document.getElementById("northCoverE").innerText = `${north}`;
        document.getElementById("eastCoverW").innerText = `${east}`;
        document.getElementById("southCoverW").innerText = `${south}`;
        document.getElementById("northCoverW").innerText = `${north}`;
        document.getElementById("eastCoverS").innerText = `${east}`;
        document.getElementById("westCoverS").innerText = `${west}`;
        document.getElementById("northCoverS").innerText = `${north}`;
        document.getElementById("eastCoverN").innerText = `${east}`;
        document.getElementById("westCoverN").innerText = `${west}`;
        document.getElementById("southCoverN").innerText = `${south}`;
        // 初始化各家得分数组
        eastScore = [];
        southScore = [];
        westScore = [];
        northScore = [];
    }
    
}


// 在输家中隐藏赢家和自摸选项
function allLoseVisibility() {
    let winCheck = 0;
    if (eastWinCheck.checked) winCheck++;
    if (westWinCheck.checked) winCheck++;
    if (southWinCheck.checked) winCheck++;
    if (northWinCheck.checked) winCheck++;
    if (winCheck >= 2) {
        document.getElementById("allLoseCheck").style.visibility = "hidden";
        document.getElementById("allLose").style.visibility = "hidden";
    } else {
        document.getElementById("allLoseCheck").style.visibility = "visible";
        document.getElementById("allLose").style.visibility = "visible";
    }
}

document.getElementById("eastWinCheck").onchange = function() {
    if (this.checked) {
        document.getElementById("eastLoseCheck").style.visibility = "hidden";
        document.getElementById("eastLose").style.visibility = "hidden";
    } else {
        document.getElementById("eastLoseCheck").style.visibility = "visible";
        document.getElementById("eastLose").style.visibility = "visible";
    }
    allLoseVisibility();
}

document.getElementById("southWinCheck").onchange = function() {
    if (this.checked) {
        document.getElementById("southLoseCheck").style.visibility = "hidden";
        document.getElementById("southLose").style.visibility = "hidden";
    } else {
        document.getElementById("southLoseCheck").style.visibility = "visible";
        document.getElementById("southLose").style.visibility = "visible";
    }
    allLoseVisibility();
}

document.getElementById("westWinCheck").onchange = function() {
    if (this.checked) {
        document.getElementById("westLoseCheck").style.visibility = "hidden";
        document.getElementById("westLose").style.visibility = "hidden";
    } else {
        document.getElementById("westLoseCheck").style.visibility = "visible";
        document.getElementById("westLose").style.visibility = "visible";
    }
    allLoseVisibility();
}

document.getElementById("northWinCheck").onchange = function() {
    if (this.checked) {
        document.getElementById("northLoseCheck").style.visibility = "hidden";
        document.getElementById("northLose").style.visibility = "hidden";
    } else{
        document.getElementById("northLoseCheck").style.visibility = "visible";
        document.getElementById("northLose").style.visibility = "visible";
    }
    allLoseVisibility();
}

// 计分
// push, pop, unshift, shift, sort, sort.reverse
function checkBox(boxId) {
    return document.getElementById(boxId).checked;
}

document.getElementById("finishRound").onclick = function() {

    /*if (playerNo == 3) {

        hunyiseE = document.getElementById("hunyiseE").checked;
        qingyiseE = document.getElementById("qingyiseE").checked;
        pengpengE = document.getElementById("hunpengE").checked;
        hunpengE = document.getElementById("hunpengE").checked;
        qingpengE = document.getElementById("qingpengE").checked;
        fengE = document.getElementById("fengE").checked;

        hunyiseS = document.getElementById("hunyiseS").checked;
        qingyiseS = document.getElementById("qingyiseS").checked;
        pengpengS = document.getElementById("hunpengS").checked;
        hunpengS = document.getElementById("hunpengS").checked;
        qingpengS = document.getElementById("qingpengS").checked;
        fengS = document.getElementById("fengS").checked;

        hunyiseW = document.getElementById("hunyiseW").checked;
        qingyiseW = document.getElementById("qingyiseW").checked;   
        pengpengW = document.getElementById("hunpengW").checked;
        hunpengW = document.getElementById("hunpengW").checked;
        qingpengW = document.getElementById("qingpengW").checked;
        fengW = document.getElementById("fengW").checked;

        dadiaocheE = document.getElementById("dadiaocheE").checked;
        haidiE = document.getElementById("haidiE").checked;
        gangkaiE = document.getElementById("gangkaiE").checked;
        huangE = document.getElementById("huangE").checked;

        dadiaocheS = document.getElementById("dadiaocheS").checked;
        haidiS = document.getElementById("haidiS").checked;
        gangkaiS = document.getElementById("gangkaiS").checked;
        huangS = document.getElementById("huangS").checked;

        dadiaocheW = document.getElementById("dadiaocheW").checked;
        haidiW = document.getElementById("haidiW").checked;
        gangkaiW = document.getElementById("gangkaiW").checked;
        huangW = document.getElementById("huangW").checked;

        typesE = [hunyiseE, qingyiseE, pengpengE, hunpengE, qingpengE, fengE];
        typesS = [hunyiseS, qingyiseS, pengpengS, hunpengS, qingpengS, fengS];
        typesW = [hunyiseW, qingyiseW, pengpengW, hunpengW, qingpengW, fengW];

        othersE = [dadiaocheE, haidiE, gangkaiE, huangE];
        othersS = [dadiaocheS, haidiS, gangkaiS, huangS];
        othersW = [dadiaocheW, haidiW, gangkaiW, huangW];

        typeBoard = [typesE, typesS, typesW];
        otherBoard = [othersE, othersS, othersW];
    } else {*/
        hunyiseE = document.getElementById("hunyiseE").checked;
        qingyiseE = document.getElementById("qingyiseE").checked;
        pengpengE = document.getElementById("pengpengE").checked;
        hunpengE = document.getElementById("hunpengE").checked;
        qingpengE = document.getElementById("qingpengE").checked;
        fengE = document.getElementById("fengE").checked;

        hunyiseS = document.getElementById("hunyiseS").checked;
        qingyiseS = document.getElementById("qingyiseS").checked;
        pengpengS = document.getElementById("pengpengS").checked;
        hunpengS = document.getElementById("hunpengS").checked;
        qingpengS = document.getElementById("qingpengS").checked;
        fengS = document.getElementById("fengS").checked;

        hunyiseW = document.getElementById("hunyiseW").checked;
        qingyiseW = document.getElementById("qingyiseW").checked;   
        pengpengW = document.getElementById("pengpengW").checked;
        hunpengW = document.getElementById("hunpengW").checked;
        qingpengW = document.getElementById("qingpengW").checked;
        fengW = document.getElementById("fengW").checked;

        hunyiseN = document.getElementById("hunyiseN").checked;
        qingyiseN = document.getElementById("qingyiseN").checked;
        pengpengN = document.getElementById("pengpengN").checked;
        hunpengN = document.getElementById("hunpengN").checked;
        qingpengN = document.getElementById("qingpengN").checked;
        fengN = document.getElementById("fengN").checked;

        dadiaocheE = document.getElementById("dadiaocheE").checked;
        haidiE = document.getElementById("haidiE").checked;
        gangkaiE = document.getElementById("gangkaiE").checked;
        huangE = document.getElementById("huangE").checked;

        dadiaocheS = document.getElementById("dadiaocheS").checked;
        haidiS = document.getElementById("haidiS").checked;
        gangkaiS = document.getElementById("gangkaiS").checked;
        huangS = document.getElementById("huangS").checked;

        dadiaocheW = document.getElementById("dadiaocheW").checked;
        haidiW = document.getElementById("haidiW").checked;
        gangkaiW = document.getElementById("gangkaiW").checked;
        huangW = document.getElementById("huangW").checked;

        dadiaocheN = document.getElementById("dadiaocheN").checked;
        haidiN = document.getElementById("haidiN").checked;
        gangkaiN = document.getElementById("gangkaiN").checked;
        huangN = document.getElementById("huangN").checked;

        typesE = [hunyiseE, qingyiseE, pengpengE, hunpengE, qingpengE, fengE];
        typesS = [hunyiseS, qingyiseS, pengpengS, hunpengS, qingpengS, fengS];
        typesW = [hunyiseW, qingyiseW, pengpengW, hunpengW, qingpengW, fengW];
        typesN = [hunyiseN, qingyiseN, pengpengN, hunpengN, qingpengN, fengN];

        othersE = [dadiaocheE, haidiE, gangkaiE, huangE];
        othersS = [dadiaocheS, haidiS, gangkaiS, huangS];
        othersW = [dadiaocheW, haidiW, gangkaiW, huangW];
        othersN = [dadiaocheN, haidiN, gangkaiN, huangN];

        typeBoard = [typesE, typesS, typesW, typesN];
        otherBoard = [othersE, othersS, othersW, othersN];
    //}
        // 计算各家得分
        console.log(`计算赢分`);

        flowerE = calculateFlower("eastWinCheck", "flowerE");
        expoE = calculateExpo("eastWinCheck",typesE, othersE);
        flowerS = calculateFlower("southWinCheck", "flowerS");
        expoS = calculateExpo("southWinCheck", typesS, othersS);
        flowerW = calculateFlower("westWinCheck", "flowerW");
        expoW = calculateExpo("westWinCheck", typesW, othersW);
        flowerN = calculateFlower("northWinCheck", "flowerN");
        expoN = calculateExpo("northWinCheck", typesN, othersN);

        if (document.getElementById("allLoseCheck").checked) {
            console.log(`自摸`);
            eastScore[gameCount] = flowerE * (2 ** (expoE)) * (playerNo - 1);
            southScore[gameCount] = flowerS * (2 ** (expoS)) * (playerNo - 1);
            westScore[gameCount] = flowerW * (2 ** (expoW)) * (playerNo - 1);
            northScore[gameCount] = flowerN * (2 ** (expoN)) * (playerNo - 1);
        } else {
            eastScore[gameCount] = flowerE * (2 ** (expoE));
            southScore[gameCount] = flowerS * (2 ** (expoS));
            westScore[gameCount] = flowerW * (2 ** (expoW));
            northScore[gameCount] = flowerN * (2 ** (expoN));
        }

        console.log(`净赢`);

        console.log(`East score: ${eastScore[gameCount]}`);
        console.log(`South score: ${southScore[gameCount]}`);
        console.log(`West score: ${westScore[gameCount]}`);
        console.log(`North score: ${northScore[gameCount]}`);


        // 包家计算
        console.log(`计算包家`);

        eastCoverNo = calculateCover("westCoverCheckE", "southCoverCheckE", "northCoverCheckE");
        southCoverNo = calculateCover("eastCoverCheckS", "westCoverCheckS", "northCoverCheckS");
        westCoverNo = calculateCover("eastCoverCheckW", "southCoverCheckW", "northCoverCheckW");
        northCoverNo = calculateCover("eastCoverCheckN", "southCoverCheckN", "westCoverCheckN");

        console.log(`包东方: ${eastCoverNo}`);
        console.log(`包南方: ${southCoverNo}`);
        console.log(`包西方: ${westCoverNo}`);
        console.log(`包北方: ${northCoverNo}`);

        console.log(`计算包家分摊`);

        if (document.getElementById("eastCoverCheckS").checked) {
            eastCoverScore = eastCoverScore - (southScore[gameCount] / southCoverNo);
            console.log(`东方包南方，东方${eastCoverScore}`);
        }
        if (document.getElementById("eastCoverCheckW").checked) {
            eastCoverScore = eastCoverScore - (westScore[gameCount] / westCoverNo);
            console.log(`东方包西方，东方${eastCoverScore}`);
        }
        if (document.getElementById("eastCoverCheckN").checked) {
            eastCoverScore = eastCoverScore - (northScore[gameCount] / northCoverNo);
            console.log(`东方包北方，东方${eastCoverScore}`);
        }

        if (document.getElementById("southCoverCheckE").checked) {
            southCoverScore = southCoverScore - (eastScore[gameCount] / eastCoverNo);
            console.log(`南方包东方，南方${southCoverScore}`);
        }
        if (document.getElementById("southCoverCheckW").checked) {
            southCoverScore = southCoverScore - (westScore[gameCount] / westCoverNo);
            console.log(`南方包西方，南方${southCoverScore}`);
        }
        if (document.getElementById("southCoverCheckN").checked) {
            southCoverScore = southCoverScore - (northScore[gameCount] / northCoverNo);
            console.log(`南方包北方，南方${southCoverScore}`);
        }

        if (document.getElementById("westCoverCheckE").checked) {
            westCoverScore = westCoverScore - (eastScore[gameCount] / eastCoverNo);
            console.log(`西方包东方，西方${westCoverScore}`);
        }
        if (document.getElementById("westCoverCheckS").checked) {
            westCoverScore = westCoverScore - (southScore[gameCount] / southCoverNo);
            console.log(`西方包南方，西方${westCoverScore}`);
        }
        if (document.getElementById("westCoverCheckN").checked) {
            westCoverScore = westCoverScore - (northScore[gameCount] / northCoverNo);
            console.log(`西方包北方，西方${westCoverScore}`);
        }

        if (document.getElementById("northCoverCheckE").checked) {
            northCoverScore = northCoverScore - (eastScore[gameCount] / eastCoverNo);
            console.log(`北方包东方，北方${northCoverScore}`);
        }
        if (document.getElementById("northCoverCheckS").checked) {
            northCoverScore = northCoverScore - (southScore[gameCount] / southCoverNo);
            console.log(`北方包南方，北方${northCoverScore}`);
        }
        if (document.getElementById("northCoverCheckW").checked) {
            northCoverScore = northCoverScore - (westScore[gameCount] / westCoverNo);
            console.log(`北方包西方，北方${northCoverScore}`);
        }
        eastScore[gameCount] += eastCoverScore;
        southScore[gameCount] += southCoverScore;
        westScore[gameCount] += westCoverScore;
        northScore[gameCount] += northCoverScore;

        // 无互包
        if (eastCoverNo * southCoverNo * westCoverNo * northCoverNo == 0) {
            console.log(`冲牌输家`);
            if (document.getElementById("eastLoseCheck").checked) {
                eastScore[gameCount] = eastScore[gameCount] - (southScore[gameCount] + westScore[gameCount] + northScore[gameCount]);
                console.log(`东方冲牌，东方${eastScore[gameCount]}`);
            }
            if (document.getElementById("southLoseCheck").checked) {
                southScore[gameCount] = southScore[gameCount] - (eastScore[gameCount] + westScore[gameCount] + northScore[gameCount]);
                console.log(`南方冲牌，南方${southScore[gameCount]}`);
            }
            if (document.getElementById("westLoseCheck").checked) {
                westScore[gameCount] = westScore[gameCount] - (eastScore[gameCount] + southScore[gameCount] + northScore[gameCount]);
                console.log(`西方冲牌，西方${westScore[gameCount]}`);
            }
            if (document.getElementById("northLoseCheck").checked) {
                northScore[gameCount] = northScore[gameCount] - (eastScore[gameCount] + southScore[gameCount] + westScore[gameCount]);
                console.log(`北方冲牌，北方${northScore[gameCount]}`);
            }
        }

        // 自摸
        if (document.getElementById("allLoseCheck").checked && (eastCoverNo * southCoverNo * westCoverNo * northCoverNo == 0)) {
            console.log(`自摸冲牌`);
            allLoseScore = eastScore[gameCount] + southScore[gameCount] + westScore[gameCount] + northScore[gameCount];
            if (document.getElementById("eastWinCheck").checked) {
                southScore[gameCount] = southScore[gameCount] - allLoseScore / (playerNo - 1);
                westScore[gameCount] = westScore[gameCount] - allLoseScore / (playerNo - 1);
                northScore[gameCount] = northScore[gameCount] - allLoseScore / (playerNo - 1);
                console.log(`东方自摸，南方${southScore[gameCount]}, 西方${westScore[gameCount]}, 北方${northScore[gameCount]}`);
            }
            if (document.getElementById("southWinCheck").checked) {
                eastScore[gameCount] = eastScore[gameCount] - allLoseScore / (playerNo - 1);
                westScore[gameCount] = westScore[gameCount] - allLoseScore / (playerNo - 1);
                northScore[gameCount] = northScore[gameCount] - allLoseScore / (playerNo - 1);
                console.log(`南方自摸，东方${eastScore[gameCount]}, 西方${westScore[gameCount]}, 北方${northScore[gameCount]}`);
            }
            if (document.getElementById("westWinCheck").checked) {
                eastScore[gameCount] = eastScore[gameCount] - allLoseScore / (playerNo - 1);
                southScore[gameCount] = southScore[gameCount] - allLoseScore / (playerNo - 1);
                northScore[gameCount] = northScore[gameCount] - allLoseScore / (playerNo - 1);
                console.log(`西方自摸，东方${eastScore[gameCount]}, 南方${southScore[gameCount]}, 北方${northScore[gameCount]}`);
            }
            if (document.getElementById("northWinCheck").checked) {
                eastScore[gameCount] = eastScore[gameCount] - allLoseScore / (playerNo - 1);
                southScore[gameCount] = southScore[gameCount] - allLoseScore / (playerNo - 1);
                westScore[gameCount] = westScore[gameCount] - allLoseScore / (playerNo - 1);
                console.log(`北方自摸，东方${eastScore[gameCount]}, 南方${southScore[gameCount]}, 西方${westScore[gameCount]}`);
            }
        }

        // 总得分
        console.log(`总得分`);
        console.log(`East score: ${eastScore[gameCount]}`);
        console.log(`South score: ${southScore[gameCount]}`);
        console.log(`West score: ${westScore[gameCount]}`);
        console.log(`North score: ${northScore[gameCount]}`);

        // 换页
        // 显示TH玩家姓名
        document.getElementById("eastHeader").innerText = `${east}`;
        document.getElementById("southHeader").innerText = `${south}`;
        document.getElementById("westHeader").innerText = `${west}`;
        document.getElementById("northHeader").innerText = `${north}`;
        // 显示TD分数
        i = 0;
        while (i <= gameCount) {
            gameCountBoard[i] = `${i + 1}`;
            i++;
        }

        console.log(gameCountBoard);
        console.log(eastScore);
        console.log(southScore);
        console.log(westScore);
        console.log(northScore);

        document.getElementById("gameCountTd").innerText = gameCountBoard.join(`\n\n`);
        document.getElementById("eastScoreTd").innerText = eastScore.join(`\n\n`);
        document.getElementById("southScoreTd").innerText = southScore.join(`\n\n`);
        document.getElementById("westScoreTd").innerText = westScore.join(`\n\n`);
        document.getElementById("northScoreTd").innerText = northScore.join(`\n\n`);

        //计算总分
        i = 0;
        eastTotal = 0;
        southTotal = 0;
        westTotal = 0;
        northTotal = 0;
        while (i <= gameCount) {
            eastTotal += eastScore[i];
            southTotal += southScore[i];
            westTotal += westScore[i];
            northTotal += northScore[i];
            i++;
        }

        document.getElementById("eastTotalTd").innerText = `${eastTotal}`;
        document.getElementById("southTotalTd").innerText = `${southTotal}`;
        document.getElementById("westTotalTd").innerText = `${westTotal}`;
        document.getElementById("northTotalTd").innerText = `${northTotal}`;

        // 换页隐藏计分选项
        inGame = document.getElementsByClassName("inGame");
        for (let element of inGame) {
            element.style.display = "none";
        }
        parentDiv = document.getElementsByClassName("parentDiv");   
        for (let element of parentDiv) {
            element.style.display = "none";
        }
        titleSection = document.getElementsByClassName("titleSection");
        for (let element of titleSection) {
            element.style.display = "none";
        }
        document.getElementById("finishRound").style.display = "none";
        document.getElementById("gameCount").style.display = "none";
        
        // 换页显示总分
        document.getElementById("totalScoreTitle").style.display = "block";
        scoreBoard = document.getElementsByClassName("scoreBoard");
        for (let element of scoreBoard) {
            element.style.visibility = "visible";
        }
        document.getElementById("nextGame").style.display = "inline-block";
        document.getElementById("endGame").style.display = "inline-block";
}


// 新一轮游戏
document.getElementById("nextGame").onclick = function() {
    gameCount++;
    document.getElementById("gameForm").reset();
    eastCoverScore = 0;
    southCoverScore = 0;
    westCoverScore = 0;
    northCoverScore = 0;

    // 隐藏总分
    document.getElementById("totalScoreTitle").style.display = "none";
    scoreBoard = document.getElementsByClassName("scoreBoard");
        for (let element of scoreBoard) {
            element.style.visibility = "hidden";
        }
        document.getElementById("nextGame").style.display = "none";
        document.getElementById("endGame").style.display = "none";

    // 显示计分选项
    inGame = document.getElementsByClassName("inGame");
    for (let element of inGame) {
        element.style.display = "inline";
    }
    parentDiv = document.getElementsByClassName("parentDiv");
    for (let element of parentDiv) {
        element.style.border = "2px solid white";
        element.style.display = "block";
    }
    titleSection = document.getElementsByClassName("titleSection");
    for (let element of titleSection) {
        element.style.display = "block";
    }
    document.getElementById("finishRound").style.display = "block";
    document.getElementById("gameCount").style.display = "block";

    //显示所有放炮选项
    document.getElementById("eastLoseCheck").style.visibility = "visible";
    document.getElementById("eastLose").style.visibility = "visible";
    document.getElementById("southLoseCheck").style.visibility = "visible";
    document.getElementById("southLose").style.visibility = "visible";
    document.getElementById("westLoseCheck").style.visibility = "visible";
    document.getElementById("westLose").style.visibility = "visible";
    document.getElementById("northLoseCheck").style.visibility = "visible";
    document.getElementById("northLose").style.visibility = "visible";
    document.getElementById("allLoseCheck").style.visibility = "visible";
    document.getElementById("allLose").style.visibility = "visible";

    // 显示游戏局数
    document.getElementById("gameCount").innerText = `第 ${gameCount + 1} 局\n`;
}


// 结束游戏
document.getElementById("endGame").onclick = function() {
    document.getElementById("nextGame").style.display = "none";
    document.getElementById("endGame").style.display = "none";
    finalWin = document.getElementsByClassName("finalWin");
    for (let element of finalWin) {
        element.style.visibility = "visible";
    }
    // 显示最终赢家
    rank = countWinner(east, south, west, north,eastTotal, southTotal, westTotal, northTotal);
    document.getElementById("winnerName").innerText = rank.join(" & ");

}




function calculateFlower(winId, flowerId) {
// 数花 
    if (document.getElementById(winId).checked) {
        console.log(`${winId} wins`);

        flower = document.getElementById(flowerId).value;
        console.log(`${winId} flower: ${flower}`);

        return flower;
    } else {
        return 0;
    }
}

function calculateExpo(winId, types, others) {    
// 牌型
    if (document.getElementById(winId).checked) {
        expo = 1;
        if (types[0] == true || types[2] == true) {
            expo = 2;
            console.log(`${winId}2番`);
        } else if (types[1] == true || types[3] == true || types[5] == true) {
            expo = 4;
            console.log(`${winId}4番`);
        } else if (types[4] == true) {
            expo = 6;
            console.log(`${winId}6番`);
        } else {
            console.log(`${winId}未选择牌型`);
        }
        // 其他番
        if (others[0] == true) {
            expo += 1;
            console.log(`${winId}大吊车`);
        }
        if (others[1] == true) {
            expo += 1;
            console.log(`${winId}海底捞月`);
        }
        if (others[2] == true) {
            expo += 1;
            console.log(`${winId}杠上开花`);
        }
        if (others[3] == true) {
            expo += 1;
            console.log(`${winId}黄番`);
        }
        console.log(`${winId}总番数：` + expo);
        return expo;
    } else {
        return 0;
    }
}

function calculateCover(cover1, cover2, cover3) {
    let i = 0;
    if (document.getElementById(cover1).checked) {
        i++;
    }
    if (document.getElementById(cover2).checked) {
        i++;
    }
    if (document.getElementById(cover3).checked) {
        i++;
    }
    return i;
}

function countWinner(east, south, west, north, eastValue, southValue, westValue, northValue) {
    let rankName = [east, south, west, north];
    let rankValue = [eastValue, southValue, westValue, northValue];

    console.log(`Rank before sort: ${rankName}`);
    console.log(`Rank before sort: ${rankValue}`);

    // rankValue.sort((x, y) => y - x);

    let i = 0;
    let j;
    let tempValue;
    let tempName;
    while (i < rankValue.length) {
        j = i + 1;
        while (j < rankValue.length) {
            if (rankValue[j] > rankValue[i]) {
                tempValue = rankValue[i];
                tempName = rankName[i];
                rankValue[i] = rankValue[j];
                rankName[i] = rankName[j];
                rankValue[j] = tempValue;
                rankName[j] = tempName;
            }
            j++;
        }
        i++;
    }

    console.log(`Rank after sort: ${rankName}`);
    console.log(`Rank after sort: ${rankValue}`);

    i = rankValue.length - 1;
    while (i > 0) {
        if (rankValue[i] < rankValue[i - 1]) {
            rankValue.splice(i, rankValue.length - i);
            rankName.splice(i, rankName.length - i);
        }
        i--;
    }

    console.log(`Rank after splice ${rankName}`);
    console.log(`Rank after splice ${rankValue}`);

    return rankName;
}