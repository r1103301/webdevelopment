const setup = ()=>{
    let d = new Date("2007-09-16");
    let d1 = new Date();

    let d2 = d1 - d;
    console.log(Math.floor(d2 / 1000 / 60 /60 / 24));
}
window.addEventListener("load", setup);