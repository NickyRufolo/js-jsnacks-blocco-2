//Crea un array di numeri interi e fai la somma
//di tutti gli elementi che sono in posizione 
//(indice) dispari
const array = [1,2,3,4,5,6,7,10];
let somma = 0;
for(let x = 0; x < array.length; x++){ //il ciclo si ferma alla lunghezza dell'array, quindi fino a 8
    if(x % 2 !=0) {
    somma = somma + array[x]; //effettua le verifiche della condizione 
    //sull'indice e non sull'elelemento all'interno dell'array, 
    //se volessi solamente scegliere l'elemento avrei dovuto usare somma = somma + x 
    console.log(array[x]);
}
}
document.getElementById(`somma`).innerHTML = `la somma è` + somma;
   //se vogliamo chiamare l'elemento nell'array
    //al consolelog dobbiamo fare consolelog(x)
   //se vogliamo chiamare l'indice del elemento
   // al consollog è consolelog(array[x])