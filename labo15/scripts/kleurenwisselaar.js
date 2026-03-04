const setup = () =>{
    let btnknop1 = document.getElementById("btn1");
    let btnknop2 = document.getElementById("btn2");
    let btnknop3 = document.getElementById("btn3");

    btnknop1.addEventListener("click",veranderknop1);
    btnknop2.addEventListener("click",veranderknop2);
    btnknop3.addEventListener("click",veranderknop3);
}
const veranderknop1 = () =>{
    let btnknop1 = document.getElementById("btn1");
    if(btnknop1.style.backgroundColor === "lightblue"){
        btnknop1.style.backgroundColor = "white";
    }else{
        btnknop1.style.backgroundColor = "lightblue";
    }

}
const veranderknop2 = () =>{
    let btnknop2 = document.getElementById("btn2");
    if(btnknop2.style.backgroundColor === "lightblue"){
        btnknop2.style.backgroundColor = "white";
    }else{
        btnknop2.style.backgroundColor = "lightblue";
    }
}
const veranderknop3 = () =>{
    let btnknop3 = document.getElementById("btn3");
    if(btnknop3.style.backgroundColor === "lightblue"){
        btnknop3.style.backgroundColor = "white";
    }else{
        btnknop3.style.backgroundColor = "lightblue";
    }
}
window.addEventListener("load",setup);