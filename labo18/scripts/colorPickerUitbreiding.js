const setup = () =>{
    let colorRed = document.getElementById("rood");
    let colorGreen = document.getElementById("groen");
    let colorBlue = document.getElementById("blauw");

    colorRed.addEventListener("input", update);
    colorGreen.addEventListener("input", update);
    colorBlue.addEventListener("input", update);

    let btnSave = document.getElementById("btnSave");
    btnSave.addEventListener("click", save);

}
const update = () => {
    let rood = document.getElementById("rood").value;
    let groen = document.getElementById("groen").value;
    let blauw = document.getElementById("blauw").value;

    document.getElementById("rood-waarde").textContent = rood;
    document.getElementById("groen-waarde").textContent = groen;
    document.getElementById("blauw-waarde").textContent = blauw;

    let square = document.getElementById("square");
    square.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
}

const save = () =>{
    let rood = document.getElementById("rood").value;
    let groen = document.getElementById("groen").value;
    let blauw = document.getElementById("blauw").value;

    let vierkant = document.createElement("div");
    vierkant.setAttribute('class', 'smallsquare');
    vierkant.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        vierkant.remove();
    });
    vierkant.appendChild(deleteBtn);
    let listSquares = document.getElementsByClassName("listSquares")[0];
    listSquares.appendChild(vierkant);
}
window.addEventListener("load", setup);