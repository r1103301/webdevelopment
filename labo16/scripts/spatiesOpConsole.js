const setup = () => {
    let btnSpaties = document.getElementById("btnSubmit");
    btnSpaties.addEventListener("click", spaties)
}
const spaties = () => {
    let nwoord = "";
    let woord = document.getElementById("tekst").value;
    for (let i = 0; i < woord.length; i++) {
        if (woord.charAt(i) !== " ") {
            nwoord += woord.charAt(i) + " ";
        }
    }
    console.log(nwoord);
}
window.addEventListener("load", setup);