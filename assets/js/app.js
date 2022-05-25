function openMenu() {
    document.getElementById("menu-eff").style.width = "30%";
    document.getElementById("blur-eff").style.filter = "blur(3px)";
}

function closeMenu() {
    document.getElementById("menu-eff").style.width = "0%";
    document.getElementById("blur-eff").style.filter = "blur(0px)";
}


function cardFlip1() {
    document.getElementById("cardRevealFace").classList.add("reveal-face");
    
    document.getElementById("cardRevealBack").classList.add("reveal-back");
    
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

count = [];
cardFliped = [];

console.log(count);

function cardmatch(){
    if (count[0] == count[1]){
        console.log("You win!");

    }
    else{
        console.log("You lose!");
        count = [];
    }
}

function cardId1(){
    count.push("card1");
    console.log(count);
}
function cardId2(){
    count.push("card2");
    console.log(count);
}

function cardId3(){
    count.push("card3");
    console.log(count);
}
function cardId4(){
    count.push("card4");
    console.log(count);
}
function cardId5(){
    count.push("card5");
    console.log(count);
}
