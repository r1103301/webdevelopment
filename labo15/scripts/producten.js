const setup = () =>{
    let btnHerberekenen = document.getElementById("btnHerberekenen");
    btnHerberekenen.addEventListener("click", herbereken);
}
const herbereken = () =>{
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");

    let prijs = parseFloat(prijzen[0].innerText);
    let aantal = parseInt(aantallen[0].value);
    let btwPerc = parseFloat(btw[0].innerText);

    let totaal = prijs * aantal * (1 + btwPerc / 100);
    subtotaal[0].innerText = totaal.toFixed(2);

    let prijs2 = parseFloat(prijzen[1].innerText);
    let aantal2 = parseInt(aantallen[1].value);
    let btwPerc2 = parseFloat(btw[1].innerText);

    let totaal2 = prijs2 * aantal2 * (1 + btwPerc2 / 100);
    subtotaal[1].innerText = totaal2.toFixed(2);

    let prijs3 = parseFloat(prijzen[2].innerText);
    let aantal3 = parseInt(aantallen[2].value);
    let btwPerc3 = parseFloat(btw[2].innerText);

    let totaal3 = prijs3 * aantal3 * (1 + btwPerc3 / 100);
    subtotaal[2].innerText = totaal3.toFixed(2);

    totall = parseFloat(subtotaal[0].innerText) + parseFloat(subtotaal[1].innerText) + parseFloat(subtotaal[2].innerText);
    subtotaal[3].innerText = totall.toFixed(2);
}
window.addEventListener("load", setup);