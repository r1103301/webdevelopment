const setup = () =>{
    let btnSub = document.getElementById('btnSub');

    btnSub.addEventListener('click',substring);
}
const substring = () => {
    let txtInput = document.getElementById('txtWoord').value;
    let txtFirstNumber = document.getElementById('firstNumber').value;
    let txtSecondNumber = document.getElementById('secondNumber').value;
    let txtOutput = document.getElementById('output');

    let outkomst = txtInput.substring(txtFirstNumber, txtSecondNumber);
    txtOutput.innerHTML = outkomst;
}
window.addEventListener('load', setup)