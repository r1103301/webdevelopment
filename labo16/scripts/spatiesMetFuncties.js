const setup = () => {
    let btnSpaties = document.getElementById("btnSubmit");

    btnSpaties.addEventListener("click", () => {
        let tekst = document.getElementById("tekst").value;
        let nieuweTekst = maakMetSpaties(tekst);
        console.log(nieuweTekst);
    });
}
const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) !== " ") {
            result += inputText.charAt(i) + " ";
        }
    }
    return result;
}

window.addEventListener("load", setup);