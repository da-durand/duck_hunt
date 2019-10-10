var screenElement = document.createElement("section");
document.body.appendChild(screenElement);


function ducksKill(){
    this.remove();
    var duckElement = document.createElement("div");
    duckElement.className = "ducks";
    screenElement.appendChild(duckElement);
    duckElement.style.left = Math.floor(Math.random() * 960) + "px";
    duckElement.style.top = Math.floor(Math.random() * 560) + "px";
    duckElement.addEventListener("click", ducksKill);
};


for (let i = 0; i < 15; i++) {
    var duckElement = document.createElement("div");
    duckElement.className = "ducks";
    screenElement.appendChild(duckElement);
    duckElement.style.left = Math.floor(Math.random() * 960) + "px";
    duckElement.style.top = Math.floor(Math.random() * 560) + "px";
    duckElement.addEventListener("click", ducksKill);
}




function ducksMove() {

    allDucks = document.getElementsByClassName("ducks")
    for (let i = 0; i < allDucks.length; i++) {
        allDucks[i].style.left = Math.floor(Math.random() * 980) + "px";
        allDucks[i].style.top = Math.floor(Math.random() * 580) + "px";
        allDucks[i].style.transitionDuration = "3s";
    }

}

setInterval(ducksMove, 1000);