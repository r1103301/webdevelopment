const setup = () =>{
    let lis = document.querySelectorAll('li');
    for(let i = 0; i < lis.length; i++){
        lis[i].setAttribute('class', 'listitem');
        lis[i].style.color = 'red';
    }
    let img = document.createElement('img');
    let body = document.querySelector('body');
    img.setAttribute('src', './images/goku-super-saiyan-3840x2160-19870.jpg');
    img.style.width = '20%';
    body.appendChild(img);
}
window.addEventListener('load', setup);