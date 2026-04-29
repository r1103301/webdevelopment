let global ={
    kleuren: []
};
const setup = () =>{
    restore();
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
    localStorage.setItem('rood',document.getElementById("rood").value);
    localStorage.setItem('groen',document.getElementById("groen").value);
    localStorage.setItem('blauw',document.getElementById("blauw").value);

    document.getElementById("rood-waarde").textContent = localStorage.getItem('rood');
    document.getElementById("groen-waarde").textContent = localStorage.getItem('groen');
    document.getElementById("blauw-waarde").textContent = localStorage.getItem('blauw');

    let square = document.getElementById("square");
    square.style.backgroundColor = `rgb(${localStorage.getItem('rood')}, ${localStorage.getItem('groen')}, ${localStorage.getItem('blauw')})`;
}

const save = () =>{
    let rood = localStorage.getItem('rood');
    let groen = localStorage.getItem('groen');
    let blauw = localStorage.getItem('blauw');

    let kleur ={
      roods: rood,
      groens: groen,
      blauws: blauw
    };

    global.kleuren.push(kleur);
    localStorage.setItem("kleuren", JSON.stringify(global.kleuren));
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

const restore = () =>{
    document.getElementById("rood-waarde").textContent = localStorage.getItem('rood');
    document.getElementById("groen-waarde").textContent = localStorage.getItem('groen');
    document.getElementById("blauw-waarde").textContent = localStorage.getItem('blauw');
    let square = document.getElementById("square");
    square.style.backgroundColor = `rgb(${localStorage.getItem('rood')}, ${localStorage.getItem('groen')}, ${localStorage.getItem('blauw')})`;
    let roodSlider = document.getElementById("rood");
    let groenSlider = document.getElementById("groen");
    let blauwSlider = document.getElementById("blauw");
    roodSlider.value = localStorage.getItem('rood');
    groenSlider.value = localStorage.getItem('groen');
    blauwSlider.value = localStorage.getItem('blauw');

    let opgeslagen = localStorage.getItem("kleuren");
    if (opgeslagen) {
        global.kleuren = JSON.parse(opgeslagen);
    }
    for (let i = 0; i < global.kleuren.length; i++) {
        let kleur = global.kleuren[i];
        let vierkant = document.createElement("div");
        vierkant.setAttribute('class', 'smallsquare');
        vierkant.style.backgroundColor = `rgb(${kleur.roods}, ${kleur.groens}, ${kleur.blauws})`;
        let deleteBtn = document.createElement("span");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            vierkant.remove();
        });
        vierkant.appendChild(deleteBtn);
        document.getElementsByClassName("listSquares")[0].appendChild(vierkant);
    }

}
window.addEventListener("load", setup);