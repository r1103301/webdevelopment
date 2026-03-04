const setup = () =>{
    let colorRed = document.getElementById("rood");
    let colorGreen = document.getElementById("groen");
    let colorBlue = document.getElementById("blauw");

    colorRed.addEventListener("input", update);
    colorGreen.addEventListener("input", update);
    colorBlue.addEventListener("input", update);

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
window.addEventListener("load", setup);