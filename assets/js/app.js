function openMenu() {
    document.getElementById("menu-eff").style.width = "30%";
    document.getElementById("blur-eff").style.filter = "blur(3px)";
}

function closeMenu() {
    document.getElementById("menu-eff").style.width = "0%";
    document.getElementById("blur-eff").style.filter = "blur(0px)";
}



function cardFlip1() {
    document.getElementById("cardRevealFace0").classList.add("reveal-face");

    document.getElementById("cardRevealBack0").classList.add("reveal-back");

}

function cardFlip2() {
    document.getElementById("cardRevealFace2").classList.add("reveal-face");

    document.getElementById("cardRevealBack2").classList.add("reveal-back");


}

function cardFlip3() {
    document.getElementById("cardRevealFace3").classList.add("reveal-face");

    document.getElementById("cardRevealBack3").classList.add("reveal-back");


}

function cardFlip4() {
    document.getElementById("cardRevealFace4").classList.add("reveal-face");

    document.getElementById("cardRevealBack4").classList.add("reveal-back");

}

function cardFlip5() {
    document.getElementById("cardRevealFace5").classList.add("reveal-face");

    document.getElementById("cardRevealBack5").classList.add("reveal-back");

}

function cardFlip6() {
    document.getElementById("cardRevealFace6").classList.add("reveal-face");

    document.getElementById("cardRevealBack6").classList.add("reveal-back");

}

function cardFlip7() {
    document.getElementById("cardRevealFace7").classList.add("reveal-face");

    document.getElementById("cardRevealBack7").classList.add("reveal-back");

}

function cardFlip8() {
    document.getElementById("cardRevealFace8").classList.add("reveal-face");

    document.getElementById("cardRevealBack8").classList.add("reveal-back");

}

function cardFlip9() {
    document.getElementById("cardRevealFace9").classList.add("reveal-face");

    document.getElementById("cardRevealBack9").classList.add("reveal-back");

}

function cardFlip10() {
    document.getElementById("cardRevealFace10").classList.add("reveal-face");

    document.getElementById("cardRevealBack10").classList.add("reveal-back");

}

similar = [];
pid = [];

clicks = 0;

if (clicks > 2) {
    console.error("warning clicks bug")
}
if (similar.length > 2) {
    console.error("warning similar bug")
}
if (pid.length > 2) {
    console.error("warning pid bug")
}

function userclick() {
    clicks++;
    console.log(pid);
    if (clicks == 2) {
        if (clicks == 2) {
            console.warn("enter the compare function")
            if (similar[0] == similar[1]) {
                console.log("win")
                similar = [];
                pid = [];
            } else {
                console.log("lose")

                face = "cardRevealFace";
                back = "cardRevealBack";

                cardfacepid = pid[0];
                cardbackpid = pid[0];

                cardSelectionface = face + cardfacepid;
                cardSelectionBack = back + cardbackpid;

                cardfacepid2 = pid[1];
                cardbackpid2 = pid[1];

                cardSelectionface2 = face + cardfacepid2;
                cardSelectionBack2 = back + cardbackpid2;

                console.log(cardSelectionface)
                console.log(cardSelectionBack)
                console.log(cardSelectionface2)
                console.log(cardSelectionBack2)

                setTimeout(function () {
                    document.getElementById(cardSelectionface).classList.remove("reveal-face");
                    document.getElementById(cardSelectionBack).classList.remove("reveal-back");

                    console.log("test")
                    document.getElementById(cardSelectionface2).classList.remove("reveal-face");
                    document.getElementById(cardSelectionBack2).classList.remove("reveal-back");
                }, 2000)













                similar = [];
                pid = [];
            }
        }
        clicks = 0;
    }
}



function cardId1() {
    similar.push(0)
    pid.push(0)
}

function cardId2() {
    similar.push(0)
    pid.push(2)
}

function cardId3() {
    similar.push(2)
    pid.push(3)

}

function cardId4() {
    similar.push(2)
    pid.push(4)

}
function cardId5() {
    similar.push(3)
    pid.push(5)

}
function cardId6() {
    similar.push(3)
    pid.push(6)

}
function cardId7() {
    similar.push(4)
    pid.push(7)

}
function cardId8() {
    similar.push(4)
    pid.push(8)

}
function cardId9() {
    similar.push(5)
    pid.push(9)

}
function cardId10() {
    similar.push(5)
    pid.push(10)

}