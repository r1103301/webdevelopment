const setup = () =>{
    let btnVeranderen =document.getElementById("btnVerander");
    btnVeranderen.addEventListener("click", verander);
}
const verander = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);
