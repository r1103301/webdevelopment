const arrayFam = ['Jutta','Cis','Axel','Finn','Jill'];
console.log(arrayFam.length);
console.log(`${arrayFam[0]} ${arrayFam[2]} ${arrayFam[4]} `);
const VoegNaamToe = () =>{
    arrayFam.push(prompt("Geef een naam in die je wilt toevoegen"));
    console.log(arrayFam[5]);
}
VoegNaamToe();
console.log(arrayFam.join(' - '));