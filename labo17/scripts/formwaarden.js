const setup = () =>{
    let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click',drukOpConsole)
}
const drukOpConsole = ()=>{
    let isRoker = document.getElementById('roken').checked;
    isRoker ? console.log("Is een roker") : console.log("Is geen roker");

    let radios = document.getElementsByName('moedertaal');
    let taal = "";
    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            taal = radios[i].value;
        }
    }
    console.log(`Moedertaal is ${taal}`);

    let ddlBuurlanden = document.getElementById('buurland');
    let favoBuurland = ddlBuurlanden.value;
    console.log(`Favoriete buurland is ${favoBuurland}`);

    let listBestellingen = document.getElementById('bestelling');
    let listAangeduideBestellingen = "Bestelling bestaat uit ";
    for(let i=0; i<listBestellingen.length; i++){
        if(listBestellingen[i].selected){
            listAangeduideBestellingen += listBestellingen[i].text + " ";
        }
    }
    console.log(listAangeduideBestellingen);
}
window.addEventListener("load", setup);