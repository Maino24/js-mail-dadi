// creo un array con delle mail 

/*const mailPresenti = [`luca@gmail.com`, `marco@gmail.com`, `paolo@gmail.com`];*/
//console.log(mailPresenti)

//chiedo di inserire una mail


/*let mail = prompt(`inseirsci la tua mail`);*/


// creo un ciclo in cui controllo che la mail inserita sia già esistente nell'array oppure no


/*for (i = 0; i < mailPresenti.length; i++){

    if (mail == mailPresenti[i]) {
        document.getElementById(`risposta`).innerHTML= `La mail inserita è già presente`
      } 
      else {
        document.getElementById(`risposta`).innerHTML= `La mail inserita va bene`
      }
    
    
    console.log(mailPresenti[i])   
}*/







//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
// * scrivere quante partite ha vinto il giocatore
// * scrivere quante partite ha vinto il computer

let numeroGeneratoGiocatore = document.getElementById(`numeroGeneratoGiocatore`);
let numeroGeneratoComputer = document.getElementById(`numeroGeneratoComputer`);
let punteggio = document.getElementById(`punteggio`);

function genera(){

 document.getElementById(`numeroGeneratoGiocatore`).innerHTML=   Math.floor(Math.random() * 6) +1;
 document.getElementById(`numeroGeneratoComputer`).innerHTML=   Math.floor(Math.random() * 6) +1;

 if( numeroGeneratoComputer > numeroGeneratoGiocatore){
 
}


}


