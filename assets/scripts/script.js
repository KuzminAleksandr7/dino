let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
let xp = document.getElementById("xp");
let counter = 0;


document.addEventListener("keypress", function(e){
    jump();
    setTimeout(() =>dino.classList.remove("jump"), 500);
})


function start(){
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "block";
    xp.style.display = "block";
    const intervalId = setInterval(() => {
        if (cactusLeft < 62 && cactusLeft > 0 && dinoTop >= 70) {
            setTimeout(function(){
                document.getElementById("xp").style.height = "200px";
                document.getElementById("xp").style.backgroundColor = "rgba(13, 67, 122, 0.45)";
                xp.innerHTML = "Не був на роботі: " + counter + "днів<br><br><br><br><br>Ти звільнений!!!<br><br>Йди працювати на завод";
            }, 800);
            clearInterval(intervalId);
            counter -=1;
        }
        counter += 1;
        xp.innerHTML = "Не був на роботі: " + counter + "днів";
    }, 1000);
}

function jump(){
    dino.classList.add("jump");
}

let isAlive = setInterval( function(){
    dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 62 && cactusLeft > 0 && dinoTop >= 70) {
        document.getElementById("game").style.animation = "none";
        document.getElementById("player-body").style.animation = "body-sit 0.8s linear";
        setTimeout(() => document.getElementById("player-body").style.top = "31px", 800)
        setTimeout(() => document.getElementById("player-body").style.left = "-10px", 800)
        document.getElementById("left-foot").classList.add("foot-sit");
        document.getElementById("right-foot").classList.add("foot-sit");
        setTimeout(() => document.getElementById("left-foot").style.transform = "rotate(-90deg)", 800)
        setTimeout(() => document.getElementById("right-foot").style.transform = "rotate(-90deg)", 800)
        document.getElementById("left-foot-bottom").classList.add("foot-bottom-sit");
        document.getElementById("right-foot-bottom").classList.add("foot-bottom-sit");
        setTimeout(() => document.getElementById("left-foot-bottom").style.transform = "rotate(80deg)", 800)
        setTimeout(() => document.getElementById("right-foot-bottom").style.transform = "rotate(80deg)", 800)
        document.getElementById("left-hand").classList.add("hand-sit");
        document.getElementById("right-hand").classList.add("hand-sit");
        setTimeout(() => document.getElementById("left-hand").style.transform = "rotate(-25deg)", 800)
        setTimeout(() => document.getElementById("right-hand").style.transform = "rotate(-25deg)", 800)
        document.getElementById("left-hand-bottom").classList.add("hand-bottom-sit");
        document.getElementById("right-hand-bottom").classList.add("hand-bottom-sit");
        setTimeout(() => document.getElementById("left-hand-bottom").style.transform = "rotate(-75deg)", 800)
        setTimeout(() => document.getElementById("right-hand-bottom").style.transform = "rotate(-75deg)", 800)
        document.getElementById("table").classList.add("table-run");
        setTimeout(() => document.getElementById("table").style.left = "19px", 800)
        setTimeout(() => document.getElementById("comp-screen").style.boxShadow = "rgba(34, 81, 180, 0.83) -2px 0px 4px", 1000)
        document.getElementById("left-hand").style.animation = "none";
        document.getElementById("left-hand-bottom").style.animation = "none";
        document.getElementById("right-hand").style.animation = "none";
        document.getElementById("right-hand-bottom").style.animation = "none";
        document.getElementById("left-foot").style.animation = "none";
        document.getElementById("left-foot-bottom").style.animation = "none";
        document.getElementById("right-foot").style.animation = "none";
        document.getElementById("right-foot-bottom").style.animation = "none";
        cactus.style.animation = "paused";
        cactus.style.right = "529px";
    }
}, 10)