const nomi = [`Gennaro`, `Fabrizio`, `Cosimo`];
const cognomi = [`Maio`, `Rufolo`, `Ceci`];


function myFunction() {
    let randomName = nomi[Math.floor(Math.random() * nomi.length)];
    let randomSurname = cognomi[Math.floor(Math.random() * cognomi.length)];
    let randomPerson = randomName + randomSurname;
    let pluto = document.createElement("li");
    let li = document.createTextNode (randomPerson);
    pluto.appendChild(li);
    document.getElementById("invitato").appendChild(pluto);
}