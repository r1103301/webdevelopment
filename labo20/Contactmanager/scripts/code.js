let global = {
    personen: []
};

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    let txtVoornaam = document.getElementById('txtVoornaam');
    let txtFamilienaam = document.getElementById('txtFamilienaam');
    let txtGeboorteDatum = document.getElementById('txtGeboorteDatum');
    let txtEmail = document.getElementById('txtEmail');
    let txtAantalKinderen = document.getElementById('txtAantalKinderen');

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    if (document.querySelectorAll(".invalid").length === 0) {
        let lstPersonen = document.getElementById('lstPersonen');
        let index = lstPersonen.selectedIndex;

        // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        let persoon = {
            voornaam: txtVoornaam.value,
            familienaam: txtFamilienaam.value,
            geboortedatum: txtGeboorteDatum.value,
            email: txtEmail.value,
            aantalkinderen: txtAantalKinderen.value
        }
        // een bestaande persoon in de lijst passen we aan
        if (index === -1) {
            global.personen.push(persoon);

            let option = document.createElement("option");
            option.textContent = persoon.voornaam + " " + persoon.familienaam;
            option.value = global.personen.length - 1;
            lstPersonen.appendChild(option);
        } else {
            global.personen[index] = persoon;
            lstPersonen.options[index].textContent =
                persoon.voornaam + " " + persoon.familienaam;
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let txtVoornaam = document.getElementById('txtVoornaam').value = "";
    let txtFamilienaam = document.getElementById('txtFamilienaam').value = "";
    let txtGeboorteDatum = document.getElementById('txtGeboorteDatum').value = "";
    let txtEmail = document.getElementById('txtEmail').value = "";
    let txtAantalKinderen = document.getElementById('txtAantalKinderen').value = "";
};

const vulVelden = ()=>{
    let lstPersonen = document.getElementById('lstPersonen');
    let i = lstPersonen.selectedIndex;
    let txtVoornaam = document.getElementById('txtVoornaam').value = global.personen[i].voornaam;
    let txtFamilienaam = document.getElementById('txtFamilienaam').value = global.personen[i].familienaam;
    let txtGeboorteDatum = document.getElementById('txtGeboorteDatum').value = global.personen[i].geboortedatum;
    let txtEmail = document.getElementById('txtEmail').value = global.personen[i].email;
    let txtAantalKinderen = document.getElementById('txtAantalKinderen').value = global.personen[i].aantalkinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    lstPersonen.addEventListener("change", vulVelden);
};

window.addEventListener("load", setup);