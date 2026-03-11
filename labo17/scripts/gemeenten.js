const setup = ()=>{
    let ddl = document.getElementById("gemeenten");

    let gemeente = prompt("Geef een gemeente in");

    let gemeentes = [];

    while(gemeente !== null && gemeente.localeCompare("stop") !== 0 ){
        gemeentes.push(gemeente);
        gemeente = prompt("Geef een gemeente in");
    }

    gemeentes.sort();

    for(let i = 0; i < gemeentes.length; i++){
        let string = `<option name=\"${gemeentes[i]}\">${gemeentes[i]}</option>`;
        ddl.innerHTML += string;
    }
}
window.addEventListener("load", setup);