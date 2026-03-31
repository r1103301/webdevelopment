const setup = ()=>{
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startGame);
}

let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal ms voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0, // id van de timeout timer, zodat we kunnen annuleren
    IMAGE_NAMES: ["bang.png", "bom.png", "boos.png", "silly-smiley.png", "wenend.png"]
};

const startGame = ()=>{
    let img = document.getElementById("img");
    img.style.display = "block";
    global.score = 0;
    img.addEventListener("click", tap);
    moveImage();
    global.timer = setInterval(moveImage, global.MOVE_DELAY);
}

const tap = ()=>{
    let img = document.getElementById("img");
    if(img.src.includes("bom.png")){
        clearInterval(global.timeoutId);
        window.alert("Game over, Score: " + global.score);
        img.style.display = "none";
    }
    global.score++;
    moveImage();
}

const moveImage = ()=>{
    let img = document.getElementById("img");
    let playField = document.getElementById("playField");

    let maxLeft=playField.clientWidth - img.offsetWidth;
    let maxHeight=playField.clientHeight - img.offsetHeight;

    let randomLeft = Math.random() * maxLeft;
    let randomHeight = Math.random() * maxHeight;

    img.style.left = randomLeft+"px";
    img.style.top = randomHeight+"px";

    let randomImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    img.src = global.IMAGE_PATH_PREFIX + global.IMAGE_NAMES[randomImg];


}
window.addEventListener("load", setup);