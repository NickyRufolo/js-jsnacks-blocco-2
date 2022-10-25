let num = parseInt(prompt(`inserisci un numero`));
if (num % 2 == 0){
    document.getElementById(`numero`).innerHtml = `Pari: ${num}`;
}
else {
    num += 1;
    document.getElementById(`numero`).innerHtml = `numero dispari inserito +1 = ${num};
