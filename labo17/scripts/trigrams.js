const setup = () =>{
    let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', trigram)
}
const trigram = ()=>{
    let woord = document.getElementById("tekst").value;
    let trigram = "";
    let einde = false;
    let i = 0;
    let j = 3;
    while(!einde){
        if(woord.slice(i,j).length > 2 ){
            trigram += woord.slice(i,j) + " ";
        }else{
            einde = true;
        }
        i++;
        j++;
    }
    console.log(trigram.trim());
}
window.addEventListener("load", setup);