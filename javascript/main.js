//Mail
//Chiedi all’utente la sua email,
//controlla che sia già presente nella lista di email per controllare se può accedere,
//stampa un messaggio appropriato sull’esito del controllo.


// creo un array con delle mail 

let mailPresenti = [`luca@gmail.com`, `marco@gmail.com`, `paolo@gmail.com`];
//console.log(mailPresenti)

//chiedo di inserire una mail
let inputEmail = document.getElementById(`inputEmail`);

//variabile di controllo/flag/"soldatino"

let presenzaEmail = false;

//funzione che si attiva al click del bottone
function invioEmail(){

    let valueEmail = inputEmail.value;

 // creo un ciclo in cui controllo che la mail inserita sia già esistente nell'array oppure no
    for (i = 0; i < mailPresenti.length; i++){

        /*recupero email diversa nell'array in base ai giri del ciclo
        let thisEmail = mailPresenti[i];*/

        if (valueEmail == mailPresenti[i]){
            //email dell'input è uguale a una mail dell'array cambio lo status della variabile soldatino
            presenzaEmail = true;
            //document.getElementById(`risposta`).innerHTML= `La mail inserita è già presente`
        }else{
            presenzaEmail = false;
        }
    }


    if (presenzaEmail == true){
        document.getElementById(`risposta`).innerHTML= `L'email è presente nella lista`
    }else{
        document.getElementById(`risposta`).innerHTML= `ISCRIVITI ORA`
    }
}

/*----------------------------------------------------------------------------------------------------*/

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
    
    }else{
        document.getElementById(`pareggio`).innerHTML= `Ritirare i dadi`
    }


}


