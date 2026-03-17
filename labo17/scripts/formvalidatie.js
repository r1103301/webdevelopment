const setup = () =>{
    let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', valideer);
}

const valideer = () =>{
    let voornaam = document.getElementById('voornaam');
    let errorVoornaam = document.getElementById('errorVoornaam');
    if(voornaam.value.length > 30){
        voornaam.style.border = '2px solid red';
        errorVoornaam.textContent = "Mag max 30 karakters";
    }

    let familienaam = document.getElementById('familienaam');
    let errorFamilienaam = document.getElementById('errorFamilienaam');
    if(familienaam.value.length > 50 || familienaam.value.length === 0){
        familienaam.style.border = '2px solid red';
        errorFamilienaam.textContent = "het is een verplicht veld (Max 50 karakters)";
    }

    let geboortedatum = document.getElementById('geboortedatum');
    let errorGeboortedatum = document.getElementById('errorGeboortedatum');
    let geboortedatumList = geboortedatum.value.split('-');
    if(geboortedatumList[0] > 0 && geboortedatumList[1] > 0 && geboortedatumList[2] > 0){
        if(geboortedatum.value.length === 0 ||
            geboortedatumList.length !== 3 ||
            geboortedatumList[0].length !== 2 ||
            geboortedatumList[1].length !== 2 ||
            geboortedatumList[2].length !== 4)
        {
            geboortedatum.style.border = '2px solid red';
            errorGeboortedatum.textContent = "het is een verplicht veld en je gebruikt niet het juiste voorgegeven datum";
        }
    }else{
        geboortedatum.style.border = '2px solid red';
        errorGeboortedatum.textContent = "de getallen die je ingaf zijn negagtief";
    }

    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    let placeFromAt = email.value.indexOf('@');
    if(email.value.length === 0 ||
        placeFromAt <= 0 ||
        placeFromAt === email.value.length -1
    ){
        email.style.border = '2px solid red';
        errorEmail.textContent = "Geen geldige email";
    }

    let kinderInput = document.getElementById('kinder');
    let kinder = kinderInput.value;
    let errorKinder = document.getElementById('errorKinder');
    if(isNaN(kinder)){
        kinderInput.style.border = '2px solid red';
        errorKinder.textContent = "is geen positief getal";
    }else{
        let aantal = Number(kinder);
        if(aantal <= 0){
            kinderInput.style.border = '2px solid red';
            errorKinder.textContent = "is geen positief getal";
        }else if(aantal > 99){
            kinderInput.style.border = '2px solid red';
            errorKinder.textContent = "is te vruchtbaar";
        }
    }
}

window.addEventListener('load', setup);