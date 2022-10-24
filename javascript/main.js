// creo un array con delle mail 

/*const mailPresenti = [`luca@gmail.com`, `marco@gmail.com`, `paolo@gmail.com`];*/
//console.log(mailPresenti)

//chiedo di inserire una mail


/*let mail = prompt(`inseirsci la tua mail`);


// creo un ciclo in cui controllo che la mail inserita sia già esistente nell'array oppure no


for (i = 0; i < mailPresenti.length; i++){

    if (mail == mailPresenti[i]) {
        document.getElementById(`risposta`).innerHTML= `La mail inserita è già presente`
      } 
      else {
        document.getElementById(`risposta`).innerHTML= `La mail inserita va bene`
      }
    
    
    console.log(mailPresenti[i])   
}

*/





//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
// * scrivere quante partite ha vinto il giocatore
// * scrivere quante partite ha vinto il computer

let numeroGeneratoGiocatore = document.getElementById(`numeroGeneratoGiocatore`);
let numeroGeneratoComputer = document.getElementById(`numeroGeneratoComputer`);
let punteggioGiocatore = document.getElementById(`punteggioGiocatore`);
let punteggioComputer = document.getElementById(`punteggioComputer`);

punteggioComputer = 0 
punteggioGiocatore = 0

function genera(){

 let numeroGeneratoGiocatore = document.getElementById(`numeroGeneratoGiocatore`).innerHTML=   Math.floor(Math.random() * 6) +1;
 let numeroGeneratoComputer = document.getElementById(`numeroGeneratoComputer`).innerHTML=   Math.floor(Math.random() * 6) +1;




 if( numeroGeneratoComputer > numeroGeneratoGiocatore){
    punteggioComputer = punteggioComputer + 1
    console.log(punteggioComputer)
    document.getElementById(`punteggioComputer`).innerHTML= `Il Computer ha vinto : ${punteggioComputer} partite`
}else if( numeroGeneratoGiocatore > numeroGeneratoComputer){
    punteggioGiocatore = punteggioGiocatore + 1
    console.log(punteggioGiocatore)
    document.getElementById(`punteggioGiocatore`).innerHTML= `Il giocatore ha vinto : ${punteggioGiocatore} partite`
}else/*(numeroGeneratoComputer === numeroGeneratoGiocatore)*/{
    document.getElementById(`pareggio`).innerHTML= `Ritirare i dadi`
}


}


