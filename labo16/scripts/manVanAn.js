const setup = () => {
    let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', manVanAn);
}
const manVanAn = () =>{
    let tekst = document.getElementById('tekst').value.toLowerCase();
    let aantal = 0;
    let positie = tekst.indexOf("an");
    while(positie !== -1){
        aantal++;
        positie = tekst.indexOf("an", positie +1);
    }
    console.log(aantal);
}
window.addEventListener("load", setup)