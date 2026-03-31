let global = {
    aantal_afbeeldingen: 12,
    aantal_kaarten_afbeelding: 2,
    aantal_horizontaal: 6,
    kaart_path: "images/kaart",
    kaart_path_end: ".png",
    achterkant: "images/achterkant.png",
}

let openKaarten = [];

const setup = () => {
    let playfield = document.getElementById("playField");
    let aantalKaarten = global.aantal_afbeeldingen * global.aantal_kaarten_afbeelding;
    let kaartNummers = [];

    // Vul kaartNummers met herhalingen
    for (let i = 0; i < global.aantal_afbeeldingen; i++) {
        for (let j = 0; j < global.aantal_kaarten_afbeelding; j++) {
            kaartNummers.push(i);
        }
    }

    // Schud de kaarten
    schudden(kaartNummers);

    for (let i = 0; i < aantalKaarten; i++) {
        if (i % global.aantal_horizontaal == 0 && i != 0) {
            playfield.appendChild(document.createElement("br"));
        }
        addVak(playfield, kaartNummers[i]);
    }
}

const schudden = (array) => {
    array.sort(() => Math.random() - 0.5);
}

const goed = () => {
    let kaarten = document.getElementsByClassName("voorkant");
    for (let i = 0; i < kaarten.length; i++) {
        kaarten[i].classList.add("goed");
    }
}

const fout = () => {
    let kaarten = document.getElementsByClassName("voorkant");
    for (let i = 0; i < kaarten.length; i++) {
        kaarten[i].classList.add("fout");
    }
}

const draaiKaart = () => {
    openKaarten.forEach(kaart => {
        kaart.setAttribute("src", global.achterkant);
        kaart.className = "kaart achterkant";
    });
    openKaarten = [];
    document.getElementById("playField").className = "";
}

const verwijderKaart = () => {
    openKaarten.forEach(kaart => {
        kaart.removeEventListener("click", klikOpKaart);
        kaart.parentNode.removeChild(kaart);
    });
    openKaarten = [];
    document.getElementById("playField").className = "";
    spelGedaan();
}

const spelGedaan = () => {
    let playfield = document.getElementById("playField");
    let kaarten = document.getElementsByClassName("kaart");
    if (kaarten.length === 0) {
        let hoogte = playfield.clientHeight;
        playfield.innerHTML = "";
        playfield.style.height = hoogte + "px";
        playfield.className = "klaar";
    }
}

const controleerKaart = () => {
    let gelijk = true;
    let eersteSrc = openKaarten[0].getAttribute("data-imageSource");
    for (let i = 1; i < openKaarten.length; i++) {
        if (openKaarten[i].getAttribute("data-imageSource") !== eersteSrc) {
            gelijk = false;
            break;
        }
    }

    if (gelijk) {
        window.setTimeout(verwijderKaart, 1000);
        window.setTimeout(goed, 1000);
    } else {
        window.setTimeout(draaiKaart, 1000);
        window.setTimeout(fout, 500);
    }
}

const klikOpKaart = (e) => {
    if (document.getElementById("playField").className !== "geblokkeerd") {
        let kaart = e.target;
        if (!kaart.classList.contains("voorkant")) {
            kaart.setAttribute("src", kaart.getAttribute("data-imageSource"));
            kaart.className = "kaart voorkant";
            openKaarten.push(kaart);

            if (openKaarten.length === global.aantal_kaarten_afbeelding) {
                controleerKaart();
                document.getElementById("playField").className = "geblokkeerd";
            }
        }
    }
}

const addVak = (oud, kaartNummer) => {
    let vak = document.createElement("span");
    vak.className = "vak";

    let kaart = document.createElement("img");
    kaart.className = "kaart achterkant";
    kaart.setAttribute("src", global.achterkant);
    kaart.setAttribute("data-imageSource", global.kaart_path + kaartNummer + global.kaart_path_end);
    kaart.addEventListener("click", klikOpKaart);

    vak.appendChild(kaart);
    oud.appendChild(vak);
}

window.addEventListener("load", setup);