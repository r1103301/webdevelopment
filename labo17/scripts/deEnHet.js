const setup = () =>{
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click",vervang)
}
const vervang = () =>{
    let tekst = document.getElementById("tekst").value;
    let resultaat = [];
    let ntekst = [];
    let antwoord = "";
    let woord = "";
    for (let i = 0; i < tekst.length; i++) {
        if (tekst[i] === " ") {
            resultaat.push(woord);
            woord = "";
        } else {
            woord += tekst[i];
        }
    }
    resultaat.push(woord);
    for(let i = 0; i < resultaat.length; i++){
        if(resultaat[i].toLowerCase().localeCompare("de") === 0){
            ntekst.push("het");
        }else{
            ntekst.push(resultaat[i]);
        }
    }
    for(let i = 0; i < ntekst.length; i++){
        antwoord += ntekst[i] + " ";
    }
    console.log(antwoord.trim());
}
window.addEventListener("load", setup)