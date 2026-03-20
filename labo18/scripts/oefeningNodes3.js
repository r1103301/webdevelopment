const setup = () => {
    let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', toevoegen);
}

const toevoegen = () => {
    let p = document.createElement('p');
    p.textContent = "Nieuwe paragraaf";
    let div = document.querySelector('#myDIV');
    div.append(p);
}
window.addEventListener('load', setup);